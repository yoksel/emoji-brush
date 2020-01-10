import {getStep, pointsToStr, getScale, getSymbolsList, fillSelect, fillTemplate} from './helpers.js';
import {templateMarkup, templateGroup} from './tmpl.js';
import themes from './themes.js';
import lineStyles from './lineStyles.js';
import colors from './colors.js';
import fontSizes from './fontSizes.js';

export default class EmojiBrush extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(templateMarkup.content.cloneNode(true));

    this.paintArea = this.elem.getElementById('paint-area');
    this.targetGroup = this.elem.getElementById('target-group');
    this.clear = this.elem.getElementById('clear');
    this.selectSymbols = this.elem.getElementById('select-symbols');
    this.selectStyle = this.elem.getElementById('select-style');
    this.selectFontSize = this.elem.getElementById('select-font-size');
    this.scale = getScale(this.paintArea.getElementById('measure-rect'));
    this.selected = {};
    this.points = [];
    this.lastPoint = {};
    this.rotation = {
      max: 6
    };
    this.path = {
      counter: 0
    };

    // Fix filling path is mouse moves too fast
    this.pathFills = {};

    this.symbols = {
      str: themes[0],
      currentPos: 0,
    };
    this.symbols.list = getSymbolsList(this.symbols.str);

    this.lineStyle = Object.values(lineStyles)[0];
    this.fontSize = fontSizes[3];

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.changeSymbolsSet = this.changeSymbolsSet.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.bodyKeyUp = this.bodyKeyUp.bind(this);
    this.changeTheme = this.changeTheme.bind(this);

    this.initSelect({
      elem: this.selectSymbols,
      list: themes,
      handler: this.changeSymbolsSet,
      currentValue: themes[Math.floor(Math.random() * themes.length)]
    });

    this.initSelect({
      elem: this.selectStyle,
      list: Object.values(lineStyles),
      handler: this.changeStyle,
      currentValue: 'mirrored-offset'
    });

    this.initSelect({
      elem: this.selectFontSize,
      list: fontSizes,
      handler: this.changeFontSize,
      currentValue: 32
    });
  }

  connectedCallback() {
    this.clear.addEventListener('click', () => {
      this.points = [];
      this.targetGroup.innerHTML = '';
    });

    this.paintArea.addEventListener('mousedown', this.onMouseDown);
    this.paintArea.addEventListener('mouseup', this.onMouseUp);

    document.body.addEventListener('keyup', this.bodyKeyUp);

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
    this.lastPoint = start;
    this.points = [];

    let group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.id = `group-${this.path.counter}`;

    const content = fillTemplate({
      tmpl: templateGroup.innerHTML,
      data: {
        id: this.path.counter,
        fontSize: `${this.fontSize}px`
      }
    });
    group.insertAdjacentHTML('beforeEnd',content);
    this.targetGroup.append(group);

    let path = group.querySelector('path');
    path.classList.add('current-path');

    this.path = {
      ...this.path,
      group,
      elem: path,
      start,
      counter: ++this.path.counter
    };

    this.modifyPaths();

    this.paintArea.addEventListener('mousemove', this.onMouseMove);
  }

  modifyPaths() {
    const halfPatternLength = Math.round(this.symbols.list.length / 2);
    this.text = this.path.group.querySelector('text');
    this.textPath = this.path.group.querySelector('textPath');

    if(this.lineStyle.props.double) {
      this.textDouble = this.text.cloneNode(true);
      this.textPathDouble = this.textDouble.querySelector('textPath');
      this.path.group.append(this.textDouble);
    }

    if(this.lineStyle.props.mirrored) {
      this.text.setAttribute('dy', '-.12em');
      this.textDouble.setAttribute('dy', '-.12em')
      this.textDouble.setAttribute('rotate', 180);
    }

    if(this.lineStyle.props.offsetted) {
      this.text.setAttribute('dy', '-1em');
      // this.text.setAttribute('transform', `translate(0,-${this.fontSize/2})`);
      // this.textDouble.setAttribute('transform', `translate(0,${this.fontSize/2})`)
    }

    if(this.lineStyle.props.startOffset) {
      this.path.offset = halfPatternLength * this.fontSize;
      this.textPathDouble.setAttribute('startOffset', `-${this.path.offset}px`);
    }
    else if(this.lineStyle.props.startOffsetBetween) {
      // this.text.setAttribute('dy', '0');
      this.path.offset = (halfPatternLength + .5) * this.fontSize;
      this.textPathDouble.setAttribute('startOffset', `-${this.path.offset}px`);
    }

    this.setRotation();
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

  onMouseMove(event) {
    let coords = this.getMouseOffset(event);
    let {start} = this.path;

    const moveSize = getStep({
      from: this.lastPoint,
      to: coords
    });

    if(moveSize > 20) {
      this.points.push(coords);
      this.updatePath(coords);
      this.updateText();
      this.lastPoint = coords;
    }

    this.clickedPath = null;
  }

  onMouseUp(event) {
    // Handle click on path
    if(this.clickedPath) {
      this.mouseClickPath();

      // Remove latest path
      this.path.group.remove();
      this.paintArea.removeEventListener('mousemove', this.onMouseMove);
      return;
    }

    // There was not mouse move
    if(this.points.length == 0) {
      // Remove latest path
      this.path.group.remove();
      this.paintArea.removeEventListener('mousemove', this.onMouseMove);
      return;
    }

    // Or continue with latest path
    this.lastPoint = this.getMouseOffset(event);;
    let {start} = this.path;
    this.path.elem.classList.remove('current-path');

    this.updatePath(this.lastPoint);
    this.updateText();

    this.paintArea.removeEventListener('mousemove', this.onMouseMove);

    this.fillRestOfPath();
  }

  bodyKeyUp(event) {
    if(event.keyCode === 8 || event.keyCode === 46) {
      this.removePaths();
    }
  }

  mouseClickPath() {
    const pathId = this.clickedPath.id;
      this.clickedPath.classList.toggle('highlight');

      if(this.clickedPath.classList.contains('highlight')) {
        this.selected[pathId] = this.clickedPath.closest('g');
      }
      else {
        delete this.selected[pathId];
    }

    this.clickedPath = null;
  }

  updatePath({x, y}) {
    let {start} = this.path;
    const points = pointsToStr(this.points);

    this.path.elem.setAttribute(
      'd',
      `M${start.x},${start.y} ${points} ${x},${y}`);
  }

  updateText(params = {}) {
    const {textPath, textPathDouble} = params;
    const targetTextPath = textPath || this.textPath;
    const targetTextPathDouble = textPathDouble || this.textPathDouble;

    // this.pathFills.koeff need to add more symbols for tiny font-size
    for(let i = 0; i < this.pathFills.koeff; i++) {
      const symbol = this.getSymbol();
      targetTextPath.insertAdjacentHTML('beforeEnd', symbol);

      if(targetTextPathDouble) {
        targetTextPathDouble.insertAdjacentHTML('beforeEnd', symbol);
      }
    }
  }

  fillRestOfPath(params = {}) {
    const {path, textPath, textPathDouble} = params;
    const pathToAdjust = path || this.path.elem;
    const textPathToAdjust = textPath || this.textPath;
    const textPathDoubleToAdjust = textPath || this.textPath;

    const pathFillsMax = pathToAdjust.getTotalLength() / this.fontSize + this.path.offset;
    const tSpansLength = textPathToAdjust.children.length;
    let missedSymbols = pathFillsMax - tSpansLength;

    if(!missedSymbols) {
      return;
    }
    for(let i = 0; i < missedSymbols; i++) {
      this.updateText(params);
    }
  }

  getSymbol() {
    let symbol = this.symbols.list[this.symbols.currentPos];
    let rotate = '';

    this.symbols.currentPos++;
    if(this.symbols.currentPos === this.symbols.list.length) {
      this.symbols.currentPos = 0;
    }

    if(this.lineStyle.props.rotated) {
      const angle = this.rotation.stepAngle * this.rotation.counter;
      let rotate = `rotate="${angle}"`;

      this.rotation.counter++;
      if(this.rotation.counter >= this.rotation.max) {
        this.rotation.counter = 0;
      }
    }

    symbol = `<tspan ${rotate}>${symbol}</tspan>`

    return symbol;
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

  changeSymbolsSet() {
    this.symbols.str = this.selectSymbols.value;
    this.symbols.list = getSymbolsList(this.symbols.str);
    this.symbols.currentPos = 0;

    this.changeSymbolsOnSelected();
  }

  changeSymbolsOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }
    for(let key in this.selected) {
      const path = this.selected[key].querySelector('path');
      const textPaths = this.selected[key].querySelectorAll('textPath');

      for (let textPath of textPaths) {
        textPath.innerHTML = '';
      }

      console.log('textPaths')
      console.log(textPaths)

      this.fillRestOfPath({
        path,
        textPath: textPaths[0],
        textPathDouble: textPaths[1]
      });
    }
  }

  changeStyle() {
    this.lineStyle = lineStyles[this.selectStyle.value];
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

    this.changeFontSizeOnSelected();
  }

  changeFontSizeOnSelected() {
    if(Object.values(this.selected).length === 0) {
      return;
    }
    for(let key in this.selected) {
      const texts = this.selected[key].querySelectorAll('text');
      const path = this.selected[key].querySelector('path');
      const textPath = this.selected[key].querySelector('textPath');
      path.style.strokeWidth = this.fontSize;

      for(let text of texts) {
        text.style.fontSize = `${this.fontSize}px`;
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
  }

  getMouseOffset(event) {
    let {left, top} = this.paintArea.getBoundingClientRect();
    let scale = this.scale;

    return {
      x: scale * (event.clientX - left),
      y: scale * (event.clientY - top)
    };
  }
}
