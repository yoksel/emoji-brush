/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ThemeSwitcher/index.js */ "./src/lib/ThemeSwitcher/index.js");
/* harmony import */ var _lib_EmojiBrush_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/EmojiBrush/index.js */ "./src/lib/EmojiBrush/index.js");
console.clear();



(function() {
  document.addEventListener('change-theme', () => {
    document.body.style.background = getBackgroundStr(event.detail.colors)
  });

  function getBackgroundStr(colorsList) {
    let bgStr = '';

    if(colorsList.length === 1) {
      bgStr = colorsList[0]
      return bgStr;
    }

    bgStr = `linear-gradient(to bottom, ${colorsList.join(',')})`;
    return bgStr;
  }

  window.customElements.define('emoji-brush', _lib_EmojiBrush_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  window.customElements.define('theme-switcher', _lib_ThemeSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();


/***/ }),

/***/ "./src/lib/EmojiBrush/colors.js":
/*!**************************************!*\
  !*** ./src/lib/EmojiBrush/colors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = [
  'crimson',
  'gold',
  'yellowgreen',
  'teal'
];

/* harmony default export */ __webpack_exports__["default"] = (colors);


/***/ }),

/***/ "./src/lib/EmojiBrush/fontSizes.js":
/*!*****************************************!*\
  !*** ./src/lib/EmojiBrush/fontSizes.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fontSizes = [
  16,
  24,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  88,
  96,
  104,
  112
];

/* harmony default export */ __webpack_exports__["default"] = (fontSizes);


/***/ }),

/***/ "./src/lib/EmojiBrush/helpers.js":
/*!***************************************!*\
  !*** ./src/lib/EmojiBrush/helpers.js ***!
  \***************************************/
/*! exports provided: getStep, pointsToStr, getScale, getSymbolsList, fillSelect, fillTemplate, getEmojiStrLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStep", function() { return getStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToStr", function() { return pointsToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScale", function() { return getScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolsList", function() { return getSymbolsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillSelect", function() { return fillSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillTemplate", function() { return fillTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmojiStrLength", function() { return getEmojiStrLength; });
const ignoredUnicodeModifiers = {
  65038: 1, // &#xFE0E, text modifier
  65039: 1, // &#xFE0F, emoji modifier
};

const getStep = ({from, to}) => {
  const moveX = Math.abs(to.x - from.x);
  const moveY = Math.abs(to.y - from.y);
  return Math.max(moveX,moveY);
};

const pointsToStr = (pointsList) => {
  return pointsList
    .map(({x, y}) => `${x},${y}`)
    .join(' ');
};

// Return scale value if svg was resized
const getScale = (measurePath) => {
  const width = measurePath.getAttribute('width');
  const rect = measurePath.getBoundingClientRect();

  return width / rect.width;
};

const getSymbolsList = (str) => {
  const list = [];

  for (let char of str) {
    let unicodeNum = char.codePointAt();
    // Ignore emoji modifiers
    // fix problem for emoji like this ⭐️
    // for..of can't handle it like one symbol
    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    // Add emoji modifier to every symbol
    list.push(`${char}&#xFE0F`);
  }

  return list;
};

const fillSelect = ({elem, currentValue, list}) => {
  list.forEach(item => {
    const value = item.name ? item.name : item;
    const selected = value === currentValue ? 'selected' : '';
    elem.insertAdjacentHTML('beforeEnd',`<option value="${value}" ${selected}>${value}</option>`);
  })
};

const fillTemplate = ({tmpl, data}) => {
  if(!tmpl || !data) {
    return;
  }

  return tmpl.replace(/{([^"]{1,})}/gm, (match, str) => {
    if (data[str] !== undefined) {
      return data[str];
    }
    return '';
  });
}

const getEmojiStrLength = (str) => {
  let counter = 0;

  for (let char of str) {
    let unicodeNum = char.codePointAt();

    if(!char || ignoredUnicodeModifiers[unicodeNum]) {
      continue;
    }

    counter++;
  }

  return counter;
};


/***/ }),

/***/ "./src/lib/EmojiBrush/index.js":
/*!*************************************!*\
  !*** ./src/lib/EmojiBrush/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmojiBrush; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/lib/EmojiBrush/helpers.js");
/* harmony import */ var _tmpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmpl.js */ "./src/lib/EmojiBrush/tmpl.js");
/* harmony import */ var _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbolsList.js */ "./src/lib/EmojiBrush/symbolsList.js");
/* harmony import */ var _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineStyles.js */ "./src/lib/EmojiBrush/lineStyles.js");
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors.js */ "./src/lib/EmojiBrush/colors.js");
/* harmony import */ var _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fontSizes.js */ "./src/lib/EmojiBrush/fontSizes.js");







class EmojiBrush extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.append(
      _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateStyles"].content.cloneNode(true),
      _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateMarkup"].content.cloneNode(true)
    );

    this.paintArea = this.elem.getElementById('paint-area');
    this.targetGroup = this.elem.getElementById('target-group');
    this.clearControl = this.elem.getElementById('clear');
    this.inputSymbolsChoice = this.elem.getElementById('input-symbols-choice');
    this.selectSymbols = this.elem.getElementById('select-symbols');
    this.addSymbols = this.elem.getElementById('add-symbols');
    this.selectStyle = this.elem.getElementById('select-style');
    this.selectFontSize = this.elem.getElementById('select-font-size');
    this.scale = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getScale"])(this.paintArea.getElementById('measure-rect'));

    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.controls = this.elem.querySelector('.controls');
    this.controlGet = this.elem.querySelector('.control--get');
    this.controlGet.disabled = true;
    this.links = {
      png: this.elem.querySelector('.control--download-png')
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
      str: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"][0],
      currentPos: 0,
    };
    this.symbols.list = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getSymbolsList"])(this.symbols.str);

    this.lineStyle = this.getRandomLineStyle();
    this.fontSize = _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__["default"][3];

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
      list: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      handler: this.changeSymbolsSet,
      currentValue: _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"][Math.floor(Math.random() * _symbolsList_js__WEBPACK_IMPORTED_MODULE_2__["default"].length)]
    });

    this.initSelect({
      elem: this.selectStyle,
      list: Object.values(_lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
      handler: this.changeLineStyle,
      currentValue: 'mirrored-offset',
      currentValue: this.lineStyle.name
    });

    this.initSelect({
      elem: this.selectFontSize,
      list: _fontSizes_js__WEBPACK_IMPORTED_MODULE_5__["default"],
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
    Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["fillSelect"])({
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

    const content = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["fillTemplate"])({
      tmpl: _tmpl_js__WEBPACK_IMPORTED_MODULE_1__["templateGroup"].innerHTML,
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

    if(this.lineStyle.props.double && !params.textDouble) {
      let {textDouble, textPathDouble} = this.getTextDouble(params);

      params.textDouble = textDouble;
      params.textPathDouble = textPathDouble;
    }

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

    const moveSize = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getStep"])({
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
    const points = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["pointsToStr"])(this.points.list);

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
      let symbol = this.getSymbol();
      textPath.insertAdjacentHTML('beforeEnd', symbol);

      if(textPathDouble) {
        if(this.lineStyle.props.scattered) {
          symbol = this.getSymbol();
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

    for(let i = 0; i < missedSymbols; i++) {
      this.updateText(params);
    }
  }

  getSymbol() {
    let symbol = this.symbols.list[this.symbols.currentPos];
    let rotateAttr = this.getRotateAttr();
    let dyAttr = this.getDYWavesAttr();
    let fontSizeAttr = this.getFontSizeAttr();

    this.symbols.currentPos++;

    if(this.symbols.currentPos === this.symbols.list.length) {
      this.symbols.currentPos = 0;
    }

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

  getFontSizeAttr() {
    if(!this.lineStyle.props.scattered) {
      return '';
    }

    const fontSize = (Math.random() * 1.25 + .25).toFixed(2);

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
    this.symbols.list = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__["getSymbolsList"])(this.symbols.str);
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
      }

      if(!this.lineStyle.props.double) {
        textPathDouble = null;
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
    this.lineStyle = _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"][this.selectStyle.value];
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
      }

      if(!this.lineStyle.props.double) {
        textPathDouble = null;
      }
      else if(!textPathDouble) {
        let doubledText = this.getTextDouble({group, text});
        textDouble = doubledText.textDouble;
        textPathDouble = doubledText.textPathDouble;
        textPathDouble.innerHTML = '';
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
    return `background: ${this.getBackgroundStr(this.theme)}; color: ${this.accents.base}`;
  }

  preparePng() {
    const xml = new XMLSerializer().serializeToString(this.finalSVG);
    const svg64 = btoa(unescape(encodeURIComponent(xml)));
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

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
    const keys = Object.keys(_lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return _lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"][randomKey];
  }
}


/***/ }),

/***/ "./src/lib/EmojiBrush/lineStyles.js":
/*!******************************************!*\
  !*** ./src/lib/EmojiBrush/lineStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lineStyles = {
  'linear': {
    name: 'linear',
    props: {}
  },
  'linear-rotated': {
    name: 'linear-rotated',
    props: {
      rotated: true
    }
  },
  'mirrored': {
    name: 'mirrored',
    props: {
      double: true,
      mirrored: true
    }
  },
  'mirrored-offset': {
    name: 'mirrored-offset',
    props: {
      double: true,
      mirrored: true,
      startOffset: true
    }
  },
  'mirrored-offset-between': {
    name: 'mirrored-offset-between',
    props: {
      double: true,
      mirrored: true,
      startOffsetBetween: true
    }
  },
  'waves': {
    name: 'waves',
    props: {
      waves: true
    }
  },
  'mirrored-random': {
    name: 'mirrored-random',
    props: {
      double: true,
      mirrored: true,
      scattered: true,
      startOffsetBetween: true
    }
  },
};

/* harmony default export */ __webpack_exports__["default"] = (lineStyles);


/***/ }),

/***/ "./src/lib/EmojiBrush/symbolsList.js":
/*!*******************************************!*\
  !*** ./src/lib/EmojiBrush/symbolsList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const themes = [
  '😆🙂🤪🤨😌😋😂🙃😁',
  '🍁',
  '🦔',
  '🍂🍁🍄',
  '🐚',
  '🦐',
  '🐡🐠🐟',
  '🐶🐱🐭🐹🐰',
  '🐌',
  '✨',
  '⭐️',
  '❤️🧡💛💚💙💜🖤',
  '🔴🟠🟡🟢🔵🟣⚫️',
  '🟥🟧🟨🟩🟦🟪⬛️',
  '🌱🍀',
  '🌼🌺🌸',
  '🌼🌱🌺🌱🌸',
  '🚗🚲🚛🚂🚙⛵️🚃',
  '🥀🧚'
];

/* harmony default export */ __webpack_exports__["default"] = (themes);


/***/ }),

/***/ "./src/lib/EmojiBrush/tmpl.js":
/*!************************************!*\
  !*** ./src/lib/EmojiBrush/tmpl.js ***!
  \************************************/
/*! exports provided: templateStyles, templateMarkup, templateGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStyles", function() { return templateStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateMarkup", function() { return templateMarkup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateGroup", function() { return templateGroup; });
const templateStyles = document.createElement('template');
templateStyles.innerHTML = `<style>
  :host {
    display: block;
    min-width: 500px;
    min-height: 500px;

    --font-size: 32px;
    font: inherit;
    color: var(--color-base);
  }

  A {
    color: var(--color-base);
  }

  .visuallyhidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .paint-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--font-size);
    user-select: none;
  }

  .paint-area path {
    stroke: transparent;
    stroke-opacity: .35;
    fill: none;
    transition: stroke .15s;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .paint-area path:hover {
    stroke: var(--color-hover);
    cursor: pointer;
  }

  .paint-area text,
  .paint-area textPath,
  .paint-area .current-path {
    pointer-events: none;
  }

  .paint-area textPath {
    fill: currentColor;
  }

  SELECT,
  INPUT {
    height: 2rem;
    max-width: 200px;
    margin-left: 1rem;
    padding: 0 .25rem;
    box-sizing: border-box;
    background: #EEE;
    border: 1px solid #DDD;
    border-radius: .25rem;
    font: inherit;
    line-height: 2rem;
    vertical-align: middle;
  }

  .highlight path {
    stroke: var(--color-focus);
    stroke-opacity: .65;
  }

  .highlight:hover path {
    stroke: var(--color-focushover);
  }

  .panel {
    position: absolute;
    z-index: 10;
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel--top {
    top: 2rem;
    justify-content: flex-start;
  }
  .panel--bottom {
    bottom: 2rem;
  }

  .choice {
    display: flex;
  }

  .choice__label {
    display: flex;
    align-items: center;
  }

  .choice[data-mode="presets"] .choice__label--presets {
    margin-right: 1rem;
  }

  .choice__label-text {
    cursor: pointer;
  }

  .choice__input {
    margin-left: 0;
  }

  .choice[data-mode="presets"] .choice__input--custom,
  .choice[data-mode="custom"] .choice__input--presets {
    display: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets,
  .choice[data-mode="custom"] .choice__label-text--custom {
    box-shadow: none;
  }
  .choice[data-mode="presets"] .choice__label-text--presets:hover,
  .choice[data-mode="custom"] .choice__label-text--custom:hover {
    box-shadow: none;
    background: transparent;
    color: var(--color-base);
  }

  .control {
    padding: .25rem 1rem;
    background: transparent;
    border: 0;
    border-radius: .25rem;
    box-shadow:  0 0 0 2px var(--color-base) inset;
    font: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition);
    color: var(--color-base);
  }
  .control:not(:disabled):hover {
    box-shadow: 0 0 0 2px transparent inset;
    background: var(--color-base);
    color: var(--color-text);
  }
  .control:disabled {
    cursor: not-allowed;
    opacity: .5;
    color: var(--color-basetransp);
  }

  .controls__downloads {
    display: none;
    justify-content: center;
  }

  .controls[data-state="loading"] .control--get,
  .controls[data-state="ready"] .control--get {
    display: none;
  }
  .controls[data-state="loading"] .controls__downloads,
  .controls[data-state="ready"] .controls__downloads {
    display: flex;
  }

  .controls__downloads .control {
    opacity: .2;
    pointer-events: none;
  }
  .controls[data-state="ready"] .control {
    opacity: 1;
    pointer-events: auto;
  }

  .theme-switcher {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .disclaimer {
    font-size: .9em;
  }

  .socials {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  .socials__item + .socials__item {
    margin-left: 1rem;
  }

  .socials__icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
    transition: opacity var(--transition);
  }

  .socials__icon:hover {
    opacity: .75;
  }

  .socials__username {
    font-size: 0;
  }
</style>
`;

const templateMarkup = document.createElement('template');
templateMarkup.innerHTML = `
<svg id="paint-area" class="paint-area">
  <!-- Shape for measuring SVG scaling -->
  <rect id="measure-rect"
    fill="transparent"
    x="0" y="0"
    width="100" height="100"></rect>

  <g id="target-group"></g>
</svg>

<div class="panel panel--top">
  <div class="choice" id="input-symbols-choice" data-mode="presets">
    <label
      class="choice__label choice__label--presets">
      <span
        class="
          choice__label-text
          choice__label-text--presets
          control
        "
        data-value="presets"
        >Presets</span>
      <select
        class="choice__input choice__input--presets"
        id="select-symbols"></select>
    </label>

    <label
      class="choice__label choice__label--custom">
      <span
        class="
          choice__label-text
          choice__label-text--custom
          control
        "
        data-value="custom"
        >My symbols</span>
      <input
        class="choice__input choice__input--custom"
        type="text" id="add-symbols" placeholder="Add emoji or text"/>
    </label>
  </div>
  <select id="select-style"></select>
  <select id="select-font-size"></select>

  <theme-switcher class="theme-switcher"></theme-switcher>
</div>

<div class="panel panel--bottom">
  <button type="button" id="clear" class="control">Clear</button>

  <ul class="socials">
    <li class="socials__item">
      <a href="https://github.com/yoksel/emoji-brush/" class="socials__link"><svg class="socials__icon socials__icon--github" viewBox="0 0 16 16" width="16" height="16"><path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path></svg>
      <span class="socials__username visuallyhidden">yoksel/emoji-brush/</span></a>
    </li>

    <li class="socials__item">
      <a href="https://twitter.com/yoksel_en" class="socials__link">
        <svg class="socials__icon socials__icon--twitter" viewBox="0 0 16 16" width="16" height="16"><path d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"></path></svg>
        <span class="socials__username visuallyhidden">yoksel_en</span></a>
    </li>
  </ul>

  <div class="disclaimer">
    🛠 Deeply experimental. May not work on your device or browser. Sorry 💚
  </div>

  <div class="controls">
    <button
      type="button"
      class="control control--get">Get image</button>

    <div class="controls__downloads">
      <a
        class="control control--download-png">Download PNG</a>
    </div>
  </div>
</div>
`;

const templateGroup = document.createElement('template');
templateGroup.innerHTML = `<path
  id="path-{id}"
  d=""
  stroke-width="{fontSize}"
  fill="none"></path>
<text
  font-size="{fontSize}" class="text">
  <textPath href="#path-{id}" class="text-path"></textPath>
</text>
`;


/***/ }),

/***/ "./src/lib/ThemeSwitcher/index.js":
/*!****************************************!*\
  !*** ./src/lib/ThemeSwitcher/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeSwitcher; });
/* harmony import */ var _themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.js */ "./src/lib/ThemeSwitcher/themes.js");
/* harmony import */ var _tmpl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tmpl.js */ "./src/lib/ThemeSwitcher/tmpl.js");



class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.elem = this.shadowRoot;
    this.elem.appendChild(_tmpl_js__WEBPACK_IMPORTED_MODULE_1__["template"].content.cloneNode(true));
    this.controls = this.elem.querySelector('.controls');
    this.currentThemeNum = Math.floor(Math.random() * _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].length);
    this.currentThemeElem = null;
    this.isCollapsed = true;

    this.cls = {
      collapsed: 'controls--collapsed',
      current: 'control--current'
    }

    this.addControls();

    this.onControlClick = this.onControlClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  addControls() {
    _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"].forEach((theme, index) => {
      let bgStr = this.getBackgroundStr(theme.colors);
      let className = 'control';
      let color = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"].base;
      if(theme.accents) {
        color = theme.accents.base;
      }

      if(index === this.currentThemeNum) {
        className += ' control--current';
      }

      const controlStr = `<button
        type="button"
        class="${className}"
        title="${theme.name}"
        data-index="${index}"
        style="background: ${bgStr}; color: ${color}">
          <span class="visuallyhidden">${theme.name}</span>
        </button>`;

      this.controls.insertAdjacentHTML('beforeEnd', controlStr);
      this.currentThemeElem = this.elem.querySelector(`.${this.cls.current}`);
    })
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

  connectedCallback() {
    this.controls.addEventListener('click', this.onControlClick);
    document.addEventListener('change-theme', this.changeTheme);
    document.addEventListener('click', this.closePanel);

    // Set current theme to page & component
    this.dispatchChangeTheme();
  }

  onControlClick(event) {
    event.stopPropagation();

    if(this.isCollapsed) {
      this.isCollapsed = false;
      this.controls.classList.remove(this.cls.collapsed);
      return;
    }

    if(event.target.dataset.index) {
      this.currentThemeNum = event.target.dataset.index;
      this.dispatchChangeTheme();

      this.currentThemeElem.classList.remove(this.cls.current);
      event.target.classList.add(this.cls.current);
      this.currentThemeElem = event.target;

      this.closePanel(event);
    }
  }

  closePanel(event) {
    if(event.target === this || this.isCollapsed) {
      return;
    }

    this.isCollapsed = true;
    this.controls.classList.add(this.cls.collapsed);
  }

  dispatchChangeTheme() {
    const theme = _themes_js__WEBPACK_IMPORTED_MODULE_0__["themes"][this.currentThemeNum];
    if(!theme.accents) {
      theme.accents = _themes_js__WEBPACK_IMPORTED_MODULE_0__["baseAccents"];
    }
    this.controls.style.background = theme.colors[0];

    document.dispatchEvent(new CustomEvent('change-theme', {
      detail: theme,
      bubbles: true
    }));
  }

  changeTheme(event) {
    if(!event.detail.accents) {
      return;
    }
    for(let key in event.detail.accents) {
      this.style.setProperty(`--color-${key}`, event.detail.accents[key]);
    }
  }
}


/***/ }),

/***/ "./src/lib/ThemeSwitcher/themes.js":
/*!*****************************************!*\
  !*** ./src/lib/ThemeSwitcher/themes.js ***!
  \*****************************************/
/*! exports provided: baseAccents, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseAccents", function() { return baseAccents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
const baseAccents = {
  base: 'white',
  basetransp: 'rgba(255,255,255,.5)',
  text: 'black',
  texttransp: 'rgba(0,0,0,.5)',
  hover: 'aqua',
  focus: 'orangered',
  focushover: 'gold'
};

const themes = [
  {
    name: 'Firebrick',
    colors: ['firebrick']
  },
  {
    name: 'Indianred',
    colors: ['indianred']
  },
  {
    name: 'Gold',
    colors: ['gold'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'khaki',
    colors: ['khaki'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Yellowgreen',
    colors: ['yellowgreen'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Turquoise',
    colors: ['turquoise'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Teal',
    colors: ['teal']
  },
  {
    name: 'Skyblue',
    colors: ['skyblue'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Steelblue',
    colors: ['steelblue']
  },{
    name: 'Midnightblue',
    colors: ['midnightblue']
  },
  {
    name: 'Darkslateblue',
    colors: ['darkslateblue']
  },
  {
    name: 'Indigo',
    colors: ['indigo']
  },
  {
    name: 'Purple',
    colors: ['purple']
  },
  {
    name: 'White',
    colors: ['#FFF'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)'
    }
  },
  {
    name: 'Gray',
    colors: ['#333']
  },
  {
    name: 'Black',
    colors: ['#000'],
  },
];


/***/ }),

/***/ "./src/lib/ThemeSwitcher/tmpl.js":
/*!***************************************!*\
  !*** ./src/lib/ThemeSwitcher/tmpl.js ***!
  \***************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative
      min-width: 3rem;
      height: 4rem;

      --color-base: white;
      --color-basetransp: rgba(255,255,255,.5);
    }

    .visuallyhidden {
      position: absolute;

      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    .controls {
      display: flex;
      padding: .5rem;
      background: var(--color-basetransp);
      border-radius: 4rem;
    }

    .control {
      position: relative;
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 0 2px currentColor inset,
        0 0 4px 2px rgba(0,0,0,.25);
      cursor: pointer;
      transition: margin .45s;
      transition-property: box-shadow, margin;
    }

    .control:not(control--current) {

    }

    .control:last-child {
      margin-right: 0 !important;
    }

    .control:focus {
      outline: none;
      box-shadow: 0 0 0 4px currentColor inset,
        0 0 0 4px var(--color-basetransp);
    }

    .controls--collapsed .control {
      margin-right: -3rem;
      box-shadow: 0 0 0 2px currentColor inset;
    }

    .control--current {
      z-index: 2;
    }

    .control--current::after {
      content: '';
      position: absolute;
      top: -.25rem;
      right: -.25rem;
      bottom: -.25rem;
      left: -.25rem;
      border-radius: 50%;
      border: 1px dashed var(--color-base);
      animation: rotation 4s linear infinite;
      animation-play-state: paused;
    }

    .control--current:focus::after {
      content: none;
    }

    .controls--collapsed:hover .control--current {
      box-shadow: 0 0 0 2px var(--color-base) inset;
    }
    .controls--collapsed:hover .control--current::after {
      animation-play-state: running;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg)
      }
      to {
        transform: rotate(360deg)
      }
    }
  </style>

  <div class="controls controls--collapsed"></div>
`;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2ZvbnRTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2xpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL3N5bWJvbHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC90bXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci90bXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDeUQ7QUFDTjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQSw4Q0FBOEMsZ0VBQVU7QUFDeEQsaURBQWlELG1FQUFhO0FBQzlELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ1B0QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sa0JBQWtCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFdBQVcsS0FBSyxRQUFRLEVBQUUsR0FBRyxFQUFFO0FBQy9CO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsS0FBSztBQUN0Qjs7QUFFQTtBQUNBOztBQUVPLHFCQUFxQix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE1BQU0sSUFBSSxTQUFTLEdBQUcsTUFBTTtBQUN0RixHQUFHO0FBQ0g7O0FBRU8sdUJBQXVCLFdBQVc7QUFDekM7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixNQUFNLEdBQUcsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQzlCO0FBQzdCO0FBQ0Y7QUFDUjtBQUNNOztBQUV4QjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixNQUFNLHVEQUFjO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQVE7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHVEQUFXO0FBQ3RCO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWM7O0FBRXRDO0FBQ0Esb0JBQW9CLHFEQUFTOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1REFBVztBQUN2QjtBQUNBLG9CQUFvQix1REFBVyw0QkFBNEIsdURBQVc7QUFDdEUsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFlBQVkscURBQVM7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxrQ0FBa0M7QUFDaEQsSUFBSSw4REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjs7QUFFN0Msb0JBQW9CLGdFQUFZO0FBQ2hDLFlBQVksc0RBQWE7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLFNBQVMsd0NBQXdDO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsWUFBWTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxNQUFNOztBQUVmLHFCQUFxQiwyREFBTztBQUM1QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsTUFBTTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYyxLQUFLO0FBQ25CLFNBQVMsTUFBTTtBQUNmLG1CQUFtQiwrREFBVzs7QUFFOUI7QUFDQTtBQUNBLFVBQVUsUUFBUSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDakQ7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHlCQUF5Qjs7QUFFbEM7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsU0FBUywrQkFBK0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLEdBQUcsT0FBTzs7QUFFcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxNQUFNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixHQUFHOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQixTQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0VBQWM7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVU7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLElBQUk7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRSw0Q0FBNEMsdUJBQXVCOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQyxVQUFVLGtCQUFrQjtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0EsU0FBUyxVQUFVO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsc0RBQVU7QUFDdkM7QUFDQSxXQUFXLHNEQUFVO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3d0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNuRDFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN0QnRCO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkIseUJBQXlCLEdBQUc7QUFDNUI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hVQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNiOztBQUVwQjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBLDBCQUEwQixpREFBUTtBQUNsQztBQUNBLHNEQUFzRCxpREFBTTtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBTTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0IsaUJBQWlCLFdBQVc7QUFDNUIsc0JBQXNCLE1BQU07QUFDNUIsNkJBQTZCLE9BQU8sVUFBVSxNQUFNO0FBQ3BELHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0EsMERBQTBELGlCQUFpQjtBQUMzRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQSxzQkFBc0Isc0RBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnNvbGUuY2xlYXIoKTtcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMnO1xuaW1wb3J0IEVtb2ppQnJ1c2ggZnJvbSAnLi9saWIvRW1vamlCcnVzaC9pbmRleC5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmRTdHIoZXZlbnQuZGV0YWlsLmNvbG9ycylcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbW9qaS1icnVzaCcsIEVtb2ppQnJ1c2gpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IGNvbG9ycyA9IFtcbiAgJ2NyaW1zb24nLFxuICAnZ29sZCcsXG4gICd5ZWxsb3dncmVlbicsXG4gICd0ZWFsJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3JzO1xuIiwiY29uc3QgZm9udFNpemVzID0gW1xuICAxNixcbiAgMjQsXG4gIDMyLFxuICA0MCxcbiAgNDgsXG4gIDU2LFxuICA2NCxcbiAgNzIsXG4gIDgwLFxuICA4OCxcbiAgOTYsXG4gIDEwNCxcbiAgMTEyXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmb250U2l6ZXM7XG4iLCJjb25zdCBpZ25vcmVkVW5pY29kZU1vZGlmaWVycyA9IHtcbiAgNjUwMzg6IDEsIC8vICYjeEZFMEUsIHRleHQgbW9kaWZpZXJcbiAgNjUwMzk6IDEsIC8vICYjeEZFMEYsIGVtb2ppIG1vZGlmaWVyXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RlcCA9ICh7ZnJvbSwgdG99KSA9PiB7XG4gIGNvbnN0IG1vdmVYID0gTWF0aC5hYnModG8ueCAtIGZyb20ueCk7XG4gIGNvbnN0IG1vdmVZID0gTWF0aC5hYnModG8ueSAtIGZyb20ueSk7XG4gIHJldHVybiBNYXRoLm1heChtb3ZlWCxtb3ZlWSk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9pbnRzVG9TdHIgPSAocG9pbnRzTGlzdCkgPT4ge1xuICByZXR1cm4gcG9pbnRzTGlzdFxuICAgIC5tYXAoKHt4LCB5fSkgPT4gYCR7eH0sJHt5fWApXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbi8vIFJldHVybiBzY2FsZSB2YWx1ZSBpZiBzdmcgd2FzIHJlc2l6ZWRcbmV4cG9ydCBjb25zdCBnZXRTY2FsZSA9IChtZWFzdXJlUGF0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB3aWR0aCAvIHJlY3Qud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3ltYm9sc0xpc3QgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICBmb3IgKGxldCBjaGFyIG9mIHN0cikge1xuICAgIGxldCB1bmljb2RlTnVtID0gY2hhci5jb2RlUG9pbnRBdCgpO1xuICAgIC8vIElnbm9yZSBlbW9qaSBtb2RpZmllcnNcbiAgICAvLyBmaXggcHJvYmxlbSBmb3IgZW1vamkgbGlrZSB0aGlzIOKtkO+4j1xuICAgIC8vIGZvci4ub2YgY2FuJ3QgaGFuZGxlIGl0IGxpa2Ugb25lIHN5bWJvbFxuICAgIGlmKCFjaGFyIHx8IGlnbm9yZWRVbmljb2RlTW9kaWZpZXJzW3VuaWNvZGVOdW1dKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZW1vamkgbW9kaWZpZXIgdG8gZXZlcnkgc3ltYm9sXG4gICAgbGlzdC5wdXNoKGAke2NoYXJ9JiN4RkUwRmApO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbFNlbGVjdCA9ICh7ZWxlbSwgY3VycmVudFZhbHVlLCBsaXN0fSkgPT4ge1xuICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLm5hbWUgPyBpdGVtLm5hbWUgOiBpdGVtO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdmFsdWUgPT09IGN1cnJlbnRWYWx1ZSA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICBlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCIgJHtzZWxlY3RlZH0+JHt2YWx1ZX08L29wdGlvbj5gKTtcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsVGVtcGxhdGUgPSAoe3RtcGwsIGRhdGF9KSA9PiB7XG4gIGlmKCF0bXBsIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHRtcGwucmVwbGFjZSgveyhbXlwiXXsxLH0pfS9nbSwgKG1hdGNoLCBzdHIpID0+IHtcbiAgICBpZiAoZGF0YVtzdHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhW3N0cl07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbW9qaVN0ckxlbmd0aCA9IChzdHIpID0+IHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgbGV0IHVuaWNvZGVOdW0gPSBjaGFyLmNvZGVQb2ludEF0KCk7XG5cbiAgICBpZighY2hhciB8fCBpZ25vcmVkVW5pY29kZU1vZGlmaWVyc1t1bmljb2RlTnVtXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY291bnRlcisrO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50ZXI7XG59O1xuIiwiaW1wb3J0IHtnZXRTdGVwLCBwb2ludHNUb1N0ciwgZ2V0U2NhbGUsIGdldFN5bWJvbHNMaXN0LCBmaWxsU2VsZWN0LCBmaWxsVGVtcGxhdGV9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlU3R5bGVzLCB0ZW1wbGF0ZU1hcmt1cCwgdGVtcGxhdGVHcm91cH0gZnJvbSAnLi90bXBsLmpzJztcbmltcG9ydCBzeW1ib2xzTGlzdCBmcm9tICcuL3N5bWJvbHNMaXN0LmpzJztcbmltcG9ydCBsaW5lU3R5bGVzIGZyb20gJy4vbGluZVN0eWxlcy5qcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzLmpzJztcbmltcG9ydCBmb250U2l6ZXMgZnJvbSAnLi9mb250U2l6ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbW9qaUJydXNoIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZChcbiAgICAgIHRlbXBsYXRlU3R5bGVzLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLFxuICAgICAgdGVtcGxhdGVNYXJrdXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICApO1xuXG4gICAgdGhpcy5wYWludEFyZWEgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3BhaW50LWFyZWEnKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCd0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNsZWFyQ29udHJvbCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc3ltYm9scy1jaG9pY2UnKTtcbiAgICB0aGlzLnNlbGVjdFN5bWJvbHMgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zeW1ib2xzJyk7XG4gICAgdGhpcy5hZGRTeW1ib2xzID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdhZGQtc3ltYm9scycpO1xuICAgIHRoaXMuc2VsZWN0U3R5bGUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zdHlsZScpO1xuICAgIHRoaXMuc2VsZWN0Rm9udFNpemUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1mb250LXNpemUnKTtcbiAgICB0aGlzLnNjYWxlID0gZ2V0U2NhbGUodGhpcy5wYWludEFyZWEuZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmUtcmVjdCcpKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWdldCcpO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5saW5rcyA9IHtcbiAgICAgIHBuZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1wbmcnKVxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5wb2ludHMgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGxhc3Q6IHt9XG4gICAgfTtcbiAgICB0aGlzLnJvdGF0aW9uID0ge1xuICAgICAgbWF4OiA2XG4gICAgfTtcblxuICAgIHRoaXMuY3VycmVudCA9IHtcbiAgICAgIGNvdW50ZXI6IDBcbiAgICB9O1xuXG4gICAgLy8gVHJ5IHRvIGRyYXcgc3RyYWlnaHQgbGlnaHQsIGFkZCBsYXRlclxuICAgIHRoaXMubW92ZVRocmVzaG9sZCA9IHtcbiAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgZGVmYXVsdDogMjBcbiAgICB9O1xuICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMud2F2ZXMgPSB7XG4gICAgICBjb3VudGVyOiAwLFxuICAgICAgbWF4OiAyLFxuICAgICAgaWREaXJlY3Rpb25VcDogdHJ1ZVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGFkZCBtb3JlIHN5bWJvbHMgZm9yIHRpbnkgZm9udC1zaXplXG4gICAgdGhpcy5wYXRoRmlsbHMgPSB7fTtcblxuICAgIHRoaXMuc3ltYm9scyA9IHtcbiAgICAgIHN0cjogc3ltYm9sc0xpc3RbMF0sXG4gICAgICBjdXJyZW50UG9zOiAwLFxuICAgIH07XG4gICAgdGhpcy5zeW1ib2xzLmxpc3QgPSBnZXRTeW1ib2xzTGlzdCh0aGlzLnN5bWJvbHMuc3RyKTtcblxuICAgIHRoaXMubGluZVN0eWxlID0gdGhpcy5nZXRSYW5kb21MaW5lU3R5bGUoKTtcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemVzWzNdO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVN5bWJvbHNTZXQgPSB0aGlzLmNoYW5nZVN5bWJvbHNTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUxpbmVTdHlsZSA9IHRoaXMuY2hhbmdlTGluZVN0eWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VGb250U2l6ZSA9IHRoaXMuY2hhbmdlRm9udFNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlLZXlVcCA9IHRoaXMuYm9keUtleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5S2V5RG93biA9IHRoaXMuYm9keUtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlU3ltYm9sc0lucHV0ID0gdGhpcy5jaG9vc2VTeW1ib2xzSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlNb3VzZU91dCA9IHRoaXMuYm9keU1vdXNlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVwYXJlSW1hZ2VzID0gdGhpcy5wcmVwYXJlSW1hZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN5bWJvbHMsXG4gICAgICBsaXN0OiBzeW1ib2xzTGlzdCxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlU3ltYm9sc1NldCxcbiAgICAgIGN1cnJlbnRWYWx1ZTogc3ltYm9sc0xpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3ltYm9sc0xpc3QubGVuZ3RoKV1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN0eWxlLFxuICAgICAgbGlzdDogT2JqZWN0LnZhbHVlcyhsaW5lU3R5bGVzKSxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlTGluZVN0eWxlLFxuICAgICAgY3VycmVudFZhbHVlOiAnbWlycm9yZWQtb2Zmc2V0JyxcbiAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy5saW5lU3R5bGUubmFtZVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0U2VsZWN0KHtcbiAgICAgIGVsZW06IHRoaXMuc2VsZWN0Rm9udFNpemUsXG4gICAgICBsaXN0OiBmb250U2l6ZXMsXG4gICAgICBoYW5kbGVyOiB0aGlzLmNoYW5nZUZvbnRTaXplLFxuICAgICAgY3VycmVudFZhbHVlOiAzMlxuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jbGVhckNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgdGhpcy5wYWludEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgdGhpcy5pbnB1dFN5bWJvbHNDaG9pY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZVN5bWJvbHNJbnB1dCk7XG4gICAgdGhpcy5hZGRTeW1ib2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5jaGFuZ2VTeW1ib2xzU2V0KTtcbiAgICB0aGlzLmNvbnRyb2xHZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnByZXBhcmVJbWFnZXMpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuYm9keUtleVVwKTtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvZHlLZXlEb3duKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZS10aGVtZScsIHRoaXMuY2hhbmdlVGhlbWUpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy9cbiAgfVxuXG4gIGluaXRTZWxlY3Qoe2VsZW0sIGxpc3QsIGN1cnJlbnRWYWx1ZSwgaGFuZGxlcn0pIHtcbiAgICBmaWxsU2VsZWN0KHtcbiAgICAgIGVsZW0sXG4gICAgICBsaXN0LFxuICAgICAgY3VycmVudFZhbHVlXG4gICAgfSk7XG5cbiAgICBoYW5kbGVyKCk7XG5cbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZihldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICB0aGlzLmNsaWNrZWRQYXRoID0gZXZlbnQudGFyZ2V0O1xuICAgIH1cbiAgICBsZXQgc3RhcnQgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICB0aGlzLnBvaW50cy5sYXN0ID0gc3RhcnQ7XG4gICAgdGhpcy5wb2ludHMubGlzdCA9IFtdO1xuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcblxuICAgIGxldCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuICAgIGdyb3VwLmlkID0gYGdyb3VwLSR7dGhpcy5jdXJyZW50LmNvdW50ZXJ9YDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBmaWxsVGVtcGxhdGUoe1xuICAgICAgdG1wbDogdGVtcGxhdGVHcm91cC5pbm5lckhUTUwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0aGlzLmN1cnJlbnQuY291bnRlcixcbiAgICAgICAgZm9udFNpemU6IGAke3RoaXMuZm9udFNpemV9cHhgXG4gICAgICB9XG4gICAgfSk7XG4gICAgZ3JvdXAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLGNvbnRlbnQpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAuYXBwZW5kKGdyb3VwKTtcblxuICAgIGxldCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgIHBhdGguY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wYXRoJyk7XG4gICAgbGV0IHRleHRQYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dFBhdGgnKTtcbiAgICBjb25zdCB0ZXh0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dCcpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0ge1xuICAgICAgLi4udGhpcy5jdXJyZW50LFxuICAgICAgZ3JvdXAsXG4gICAgICBwYXRoLFxuICAgICAgdGV4dCxcbiAgICAgIHRleHREb3VibGU6IG51bGwsXG4gICAgICB0ZXh0UGF0aCxcbiAgICAgIHRleHRQYXRoRG91YmxlOiBudWxsLFxuICAgICAgc3RhcnQsXG4gICAgICBjb3VudGVyOiArK3RoaXMuY3VycmVudC5jb3VudGVyXG4gICAgfTtcblxuICAgIHRoaXMubW9kaWZ5UGF0aHMoKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyb3V0JywgdGhpcy5ib2R5TW91c2VPdXQpO1xuICAgIHRoaXMubW91c2VPdXRQb2ludHMgPSB7fTtcbiAgfVxuXG4gIG1vZGlmeVBhdGhzKHBhcmFtcyA9IHt9KSB7XG4gICAgbGV0IGhhc0N1cnJlbnQgPSBmYWxzZTtcblxuICAgIGlmKCFwYXJhbXMudGV4dCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgICAgaGFzQ3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuZG91YmxlICYmICFwYXJhbXMudGV4dERvdWJsZSkge1xuICAgICAgbGV0IHt0ZXh0RG91YmxlLCB0ZXh0UGF0aERvdWJsZX0gPSB0aGlzLmdldFRleHREb3VibGUocGFyYW1zKTtcblxuICAgICAgcGFyYW1zLnRleHREb3VibGUgPSB0ZXh0RG91YmxlO1xuICAgICAgcGFyYW1zLnRleHRQYXRoRG91YmxlID0gdGV4dFBhdGhEb3VibGU7XG4gICAgfVxuXG4gICAgbGV0IHtncm91cCwgdGV4dCwgdGV4dERvdWJsZSwgdGV4dFBhdGhEb3VibGV9ID0gcGFyYW1zO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKCdkeScsICcuMzVlbScpO1xuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMubWlycm9yZWQpIHtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdkeScsICctLjEyZW0nKTtcbiAgICAgIHRleHREb3VibGUuc2V0QXR0cmlidXRlKCdkeScsICctLjEyZW0nKVxuICAgICAgdGV4dERvdWJsZS5zZXRBdHRyaWJ1dGUoJ3JvdGF0ZScsIDE4MCk7XG4gICAgICB0ZXh0UGF0aERvdWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0T2Zmc2V0JywgYCR7dGhpcy5wYXRoT2Zmc2V0fXB4YCk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZHknLCAnLS4xM2VtJyk7XG4gICAgICB0ZXh0RG91YmxlLnNldEF0dHJpYnV0ZSgnZHknLCAnLS4xM2VtJyk7XG4gICAgICBncm91cC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJy4xZW0nO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0KSB7XG4gICAgICB0ZXh0UGF0aERvdWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0T2Zmc2V0JywgYC0ke3RoaXMucGF0aE9mZnNldH1weGApO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0QmV0d2Vlbikge1xuICAgICAgdGV4dFBhdGhEb3VibGUuc2V0QXR0cmlidXRlKCdzdGFydE9mZnNldCcsIGAtJHt0aGlzLnBhdGhPZmZzZXR9cHhgKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFJvdGF0aW9uKCk7XG4gICAgdGhpcy5zZXRXYXZlcygpO1xuICB9XG5cbiAgc2V0Um90YXRpb24oKSB7XG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMucm90YXRlZCkge1xuICAgICAgdGhpcy5yb3RhdGlvbiA9IHtcbiAgICAgICAgLi4udGhpcy5yb3RhdGlvbixcbiAgICAgICAgc3RlcEFuZ2xlOiAzNjAgLyB0aGlzLnJvdGF0aW9uLm1heCxcbiAgICAgICAgY291bnRlcjogMFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzZXRXYXZlcygpIHtcbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy53YXZlcykge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyID0gMDtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGV4dERvdWJsZShwYXJhbXMpIHtcbiAgICBsZXQge2dyb3VwLCB0ZXh0fSA9IHBhcmFtcztcblxuICAgIGNvbnN0IHRleHREb3VibGUgPSB0ZXh0LmNsb25lTm9kZSh0cnVlKTtcbiAgICB0ZXh0RG91YmxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtLWRvdWJsZScpO1xuICAgIGNvbnN0IHRleHRQYXRoRG91YmxlID0gdGV4dERvdWJsZS5xdWVyeVNlbGVjdG9yKCd0ZXh0UGF0aCcpO1xuICAgIHRleHRQYXRoRG91YmxlLmNsYXNzTGlzdC5hZGQoJ3RleHQtcGF0aC0tZG91YmxlJyk7XG4gICAgZ3JvdXAuYXBwZW5kKHRleHREb3VibGUpO1xuXG4gICAgcmV0dXJuIHt0ZXh0RG91YmxlLCB0ZXh0UGF0aERvdWJsZX07XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGlmKCFldmVudC5idXR0b25zKSB7XG4gICAgICB0aGlzLm1vdXNlT3V0UG9pbnRzLmZpbmlzaFBhdGggPSB0cnVlO1xuICAgICAgdGhpcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb29yZHMgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IG1vdmVTaXplID0gZ2V0U3RlcCh7XG4gICAgICBmcm9tOiB0aGlzLnBvaW50cy5sYXN0LFxuICAgICAgdG86IGNvb3Jkc1xuICAgIH0pO1xuXG4gICAgaWYobW92ZVNpemUgPiB0aGlzLm1vdmVUaHJlc2hvbGQudmFsdWUpIHtcbiAgICAgIHRoaXMucG9pbnRzLmxpc3QucHVzaChjb29yZHMpO1xuICAgICAgdGhpcy51cGRhdGVQYXRoKGNvb3Jkcyk7XG4gICAgICB0aGlzLnVwZGF0ZVRleHQoKTtcbiAgICAgIHRoaXMucG9pbnRzLmxhc3QgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgdGhpcy5jbGlja2VkUGF0aCA9IG51bGw7XG4gIH1cblxuICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAvLyBIYW5kbGUgY2xpY2sgb24gcGF0aFxuICAgIGlmKHRoaXMuY2xpY2tlZFBhdGgpIHtcbiAgICAgIHRoaXMubW91c2VDbGlja1BhdGgoKTtcblxuICAgICAgLy8gUmVtb3ZlIGxhdGVzdCBwYXRoXG4gICAgICB0aGlzLmN1cnJlbnQuZ3JvdXAucmVtb3ZlKCk7XG4gICAgICB0aGlzLnBhaW50QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIHdhcyBub3QgbW91c2UgbW92ZVxuICAgIGlmKHRoaXMucG9pbnRzLmxpc3QubGVuZ3RoID09IDAgJiYgdGhpcy5jdXJyZW50Lmdyb3VwKSB7XG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMuY3VycmVudC5ncm91cC5yZW1vdmUoKTtcbiAgICAgIHRoaXMucGFpbnRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gVHJ5IHRvIGZpeCByYW5kb20gYnVnXG4gICAgaWYoIXRoaXMuY3VycmVudC5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3IgY29udGludWUgd2l0aCBsYXRlc3QgcGF0aFxuICAgIHRoaXMucG9pbnRzLmxhc3QgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcblxuICAgIGlmKHRoaXMubW91c2VPdXRQb2ludHMgJiYgdGhpcy5tb3VzZU91dFBvaW50cy5maW5pc2hQYXRoKSB7XG4gICAgICB0aGlzLnBvaW50cy5sYXN0ID0gdGhpcy5tb3VzZU91dFBvaW50cy5jb29yZHM7XG4gICAgfVxuXG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50LnBhdGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wYXRoJyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhdGgodGhpcy5wb2ludHMubGFzdCk7XG4gICAgdGhpcy51cGRhdGVUZXh0KCk7XG5cbiAgICB0aGlzLnBhaW50QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm91dCcsIHRoaXMuYm9keU1vdXNlT3V0KTtcbiAgICB0aGlzLmZpbGxSZXN0T2ZQYXRoKCk7XG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gIXRoaXMudGFyZ2V0R3JvdXAuaW5uZXJIVE1MO1xuICB9XG5cbiAgYm9keUtleVVwKGV2ZW50KSB7XG4gICAgY29uc3QgaXNCb2R5ID0gZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdCT0RZJztcbiAgICBjb25zdCBpc0RlbE9yQmFja1NwYWNlID0gZXZlbnQua2V5Q29kZSA9PT0gOCB8fCBldmVudC5rZXlDb2RlID09PSA0NjtcblxuICAgIC8vIFByZXZlbnQgcmVtb3ZpbmcgcGF0aCB3aGlsZSBlZGl0IHRleHQgaW4gaW5wdXRcbiAgICBpZihpc0JvZHkgJiYgaXNEZWxPckJhY2tTcGFjZSkge1xuICAgICAgdGhpcy5yZW1vdmVQYXRocygpO1xuICAgIH1cbiAgICAvLyBVbnByZXNzIHNoaWZ0LCBub3QgdXNlZCBub3dcbiAgICBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT09IDE2KSB7XG4gICAgICB0aGlzLmlzU3RyYWlnaHRMaW5lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYm9keU1vdXNlT3V0KGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZU91dFBvaW50cyA9IHtcbiAgICAgIGNvb3JkczogdGhpcy5nZXRNb3VzZU9mZnNldChldmVudClcbiAgICB9O1xuICB9XG5cbiAgYm9keUtleURvd24oZXZlbnQpIHtcbiAgICAvLyBQcmVzcyBzaGlmdCwgbm90IHVzZWQgbm93XG4gICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTYpIHtcbiAgICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlQ2xpY2tQYXRoKCkge1xuICAgIGNvbnN0IHBhdGhJZCA9IHRoaXMuY2xpY2tlZFBhdGguaWQ7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmNsaWNrZWRQYXRoLmNsb3Nlc3QoJ2cnKTtcbiAgICBncm91cC5jbGFzc0xpc3QudG9nZ2xlKCdoaWdobGlnaHQnKTtcblxuICAgIGlmKGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtwYXRoSWRdID0gZ3JvdXA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRbcGF0aElkXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVBhdGgoe3gsIHl9KSB7XG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgY29uc3QgcG9pbnRzID0gcG9pbnRzVG9TdHIodGhpcy5wb2ludHMubGlzdCk7XG5cbiAgICB0aGlzLmN1cnJlbnQucGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICBgTSR7c3RhcnQueH0sJHtzdGFydC55fSAke3BvaW50c30gJHt4fSwke3l9YCk7XG4gIH1cblxuICB1cGRhdGVUZXh0KHBhcmFtcyA9IHt9KSB7XG4gICAgaWYoIXBhcmFtcy50ZXh0UGF0aCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgIH1cblxuICAgIGxldCB7dGV4dFBhdGgsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcblxuICAgIC8vIHRoaXMucGF0aEZpbGxzLmtvZWZmIG5lZWQgdG8gYWRkIG1vcmUgc3ltYm9scyBmb3IgdGlueSBmb250LXNpemVcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXRoRmlsbHMua29lZmY7IGkrKykge1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuZ2V0U3ltYm9sKCk7XG4gICAgICB0ZXh0UGF0aC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHN5bWJvbCk7XG5cbiAgICAgIGlmKHRleHRQYXRoRG91YmxlKSB7XG4gICAgICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnNjYXR0ZXJlZCkge1xuICAgICAgICAgIHN5bWJvbCA9IHRoaXMuZ2V0U3ltYm9sKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBzeW1ib2wpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbGwgZW1wdHkgcGF0aCBpZiBtb3VzZSBtb3ZlcyB0b28gZmFzdFxuICBmaWxsUmVzdE9mUGF0aChwYXJhbXMgPSB7fSkge1xuICAgIGlmKCFwYXJhbXMudGV4dFBhdGgpIHtcbiAgICAgIHBhcmFtcyA9IHRoaXMuY3VycmVudDtcbiAgICB9XG5cbiAgICBsZXQge3BhdGgsIHRleHRQYXRoLCB0ZXh0UGF0aERvdWJsZX0gPSBwYXJhbXM7XG4gICAgY29uc3QgcGF0aEZpbGxzTWF4ID0gcGF0aC5nZXRUb3RhbExlbmd0aCgpIC8gdGhpcy5mb250U2l6ZSArIHRoaXMucGF0aE9mZnNldDtcbiAgICBjb25zdCB0U3BhbnNMZW5ndGggPSB0ZXh0UGF0aC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgbGV0IG1pc3NlZFN5bWJvbHMgPSBwYXRoRmlsbHNNYXggLSB0U3BhbnNMZW5ndGg7XG5cbiAgICBpZighbWlzc2VkU3ltYm9scykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtaXNzZWRTeW1ib2xzOyBpKyspIHtcbiAgICAgIHRoaXMudXBkYXRlVGV4dChwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN5bWJvbCgpIHtcbiAgICBsZXQgc3ltYm9sID0gdGhpcy5zeW1ib2xzLmxpc3RbdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3NdO1xuICAgIGxldCByb3RhdGVBdHRyID0gdGhpcy5nZXRSb3RhdGVBdHRyKCk7XG4gICAgbGV0IGR5QXR0ciA9IHRoaXMuZ2V0RFlXYXZlc0F0dHIoKTtcbiAgICBsZXQgZm9udFNpemVBdHRyID0gdGhpcy5nZXRGb250U2l6ZUF0dHIoKTtcblxuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zKys7XG5cbiAgICBpZih0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9PT0gdGhpcy5zeW1ib2xzLmxpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9IDA7XG4gICAgfVxuXG4gICAgc3ltYm9sID0gYDx0c3BhbiAke3JvdGF0ZUF0dHJ9JHtkeUF0dHJ9JHtmb250U2l6ZUF0dHJ9PiR7c3ltYm9sfTwvdHNwYW4+YFxuXG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfVxuXG4gIGdldFJvdGF0ZUF0dHIoKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLnJvdGF0ZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBhbmdsZSA9IHRoaXMucm90YXRpb24uc3RlcEFuZ2xlICogdGhpcy5yb3RhdGlvbi5jb3VudGVyO1xuICAgIGxldCByb3RhdGVBdHRyID0gYCByb3RhdGU9XCIke2FuZ2xlfVwiYDtcblxuICAgIHRoaXMucm90YXRpb24uY291bnRlcisrO1xuICAgIGlmKHRoaXMucm90YXRpb24uY291bnRlciA+PSB0aGlzLnJvdGF0aW9uLm1heCkge1xuICAgICAgdGhpcy5yb3RhdGlvbi5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gcm90YXRlQXR0cjtcbiAgfVxuXG4gIGdldERZV2F2ZXNBdHRyKCkge1xuICAgIGlmKCF0aGlzLmxpbmVTdHlsZS5wcm9wcy53YXZlcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGxldCBkeVZhbCA9IC41NTtcbiAgICBsZXQgZGlyZWN0aW9uU2lnbiA9IHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA/IDEgOiAtMTtcbiAgICBsZXQgZHkgPSBkeVZhbCAqIGRpcmVjdGlvblNpZ247XG4gICAgbGV0IGR5QXR0ciA9IGAgZHk9XCIke2R5fWVtXCJgO1xuXG4gICAgLy8gSGFuZGxlIHdhdmVzIGNvdW50ZXJcbiAgICBpZih0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXApIHtcbiAgICAgIHRoaXMud2F2ZXMuY291bnRlcisrO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMud2F2ZXMuY291bnRlci0tO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSB3YXZlcyBkaXJlY3Rpb25cbiAgICBpZih0aGlzLndhdmVzLmNvdW50ZXIgPT0gdGhpcy53YXZlcy5tYXgpIHtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9ICF0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXA7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy53YXZlcy5jb3VudGVyID09PSAwKSB7XG4gICAgICB0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXAgPSAhdGhpcy53YXZlcy5pZERpcmVjdGlvblVwO1xuICAgIH1cblxuICAgIHJldHVybiBkeUF0dHI7XG4gIH1cblxuICBnZXRGb250U2l6ZUF0dHIoKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLnNjYXR0ZXJlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGZvbnRTaXplID0gKE1hdGgucmFuZG9tKCkgKiAxLjI1ICsgLjI1KS50b0ZpeGVkKDIpO1xuXG4gICAgcmV0dXJuIGAgZm9udC1zaXplPVwiJHtmb250U2l6ZX1lbVwiYDtcbiAgfVxuXG4gIHVuc2VsZWN0KCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW2tleV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0Jyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUGF0aHMoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRba2V5XS5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnBvaW50cy5saXN0ID0gW107XG4gICAgdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLmNvbnRyb2xHZXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0UGF0aE9mZnNldCgpIHtcbiAgICBjb25zdCBoYWxmUGF0dGVybkxlbmd0aCA9IE1hdGgucm91bmQodGhpcy5zeW1ib2xzLmxpc3QubGVuZ3RoIC8gMik7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5taXJyb3JlZCkge1xuICAgICAgdGhpcy5wYXRoT2Zmc2V0ID0gLjUgKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0KSB7XG4gICAgICB0aGlzLnBhdGhPZmZzZXQgPSAoaGFsZlBhdHRlcm5MZW5ndGggKyAuNSkgKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnN0YXJ0T2Zmc2V0QmV0d2Vlbikge1xuICAgICAgdGhpcy5wYXRoT2Zmc2V0ID0gaGFsZlBhdHRlcm5MZW5ndGggKiB0aGlzLmZvbnRTaXplO1xuICAgIH1cbiAgfVxuXG4gIGNob29zZVN5bWJvbHNJbnB1dChldmVudCkge1xuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hvaWNlX19sYWJlbC10ZXh0Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNob2ljZV9faW5wdXQnKTtcblxuICAgIGlmKGxhYmVsVGV4dCAmJiBsYWJlbFRleHQuZGF0YXNldC52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dFN5bWJvbHNDaG9pY2UuZGF0YXNldC5tb2RlID0gbGFiZWxUZXh0LmRhdGFzZXQudmFsdWU7XG4gICAgfVxuXG4gICAgaWYoaW5wdXQgJiYgaW5wdXQudmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlU3ltYm9sc1NldChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3ltYm9sc1NldChldmVudCkge1xuICAgIGxldCBjdXJyZW50SW5wdXQgPSB0aGlzLnNlbGVjdFN5bWJvbHM7XG4gICAgaWYoZXZlbnQpIHtcbiAgICAgIGN1cnJlbnRJbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICB9XG5cbiAgICBpZighY3VycmVudElucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYodGhpcy5zeW1ib2xzLnN0ciA9PT0gY3VycmVudElucHV0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zeW1ib2xzLnN0ciA9IGN1cnJlbnRJbnB1dC52YWx1ZTtcbiAgICB0aGlzLnN5bWJvbHMubGlzdCA9IGdldFN5bWJvbHNMaXN0KHRoaXMuc3ltYm9scy5zdHIpO1xuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcblxuICAgIHRoaXMuY2hhbmdlU3ltYm9sc09uU2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGNoYW5nZVN5bWJvbHNPblNlbGVjdGVkKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICBjb25zdCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgICAgY29uc3QgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoJyk7XG4gICAgICBsZXQgdGV4dFBhdGhEb3VibGUgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoLS1kb3VibGUnKTtcbiAgICAgIHRleHRQYXRoLmlubmVySFRNTCA9ICcnO1xuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmxpbmVTdHlsZS5wcm9wcy5kb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFdhdmVzKCk7XG5cbiAgICAgIHRoaXMuZmlsbFJlc3RPZlBhdGgoe1xuICAgICAgICBwYXRoLFxuICAgICAgICB0ZXh0UGF0aCxcbiAgICAgICAgdGV4dFBhdGhEb3VibGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUxpbmVTdHlsZSgpIHtcbiAgICB0aGlzLmxpbmVTdHlsZSA9IGxpbmVTdHlsZXNbdGhpcy5zZWxlY3RTdHlsZS52YWx1ZV07XG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MgPSAwO1xuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICB0aGlzLnBhdGhGaWxscy5rb2VmZiA9IDM7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXRoT2Zmc2V0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUxpbmVTdHlsZU9uU2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGNoYW5nZUxpbmVTdHlsZU9uU2VsZWN0ZWQoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBncm91cCA9IHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIGNvbnN0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dCcpO1xuICAgICAgY29uc3QgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoJyk7XG4gICAgICBsZXQgdGV4dERvdWJsZSA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LS1kb3VibGUnKTtcbiAgICAgIGxldCB0ZXh0UGF0aERvdWJsZSA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXBhdGgtLWRvdWJsZScpO1xuICAgICAgdGV4dFBhdGguaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgIGlmKHRleHRQYXRoRG91YmxlKSB7XG4gICAgICAgIHRleHRQYXRoRG91YmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMuZG91YmxlKSB7XG4gICAgICAgIHRleHRQYXRoRG91YmxlID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoIXRleHRQYXRoRG91YmxlKSB7XG4gICAgICAgIGxldCBkb3VibGVkVGV4dCA9IHRoaXMuZ2V0VGV4dERvdWJsZSh7Z3JvdXAsIHRleHR9KTtcbiAgICAgICAgdGV4dERvdWJsZSA9IGRvdWJsZWRUZXh0LnRleHREb3VibGU7XG4gICAgICAgIHRleHRQYXRoRG91YmxlID0gZG91YmxlZFRleHQudGV4dFBhdGhEb3VibGU7XG4gICAgICAgIHRleHRQYXRoRG91YmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGdyb3VwLFxuICAgICAgICBwYXRoLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0ZXh0UGF0aCxcbiAgICAgICAgdGV4dERvdWJsZSxcbiAgICAgICAgdGV4dFBhdGhEb3VibGVcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubW9kaWZ5UGF0aHMocGFyYW1zKTtcbiAgICAgIHRoaXMuZmlsbFJlc3RPZlBhdGgocGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VGb250U2l6ZSgpIHtcbiAgICB0aGlzLmZvbnRTaXplID0gdGhpcy5zZWxlY3RGb250U2l6ZS52YWx1ZTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtc2l6ZScsIGAke3RoaXMuZm9udFNpemV9cHhgKTtcbiAgICB0aGlzLnBhdGhGaWxscy5rb2VmZiA9IDM7XG5cbiAgICBpZih0aGlzLmZvbnRTaXplID49IDMyKSB7XG4gICAgICB0aGlzLnBhdGhGaWxscy5rb2VmZiA9IDI7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5mb250U2l6ZSA+PSA0MCkge1xuICAgICAgdGhpcy5wYXRoRmlsbHMua29lZmYgPSAxO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UGF0aE9mZnNldCgpO1xuXG4gICAgdGhpcy5jaGFuZ2VGb250U2l6ZU9uU2VsZWN0ZWQoKTtcbiAgfVxuXG4gIGNoYW5nZUZvbnRTaXplT25TZWxlY3RlZCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgY29uc3QgdGV4dHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0Jyk7XG4gICAgICBjb25zdCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgICAgY29uc3QgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0UGF0aCcpO1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMuZm9udFNpemUpO1xuXG4gICAgICBmb3IobGV0IHRleHQgb2YgdGV4dHMpIHtcbiAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2ZvbnQtc2l6ZScsIGAke3RoaXMuZm9udFNpemV9cHhgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsbFJlc3RPZlBhdGgoe1xuICAgICAgICBwYXRoLFxuICAgICAgICB0ZXh0UGF0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVGhlbWUoZXZlbnQpIHtcbiAgICBpZighZXZlbnQuZGV0YWlsLmFjY2VudHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGtleSBpbiBldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvci0ke2tleX1gLCBldmVudC5kZXRhaWwuYWNjZW50c1trZXldKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLnRoZW1lID0gZXZlbnQuZGV0YWlsLmNvbG9ycztcbiAgICB0aGlzLmFjY2VudHMgPSBldmVudC5kZXRhaWwuYWNjZW50cztcbiAgICB0aGlzLm91dHB1dFN0eWxlID0gdGhpcy5nZXRTdHlsZVN0cigpO1xuICB9XG5cbiAgcHJlcGFyZUltYWdlcygpIHtcbiAgICB0aGlzLmZpbmFsU2l6ZXMgPSB7XG4gICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnbG9hZGluZyc7XG4gICAgdGhpcy5maW5hbFNWRyA9IHRoaXMucGFpbnRBcmVhLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnN0eWxlID0gdGhpcy5vdXRwdXRTdHlsZTtcbiAgICAvLyBGaXggcGFpbnQgU1ZHIG9uIGNhbnZhcyBpbiBGaXJlZm94XG4gICAgdGhpcy5maW5hbFNWRy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgYCR7dGhpcy5maW5hbFNpemVzLndpZHRofXB4YCk7XG4gICAgdGhpcy5maW5hbFNWRy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke3RoaXMuZmluYWxTaXplcy5oZWlnaHR9cHhgKTtcblxuICAgIHRoaXMucHJlcGFyZVBuZygpO1xuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBnZXRTdHlsZVN0cigpIHtcbiAgICByZXR1cm4gYGJhY2tncm91bmQ6ICR7dGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoaXMudGhlbWUpfTsgY29sb3I6ICR7dGhpcy5hY2NlbnRzLmJhc2V9YDtcbiAgfVxuXG4gIHByZXBhcmVQbmcoKSB7XG4gICAgY29uc3QgeG1sID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyh0aGlzLmZpbmFsU1ZHKTtcbiAgICBjb25zdCBzdmc2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHhtbCkpKTtcbiAgICBjb25zdCBiNjRTdGFydCA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCc7XG4gICAgY29uc3QgaW1hZ2U2NCA9IGI2NFN0YXJ0ICsgc3ZnNjQ7XG5cbiAgICBjb25zdCBpbWdPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWdPYmouc3JjID0gaW1hZ2U2NDtcbiAgICBpbWdPYmoud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgaW1nT2JqLmhlaWdodCA9IHRoaXMuZmluYWxTaXplcy5oZWlnaHQ7XG5cbiAgICBpbWdPYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5maW5hbFNpemVzLndpZHRoO1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWdPYmosIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICB0aGlzLmNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcbiAgICAgICAgbGV0IFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuaHJlZiA9IFVSTE9iai5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIHRoaXMubGlua3MucG5nLmRvd25sb2FkID0gJ2Vtb2ppLWJydXNoLWRyYXdpbmcucG5nJztcblxuICAgICAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG5cbiAgZ2V0TW91c2VPZmZzZXQoZXZlbnQpIHtcbiAgICBsZXQge2xlZnQsIHRvcH0gPSB0aGlzLnBhaW50QXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgc2NhbGUgPSB0aGlzLnNjYWxlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHNjYWxlICogKGV2ZW50LmNsaWVudFggLSBsZWZ0KSxcbiAgICAgIHk6IHNjYWxlICogKGV2ZW50LmNsaWVudFkgLSB0b3ApXG4gICAgfTtcbiAgfVxuXG4gIGdldFJhbmRvbUxpbmVTdHlsZSgpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobGluZVN0eWxlcyk7XG4gICAgY29uc3QgcmFuZG9tS2V5ID0ga2V5c1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBrZXlzLmxlbmd0aCldXG4gICAgcmV0dXJuIGxpbmVTdHlsZXNbcmFuZG9tS2V5XTtcbiAgfVxufVxuIiwiY29uc3QgbGluZVN0eWxlcyA9IHtcbiAgJ2xpbmVhcic6IHtcbiAgICBuYW1lOiAnbGluZWFyJyxcbiAgICBwcm9wczoge31cbiAgfSxcbiAgJ2xpbmVhci1yb3RhdGVkJzoge1xuICAgIG5hbWU6ICdsaW5lYXItcm90YXRlZCcsXG4gICAgcHJvcHM6IHtcbiAgICAgIHJvdGF0ZWQ6IHRydWVcbiAgICB9XG4gIH0sXG4gICdtaXJyb3JlZCc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQnLFxuICAgIHByb3BzOiB7XG4gICAgICBkb3VibGU6IHRydWUsXG4gICAgICBtaXJyb3JlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLW9mZnNldCc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQtb2Zmc2V0JyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLW9mZnNldC1iZXR3ZWVuJzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZC1vZmZzZXQtYmV0d2VlbicsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlLFxuICAgICAgc3RhcnRPZmZzZXRCZXR3ZWVuOiB0cnVlXG4gICAgfVxuICB9LFxuICAnd2F2ZXMnOiB7XG4gICAgbmFtZTogJ3dhdmVzJyxcbiAgICBwcm9wczoge1xuICAgICAgd2F2ZXM6IHRydWVcbiAgICB9XG4gIH0sXG4gICdtaXJyb3JlZC1yYW5kb20nOiB7XG4gICAgbmFtZTogJ21pcnJvcmVkLXJhbmRvbScsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlLFxuICAgICAgc2NhdHRlcmVkOiB0cnVlLFxuICAgICAgc3RhcnRPZmZzZXRCZXR3ZWVuOiB0cnVlXG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluZVN0eWxlcztcbiIsImNvbnN0IHRoZW1lcyA9IFtcbiAgJ/CfmIbwn5mC8J+kqvCfpKjwn5iM8J+Yi/CfmILwn5mD8J+YgScsXG4gICfwn42BJyxcbiAgJ/CfppQnLFxuICAn8J+NgvCfjYHwn42EJyxcbiAgJ/CfkJonLFxuICAn8J+mkCcsXG4gICfwn5Ch8J+QoPCfkJ8nLFxuICAn8J+QtvCfkLHwn5Ct8J+QufCfkLAnLFxuICAn8J+QjCcsXG4gICfinKgnLFxuICAn4q2Q77iPJyxcbiAgJ+KdpO+4j/Cfp6Hwn5Kb8J+SmvCfkpnwn5Kc8J+WpCcsXG4gICfwn5S08J+foPCfn6Hwn5+i8J+UtfCfn6PimqvvuI8nLFxuICAn8J+fpfCfn6fwn5+o8J+fqfCfn6bwn5+q4qyb77iPJyxcbiAgJ/CfjLHwn42AJyxcbiAgJ/CfjLzwn4y68J+MuCcsXG4gICfwn4y88J+MsfCfjLrwn4yx8J+MuCcsXG4gICfwn5qX8J+asvCfmpvwn5qC8J+ameKbte+4j/CfmoMnLFxuICAn8J+lgPCfp5onXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZXM7XG4iLCJleHBvcnQgY29uc3QgdGVtcGxhdGVTdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVTdHlsZXMuaW5uZXJIVE1MID0gYDxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG5cbiAgICAtLWZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgfVxuXG4gIEEge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgfVxuXG4gIC52aXN1YWxseWhpZGRlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucGFpbnQtYXJlYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAucGFpbnQtYXJlYSBwYXRoIHtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuMzU7XG4gICAgZmlsbDogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UgLjE1cztcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHBhdGg6aG92ZXIge1xuICAgIHN0cm9rZTogdmFyKC0tY29sb3ItaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHRleHQsXG4gIC5wYWludC1hcmVhIHRleHRQYXRoLFxuICAucGFpbnQtYXJlYSAuY3VycmVudC1wYXRoIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHRleHRQYXRoIHtcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIH1cblxuICBTRUxFQ1QsXG4gIElOUFVUIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIC4yNXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNFRUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgLmhpZ2hsaWdodCBwYXRoIHtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvY3VzKTtcbiAgICBzdHJva2Utb3BhY2l0eTogLjY1O1xuICB9XG5cbiAgLmhpZ2hsaWdodDpob3ZlciBwYXRoIHtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWZvY3VzaG92ZXIpO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogMXJlbTtcbiAgICByaWdodDogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5wYW5lbC0tdG9wIHtcbiAgICB0b3A6IDJyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5wYW5lbC0tYm90dG9tIHtcbiAgICBib3R0b206IDJyZW07XG4gIH1cblxuICAuY2hvaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNob2ljZV9fbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19sYWJlbC0tcHJlc2V0cyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLmNob2ljZV9fbGFiZWwtdGV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLmNob2ljZV9faW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2lucHV0LS1jdXN0b20sXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwiY3VzdG9tXCJdIC5jaG9pY2VfX2lucHV0LS1wcmVzZXRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1wcmVzZXRzLFxuICAuY2hvaWNlW2RhdGEtbW9kZT1cImN1c3RvbVwiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1jdXN0b20ge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLXByZXNldHM6aG92ZXIsXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwiY3VzdG9tXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLWN1c3RvbTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSk7XG4gIH1cblxuICAuY29udHJvbCB7XG4gICAgcGFkZGluZzogLjI1cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAgMCAwIDAgMnB4IHZhcigtLWNvbG9yLWJhc2UpIGluc2V0O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG4gIC5jb250cm9sOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdHJhbnNwYXJlbnQgaW5zZXQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFzZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB9XG4gIC5jb250cm9sOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgfVxuXG4gIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sLS1nZXQsXG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wtLWdldCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMsXG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY29udHJvbHNfX2Rvd25sb2FkcyAuY29udHJvbCB7XG4gICAgb3BhY2l0eTogLjI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuXG4gIC50aGVtZS1zd2l0Y2hlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRpc2NsYWltZXIge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgfVxuXG4gIC5zb2NpYWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMFxuICB9XG5cbiAgLnNvY2lhbHNfX2l0ZW0gKyAuc29jaWFsc19faXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAuc29jaWFsc19faWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbik7XG4gIH1cblxuICAuc29jaWFsc19faWNvbjpob3ZlciB7XG4gICAgb3BhY2l0eTogLjc1O1xuICB9XG5cbiAgLnNvY2lhbHNfX3VzZXJuYW1lIHtcbiAgICBmb250LXNpemU6IDA7XG4gIH1cbjwvc3R5bGU+XG5gO1xuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVNYXJrdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVNYXJrdXAuaW5uZXJIVE1MID0gYFxuPHN2ZyBpZD1cInBhaW50LWFyZWFcIiBjbGFzcz1cInBhaW50LWFyZWFcIj5cbiAgPCEtLSBTaGFwZSBmb3IgbWVhc3VyaW5nIFNWRyBzY2FsaW5nIC0tPlxuICA8cmVjdCBpZD1cIm1lYXN1cmUtcmVjdFwiXG4gICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICB4PVwiMFwiIHk9XCIwXCJcbiAgICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPjwvcmVjdD5cblxuICA8ZyBpZD1cInRhcmdldC1ncm91cFwiPjwvZz5cbjwvc3ZnPlxuXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtLXRvcFwiPlxuICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCIgaWQ9XCJpbnB1dC1zeW1ib2xzLWNob2ljZVwiIGRhdGEtbW9kZT1cInByZXNldHNcIj5cbiAgICA8bGFiZWxcbiAgICAgIGNsYXNzPVwiY2hvaWNlX19sYWJlbCBjaG9pY2VfX2xhYmVsLS1wcmVzZXRzXCI+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dFxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dC0tcHJlc2V0c1xuICAgICAgICAgIGNvbnRyb2xcbiAgICAgICAgXCJcbiAgICAgICAgZGF0YS12YWx1ZT1cInByZXNldHNcIlxuICAgICAgICA+UHJlc2V0czwvc3Bhbj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3M9XCJjaG9pY2VfX2lucHV0IGNob2ljZV9faW5wdXQtLXByZXNldHNcIlxuICAgICAgICBpZD1cInNlbGVjdC1zeW1ib2xzXCI+PC9zZWxlY3Q+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJjaG9pY2VfX2xhYmVsIGNob2ljZV9fbGFiZWwtLWN1c3RvbVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHRcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHQtLWN1c3RvbVxuICAgICAgICAgIGNvbnRyb2xcbiAgICAgICAgXCJcbiAgICAgICAgZGF0YS12YWx1ZT1cImN1c3RvbVwiXG4gICAgICAgID5NeSBzeW1ib2xzPC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwiY2hvaWNlX19pbnB1dCBjaG9pY2VfX2lucHV0LS1jdXN0b21cIlxuICAgICAgICB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXN5bWJvbHNcIiBwbGFjZWhvbGRlcj1cIkFkZCBlbW9qaSBvciB0ZXh0XCIvPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8c2VsZWN0IGlkPVwic2VsZWN0LXN0eWxlXCI+PC9zZWxlY3Q+XG4gIDxzZWxlY3QgaWQ9XCJzZWxlY3QtZm9udC1zaXplXCI+PC9zZWxlY3Q+XG5cbiAgPHRoZW1lLXN3aXRjaGVyIGNsYXNzPVwidGhlbWUtc3dpdGNoZXJcIj48L3RoZW1lLXN3aXRjaGVyPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC0tYm90dG9tXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xlYXJcIiBjbGFzcz1cImNvbnRyb2xcIj5DbGVhcjwvYnV0dG9uPlxuXG4gIDx1bCBjbGFzcz1cInNvY2lhbHNcIj5cbiAgICA8bGkgY2xhc3M9XCJzb2NpYWxzX19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3lva3NlbC9lbW9qaS1icnVzaC9cIiBjbGFzcz1cInNvY2lhbHNfX2xpbmtcIj48c3ZnIGNsYXNzPVwic29jaWFsc19faWNvbiBzb2NpYWxzX19pY29uLS1naXRodWJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+PHBhdGggZD1cIk03Ljk5OSwwLjQzMWMtNC4yODUsMC03Ljc2LDMuNDc0LTcuNzYsNy43NjEgYzAsMy40MjgsMi4yMjMsNi4zMzcsNS4zMDcsNy4zNjNjMC4zODgsMC4wNzEsMC41My0wLjE2OCwwLjUzLTAuMzc0YzAtMC4xODQtMC4wMDctMC42NzItMC4wMS0xLjMyIGMtMi4xNTksMC40NjktMi42MTQtMS4wNC0yLjYxNC0xLjA0Yy0wLjM1My0wLjg5Ni0wLjg2Mi0xLjEzNS0wLjg2Mi0xLjEzNWMtMC43MDUtMC40ODEsMC4wNTMtMC40NzIsMC4wNTMtMC40NzIgYzAuNzc5LDAuMDU1LDEuMTg5LDAuOCwxLjE4OSwwLjhjMC42OTIsMS4xODYsMS44MTYsMC44NDMsMi4yNTgsMC42NDVjMC4wNzEtMC41MDIsMC4yNzEtMC44NDMsMC40OTMtMS4wMzcgQzQuODYsMTEuNDI1LDMuMDQ5LDEwLjc2LDMuMDQ5LDcuNzg2YzAtMC44NDcsMC4zMDItMS41NCwwLjc5OS0yLjA4MkMzLjc2OCw1LjUwNywzLjUwMSw0LjcxOCwzLjkyNCwzLjY1IGMwLDAsMC42NTItMC4yMDksMi4xMzQsMC43OTZDNi42NzcsNC4yNzMsNy4zNCw0LjE4Nyw4LDQuMTg0YzAuNjU5LDAuMDAzLDEuMzIzLDAuMDg5LDEuOTQzLDAuMjYxIGMxLjQ4Mi0xLjAwNCwyLjEzMi0wLjc5NiwyLjEzMi0wLjc5NmMwLjQyMywxLjA2OCwwLjE1NywxLjg1NywwLjA3NywyLjA1NGMwLjQ5NywwLjU0MiwwLjc5OCwxLjIzNSwwLjc5OCwyLjA4MiBjMCwyLjk4MS0xLjgxNCwzLjYzNy0zLjU0MywzLjgyOWMwLjI3OSwwLjI0LDAuNTI3LDAuNzEzLDAuNTI3LDEuNDM3YzAsMS4wMzctMC4wMSwxLjg3NC0wLjAxLDIuMTI5IGMwLDAuMjA4LDAuMTQsMC40NDksMC41MzQsMC4zNzNjMy4wODEtMS4wMjgsNS4zMDItMy45MzUsNS4zMDItNy4zNjJDMTUuNzYsMy45MDYsMTIuMjg1LDAuNDMxLDcuOTk5LDAuNDMxelwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxzcGFuIGNsYXNzPVwic29jaWFsc19fdXNlcm5hbWUgdmlzdWFsbHloaWRkZW5cIj55b2tzZWwvZW1vamktYnJ1c2gvPC9zcGFuPjwvYT5cbiAgICA8L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwic29jaWFsc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20veW9rc2VsX2VuXCIgY2xhc3M9XCJzb2NpYWxzX19saW5rXCI+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJzb2NpYWxzX19pY29uIHNvY2lhbHNfX2ljb24tLXR3aXR0ZXJcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCI+PHBhdGggZD1cIk0xNS45NjksMy4wNThjLTAuNTg2LDAuMjYtMS4yMTcsMC40MzYtMS44NzgsMC41MTVjMC42NzUtMC40MDUsMS4xOTQtMS4wNDUsMS40MzgtMS44MDljLTAuNjMyLDAuMzc1LTEuMzMyLDAuNjQ3LTIuMDc2LDAuNzkzYy0wLjU5Ni0wLjYzNi0xLjQ0Ni0xLjAzMy0yLjM4Ny0xLjAzM2MtMS44MDYsMC0zLjI3LDEuNDY0LTMuMjcsMy4yNyBjMCwwLjI1NiwwLjAyOSwwLjUwNiwwLjA4NSwwLjc0NUM1LjE2Myw1LjQwNCwyLjc1Myw0LjEwMiwxLjE0LDIuMTI0QzAuODU5LDIuNjA3LDAuNjk4LDMuMTY4LDAuNjk4LDMuNzY3IGMwLDEuMTM0LDAuNTc3LDIuMTM1LDEuNDU1LDIuNzIyQzEuNjE2LDYuNDcyLDEuMTEyLDYuMzI1LDAuNjcxLDYuMDhjMCwwLjAxNCwwLDAuMDI3LDAsMC4wNDFjMCwxLjU4NCwxLjEyNywyLjkwNiwyLjYyMywzLjIwNiBDMy4wMiw5LjQwMiwyLjczMSw5LjQ0MiwyLjQzMyw5LjQ0MmMtMC4yMTEsMC0wLjQxNi0wLjAyMS0wLjYxNS0wLjA1OWMwLjQxNiwxLjI5OSwxLjYyNCwyLjI0NSwzLjA1NSwyLjI3MSBjLTEuMTE5LDAuODc3LTIuNTI5LDEuNC00LjA2MSwxLjRjLTAuMjY0LDAtMC41MjQtMC4wMTUtMC43OC0wLjA0NmMxLjQ0NywwLjkyOCwzLjE2NiwxLjQ2OSw1LjAxMywxLjQ2OSBjNi4wMTUsMCw5LjMwNC00Ljk4Myw5LjMwNC05LjMwNGMwLTAuMTQyLTAuMDAzLTAuMjgzLTAuMDA5LTAuNDIzQzE0Ljk3Niw0LjI5LDE1LjUzMSwzLjcxNCwxNS45NjksMy4wNTh6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNvY2lhbHNfX3VzZXJuYW1lIHZpc3VhbGx5aGlkZGVuXCI+eW9rc2VsX2VuPC9zcGFuPjwvYT5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG4gIDxkaXYgY2xhc3M9XCJkaXNjbGFpbWVyXCI+XG4gICAg8J+boCBEZWVwbHkgZXhwZXJpbWVudGFsLiBNYXkgbm90IHdvcmsgb24geW91ciBkZXZpY2Ugb3IgYnJvd3Nlci4gU29ycnkg8J+SmlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1nZXRcIj5HZXQgaW1hZ2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtcG5nXCI+RG93bmxvYWQgUE5HPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVHcm91cC5pbm5lckhUTUwgPSBgPHBhdGhcbiAgaWQ9XCJwYXRoLXtpZH1cIlxuICBkPVwiXCJcbiAgc3Ryb2tlLXdpZHRoPVwie2ZvbnRTaXplfVwiXG4gIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuPHRleHRcbiAgZm9udC1zaXplPVwie2ZvbnRTaXplfVwiIGNsYXNzPVwidGV4dFwiPlxuICA8dGV4dFBhdGggaHJlZj1cIiNwYXRoLXtpZH1cIiBjbGFzcz1cInRleHQtcGF0aFwiPjwvdGV4dFBhdGg+XG48L3RleHQ+XG5gO1xuIiwiaW1wb3J0IHt0aGVtZXMsIGJhc2VBY2NlbnRzfSBmcm9tICcuL3RoZW1lcy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL3RtcGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZVN3aXRjaGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhlbWVzLmxlbmd0aCk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gbnVsbDtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xzID0ge1xuICAgICAgY29sbGFwc2VkOiAnY29udHJvbHMtLWNvbGxhcHNlZCcsXG4gICAgICBjdXJyZW50OiAnY29udHJvbC0tY3VycmVudCdcbiAgICB9XG5cbiAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENsaWNrID0gdGhpcy5vbkNvbnRyb2xDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVBhbmVsID0gdGhpcy5jbG9zZVBhbmVsLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRDb250cm9scygpIHtcbiAgICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgYmdTdHIgPSB0aGlzLmdldEJhY2tncm91bmRTdHIodGhlbWUuY29sb3JzKTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnY29udHJvbCc7XG4gICAgICBsZXQgY29sb3IgPSBiYXNlQWNjZW50cy5iYXNlO1xuICAgICAgaWYodGhlbWUuYWNjZW50cykge1xuICAgICAgICBjb2xvciA9IHRoZW1lLmFjY2VudHMuYmFzZTtcbiAgICAgIH1cblxuICAgICAgaWYoaW5kZXggPT09IHRoaXMuY3VycmVudFRoZW1lTnVtKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnIGNvbnRyb2wtLWN1cnJlbnQnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250cm9sU3RyID0gYDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJcbiAgICAgICAgdGl0bGU9XCIke3RoZW1lLm5hbWV9XCJcbiAgICAgICAgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2JnU3RyfTsgY29sb3I6ICR7Y29sb3J9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPiR7dGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgIHRoaXMuY29udHJvbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBjb250cm9sU3RyKTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNscy5jdXJyZW50fWApO1xuICAgIH0pXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udHJvbENsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQYW5lbCk7XG5cbiAgICAvLyBTZXQgY3VycmVudCB0aGVtZSB0byBwYWdlICYgY29tcG9uZW50XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG4gIH1cblxuICBvbkNvbnRyb2xDbGljayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcblxuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgdGhpcy5jbG9zZVBhbmVsKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVBhbmVsKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQudGFyZ2V0ID09PSB0aGlzIHx8IHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlVGhlbWUoKSB7XG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZXNbdGhpcy5jdXJyZW50VGhlbWVOdW1dO1xuICAgIGlmKCF0aGVtZS5hY2NlbnRzKSB7XG4gICAgICB0aGVtZS5hY2NlbnRzID0gYmFzZUFjY2VudHM7XG4gICAgfVxuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yc1swXTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdGhlbWUnLCB7XG4gICAgICBkZXRhaWw6IHRoZW1lLFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIGNoYW5nZVRoZW1lKGV2ZW50KSB7XG4gICAgaWYoIWV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGJhc2VBY2NlbnRzID0ge1xuICBiYXNlOiAnd2hpdGUnLFxuICBiYXNldHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICB0ZXh0OiAnYmxhY2snLFxuICB0ZXh0dHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICBob3ZlcjogJ2FxdWEnLFxuICBmb2N1czogJ29yYW5nZXJlZCcsXG4gIGZvY3VzaG92ZXI6ICdnb2xkJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IFtcbiAge1xuICAgIG5hbWU6ICdGaXJlYnJpY2snLFxuICAgIGNvbG9yczogWydmaXJlYnJpY2snXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0luZGlhbnJlZCcsXG4gICAgY29sb3JzOiBbJ2luZGlhbnJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR29sZCcsXG4gICAgY29sb3JzOiBbJ2dvbGQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2toYWtpJyxcbiAgICBjb2xvcnM6IFsna2hha2knXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1llbGxvd2dyZWVuJyxcbiAgICBjb2xvcnM6IFsneWVsbG93Z3JlZW4nXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1R1cnF1b2lzZScsXG4gICAgY29sb3JzOiBbJ3R1cnF1b2lzZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIHRleHQ6ICcjRkZGJyxcbiAgICAgIHRleHR0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGVhbCcsXG4gICAgY29sb3JzOiBbJ3RlYWwnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NreWJsdWUnLFxuICAgIGNvbG9yczogWydza3libHVlJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVlbGJsdWUnLFxuICAgIGNvbG9yczogWydzdGVlbGJsdWUnXVxuICB9LHtcbiAgICBuYW1lOiAnTWlkbmlnaHRibHVlJyxcbiAgICBjb2xvcnM6IFsnbWlkbmlnaHRibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEYXJrc2xhdGVibHVlJyxcbiAgICBjb2xvcnM6IFsnZGFya3NsYXRlYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWdvJyxcbiAgICBjb2xvcnM6IFsnaW5kaWdvJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXJwbGUnLFxuICAgIGNvbG9yczogWydwdXJwbGUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1doaXRlJyxcbiAgICBjb2xvcnM6IFsnI0ZGRiddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIHRleHQ6ICcjRkZGJyxcbiAgICAgIHRleHR0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3JheScsXG4gICAgY29sb3JzOiBbJyMzMzMnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JsYWNrJyxcbiAgICBjb2xvcnM6IFsnIzAwMCddLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuXG4gICAgICAtLWNvbG9yLWJhc2U6IHdoaXRlO1xuICAgICAgLS1jb2xvci1iYXNldHJhbnNwOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICB9XG5cbiAgICAudmlzdWFsbHloaWRkZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFzZXRyYW5zcCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDRweCAycHggcmdiYSgwLDAsMCwuMjUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC40NXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBtYXJnaW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bm90KGNvbnRyb2wtLWN1cnJlbnQpIHtcblxuICAgIH1cblxuICAgIC5jb250cm9sOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCBjdXJyZW50Q29sb3IgaW5zZXQsXG4gICAgICAgIDAgMCAwIDRweCB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZCAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNXJlbTtcbiAgICAgIHJpZ2h0OiAtLjI1cmVtO1xuICAgICAgYm90dG9tOiAtLjI1cmVtO1xuICAgICAgbGVmdDogLS4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudDpmb2N1czo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY29sb3ItYmFzZSkgaW5zZXQ7XG4gICAgfVxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgICB9XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9scyBjb250cm9scy0tY29sbGFwc2VkXCI+PC9kaXY+XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==