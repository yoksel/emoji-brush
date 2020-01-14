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
    box-shadow:
      0 0 0 2px var(--color-base) inset,
      0 0 1rem .25rem var(--color-focushover);
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

  .linkslist {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0
  }

  .linkslist__item + .linkslist__item {
    margin-left: 1rem;
  }

  .linkslist__icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
    transition: opacity var(--transition);
  }

  .linkslist__icon:hover {
    opacity: .75;
  }

  .linkslist__username {
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

  <ul class="linkslist">
    <li class="linkslist__item">
      <a href="https://github.com/yoksel/emoji-brush/" class="linkslist__link"><svg class="linkslist__icon linkslist__icon--github" viewBox="0 0 16 16" width="16" height="16"><path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path></svg>
      <span class="linkslist__username visuallyhidden">yoksel/emoji-brush/</span></a>
    </li>

    <li class="linkslist__item">
      <a href="https://twitter.com/yoksel_en" class="linkslist__link">
        <svg class="linkslist__icon linkslist__icon--twitter" viewBox="0 0 16 16" width="16" height="16"><path d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"></path></svg>
        <span class="linkslist__username visuallyhidden">yoksel_en</span></a>
    </li>
  </ul>

  <div class="disclaimer">
    🛠 Deeply experimental. May be slow or not work on your device or browser. Sorry 💚
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
  <textPath
    href="#path-{id}"
    class="text-path"
    fill="currentColor"></textPath>
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
    colors: ['indianred'],
    accents: {
      ...baseAccents,
      focus: 'purple',
    }
  },
  {
    name: 'Gold',
    colors: ['gold'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'yellowgreen'
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
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'yellowgreen'
    }
  },
  {
    name: 'Yellowgreen',
    colors: ['yellowgreen'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      hover: 'dodgerblue',
      text: '#FFF',
      texttransp: 'rgba(255,255,255,.5)',
      focushover: 'teal'
    }
  },
  {
    name: 'Turquoise',
    colors: ['turquoise'],
    accents: {
      ...baseAccents,
      base: '#000',
      basetransp: 'rgba(0,0,0,.5)',
      hover: 'teal',
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
      hover: 'teal',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2ZvbnRTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2xpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL3N5bWJvbHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC90bXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci90bXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDeUQ7QUFDTjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQyxxQkFBcUI7QUFDL0Q7QUFDQTs7QUFFQSw4Q0FBOEMsZ0VBQVU7QUFDeEQsaURBQWlELG1FQUFhO0FBQzlELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ1B0QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sa0JBQWtCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFdBQVcsS0FBSyxRQUFRLEVBQUUsR0FBRyxFQUFFO0FBQy9CO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsS0FBSztBQUN0Qjs7QUFFQTtBQUNBOztBQUVPLHFCQUFxQix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE1BQU0sSUFBSSxTQUFTLEdBQUcsTUFBTTtBQUN0RixHQUFHO0FBQ0g7O0FBRU8sdUJBQXVCLFdBQVc7QUFDekM7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixNQUFNLEdBQUcsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNHO0FBQzlCO0FBQzdCO0FBQ0Y7QUFDUjtBQUNNOztBQUV4QjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBO0FBQ0EsTUFBTSx1REFBYztBQUNwQixNQUFNLHVEQUFjO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNERBQVE7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHVEQUFXO0FBQ3RCO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWM7O0FBRXRDO0FBQ0Esb0JBQW9CLHFEQUFTOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1REFBVztBQUN2QjtBQUNBLG9CQUFvQix1REFBVyw0QkFBNEIsdURBQVc7QUFDdEUsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFlBQVkscURBQVM7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxrQ0FBa0M7QUFDaEQsSUFBSSw4REFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHFCQUFxQjs7QUFFN0Msb0JBQW9CLGdFQUFZO0FBQ2hDLFlBQVksc0RBQWE7QUFDekI7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEyQjs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLFNBQVMsd0NBQXdDO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsWUFBWTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxNQUFNOztBQUVmLHFCQUFxQiwyREFBTztBQUM1QjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVMsTUFBTTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYyxLQUFLO0FBQ25CLFNBQVMsTUFBTTtBQUNmLG1CQUFtQiwrREFBVzs7QUFFOUI7QUFDQTtBQUNBLFVBQVUsUUFBUSxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDakQ7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHlCQUF5Qjs7QUFFbEM7QUFDQSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsU0FBUywrQkFBK0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsV0FBVyxFQUFFLE9BQU8sRUFBRSxhQUFhLEdBQUcsT0FBTzs7QUFFcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxNQUFNOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixHQUFHOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQixTQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrRUFBYztBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBVTtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFLDRDQUE0Qyx1QkFBdUI7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtDQUFrQztBQUN2RDtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFNBQVMsVUFBVTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLHNEQUFVO0FBQ3ZDO0FBQ0EsV0FBVyxzREFBVTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcHhCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbkQxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdEJ0QjtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxZQUFZLEdBQUc7QUFDZjtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxpQkFBaUIsR0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xVQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNiOztBQUVwQjtBQUNmO0FBQ0E7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQztBQUNBLDBCQUEwQixpREFBUTtBQUNsQztBQUNBLHNEQUFzRCxpREFBTTtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBTTtBQUNWO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQVc7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0IsaUJBQWlCLFdBQVc7QUFDNUIsc0JBQXNCLE1BQU07QUFDNUIsNkJBQTZCLE9BQU8sVUFBVSxNQUFNO0FBQ3BELHlDQUF5QyxXQUFXO0FBQ3BEOztBQUVBO0FBQ0EsMERBQTBELGlCQUFpQjtBQUMzRSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQU07QUFDeEI7QUFDQSxzQkFBc0Isc0RBQVc7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc29sZS5jbGVhcigpO1xuaW1wb3J0IFRoZW1lU3dpdGNoZXIgZnJvbSAnLi9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyc7XG5pbXBvcnQgRW1vamlCcnVzaCBmcm9tICcuL2xpYi9FbW9qaUJydXNoL2luZGV4LmpzJztcblxuKGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0QmFja2dyb3VuZFN0cihldmVudC5kZXRhaWwuY29sb3JzKVxuICB9KTtcblxuICBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Vtb2ppLWJydXNoJywgRW1vamlCcnVzaCk7XG4gIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3RoZW1lLXN3aXRjaGVyJywgVGhlbWVTd2l0Y2hlcik7XG59KSgpO1xuIiwiY29uc3QgY29sb3JzID0gW1xuICAnY3JpbXNvbicsXG4gICdnb2xkJyxcbiAgJ3llbGxvd2dyZWVuJyxcbiAgJ3RlYWwnXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjb2xvcnM7XG4iLCJjb25zdCBmb250U2l6ZXMgPSBbXG4gIDE2LFxuICAyNCxcbiAgMzIsXG4gIDQwLFxuICA0OCxcbiAgNTYsXG4gIDY0LFxuICA3MixcbiAgODAsXG4gIDg4LFxuICA5NixcbiAgMTA0LFxuICAxMTJcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZvbnRTaXplcztcbiIsImNvbnN0IGlnbm9yZWRVbmljb2RlTW9kaWZpZXJzID0ge1xuICA2NTAzODogMSwgLy8gJiN4RkUwRSwgdGV4dCBtb2RpZmllclxuICA2NTAzOTogMSwgLy8gJiN4RkUwRiwgZW1vamkgbW9kaWZpZXJcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGVwID0gKHtmcm9tLCB0b30pID0+IHtcbiAgY29uc3QgbW92ZVggPSBNYXRoLmFicyh0by54IC0gZnJvbS54KTtcbiAgY29uc3QgbW92ZVkgPSBNYXRoLmFicyh0by55IC0gZnJvbS55KTtcbiAgcmV0dXJuIE1hdGgubWF4KG1vdmVYLG1vdmVZKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb2ludHNUb1N0ciA9IChwb2ludHNMaXN0KSA9PiB7XG4gIHJldHVybiBwb2ludHNMaXN0XG4gICAgLm1hcCgoe3gsIHl9KSA9PiBgJHt4fSwke3l9YClcbiAgICAuam9pbignICcpO1xufTtcblxuLy8gUmV0dXJuIHNjYWxlIHZhbHVlIGlmIHN2ZyB3YXMgcmVzaXplZFxuZXhwb3J0IGNvbnN0IGdldFNjYWxlID0gKG1lYXN1cmVQYXRoKSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gbWVhc3VyZVBhdGguZ2V0QXR0cmlidXRlKCd3aWR0aCcpO1xuICBjb25zdCByZWN0ID0gbWVhc3VyZVBhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHdpZHRoIC8gcmVjdC53aWR0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTeW1ib2xzTGlzdCA9IChzdHIpID0+IHtcbiAgY29uc3QgbGlzdCA9IFtdO1xuXG4gIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgbGV0IHVuaWNvZGVOdW0gPSBjaGFyLmNvZGVQb2ludEF0KCk7XG4gICAgLy8gSWdub3JlIGVtb2ppIG1vZGlmaWVyc1xuICAgIC8vIGZpeCBwcm9ibGVtIGZvciBlbW9qaSBsaWtlIHRoaXMg4q2Q77iPXG4gICAgLy8gZm9yLi5vZiBjYW4ndCBoYW5kbGUgaXQgbGlrZSBvbmUgc3ltYm9sXG4gICAgaWYoIWNoYXIgfHwgaWdub3JlZFVuaWNvZGVNb2RpZmllcnNbdW5pY29kZU51bV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCBlbW9qaSBtb2RpZmllciB0byBldmVyeSBzeW1ib2xcbiAgICBsaXN0LnB1c2goYCR7Y2hhcn0mI3hGRTBGYCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsU2VsZWN0ID0gKHtlbGVtLCBjdXJyZW50VmFsdWUsIGxpc3R9KSA9PiB7XG4gIGxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGl0ZW0ubmFtZSA/IGl0ZW0ubmFtZSA6IGl0ZW07XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB2YWx1ZSA9PT0gY3VycmVudFZhbHVlID8gJ3NlbGVjdGVkJyA6ICcnO1xuICAgIGVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLGA8b3B0aW9uIHZhbHVlPVwiJHt2YWx1ZX1cIiAke3NlbGVjdGVkfT4ke3ZhbHVlfTwvb3B0aW9uPmApO1xuICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IGZpbGxUZW1wbGF0ZSA9ICh7dG1wbCwgZGF0YX0pID0+IHtcbiAgaWYoIXRtcGwgfHwgIWRhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gdG1wbC5yZXBsYWNlKC97KFteXCJdezEsfSl9L2dtLCAobWF0Y2gsIHN0cikgPT4ge1xuICAgIGlmIChkYXRhW3N0cl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRhdGFbc3RyXTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEVtb2ppU3RyTGVuZ3RoID0gKHN0cikgPT4ge1xuICBsZXQgY291bnRlciA9IDA7XG5cbiAgZm9yIChsZXQgY2hhciBvZiBzdHIpIHtcbiAgICBsZXQgdW5pY29kZU51bSA9IGNoYXIuY29kZVBvaW50QXQoKTtcblxuICAgIGlmKCFjaGFyIHx8IGlnbm9yZWRVbmljb2RlTW9kaWZpZXJzW3VuaWNvZGVOdW1dKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb3VudGVyKys7XG4gIH1cblxuICByZXR1cm4gY291bnRlcjtcbn07XG4iLCJpbXBvcnQge2dldFN0ZXAsIHBvaW50c1RvU3RyLCBnZXRTY2FsZSwgZ2V0U3ltYm9sc0xpc3QsIGZpbGxTZWxlY3QsIGZpbGxUZW1wbGF0ZX0gZnJvbSAnLi9oZWxwZXJzLmpzJztcbmltcG9ydCB7dGVtcGxhdGVTdHlsZXMsIHRlbXBsYXRlTWFya3VwLCB0ZW1wbGF0ZUdyb3VwfSBmcm9tICcuL3RtcGwuanMnO1xuaW1wb3J0IHN5bWJvbHNMaXN0IGZyb20gJy4vc3ltYm9sc0xpc3QuanMnO1xuaW1wb3J0IGxpbmVTdHlsZXMgZnJvbSAnLi9saW5lU3R5bGVzLmpzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMuanMnO1xuaW1wb3J0IGZvbnRTaXplcyBmcm9tICcuL2ZvbnRTaXplcy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtb2ppQnJ1c2ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgIHRoaXMuZWxlbSA9IHRoaXMuc2hhZG93Um9vdDtcbiAgICB0aGlzLmVsZW0uYXBwZW5kKFxuICAgICAgdGVtcGxhdGVTdHlsZXMuY29udGVudC5jbG9uZU5vZGUodHJ1ZSksXG4gICAgICB0ZW1wbGF0ZU1hcmt1cC5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICk7XG5cbiAgICB0aGlzLnBhaW50QXJlYSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgncGFpbnQtYXJlYScpO1xuICAgIHRoaXMudGFyZ2V0R3JvdXAgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldC1ncm91cCcpO1xuICAgIHRoaXMuY2xlYXJDb250cm9sID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuICAgIHRoaXMuaW5wdXRTeW1ib2xzQ2hvaWNlID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdpbnB1dC1zeW1ib2xzLWNob2ljZScpO1xuICAgIHRoaXMuc2VsZWN0U3ltYm9scyA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXN5bWJvbHMnKTtcbiAgICB0aGlzLmFkZFN5bWJvbHMgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ2FkZC1zeW1ib2xzJyk7XG4gICAgdGhpcy5zZWxlY3RTdHlsZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXN0eWxlJyk7XG4gICAgdGhpcy5zZWxlY3RGb250U2l6ZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWZvbnQtc2l6ZScpO1xuICAgIHRoaXMuc2NhbGUgPSBnZXRTY2FsZSh0aGlzLnBhaW50QXJlYS5nZXRFbGVtZW50QnlJZCgnbWVhc3VyZS1yZWN0JykpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY29udHJvbEdldCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbC0tZ2V0Jyk7XG4gICAgdGhpcy5jb250cm9sR2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmxpbmtzID0ge1xuICAgICAgcG5nOiB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWRvd25sb2FkLXBuZycpXG4gICAgfTtcblxuICAgIHRoaXMuc2VsZWN0ZWQgPSB7fTtcbiAgICB0aGlzLnBvaW50cyA9IHtcbiAgICAgIGxpc3Q6IFtdLFxuICAgICAgbGFzdDoge31cbiAgICB9O1xuICAgIHRoaXMucm90YXRpb24gPSB7XG4gICAgICBtYXg6IDZcbiAgICB9O1xuXG4gICAgdGhpcy5jdXJyZW50ID0ge1xuICAgICAgY291bnRlcjogMFxuICAgIH07XG5cbiAgICAvLyBUcnkgdG8gZHJhdyBzdHJhaWdodCBsaWdodCwgYWRkIGxhdGVyXG4gICAgdGhpcy5tb3ZlVGhyZXNob2xkID0ge1xuICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICBkZWZhdWx0OiAyMFxuICAgIH07XG4gICAgdGhpcy5pc1N0cmFpZ2h0TGluZSA9IGZhbHNlO1xuXG4gICAgdGhpcy53YXZlcyA9IHtcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBtYXg6IDIsXG4gICAgICBpZERpcmVjdGlvblVwOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIFVzZWQgdG8gYWRkIG1vcmUgc3ltYm9scyBmb3IgdGlueSBmb250LXNpemVcbiAgICB0aGlzLnBhdGhGaWxscyA9IHt9O1xuXG4gICAgdGhpcy5zeW1ib2xzID0ge1xuICAgICAgc3RyOiBzeW1ib2xzTGlzdFswXSxcbiAgICAgIGN1cnJlbnRQb3M6IDAsXG4gICAgfTtcbiAgICB0aGlzLnN5bWJvbHMubGlzdCA9IGdldFN5bWJvbHNMaXN0KHRoaXMuc3ltYm9scy5zdHIpO1xuXG4gICAgdGhpcy5saW5lU3R5bGUgPSB0aGlzLmdldFJhbmRvbUxpbmVTdHlsZSgpO1xuICAgIHRoaXMuZm9udFNpemUgPSBmb250U2l6ZXNbM107XG5cbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlU3ltYm9sc1NldCA9IHRoaXMuY2hhbmdlU3ltYm9sc1NldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlTGluZVN0eWxlID0gdGhpcy5jaGFuZ2VMaW5lU3R5bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUZvbnRTaXplID0gdGhpcy5jaGFuZ2VGb250U2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm9keUtleVVwID0gdGhpcy5ib2R5S2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlLZXlEb3duID0gdGhpcy5ib2R5S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VTeW1ib2xzSW5wdXQgPSB0aGlzLmNob29zZVN5bWJvbHNJbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYm9keU1vdXNlT3V0ID0gdGhpcy5ib2R5TW91c2VPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZXBhcmVJbWFnZXMgPSB0aGlzLnByZXBhcmVJbWFnZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyID0gdGhpcy5jbGVhci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pbml0U2VsZWN0KHtcbiAgICAgIGVsZW06IHRoaXMuc2VsZWN0U3ltYm9scyxcbiAgICAgIGxpc3Q6IHN5bWJvbHNMaXN0LFxuICAgICAgaGFuZGxlcjogdGhpcy5jaGFuZ2VTeW1ib2xzU2V0LFxuICAgICAgY3VycmVudFZhbHVlOiBzeW1ib2xzTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzeW1ib2xzTGlzdC5sZW5ndGgpXVxuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0U2VsZWN0KHtcbiAgICAgIGVsZW06IHRoaXMuc2VsZWN0U3R5bGUsXG4gICAgICBsaXN0OiBPYmplY3QudmFsdWVzKGxpbmVTdHlsZXMpLFxuICAgICAgaGFuZGxlcjogdGhpcy5jaGFuZ2VMaW5lU3R5bGUsXG4gICAgICBjdXJyZW50VmFsdWU6ICdtaXJyb3JlZC1vZmZzZXQnLFxuICAgICAgY3VycmVudFZhbHVlOiB0aGlzLmxpbmVTdHlsZS5uYW1lXG4gICAgfSk7XG5cbiAgICB0aGlzLmluaXRTZWxlY3Qoe1xuICAgICAgZWxlbTogdGhpcy5zZWxlY3RGb250U2l6ZSxcbiAgICAgIGxpc3Q6IGZvbnRTaXplcyxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlRm9udFNpemUsXG4gICAgICBjdXJyZW50VmFsdWU6IDMyXG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNsZWFyQ29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xlYXIpO1xuXG4gICAgdGhpcy5wYWludEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICB0aGlzLnBhaW50QXJlYS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLm9uTW91c2VVcCk7XG5cbiAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvb3NlU3ltYm9sc0lucHV0KTtcbiAgICB0aGlzLmFkZFN5bWJvbHMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZVN5bWJvbHNTZXQpO1xuICAgIHRoaXMuY29udHJvbEdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZUltYWdlcyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib2R5S2V5VXApO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm9keUtleURvd24pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvL1xuICB9XG5cbiAgaW5pdFNlbGVjdCh7ZWxlbSwgbGlzdCwgY3VycmVudFZhbHVlLCBoYW5kbGVyfSkge1xuICAgIGZpbGxTZWxlY3Qoe1xuICAgICAgZWxlbSxcbiAgICAgIGxpc3QsXG4gICAgICBjdXJyZW50VmFsdWVcbiAgICB9KTtcblxuICAgIGhhbmRsZXIoKTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgIHRoaXMuY2xpY2tlZFBhdGggPSBldmVudC50YXJnZXQ7XG4gICAgfVxuICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIHRoaXMucG9pbnRzLmxhc3QgPSBzdGFydDtcbiAgICB0aGlzLnBvaW50cy5saXN0ID0gW107XG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MgPSAwO1xuXG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XG4gICAgZ3JvdXAuaWQgPSBgZ3JvdXAtJHt0aGlzLmN1cnJlbnQuY291bnRlcn1gO1xuXG4gICAgY29uc3QgY29udGVudCA9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsOiB0ZW1wbGF0ZUdyb3VwLmlubmVySFRNTCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRoaXMuY3VycmVudC5jb3VudGVyLFxuICAgICAgICBmb250U2l6ZTogYCR7dGhpcy5mb250U2l6ZX1weGBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBncm91cC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsY29udGVudCk7XG4gICAgdGhpcy50YXJnZXRHcm91cC5hcHBlbmQoZ3JvdXApO1xuXG4gICAgbGV0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgcGF0aC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhdGgnKTtcbiAgICBsZXQgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0UGF0aCcpO1xuICAgIGNvbnN0IHRleHQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0Jyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB7XG4gICAgICAuLi50aGlzLmN1cnJlbnQsXG4gICAgICBncm91cCxcbiAgICAgIHBhdGgsXG4gICAgICB0ZXh0LFxuICAgICAgdGV4dERvdWJsZTogbnVsbCxcbiAgICAgIHRleHRQYXRoLFxuICAgICAgdGV4dFBhdGhEb3VibGU6IG51bGwsXG4gICAgICBzdGFydCxcbiAgICAgIGNvdW50ZXI6ICsrdGhpcy5jdXJyZW50LmNvdW50ZXJcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RpZnlQYXRocygpO1xuXG4gICAgdGhpcy5wYWludEFyZWEuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJvdXQnLCB0aGlzLmJvZHlNb3VzZU91dCk7XG4gICAgdGhpcy5tb3VzZU91dFBvaW50cyA9IHt9O1xuICB9XG5cbiAgbW9kaWZ5UGF0aHMocGFyYW1zID0ge30pIHtcbiAgICBsZXQgaGFzQ3VycmVudCA9IGZhbHNlO1xuXG4gICAgaWYoIXBhcmFtcy50ZXh0KSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICBoYXNDdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5kb3VibGUgJiYgIXBhcmFtcy50ZXh0RG91YmxlKSB7XG4gICAgICBsZXQge3RleHREb3VibGUsIHRleHRQYXRoRG91YmxlfSA9IHRoaXMuZ2V0VGV4dERvdWJsZShwYXJhbXMpO1xuXG4gICAgICBwYXJhbXMudGV4dERvdWJsZSA9IHRleHREb3VibGU7XG4gICAgICBwYXJhbXMudGV4dFBhdGhEb3VibGUgPSB0ZXh0UGF0aERvdWJsZTtcbiAgICB9XG5cbiAgICBsZXQge2dyb3VwLCB0ZXh0LCB0ZXh0RG91YmxlLCB0ZXh0UGF0aERvdWJsZX0gPSBwYXJhbXM7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2R5JywgJy4zNWVtJyk7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5taXJyb3JlZCkge1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTJlbScpO1xuICAgICAgdGV4dERvdWJsZS5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTJlbScpXG4gICAgICB0ZXh0RG91YmxlLnNldEF0dHJpYnV0ZSgncm90YXRlJywgMTgwKTtcbiAgICAgIHRleHRQYXRoRG91YmxlLnNldEF0dHJpYnV0ZSgnc3RhcnRPZmZzZXQnLCBgJHt0aGlzLnBhdGhPZmZzZXR9cHhgKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zY2F0dGVyZWQpIHtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdkeScsICctLjEzZW0nKTtcbiAgICAgIHRleHREb3VibGUuc2V0QXR0cmlidXRlKCdkeScsICctLjEzZW0nKTtcbiAgICAgIGdyb3VwLnN0eWxlLmxldHRlclNwYWNpbmcgPSAnLjFlbSc7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXQpIHtcbiAgICAgIHRleHRQYXRoRG91YmxlLnNldEF0dHJpYnV0ZSgnc3RhcnRPZmZzZXQnLCBgLSR7dGhpcy5wYXRoT2Zmc2V0fXB4YCk7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXRCZXR3ZWVuKSB7XG4gICAgICB0ZXh0UGF0aERvdWJsZS5zZXRBdHRyaWJ1dGUoJ3N0YXJ0T2Zmc2V0JywgYC0ke3RoaXMucGF0aE9mZnNldH1weGApO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Um90YXRpb24oKTtcbiAgICB0aGlzLnNldFdhdmVzKCk7XG4gIH1cblxuICBzZXRSb3RhdGlvbigpIHtcbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5yb3RhdGVkKSB7XG4gICAgICB0aGlzLnJvdGF0aW9uID0ge1xuICAgICAgICAuLi50aGlzLnJvdGF0aW9uLFxuICAgICAgICBzdGVwQW5nbGU6IDM2MCAvIHRoaXMucm90YXRpb24ubWF4LFxuICAgICAgICBjb3VudGVyOiAwXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNldFdhdmVzKCkge1xuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLndhdmVzKSB7XG4gICAgICB0aGlzLndhdmVzLmNvdW50ZXIgPSAwO1xuICAgICAgdGhpcy53YXZlcy5pZERpcmVjdGlvblVwID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRUZXh0RG91YmxlKHBhcmFtcykge1xuICAgIGxldCB7Z3JvdXAsIHRleHR9ID0gcGFyYW1zO1xuXG4gICAgY29uc3QgdGV4dERvdWJsZSA9IHRleHQuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRleHREb3VibGUuY2xhc3NMaXN0LmFkZCgndGV4dC0tZG91YmxlJyk7XG4gICAgY29uc3QgdGV4dFBhdGhEb3VibGUgPSB0ZXh0RG91YmxlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRQYXRoJyk7XG4gICAgdGV4dFBhdGhEb3VibGUuY2xhc3NMaXN0LmFkZCgndGV4dC1wYXRoLS1kb3VibGUnKTtcbiAgICBncm91cC5hcHBlbmQodGV4dERvdWJsZSk7XG5cbiAgICByZXR1cm4ge3RleHREb3VibGUsIHRleHRQYXRoRG91YmxlfTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgaWYoIWV2ZW50LmJ1dHRvbnMpIHtcbiAgICAgIHRoaXMubW91c2VPdXRQb2ludHMuZmluaXNoUGF0aCA9IHRydWU7XG4gICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvb3JkcyA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIGxldCB7c3RhcnR9ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgY29uc3QgbW92ZVNpemUgPSBnZXRTdGVwKHtcbiAgICAgIGZyb206IHRoaXMucG9pbnRzLmxhc3QsXG4gICAgICB0bzogY29vcmRzXG4gICAgfSk7XG5cbiAgICBpZihtb3ZlU2l6ZSA+IHRoaXMubW92ZVRocmVzaG9sZC52YWx1ZSkge1xuICAgICAgdGhpcy5wb2ludHMubGlzdC5wdXNoKGNvb3Jkcyk7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGgoY29vcmRzKTtcbiAgICAgIHRoaXMudXBkYXRlVGV4dCgpO1xuICAgICAgdGhpcy5wb2ludHMubGFzdCA9IGNvb3JkcztcbiAgICB9XG5cbiAgICB0aGlzLmNsaWNrZWRQYXRoID0gbnVsbDtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuICAgIC8vIEhhbmRsZSBjbGljayBvbiBwYXRoXG4gICAgaWYodGhpcy5jbGlja2VkUGF0aCkge1xuICAgICAgdGhpcy5tb3VzZUNsaWNrUGF0aCgpO1xuXG4gICAgICAvLyBSZW1vdmUgbGF0ZXN0IHBhdGhcbiAgICAgIHRoaXMuY3VycmVudC5ncm91cC5yZW1vdmUoKTtcbiAgICAgIHRoaXMucGFpbnRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgd2FzIG5vdCBtb3VzZSBtb3ZlXG4gICAgaWYodGhpcy5wb2ludHMubGlzdC5sZW5ndGggPT0gMCAmJiB0aGlzLmN1cnJlbnQuZ3JvdXApIHtcbiAgICAgIC8vIFJlbW92ZSBsYXRlc3QgcGF0aFxuICAgICAgdGhpcy5jdXJyZW50Lmdyb3VwLnJlbW92ZSgpO1xuICAgICAgdGhpcy5wYWludEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnVuc2VsZWN0KCk7XG5cbiAgICAvLyBUcnkgdG8gZml4IHJhbmRvbSBidWdcbiAgICBpZighdGhpcy5jdXJyZW50LnBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPciBjb250aW51ZSB3aXRoIGxhdGVzdCBwYXRoXG4gICAgdGhpcy5wb2ludHMubGFzdCA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuXG4gICAgaWYodGhpcy5tb3VzZU91dFBvaW50cyAmJiB0aGlzLm1vdXNlT3V0UG9pbnRzLmZpbmlzaFBhdGgpIHtcbiAgICAgIHRoaXMucG9pbnRzLmxhc3QgPSB0aGlzLm1vdXNlT3V0UG9pbnRzLmNvb3JkcztcbiAgICB9XG5cbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMuY3VycmVudDtcbiAgICB0aGlzLmN1cnJlbnQucGF0aC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXBhdGgnKTtcblxuICAgIHRoaXMudXBkYXRlUGF0aCh0aGlzLnBvaW50cy5sYXN0KTtcbiAgICB0aGlzLnVwZGF0ZVRleHQoKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyb3V0JywgdGhpcy5ib2R5TW91c2VPdXQpO1xuICAgIHRoaXMuZmlsbFJlc3RPZlBhdGgoKTtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLmNvbnRyb2xHZXQuZGlzYWJsZWQgPSAhdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUw7XG4gIH1cblxuICBib2R5S2V5VXAoZXZlbnQpIHtcbiAgICBjb25zdCBpc0JvZHkgPSBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0JPRFknO1xuICAgIGNvbnN0IGlzRGVsT3JCYWNrU3BhY2UgPSBldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2O1xuXG4gICAgLy8gUHJldmVudCByZW1vdmluZyBwYXRoIHdoaWxlIGVkaXQgdGV4dCBpbiBpbnB1dFxuICAgIGlmKGlzQm9keSAmJiBpc0RlbE9yQmFja1NwYWNlKSB7XG4gICAgICB0aGlzLnJlbW92ZVBhdGhzKCk7XG4gICAgfVxuICAgIC8vIFVucHJlc3Mgc2hpZnQsIG5vdCB1c2VkIG5vd1xuICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTYpIHtcbiAgICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBib2R5TW91c2VPdXQoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlT3V0UG9pbnRzID0ge1xuICAgICAgY29vcmRzOiB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KVxuICAgIH07XG4gIH1cblxuICBib2R5S2V5RG93bihldmVudCkge1xuICAgIC8vIFByZXNzIHNoaWZ0LCBub3QgdXNlZCBub3dcbiAgICBpZihldmVudC5rZXlDb2RlID09PSAxNikge1xuICAgICAgdGhpcy5pc1N0cmFpZ2h0TGluZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbW91c2VDbGlja1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aElkID0gdGhpcy5jbGlja2VkUGF0aC5pZDtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuY2xpY2tlZFBhdGguY2xvc2VzdCgnZycpO1xuICAgIGdyb3VwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgaWYoZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW3BhdGhJZF0gPSBncm91cDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtwYXRoSWRdO1xuICAgIH1cblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlUGF0aCh7eCwgeX0pIHtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMuY3VycmVudDtcbiAgICBjb25zdCBwb2ludHMgPSBwb2ludHNUb1N0cih0aGlzLnBvaW50cy5saXN0KTtcblxuICAgIHRoaXMuY3VycmVudC5wYXRoLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7cG9pbnRzfSAke3h9LCR7eX1gKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHQocGFyYW1zID0ge30pIHtcbiAgICBpZighcGFyYW1zLnRleHRQYXRoKSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgbGV0IHt0ZXh0UGF0aCwgdGV4dFBhdGhEb3VibGV9ID0gcGFyYW1zO1xuXG4gICAgLy8gdGhpcy5wYXRoRmlsbHMua29lZmYgbmVlZCB0byBhZGQgbW9yZSBzeW1ib2xzIGZvciB0aW55IGZvbnQtc2l6ZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhGaWxscy5rb2VmZjsgaSsrKSB7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgIHRleHRQYXRoLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgc3ltYm9sKTtcblxuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICAgICAgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBlbXB0eSBwYXRoIGlmIG1vdXNlIG1vdmVzIHRvbyBmYXN0XG4gIGZpbGxSZXN0T2ZQYXRoKHBhcmFtcyA9IHt9KSB7XG4gICAgaWYoIXBhcmFtcy50ZXh0UGF0aCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgIH1cblxuICAgIGxldCB7cGF0aCwgdGV4dFBhdGgsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcbiAgICBjb25zdCBwYXRoRmlsbHNNYXggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCkgLyB0aGlzLmZvbnRTaXplICsgdGhpcy5wYXRoT2Zmc2V0O1xuICAgIGNvbnN0IHRTcGFuc0xlbmd0aCA9IHRleHRQYXRoLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBsZXQgbWlzc2VkU3ltYm9scyA9IHBhdGhGaWxsc01heCAtIHRTcGFuc0xlbmd0aDtcblxuICAgIGlmKCFtaXNzZWRTeW1ib2xzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1pc3NlZFN5bWJvbHM7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVUZXh0KHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ltYm9sKCkge1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLnN5bWJvbHMubGlzdFt0aGlzLnN5bWJvbHMuY3VycmVudFBvc107XG4gICAgbGV0IHJvdGF0ZUF0dHIgPSB0aGlzLmdldFJvdGF0ZUF0dHIoKTtcbiAgICBsZXQgZHlBdHRyID0gdGhpcy5nZXREWVdhdmVzQXR0cigpO1xuICAgIGxldCBmb250U2l6ZUF0dHIgPSB0aGlzLmdldEZvbnRTaXplQXR0cigpO1xuXG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MrKztcblxuICAgIGlmKHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID09PSB0aGlzLnN5bWJvbHMubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcbiAgICB9XG5cbiAgICBzeW1ib2wgPSBgPHRzcGFuICR7cm90YXRlQXR0cn0ke2R5QXR0cn0ke2ZvbnRTaXplQXR0cn0+JHtzeW1ib2x9PC90c3Bhbj5gXG5cbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG5cbiAgZ2V0Um90YXRlQXR0cigpIHtcbiAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMucm90YXRlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5yb3RhdGlvbi5zdGVwQW5nbGUgKiB0aGlzLnJvdGF0aW9uLmNvdW50ZXI7XG4gICAgbGV0IHJvdGF0ZUF0dHIgPSBgIHJvdGF0ZT1cIiR7YW5nbGV9XCJgO1xuXG4gICAgdGhpcy5yb3RhdGlvbi5jb3VudGVyKys7XG4gICAgaWYodGhpcy5yb3RhdGlvbi5jb3VudGVyID49IHRoaXMucm90YXRpb24ubWF4KSB7XG4gICAgICB0aGlzLnJvdGF0aW9uLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByb3RhdGVBdHRyO1xuICB9XG5cbiAgZ2V0RFlXYXZlc0F0dHIoKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLndhdmVzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgbGV0IGR5VmFsID0gLjU1O1xuICAgIGxldCBkaXJlY3Rpb25TaWduID0gdGhpcy53YXZlcy5pZERpcmVjdGlvblVwID8gMSA6IC0xO1xuICAgIGxldCBkeSA9IGR5VmFsICogZGlyZWN0aW9uU2lnbjtcbiAgICBsZXQgZHlBdHRyID0gYCBkeT1cIiR7ZHl9ZW1cImA7XG5cbiAgICAvLyBIYW5kbGUgd2F2ZXMgY291bnRlclxuICAgIGlmKHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCkge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyLS07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHdhdmVzIGRpcmVjdGlvblxuICAgIGlmKHRoaXMud2F2ZXMuY291bnRlciA9PSB0aGlzLndhdmVzLm1heCkge1xuICAgICAgdGhpcy53YXZlcy5pZERpcmVjdGlvblVwID0gIXRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcDtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLndhdmVzLmNvdW50ZXIgPT09IDApIHtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9ICF0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGR5QXR0cjtcbiAgfVxuXG4gIGdldEZvbnRTaXplQXR0cigpIHtcbiAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgZm9udFNpemUgPSAoTWF0aC5yYW5kb20oKSAqIDEuMjUgKyAuMjUpLnRvRml4ZWQoMik7XG5cbiAgICByZXR1cm4gYCBmb250LXNpemU9XCIke2ZvbnRTaXplfWVtXCJgO1xuICB9XG5cbiAgdW5zZWxlY3QoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRba2V5XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVQYXRocygpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzLmxpc3QgPSBbXTtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRQYXRoT2Zmc2V0KCkge1xuICAgIGNvbnN0IGhhbGZQYXR0ZXJuTGVuZ3RoID0gTWF0aC5yb3VuZCh0aGlzLnN5bWJvbHMubGlzdC5sZW5ndGggLyAyKTtcbiAgICB0aGlzLnBhdGhPZmZzZXQgPSAwO1xuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMubWlycm9yZWQpIHtcbiAgICAgIHRoaXMucGF0aE9mZnNldCA9IC41ICogdGhpcy5mb250U2l6ZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zdGFydE9mZnNldCkge1xuICAgICAgdGhpcy5wYXRoT2Zmc2V0ID0gKGhhbGZQYXR0ZXJuTGVuZ3RoICsgLjUpICogdGhpcy5mb250U2l6ZTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zdGFydE9mZnNldEJldHdlZW4pIHtcbiAgICAgIHRoaXMucGF0aE9mZnNldCA9IGhhbGZQYXR0ZXJuTGVuZ3RoICogdGhpcy5mb250U2l6ZTtcbiAgICB9XG4gIH1cblxuICBjaG9vc2VTeW1ib2xzSW5wdXQoZXZlbnQpIHtcbiAgICBjb25zdCBsYWJlbFRleHQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNob2ljZV9fbGFiZWwtdGV4dCcpO1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaG9pY2VfX2lucHV0Jyk7XG5cbiAgICBpZihsYWJlbFRleHQgJiYgbGFiZWxUZXh0LmRhdGFzZXQudmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXRTeW1ib2xzQ2hvaWNlLmRhdGFzZXQubW9kZSA9IGxhYmVsVGV4dC5kYXRhc2V0LnZhbHVlO1xuICAgIH1cblxuICAgIGlmKGlucHV0ICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLmNoYW5nZVN5bWJvbHNTZXQoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN5bWJvbHNTZXQoZXZlbnQpIHtcbiAgICBsZXQgY3VycmVudElucHV0ID0gdGhpcy5zZWxlY3RTeW1ib2xzO1xuICAgIGlmKGV2ZW50KSB7XG4gICAgICBjdXJyZW50SW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYoIWN1cnJlbnRJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHRoaXMuc3ltYm9scy5zdHIgPT09IGN1cnJlbnRJbnB1dC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3ltYm9scy5zdHIgPSBjdXJyZW50SW5wdXQudmFsdWU7XG4gICAgdGhpcy5zeW1ib2xzLmxpc3QgPSBnZXRTeW1ib2xzTGlzdCh0aGlzLnN5bWJvbHMuc3RyKTtcbiAgICB0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9IDA7XG5cbiAgICB0aGlzLmNoYW5nZVN5bWJvbHNPblNlbGVjdGVkKCk7XG4gIH1cblxuICBjaGFuZ2VTeW1ib2xzT25TZWxlY3RlZCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGNvbnN0IHRleHRQYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtcGF0aCcpO1xuICAgICAgbGV0IHRleHRQYXRoRG91YmxlID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtcGF0aC0tZG91YmxlJyk7XG4gICAgICB0ZXh0UGF0aC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGlmKHRleHRQYXRoRG91YmxlKSB7XG4gICAgICAgIHRleHRQYXRoRG91YmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMuZG91YmxlKSB7XG4gICAgICAgIHRleHRQYXRoRG91YmxlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRXYXZlcygpO1xuXG4gICAgICB0aGlzLmZpbGxSZXN0T2ZQYXRoKHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgdGV4dFBhdGgsXG4gICAgICAgIHRleHRQYXRoRG91YmxlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMaW5lU3R5bGUoKSB7XG4gICAgdGhpcy5saW5lU3R5bGUgPSBsaW5lU3R5bGVzW3RoaXMuc2VsZWN0U3R5bGUudmFsdWVdO1xuICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnNjYXR0ZXJlZCkge1xuICAgICAgdGhpcy5wYXRoRmlsbHMua29lZmYgPSAzO1xuICAgIH1cblxuICAgIHRoaXMuc2V0UGF0aE9mZnNldCgpO1xuXG4gICAgdGhpcy5jaGFuZ2VMaW5lU3R5bGVPblNlbGVjdGVkKCk7XG4gIH1cblxuICBjaGFuZ2VMaW5lU3R5bGVPblNlbGVjdGVkKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICBjb25zdCBwYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigncGF0aCcpO1xuICAgICAgY29uc3QgdGV4dCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHQnKTtcbiAgICAgIGNvbnN0IHRleHRQYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtcGF0aCcpO1xuICAgICAgbGV0IHRleHREb3VibGUgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC0tZG91YmxlJyk7XG4gICAgICBsZXQgdGV4dFBhdGhEb3VibGUgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcudGV4dC1wYXRoLS1kb3VibGUnKTtcbiAgICAgIHRleHRQYXRoLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICBpZih0ZXh0UGF0aERvdWJsZSkge1xuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLmRvdWJsZSkge1xuICAgICAgICB0ZXh0UGF0aERvdWJsZSA9IG51bGw7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKCF0ZXh0UGF0aERvdWJsZSkge1xuICAgICAgICBsZXQgZG91YmxlZFRleHQgPSB0aGlzLmdldFRleHREb3VibGUoe2dyb3VwLCB0ZXh0fSk7XG4gICAgICAgIHRleHREb3VibGUgPSBkb3VibGVkVGV4dC50ZXh0RG91YmxlO1xuICAgICAgICB0ZXh0UGF0aERvdWJsZSA9IGRvdWJsZWRUZXh0LnRleHRQYXRoRG91YmxlO1xuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBncm91cCxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGV4dFBhdGgsXG4gICAgICAgIHRleHREb3VibGUsXG4gICAgICAgIHRleHRQYXRoRG91YmxlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm1vZGlmeVBhdGhzKHBhcmFtcyk7XG4gICAgICB0aGlzLmZpbGxSZXN0T2ZQYXRoKHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRm9udFNpemUoKSB7XG4gICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuc2VsZWN0Rm9udFNpemUudmFsdWU7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXNpemUnLCBgJHt0aGlzLmZvbnRTaXplfXB4YCk7XG4gICAgdGhpcy5wYXRoRmlsbHMua29lZmYgPSAzO1xuXG4gICAgaWYodGhpcy5mb250U2l6ZSA+PSAzMikge1xuICAgICAgdGhpcy5wYXRoRmlsbHMua29lZmYgPSAyO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuZm9udFNpemUgPj0gNDApIHtcbiAgICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFBhdGhPZmZzZXQoKTtcblxuICAgIHRoaXMuY2hhbmdlRm9udFNpemVPblNlbGVjdGVkKCk7XG4gIH1cblxuICBjaGFuZ2VGb250U2l6ZU9uU2VsZWN0ZWQoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBncm91cCA9IHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIGNvbnN0IHRleHRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgndGV4dCcpO1xuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGNvbnN0IHRleHRQYXRoID0gZ3JvdXAucXVlcnlTZWxlY3RvcigndGV4dFBhdGgnKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCB0aGlzLmZvbnRTaXplKTtcblxuICAgICAgZm9yKGxldCB0ZXh0IG9mIHRleHRzKSB7XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdmb250LXNpemUnLCBgJHt0aGlzLmZvbnRTaXplfXB4YCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbGxSZXN0T2ZQYXRoKHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgdGV4dFBhdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVRoZW1lKGV2ZW50KSB7XG4gICAgaWYoIWV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gZXZlbnQuZGV0YWlsLmFjY2VudHMpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoYC0tY29sb3ItJHtrZXl9YCwgZXZlbnQuZGV0YWlsLmFjY2VudHNba2V5XSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJyc7XG4gICAgdGhpcy50aGVtZSA9IGV2ZW50LmRldGFpbC5jb2xvcnM7XG4gICAgdGhpcy5hY2NlbnRzID0gZXZlbnQuZGV0YWlsLmFjY2VudHM7XG4gICAgdGhpcy5vdXRwdXRTdHlsZSA9IHRoaXMuZ2V0U3R5bGVTdHIoKTtcbiAgfVxuXG4gIHByZXBhcmVJbWFnZXMoKSB7XG4gICAgdGhpcy5maW5hbFNpemVzID0ge1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5jb250cm9scy5kYXRhc2V0LnN0YXRlID0gJ2xvYWRpbmcnO1xuICAgIHRoaXMuZmluYWxTVkcgPSB0aGlzLnBhaW50QXJlYS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5maW5hbFNWRy5zdHlsZSA9IHRoaXMub3V0cHV0U3R5bGU7XG4gICAgLy8gRml4IHBhaW50IFNWRyBvbiBjYW52YXMgaW4gRmlyZWZveFxuICAgIHRoaXMuZmluYWxTVkcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGAke3RoaXMuZmluYWxTaXplcy53aWR0aH1weGApO1xuICAgIHRoaXMuZmluYWxTVkcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBgJHt0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0fXB4YCk7XG5cbiAgICB0aGlzLnByZXBhcmVQbmcoKTtcbiAgfVxuXG4gIGdldEJhY2tncm91bmRTdHIoY29sb3JzTGlzdCkge1xuICAgIGxldCBiZ1N0ciA9ICcnO1xuXG4gICAgaWYoY29sb3JzTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJnU3RyID0gY29sb3JzTGlzdFswXVxuICAgICAgcmV0dXJuIGJnU3RyO1xuICAgIH1cblxuICAgIGJnU3RyID0gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICR7Y29sb3JzTGlzdC5qb2luKCcsJyl9KWA7XG4gICAgcmV0dXJuIGJnU3RyO1xuICB9XG5cbiAgZ2V0U3R5bGVTdHIoKSB7XG4gICAgLy8gVHJlYnVjaGV0IE1TLCBWZXJkYW5hXG4gICAgY29uc3Qgc3R5bGVzbGlzdCA9IFtcbiAgICAgIGBiYWNrZ3JvdW5kOiAke3RoaXMuZ2V0QmFja2dyb3VuZFN0cih0aGlzLnRoZW1lKX1gLFxuICAgICAgYGZvbnQtZmFtaWx5OiBUcmVidWNoZXQgTVMsIFZlcmRhbmEsIHNhbnMtZXJpZmAsXG4gICAgICBgY29sb3I6ICR7dGhpcy5hY2NlbnRzLmJhc2V9YFxuICAgIF1cbiAgICByZXR1cm4gc3R5bGVzbGlzdC5qb2luKCc7ICcpO1xuICB9XG5cbiAgcHJlcGFyZVBuZygpIHtcbiAgICBjb25zdCB4bWwgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMuZmluYWxTVkcpO1xuICAgIGNvbnN0IHN2ZzY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoeG1sKSkpO1xuICAgIGNvbnN0IGI2NFN0YXJ0ID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJztcbiAgICBjb25zdCBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcblxuICAgIGNvbnN0IGltZ09iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ09iai5zcmMgPSBpbWFnZTY0O1xuICAgIGltZ09iai53aWR0aCA9IHRoaXMuZmluYWxTaXplcy53aWR0aDtcbiAgICBpbWdPYmouaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcblxuICAgIGltZ09iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0O1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZ09iaiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMuY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBsZXQgVVJMT2JqID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5ocmVmID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuZG93bmxvYWQgPSAnZW1vamktYnJ1c2gtZHJhd2luZy5wbmcnO1xuXG4gICAgICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICBnZXRNb3VzZU9mZnNldChldmVudCkge1xuICAgIGxldCB7bGVmdCwgdG9wfSA9IHRoaXMucGFpbnRBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBzY2FsZSA9IHRoaXMuc2NhbGU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NhbGUgKiAoZXZlbnQuY2xpZW50WCAtIGxlZnQpLFxuICAgICAgeTogc2NhbGUgKiAoZXZlbnQuY2xpZW50WSAtIHRvcClcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmFuZG9tTGluZVN0eWxlKCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhsaW5lU3R5bGVzKTtcbiAgICBjb25zdCByYW5kb21LZXkgPSBrZXlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGtleXMubGVuZ3RoKV1cbiAgICByZXR1cm4gbGluZVN0eWxlc1tyYW5kb21LZXldO1xuICB9XG59XG4iLCJjb25zdCBsaW5lU3R5bGVzID0ge1xuICAnbGluZWFyJzoge1xuICAgIG5hbWU6ICdsaW5lYXInLFxuICAgIHByb3BzOiB7fVxuICB9LFxuICAnbGluZWFyLXJvdGF0ZWQnOiB7XG4gICAgbmFtZTogJ2xpbmVhci1yb3RhdGVkJyxcbiAgICBwcm9wczoge1xuICAgICAgcm90YXRlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkJzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZCcsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICAnbWlycm9yZWQtb2Zmc2V0Jzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZC1vZmZzZXQnLFxuICAgIHByb3BzOiB7XG4gICAgICBkb3VibGU6IHRydWUsXG4gICAgICBtaXJyb3JlZDogdHJ1ZSxcbiAgICAgIHN0YXJ0T2Zmc2V0OiB0cnVlXG4gICAgfVxuICB9LFxuICAnbWlycm9yZWQtb2Zmc2V0LWJldHdlZW4nOiB7XG4gICAgbmFtZTogJ21pcnJvcmVkLW9mZnNldC1iZXR3ZWVuJyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldEJldHdlZW46IHRydWVcbiAgICB9XG4gIH0sXG4gICd3YXZlcyc6IHtcbiAgICBuYW1lOiAnd2F2ZXMnLFxuICAgIHByb3BzOiB7XG4gICAgICB3YXZlczogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLXJhbmRvbSc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQtcmFuZG9tJyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzY2F0dGVyZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldEJldHdlZW46IHRydWVcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW5lU3R5bGVzO1xuIiwiY29uc3QgdGhlbWVzID0gW1xuICAn8J+YhvCfmYLwn6Sq8J+kqPCfmIzwn5iL8J+YgvCfmYPwn5iBJyxcbiAgJ/CfjYEnLFxuICAn8J+mlCcsXG4gICfwn42C8J+NgfCfjYQnLFxuICAn8J+QmicsXG4gICfwn6aQJyxcbiAgJ/CfkKHwn5Cg8J+QnycsXG4gICfwn5C28J+QsfCfkK3wn5C58J+QsCcsXG4gICfwn5CMJyxcbiAgJ+KcqCcsXG4gICfirZDvuI8nLFxuICAn4p2k77iP8J+nofCfkpvwn5Ka8J+SmfCfkpzwn5akJyxcbiAgJ/CflLTwn5+g8J+fofCfn6Lwn5S18J+fo+Kaq++4jycsXG4gICfwn5+l8J+fp/Cfn6jwn5+p8J+fpvCfn6rirJvvuI8nLFxuICAn8J+MsfCfjYAnLFxuICAn8J+MvPCfjLrwn4y4JyxcbiAgJ/CfjLzwn4yx8J+MuvCfjLHwn4y4JyxcbiAgJ/Cfmpfwn5qy8J+am/CfmoLwn5qZ4pu177iP8J+agycsXG4gICfwn6WA8J+nmidcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lcztcbiIsImV4cG9ydCBjb25zdCB0ZW1wbGF0ZVN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZVN0eWxlcy5pbm5lckhUTUwgPSBgPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICAgIC0tZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG5cbiAgQSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG5cbiAgLnZpc3VhbGx5aGlkZGVuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHBhdGgge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC4zNTtcbiAgICBmaWxsOiBub25lO1xuICAgIHRyYW5zaXRpb246IHN0cm9rZSAuMTVzO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgcGF0aDpob3ZlciB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1ob3Zlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgdGV4dCxcbiAgLnBhaW50LWFyZWEgdGV4dFBhdGgsXG4gIC5wYWludC1hcmVhIC5jdXJyZW50LXBhdGgge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgU0VMRUNULFxuICBJTlBVVCB7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZzogMCAuMjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiAjRUVFO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIC5oaWdobGlnaHQgcGF0aCB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb2N1cyk7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC42NTtcbiAgfVxuXG4gIC5oaWdobGlnaHQ6aG92ZXIgcGF0aCB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1mb2N1c2hvdmVyKTtcbiAgfVxuXG4gIC5wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAucGFuZWwtLXRvcCB7XG4gICAgdG9wOiAycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAucGFuZWwtLWJvdHRvbSB7XG4gICAgYm90dG9tOiAycmVtO1xuICB9XG5cbiAgLmNob2ljZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5jaG9pY2VfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuY2hvaWNlW2RhdGEtbW9kZT1cInByZXNldHNcIl0gLmNob2ljZV9fbGFiZWwtLXByZXNldHMge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuXG4gIC5jaG9pY2VfX2xhYmVsLXRleHQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5jaG9pY2VfX2lucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19pbnB1dC0tY3VzdG9tLFxuICAuY2hvaWNlW2RhdGEtbW9kZT1cImN1c3RvbVwiXSAuY2hvaWNlX19pbnB1dC0tcHJlc2V0cyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2hvaWNlW2RhdGEtbW9kZT1cInByZXNldHNcIl0gLmNob2ljZV9fbGFiZWwtdGV4dC0tcHJlc2V0cyxcbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJjdXN0b21cIl0gLmNob2ljZV9fbGFiZWwtdGV4dC0tY3VzdG9tIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwicHJlc2V0c1wiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1wcmVzZXRzOmhvdmVyLFxuICAuY2hvaWNlW2RhdGEtbW9kZT1cImN1c3RvbVwiXSAuY2hvaWNlX19sYWJlbC10ZXh0LS1jdXN0b206aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG5cbiAgLmNvbnRyb2wge1xuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgYm94LXNoYWRvdzogIDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgfVxuICAuY29udHJvbDpub3QoOmRpc2FibGVkKTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHRyYW5zcGFyZW50IGluc2V0O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhc2UpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgfVxuICAuY29udHJvbDpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZXRyYW5zcCk7XG4gIH1cblxuICAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbC0tZ2V0LFxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sLS1nZXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJsb2FkaW5nXCJdIC5jb250cm9sc19fZG93bmxvYWRzLFxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sc19fZG93bmxvYWRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmNvbnRyb2xzX19kb3dubG9hZHMgLmNvbnRyb2wge1xuICAgIG9wYWNpdHk6IC4yO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwicmVhZHlcIl0gLmNvbnRyb2wge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldCxcbiAgICAgIDAgMCAxcmVtIC4yNXJlbSB2YXIoLS1jb2xvci1mb2N1c2hvdmVyKTtcbiAgfVxuXG4gIC50aGVtZS1zd2l0Y2hlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRpc2NsYWltZXIge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgfVxuXG4gIC5saW5rc2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwXG4gIH1cblxuICAubGlua3NsaXN0X19pdGVtICsgLmxpbmtzbGlzdF9faXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAubGlua3NsaXN0X19pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSB2YXIoLS10cmFuc2l0aW9uKTtcbiAgfVxuXG4gIC5saW5rc2xpc3RfX2ljb246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43NTtcbiAgfVxuXG4gIC5saW5rc2xpc3RfX3VzZXJuYW1lIHtcbiAgICBmb250LXNpemU6IDA7XG4gIH1cbjwvc3R5bGU+XG5gO1xuXG5leHBvcnQgY29uc3QgdGVtcGxhdGVNYXJrdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVNYXJrdXAuaW5uZXJIVE1MID0gYFxuPHN2ZyBpZD1cInBhaW50LWFyZWFcIiBjbGFzcz1cInBhaW50LWFyZWFcIj5cbiAgPCEtLSBTaGFwZSBmb3IgbWVhc3VyaW5nIFNWRyBzY2FsaW5nIC0tPlxuICA8cmVjdCBpZD1cIm1lYXN1cmUtcmVjdFwiXG4gICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICB4PVwiMFwiIHk9XCIwXCJcbiAgICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPjwvcmVjdD5cblxuICA8ZyBpZD1cInRhcmdldC1ncm91cFwiPjwvZz5cbjwvc3ZnPlxuXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtLXRvcFwiPlxuICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCIgaWQ9XCJpbnB1dC1zeW1ib2xzLWNob2ljZVwiIGRhdGEtbW9kZT1cInByZXNldHNcIj5cbiAgICA8bGFiZWxcbiAgICAgIGNsYXNzPVwiY2hvaWNlX19sYWJlbCBjaG9pY2VfX2xhYmVsLS1wcmVzZXRzXCI+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dFxuICAgICAgICAgIGNob2ljZV9fbGFiZWwtdGV4dC0tcHJlc2V0c1xuICAgICAgICAgIGNvbnRyb2xcbiAgICAgICAgXCJcbiAgICAgICAgZGF0YS12YWx1ZT1cInByZXNldHNcIlxuICAgICAgICA+UHJlc2V0czwvc3Bhbj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3M9XCJjaG9pY2VfX2lucHV0IGNob2ljZV9faW5wdXQtLXByZXNldHNcIlxuICAgICAgICBpZD1cInNlbGVjdC1zeW1ib2xzXCI+PC9zZWxlY3Q+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbFxuICAgICAgY2xhc3M9XCJjaG9pY2VfX2xhYmVsIGNob2ljZV9fbGFiZWwtLWN1c3RvbVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHRcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHQtLWN1c3RvbVxuICAgICAgICAgIGNvbnRyb2xcbiAgICAgICAgXCJcbiAgICAgICAgZGF0YS12YWx1ZT1cImN1c3RvbVwiXG4gICAgICAgID5NeSBzeW1ib2xzPC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwiY2hvaWNlX19pbnB1dCBjaG9pY2VfX2lucHV0LS1jdXN0b21cIlxuICAgICAgICB0eXBlPVwidGV4dFwiIGlkPVwiYWRkLXN5bWJvbHNcIiBwbGFjZWhvbGRlcj1cIkFkZCBlbW9qaSBvciB0ZXh0XCIvPlxuICAgIDwvbGFiZWw+XG4gIDwvZGl2PlxuICA8c2VsZWN0IGlkPVwic2VsZWN0LXN0eWxlXCI+PC9zZWxlY3Q+XG4gIDxzZWxlY3QgaWQ9XCJzZWxlY3QtZm9udC1zaXplXCI+PC9zZWxlY3Q+XG5cbiAgPHRoZW1lLXN3aXRjaGVyIGNsYXNzPVwidGhlbWUtc3dpdGNoZXJcIj48L3RoZW1lLXN3aXRjaGVyPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC0tYm90dG9tXCI+XG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xlYXJcIiBjbGFzcz1cImNvbnRyb2xcIj5DbGVhcjwvYnV0dG9uPlxuXG4gIDx1bCBjbGFzcz1cImxpbmtzbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cImxpbmtzbGlzdF9faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS95b2tzZWwvZW1vamktYnJ1c2gvXCIgY2xhc3M9XCJsaW5rc2xpc3RfX2xpbmtcIj48c3ZnIGNsYXNzPVwibGlua3NsaXN0X19pY29uIGxpbmtzbGlzdF9faWNvbi0tZ2l0aHViXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGQ9XCJNNy45OTksMC40MzFjLTQuMjg1LDAtNy43NiwzLjQ3NC03Ljc2LDcuNzYxIGMwLDMuNDI4LDIuMjIzLDYuMzM3LDUuMzA3LDcuMzYzYzAuMzg4LDAuMDcxLDAuNTMtMC4xNjgsMC41My0wLjM3NGMwLTAuMTg0LTAuMDA3LTAuNjcyLTAuMDEtMS4zMiBjLTIuMTU5LDAuNDY5LTIuNjE0LTEuMDQtMi42MTQtMS4wNGMtMC4zNTMtMC44OTYtMC44NjItMS4xMzUtMC44NjItMS4xMzVjLTAuNzA1LTAuNDgxLDAuMDUzLTAuNDcyLDAuMDUzLTAuNDcyIGMwLjc3OSwwLjA1NSwxLjE4OSwwLjgsMS4xODksMC44YzAuNjkyLDEuMTg2LDEuODE2LDAuODQzLDIuMjU4LDAuNjQ1YzAuMDcxLTAuNTAyLDAuMjcxLTAuODQzLDAuNDkzLTEuMDM3IEM0Ljg2LDExLjQyNSwzLjA0OSwxMC43NiwzLjA0OSw3Ljc4NmMwLTAuODQ3LDAuMzAyLTEuNTQsMC43OTktMi4wODJDMy43NjgsNS41MDcsMy41MDEsNC43MTgsMy45MjQsMy42NSBjMCwwLDAuNjUyLTAuMjA5LDIuMTM0LDAuNzk2QzYuNjc3LDQuMjczLDcuMzQsNC4xODcsOCw0LjE4NGMwLjY1OSwwLjAwMywxLjMyMywwLjA4OSwxLjk0MywwLjI2MSBjMS40ODItMS4wMDQsMi4xMzItMC43OTYsMi4xMzItMC43OTZjMC40MjMsMS4wNjgsMC4xNTcsMS44NTcsMC4wNzcsMi4wNTRjMC40OTcsMC41NDIsMC43OTgsMS4yMzUsMC43OTgsMi4wODIgYzAsMi45ODEtMS44MTQsMy42MzctMy41NDMsMy44MjljMC4yNzksMC4yNCwwLjUyNywwLjcxMywwLjUyNywxLjQzN2MwLDEuMDM3LTAuMDEsMS44NzQtMC4wMSwyLjEyOSBjMCwwLjIwOCwwLjE0LDAuNDQ5LDAuNTM0LDAuMzczYzMuMDgxLTEuMDI4LDUuMzAyLTMuOTM1LDUuMzAyLTcuMzYyQzE1Ljc2LDMuOTA2LDEyLjI4NSwwLjQzMSw3Ljk5OSwwLjQzMXpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cImxpbmtzbGlzdF9fdXNlcm5hbWUgdmlzdWFsbHloaWRkZW5cIj55b2tzZWwvZW1vamktYnJ1c2gvPC9zcGFuPjwvYT5cbiAgICA8L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwibGlua3NsaXN0X19pdGVtXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS95b2tzZWxfZW5cIiBjbGFzcz1cImxpbmtzbGlzdF9fbGlua1wiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwibGlua3NsaXN0X19pY29uIGxpbmtzbGlzdF9faWNvbi0tdHdpdHRlclwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj48cGF0aCBkPVwiTTE1Ljk2OSwzLjA1OGMtMC41ODYsMC4yNi0xLjIxNywwLjQzNi0xLjg3OCwwLjUxNWMwLjY3NS0wLjQwNSwxLjE5NC0xLjA0NSwxLjQzOC0xLjgwOWMtMC42MzIsMC4zNzUtMS4zMzIsMC42NDctMi4wNzYsMC43OTNjLTAuNTk2LTAuNjM2LTEuNDQ2LTEuMDMzLTIuMzg3LTEuMDMzYy0xLjgwNiwwLTMuMjcsMS40NjQtMy4yNywzLjI3IGMwLDAuMjU2LDAuMDI5LDAuNTA2LDAuMDg1LDAuNzQ1QzUuMTYzLDUuNDA0LDIuNzUzLDQuMTAyLDEuMTQsMi4xMjRDMC44NTksMi42MDcsMC42OTgsMy4xNjgsMC42OTgsMy43NjcgYzAsMS4xMzQsMC41NzcsMi4xMzUsMS40NTUsMi43MjJDMS42MTYsNi40NzIsMS4xMTIsNi4zMjUsMC42NzEsNi4wOGMwLDAuMDE0LDAsMC4wMjcsMCwwLjA0MWMwLDEuNTg0LDEuMTI3LDIuOTA2LDIuNjIzLDMuMjA2IEMzLjAyLDkuNDAyLDIuNzMxLDkuNDQyLDIuNDMzLDkuNDQyYy0wLjIxMSwwLTAuNDE2LTAuMDIxLTAuNjE1LTAuMDU5YzAuNDE2LDEuMjk5LDEuNjI0LDIuMjQ1LDMuMDU1LDIuMjcxIGMtMS4xMTksMC44NzctMi41MjksMS40LTQuMDYxLDEuNGMtMC4yNjQsMC0wLjUyNC0wLjAxNS0wLjc4LTAuMDQ2YzEuNDQ3LDAuOTI4LDMuMTY2LDEuNDY5LDUuMDEzLDEuNDY5IGM2LjAxNSwwLDkuMzA0LTQuOTgzLDkuMzA0LTkuMzA0YzAtMC4xNDItMC4wMDMtMC4yODMtMC4wMDktMC40MjNDMTQuOTc2LDQuMjksMTUuNTMxLDMuNzE0LDE1Ljk2OSwzLjA1OHpcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGlua3NsaXN0X191c2VybmFtZSB2aXN1YWxseWhpZGRlblwiPnlva3NlbF9lbjwvc3Bhbj48L2E+XG4gICAgPC9saT5cbiAgPC91bD5cblxuICA8ZGl2IGNsYXNzPVwiZGlzY2xhaW1lclwiPlxuICAgIPCfm6AgRGVlcGx5IGV4cGVyaW1lbnRhbC4gTWF5IGJlIHNsb3cgb3Igbm90IHdvcmsgb24geW91ciBkZXZpY2Ugb3IgYnJvd3Nlci4gU29ycnkg8J+SmlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1nZXRcIj5HZXQgaW1hZ2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtcG5nXCI+RG93bmxvYWQgUE5HPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVHcm91cC5pbm5lckhUTUwgPSBgPHBhdGhcbiAgaWQ9XCJwYXRoLXtpZH1cIlxuICBkPVwiXCJcbiAgc3Ryb2tlLXdpZHRoPVwie2ZvbnRTaXplfVwiXG4gIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuPHRleHRcbiAgZm9udC1zaXplPVwie2ZvbnRTaXplfVwiIGNsYXNzPVwidGV4dFwiPlxuICA8dGV4dFBhdGhcbiAgICBocmVmPVwiI3BhdGgte2lkfVwiXG4gICAgY2xhc3M9XCJ0ZXh0LXBhdGhcIlxuICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIj48L3RleHRQYXRoPlxuPC90ZXh0PlxuYDtcbiIsImltcG9ydCB7dGhlbWVzLCBiYXNlQWNjZW50c30gZnJvbSAnLi90aGVtZXMuanMnO1xuaW1wb3J0IHt0ZW1wbGF0ZX0gZnJvbSAnLi90bXBsLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTd2l0Y2hlciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgdGhpcy5lbGVtID0gdGhpcy5zaGFkb3dSb290O1xuICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoZW1lcy5sZW5ndGgpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IG51bGw7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNscyA9IHtcbiAgICAgIGNvbGxhcHNlZDogJ2NvbnRyb2xzLS1jb2xsYXBzZWQnLFxuICAgICAgY3VycmVudDogJ2NvbnRyb2wtLWN1cnJlbnQnXG4gICAgfVxuXG4gICAgdGhpcy5hZGRDb250cm9scygpO1xuXG4gICAgdGhpcy5vbkNvbnRyb2xDbGljayA9IHRoaXMub25Db250cm9sQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VQYW5lbCA9IHRoaXMuY2xvc2VQYW5lbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYWRkQ29udHJvbHMoKSB7XG4gICAgdGhlbWVzLmZvckVhY2goKHRoZW1lLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGJnU3RyID0gdGhpcy5nZXRCYWNrZ3JvdW5kU3RyKHRoZW1lLmNvbG9ycyk7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gJ2NvbnRyb2wnO1xuICAgICAgbGV0IGNvbG9yID0gYmFzZUFjY2VudHMuYmFzZTtcbiAgICAgIGlmKHRoZW1lLmFjY2VudHMpIHtcbiAgICAgICAgY29sb3IgPSB0aGVtZS5hY2NlbnRzLmJhc2U7XG4gICAgICB9XG5cbiAgICAgIGlmKGluZGV4ID09PSB0aGlzLmN1cnJlbnRUaGVtZU51bSkge1xuICAgICAgICBjbGFzc05hbWUgKz0gJyBjb250cm9sLS1jdXJyZW50JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udHJvbFN0ciA9IGA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiXG4gICAgICAgIHRpdGxlPVwiJHt0aGVtZS5uYW1lfVwiXG4gICAgICAgIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ1N0cn07IGNvbG9yOiAke2NvbG9yfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmlzdWFsbHloaWRkZW5cIj4ke3RoZW1lLm5hbWV9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5gO1xuXG4gICAgICB0aGlzLmNvbnRyb2xzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgY29udHJvbFN0cik7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbHMuY3VycmVudH1gKTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNvbnRyb2xDbGljayk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlUGFuZWwpO1xuXG4gICAgLy8gU2V0IGN1cnJlbnQgdGhlbWUgdG8gcGFnZSAmIGNvbXBvbmVudFxuICAgIHRoaXMuZGlzcGF0Y2hDaGFuZ2VUaGVtZSgpO1xuICB9XG5cbiAgb25Db250cm9sQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNscy5jb2xsYXBzZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZU51bSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG5cbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmN1cnJlbnQpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaGVtZUVsZW0gPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIHRoaXMuY2xvc2VQYW5lbChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VQYW5lbChldmVudCkge1xuICAgIGlmKGV2ZW50LnRhcmdldCA9PT0gdGhpcyB8fCB0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gIH1cblxuICBkaXNwYXRjaENoYW5nZVRoZW1lKCkge1xuICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzW3RoaXMuY3VycmVudFRoZW1lTnVtXTtcbiAgICBpZighdGhlbWUuYWNjZW50cykge1xuICAgICAgdGhlbWUuYWNjZW50cyA9IGJhc2VBY2NlbnRzO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2xzLnN0eWxlLmJhY2tncm91bmQgPSB0aGVtZS5jb2xvcnNbMF07XG5cbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlLXRoZW1lJywge1xuICAgICAgZGV0YWlsOiB0aGVtZSxcbiAgICAgIGJ1YmJsZXM6IHRydWVcbiAgICB9KSk7XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKCFldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IobGV0IGtleSBpbiBldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShgLS1jb2xvci0ke2tleX1gLCBldmVudC5kZXRhaWwuYWNjZW50c1trZXldKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBiYXNlQWNjZW50cyA9IHtcbiAgYmFzZTogJ3doaXRlJyxcbiAgYmFzZXRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgdGV4dDogJ2JsYWNrJyxcbiAgdGV4dHRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgaG92ZXI6ICdhcXVhJyxcbiAgZm9jdXM6ICdvcmFuZ2VyZWQnLFxuICBmb2N1c2hvdmVyOiAnZ29sZCdcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZXMgPSBbXG4gIHtcbiAgICBuYW1lOiAnRmlyZWJyaWNrJyxcbiAgICBjb2xvcnM6IFsnZmlyZWJyaWNrJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpYW5yZWQnLFxuICAgIGNvbG9yczogWydpbmRpYW5yZWQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGZvY3VzOiAncHVycGxlJyxcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR29sZCcsXG4gICAgY29sb3JzOiBbJ2dvbGQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICAgICAgZm9jdXNob3ZlcjogJ3llbGxvd2dyZWVuJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdraGFraScsXG4gICAgY29sb3JzOiBbJ2toYWtpJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgICAgIGZvY3VzaG92ZXI6ICd5ZWxsb3dncmVlbidcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnWWVsbG93Z3JlZW4nLFxuICAgIGNvbG9yczogWyd5ZWxsb3dncmVlbiddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAnZG9kZ2VyYmx1ZScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICAgICAgZm9jdXNob3ZlcjogJ3RlYWwnXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1R1cnF1b2lzZScsXG4gICAgY29sb3JzOiBbJ3R1cnF1b2lzZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAndGVhbCcsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1RlYWwnLFxuICAgIGNvbG9yczogWyd0ZWFsJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTa3libHVlJyxcbiAgICBjb2xvcnM6IFsnc2t5Ymx1ZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIGhvdmVyOiAndGVhbCcsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N0ZWVsYmx1ZScsXG4gICAgY29sb3JzOiBbJ3N0ZWVsYmx1ZSddXG4gIH0se1xuICAgIG5hbWU6ICdNaWRuaWdodGJsdWUnLFxuICAgIGNvbG9yczogWydtaWRuaWdodGJsdWUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0RhcmtzbGF0ZWJsdWUnLFxuICAgIGNvbG9yczogWydkYXJrc2xhdGVibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmRpZ28nLFxuICAgIGNvbG9yczogWydpbmRpZ28nXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1B1cnBsZScsXG4gICAgY29sb3JzOiBbJ3B1cnBsZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnV2hpdGUnLFxuICAgIGNvbG9yczogWycjRkZGJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdHcmF5JyxcbiAgICBjb2xvcnM6IFsnIzMzMyddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQmxhY2snLFxuICAgIGNvbG9yczogWycjMDAwJ10sXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlXG4gICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDRyZW07XG5cbiAgICAgIC0tY29sb3ItYmFzZTogd2hpdGU7XG4gICAgICAtLWNvbG9yLWJhc2V0cmFuc3A6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICAgIH1cblxuICAgIC52aXN1YWxseWhpZGRlbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0LFxuICAgICAgICAwIDAgNHB4IDJweCByZ2JhKDAsMCwwLC4yNSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gLjQ1cztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIG1hcmdpbjtcbiAgICB9XG5cbiAgICAuY29udHJvbDpub3QoY29udHJvbC0tY3VycmVudCkge1xuXG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29udHJvbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDAgNHB4IHZhcigtLWNvbG9yLWJhc2V0cmFuc3ApO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkIC5jb250cm9sIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTNyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggY3VycmVudENvbG9yIGluc2V0O1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtLjI1cmVtO1xuICAgICAgcmlnaHQ6IC0uMjVyZW07XG4gICAgICBib3R0b206IC0uMjVyZW07XG4gICAgICBsZWZ0OiAtLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLWJhc2UpO1xuICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OmZvY3VzOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50IHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1jb2xvci1iYXNlKSBpbnNldDtcbiAgICB9XG4gICAgLmNvbnRyb2xzLS1jb2xsYXBzZWQ6aG92ZXIgLmNvbnRyb2wtLWN1cnJlbnQ6OmFmdGVyIHtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcm90YXRpb24ge1xuICAgICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICB9XG4gICAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRyb2xzIGNvbnRyb2xzLS1jb2xsYXBzZWRcIj48L2Rpdj5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9