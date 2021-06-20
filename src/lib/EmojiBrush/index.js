import {getStep, pointsToStr, getScale, getSymbolsList, fillSelect, fillTemplate} from './helpers.js';
import {templateStyles, templateMarkup, templateGroup} from './tmpl.js';
import symbolsList from './symbolsList.js';
import lineStyles from './lineStyles.js';
import colors from './colors.js';
import fontSizes from './fontSizes.js';

export default class EmojiBrush extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.append(
      templateStyles.content.cloneNode(true),
      templateMarkup.content.cloneNode(true)
    );

    this.paintArea = this.elem.getElementById('paint-area');
    this.targetGroup = this.elem.getElementById('target-group');
    this.clearControl = this.elem.getElementById('clear');
    this.inputSymbolsChoice = this.elem.getElementById('input-symbols-choice');
    this.selectSymbols = this.elem.getElementById('select-symbols');
    this.addSymbols = this.elem.getElementById('add-symbols');
    this.selectStyle = this.elem.getElementById('select-style');
    this.selectFontSize = this.elem.getElementById('select-font-size');
    this.scale = getScale(this.paintArea.getElementById('measure-rect'));

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.controls = this.elem.querySelector('.controls');
    this.controlGet = this.elem.querySelector('.control--get');
    this.controlGet.disabled = true;
    this.links = {
      png: this.elem.querySelector('.control--download-png'),
      svg: this.elem.querySelector('.control--download-svg')
    };

    this.selected = {};
    this.points = {
      list: [],
      last: {}
    };
    this.rotation = {
      max: 6
    };

    this.current = {
      counter: 0
    };

    // Try to draw straight light, add later
    this.moveThreshold = {
       value: 20,
       default: 20
    };
    this.isStraightLine = false;

    this.waves = {
      counter: 0,
      max: 2,
      idDirectionUp: true
    };

    // Used to add more symbols for tiny font-size
    this.pathFills = {};

    this.symbols = {
      str: symbolsList[0],
      currentPos: 0,
    };
    this.symbols.list = getSymbolsList(this.symbols.str);

    this.lineStyle = this.getRandomLineStyle();
    this.fontSize = fontSizes[3];

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.changeSymbolsSet = this.changeSymbolsSet.bind(this);
    this.changeLineStyle = this.changeLineStyle.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.bodyKeyUp = this.bodyKeyUp.bind(this);
    this.bodyKeyDown = this.bodyKeyDown.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.chooseSymbolsInput = this.chooseSymbolsInput.bind(this);
    this.bodyMouseOut = this.bodyMouseOut.bind(this);
    this.prepareImages = this.prepareImages.bind(this);
    this.clear = this.clear.bind(this);

    this.initSelect({
      elem: this.selectSymbols,
      list: symbolsList,
      handler: this.changeSymbolsSet,
      currentValue: symbolsList[Math.floor(Math.random() * symbolsList.length)]
    });

    this.initSelect({
      elem: this.selectStyle,
      list: Object.values(lineStyles),
      handler: this.changeLineStyle,
      currentValue: 'mirrored-offset',
      currentValue: this.lineStyle.name
    });

    this.initSelect({
      elem: this.selectFontSize,
      list: fontSizes,
      handler: this.changeFontSize,
      currentValue: 32
    });
  }

  connectedCallback() {
    this.clearControl.addEventListener('click', this.clear);

    this.paintArea.addEventListener('pointerdown', this.onMouseDown);
    this.paintArea.addEventListener('pointerup', this.onMouseUp);

    this.inputSymbolsChoice.addEventListener('click', this.chooseSymbolsInput);
    this.addSymbols.addEventListener('input', this.changeSymbolsSet);
    this.controlGet.addEventListener('click', this.prepareImages);

    document.body.addEventListener('keyup', this.bodyKeyUp);
    // document.body.addEventListener('keydown', this.bodyKeyDown);

    document.addEventListener('change-theme', this.changeTheme);
  }

  disconnectedCallback() {
    //
  }

  initSelect({elem, list, currentValue, handler}) {
    fillSelect({
      elem,
      list,
      currentValue
    });

    handler();

    elem.addEventListener('change', handler);
  }

  onMouseDown(event) {
    if(event.target.tagName === 'path') {
      this.clickedPath = event.target;
    }
    let start = this.getMouseOffset(event);
    this.points.last = start;
    this.points.list = [];
    this.symbols.currentPos = 0;

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.id = `group-${this.current.counter}`;

    const content = fillTemplate({
      tmpl: templateGroup.innerHTML,
      data: {
        id: this.current.counter,
        fontSize: `${this.fontSize}px`
      }
    });
    group.insertAdjacentHTML('beforeEnd',content);
    this.targetGroup.append(group);

    let path = group.querySelector('path');
    path.classList.add('current-path');
    let textPath = group.querySelector('textPath');
    const text = group.querySelector('text');

    this.current = {
      ...this.current,
      group,
      path,
      text,
      textDouble: null,
      textPath,
      textPathDouble: null,
      start,
      counter: ++this.current.counter
    };

    this.modifyPaths();

    this.paintArea.addEventListener('pointermove', this.onMouseMove);
    document.body.addEventListener('pointerout', this.bodyMouseOut);
    this.mouseOutPoints = {};
  }

  modifyPaths(params = {}) {
    let hasCurrent = false;

    if(!params.text) {
      params = this.current;
      hasCurrent = true;
    }

    if(!params.textDouble) {
      let {textDouble, textPathDouble} = this.getTextDouble(params);

      params.textDouble = textDouble;
      params.textPathDouble = textPathDouble;
    }
    this.updateDoubleVisibility(params.textPathDouble);

    let {group, text, textDouble, textPathDouble} = params;
    text.setAttribute('dy', '.35em');

    if(this.lineStyle.props.mirrored) {
      text.setAttribute('dy', '-.12em');
      textDouble.setAttribute('dy', '-.12em')
      textDouble.setAttribute('rotate', 180);
      textPathDouble.setAttribute('startOffset', `${this.pathOffset}px`);
    }

    if(this.lineStyle.props.scattered) {
      text.setAttribute('dy', '-.13em');
      textDouble.setAttribute('dy', '-.13em');
      group.style.letterSpacing = '.1em';
    }

    if(this.lineStyle.props.startOffset) {
      textPathDouble.setAttribute('startOffset', `-${this.pathOffset}px`);
    }
    else if(this.lineStyle.props.startOffsetBetween) {
      textPathDouble.setAttribute('startOffset', `-${this.pathOffset}px`);
    }

    this.setRotation();
    this.setWaves();
  }

  updateDoubleVisibility(textPathDouble) {
    textPathDouble.setAttribute('opacity', this.lineStyle.props.double ? 1 : 0);
  }

  setRotation() {
    if(this.lineStyle.props.rotated) {
      this.rotation = {
        ...this.rotation,
        stepAngle: 360 / this.rotation.max,
        counter: 0
      };
    }
  }

  setWaves() {
    if(this.lineStyle.props.waves) {
      this.waves.counter = 0;
      this.waves.idDirectionUp = true;
    }
  }

  getTextDouble(params) {
    let {group, text} = params;

    const textDouble = text.cloneNode(true);
    textDouble.classList.add('text--double');
    const textPathDouble = textDouble.querySelector('textPath');
    textPathDouble.classList.add('text-path--double');
    group.append(textDouble);

    return {textDouble, textPathDouble};
  }

  onMouseMove(event) {
    if(!event.buttons) {
      this.mouseOutPoints.finishPath = true;
      this.onMouseUp(event);
      return;
    }

    let coords = this.getMouseOffset(event);
    let {start} = this.current;

    const moveSize = getStep({
      from: this.points.last,
      to: coords
    });

    if(moveSize > this.moveThreshold.value) {
      this.points.list.push(coords);
      this.updatePath(coords);
      this.updateText();
      this.points.last = coords;
    }

    this.clickedPath = null;
  }

  onMouseUp(event) {
    // Handle click on path
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.current.group.remove();
      this.paintArea.removeEventListener('pointermove', this.onMouseMove);
      return;
    }

    // There was not mouse move
    if(this.points.list.length == 0 && this.current.group) {
      // Remove latest path
      this.current.group.remove();
      this.paintArea.removeEventListener('pointermove', this.onMouseMove);
      return;
    }

    this.unselect();

    // Try to fix random bug
    if(!this.current.path) {
      return;
    }

    // Or continue with latest path
    this.points.last = this.getMouseOffset(event);

    if(this.mouseOutPoints && this.mouseOutPoints.finishPath) {
      this.points.last = this.mouseOutPoints.coords;
    }

    let {start} = this.current;
    this.current.path.classList.remove('current-path');

    this.updatePath(this.points.last);
    this.updateText();

    this.paintArea.removeEventListener('pointermove', this.onMouseMove);
    document.body.removeEventListener('pointerout', this.bodyMouseOut);
    this.fillRestOfPath();
    this.controls.dataset.state = '';
    this.controlGet.disabled = !this.targetGroup.innerHTML;
  }

  bodyKeyUp(event) {
    const isBody = event.target.tagName === 'BODY';
    const isDelOrBackSpace = event.keyCode === 8 || event.keyCode === 46;

    // Prevent removing path while edit text in input
    if(isBody && isDelOrBackSpace) {
      this.removePaths();
    }
    // Unpress shift, not used now
    else if(event.keyCode === 16) {
      this.isStraightLine = false;
    }
  }

  bodyMouseOut(event) {
    this.mouseOutPoints = {
      coords: this.getMouseOffset(event)
    };
  }

  bodyKeyDown(event) {
    // Press shift, not used now
    if(event.keyCode === 16) {
      this.isStraightLine = true;
    }
  }

  mouseClickPath() {
    const pathId = this.clickedPath.id;
    const group = this.clickedPath.closest('g');
    group.classList.toggle('highlight');

    if(group.classList.contains('highlight')) {
        this.selected[pathId] = group;
      }
      else {
        delete this.selected[pathId];
    }

    this.clickedPath = null;
  }

  updatePath({x, y}) {
    let {start} = this.current;
    const points = pointsToStr(this.points.list);

    this.current.path.setAttribute(
      'd',
      `M${start.x},${start.y} ${points} ${x},${y}`);
  }

  updateText(params = {}) {
    if(!params.textPath) {
      params = this.current;
    }

    let {textPath, textPathDouble} = params;

    // this.pathFills.koeff need to add more symbols for tiny font-size
    for(let i = 0; i < this.pathFills.koeff; i++) {
      let growthAge = params.textPath.getNumberOfChars();
      let symbol = this.getSymbol(growthAge);
      textPath.insertAdjacentHTML('beforeEnd', symbol);

      if(textPathDouble) {
        if(this.lineStyle.props.scattered) {
          symbol = this.getSymbol(growthAge);
        }
        textPathDouble.insertAdjacentHTML('beforeEnd', symbol);
      }
    }
  }

  // Fill empty path if mouse moves too fast
  fillRestOfPath(params = {}) {
    if(!params.textPath) {
      params = this.current;
    }

    let {path, textPath, textPathDouble} = params;
    const pathFillsMax = path.getTotalLength() / this.fontSize + this.pathOffset;
    const tSpansLength = textPath.children.length;
    let missedSymbols = pathFillsMax - tSpansLength;

    if(!missedSymbols) {
      return;
    }

    missedSymbols = Math.min(missedSymbols, 5);

    for(let i = 0; i < missedSymbols; i++) {
      this.updateText(params);
    }
  }

  getSymbol(growthAge) {
    let symbol = this.symbols.list[this.symbols.currentPos];
    if (this.lineStyle.props.sparse > 0 && this.lineStyle.props.sparse > Math.random()) {
      symbol = ' ';
    } else {
      this.symbols.currentPos++;

      if(this.symbols.currentPos === this.symbols.list.length) {
        this.symbols.currentPos = 0;
      }
    }
    let rotateAttr = this.getRotateAttr();
    let dyAttr = this.getDYWavesAttr();
    let fontSizeAttr = this.getFontSizeAttr(growthAge);

    symbol = `<tspan ${rotateAttr}${dyAttr}${fontSizeAttr}>${symbol}</tspan>`

    return symbol;
  }

  getRotateAttr() {
    if(!this.lineStyle.props.rotated) {
      return '';
    }

    const angle = this.rotation.stepAngle * this.rotation.counter;
    let rotateAttr = ` rotate="${angle}"`;

    this.rotation.counter++;
    if(this.rotation.counter >= this.rotation.max) {
      this.rotation.counter = 0;
    }

    return rotateAttr;
  }

  getDYWavesAttr() {
    if(!this.lineStyle.props.waves) {
      return '';
    }

    let dyVal = .55;
    let directionSign = this.waves.idDirectionUp ? 1 : -1;
    let dy = dyVal * directionSign;
    let dyAttr = ` dy="${dy}em"`;

    // Handle waves counter
    if(this.waves.idDirectionUp) {
      this.waves.counter++;
    }
    else {
      this.waves.counter--;
    }

    // Handle waves direction
    if(this.waves.counter == this.waves.max) {
      this.waves.idDirectionUp = !this.waves.idDirectionUp;
    }
    else if(this.waves.counter === 0) {
      this.waves.idDirectionUp = !this.waves.idDirectionUp;
    }

    return dyAttr;
  }

  getFontSizeAttr(growthAge) {
    if(!this.lineStyle.props.scattered) {
      return '';
    }

    const growCoefficent = this.lineStyle.props.grow && growthAge ? growthAge / 20 : 1;
    const fontSize = (Math.random() * 1.25 * growCoefficent + .25).toFixed(2);

    return ` font-size="${fontSize}em"`;
  }

  unselect() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        this.selected[key].classList.remove('highlight');
        delete this.selected[key];
      }
    }
  }

  removePaths() {
    if(Object.values(this.selected).length > 0) {
      for(let key in this.selected) {
        this.selected[key].remove();
        delete this.selected[key];
      }
    }
  }

  clear() {
    this.points.list = [];
    this.targetGroup.innerHTML = '';
    this.controls.dataset.state = '';
    this.controlGet.disabled = true;
  }

  setPathOffset() {
    const halfPatternLength = Math.round(this.symbols.list.length / 2);
    this.pathOffset = 0;

    if(this.lineStyle.props.mirrored) {
      this.pathOffset = .5 * this.fontSize;
    }

    if(this.lineStyle.props.startOffset) {
      this.pathOffset = (halfPatternLength + .5) * this.fontSize;
    }
    else if(this.lineStyle.props.startOffsetBetween) {
      this.pathOffset = halfPatternLength * this.fontSize;
    }
  }

  chooseSymbolsInput(event) {
    const labelText = event.target.closest('.choice__label-text');
    const input = event.target.closest('.choice__input');

    if(labelText && labelText.dataset.value) {
      this.inputSymbolsChoice.dataset.mode = labelText.dataset.value;
    }

    if(input && input.value) {
      this.changeSymbolsSet(event);
    }
  }

  changeSymbolsSet(event) {
    let currentInput = this.selectSymbols;
    if(event) {
      currentInput = event.target;
    }

    if(!currentInput.value) {
      return;
    }

    if(this.symbols.str === currentInput.value) {
      return;
    }

    this.symbols.str = currentInput.value;
    this.symbols.list = getSymbolsList(this.symbols.str);
    this.symbols.currentPos = 0;

    this.changeSymbolsOnSelected();
  }

  changeSymbolsOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const path = group.querySelector('path');
      const textPath = group.querySelector('.text-path');
      let textPathDouble = group.querySelector('.text-path--double');
      textPath.innerHTML = '';
      if(textPathDouble) {
        textPathDouble.innerHTML = '';
        this.updateDoubleVisibility(textPathDouble);
      }

      this.setWaves();

      this.fillRestOfPath({
        path,
        textPath,
        textPathDouble
      });
    }
  }

  changeLineStyle() {
    this.lineStyle = lineStyles[this.selectStyle.value];
    this.symbols.currentPos = 0;

    if(this.lineStyle.props.scattered) {
      this.pathFills.koeff = 3;
    }

    this.setPathOffset();

    this.changeLineStyleOnSelected();
  }

  changeLineStyleOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const path = group.querySelector('path');
      const text = group.querySelector('text');
      const textPath = group.querySelector('.text-path');
      let textDouble = group.querySelector('.text--double');
      let textPathDouble = group.querySelector('.text-path--double');
      textPath.innerHTML = '';

      if(textPathDouble) {
        textPathDouble.innerHTML = '';
        this.updateDoubleVisibility(textPathDouble);
      }

      const params = {
        group,
        path,
        text,
        textPath,
        textDouble,
        textPathDouble
      };

      this.modifyPaths(params);
      this.fillRestOfPath(params);
    }
  }

  changeFontSize() {
    this.fontSize = this.selectFontSize.value;
    this.style.setProperty('--font-size', `${this.fontSize}px`);
    this.pathFills.koeff = 3;

    if(this.fontSize >= 32) {
      this.pathFills.koeff = 2;
    }
    else if(this.fontSize >= 40) {
      this.pathFills.koeff = 1;
    }

    this.setPathOffset();

    this.changeFontSizeOnSelected();
  }

  changeFontSizeOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }

    for(let key in this.selected) {
      const group = this.selected[key];
      const texts = group.querySelectorAll('text');
      const path = group.querySelector('path');
      const textPath = group.querySelector('textPath');
      path.setAttribute('stroke-width', this.fontSize);

      for(let text of texts) {
        text.setAttribute('font-size', `${this.fontSize}px`);
      }
      this.fillRestOfPath({
        path,
        textPath
      });
    }
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }

    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }

    this.controls.dataset.state = '';
    this.theme = event.detail.colors;
    this.accents = event.detail.accents;
    this.outputStyle = this.getStyleStr();
  }

  prepareImages() {
    this.finalSizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.controls.dataset.state = 'loading';
    this.finalSVG = this.paintArea.cloneNode(true);
    this.finalSVG.style = this.outputStyle;
    // Fix paint SVG on canvas in Firefox
    this.finalSVG.setAttribute('width', `${this.finalSizes.width}px`);
    this.finalSVG.setAttribute('height', `${this.finalSizes.height}px`);

    this.preparePng();
  }

  getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  getStyleStr() {
    // Trebuchet MS, Verdana
    const styleslist = [
      `background: ${this.getBackgroundStr(this.theme)}`,
      `font-family: Trebuchet MS, Verdana, sans-erif`,
      `color: ${this.accents.base}`
    ]
    return styleslist.join('; ');
  }

  preparePng() {
    const xml = new XMLSerializer().serializeToString(this.finalSVG);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    const blob = new Blob([xml], {type : 'image/svg+xml'});
    let URLObj = window.URL || window.webkitURL;
    this.links.svg.href = URLObj.createObjectURL(blob);
    this.links.svg.download = 'emoji-brush-drawing.svg';

    const imgObj = new Image();
    imgObj.src = image64;
    imgObj.width = this.finalSizes.width;
    imgObj.height = this.finalSizes.height;

    imgObj.addEventListener('load', () => {
      this.canvas.width = this.finalSizes.width;
      this.canvas.height = this.finalSizes.height;
      this.ctx.drawImage(imgObj, 0, 0, this.canvas.width, this.canvas.height);

      this.canvas.toBlob((blob) => {
        let URLObj = window.URL || window.webkitURL;
        this.links.png.href = URLObj.createObjectURL(blob);
        this.links.png.download = 'emoji-brush-drawing.png';

        this.controls.dataset.state = 'ready';
      });
    }, false);
  }

  getMouseOffset(event) {
    let {left, top} = this.paintArea.getBoundingClientRect();
    let scale = this.scale;

    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }

  getRandomLineStyle() {
    const keys = Object.keys(lineStyles);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return lineStyles[randomKey];
  }
}
