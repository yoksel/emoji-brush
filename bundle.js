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

    this.lineStyle = Object.values(_lineStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"])[0];
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
      currentValue: 'mirrored-offset'
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

    this.paintArea.addEventListener('mousedown', this.onMouseDown);
    this.paintArea.addEventListener('mouseup', this.onMouseUp);

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

    this.paintArea.addEventListener('mousemove', this.onMouseMove);
    document.body.addEventListener('mouseout', this.bodyMouseOut);
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
      this.paintArea.removeEventListener('mousemove', this.onMouseMove);
      return;
    }

    // There was not mouse move
    if(this.points.list.length == 0 && this.current.group) {
      // Remove latest path
      this.current.group.remove();
      this.paintArea.removeEventListener('mousemove', this.onMouseMove);
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

    this.paintArea.removeEventListener('mousemove', this.onMouseMove);
    document.body.removeEventListener('mouseout', this.bodyMouseOut);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2ZvbnRTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Vtb2ppQnJ1c2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL2xpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9FbW9qaUJydXNoL3N5bWJvbHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvRW1vamlCcnVzaC90bXBsLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL1RoZW1lU3dpdGNoZXIvdGhlbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVGhlbWVTd2l0Y2hlci90bXBsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ25EMUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7OztBQ3RCdEI7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnNvbGUuY2xlYXIoKTtcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJy4vbGliL1RoZW1lU3dpdGNoZXIvaW5kZXguanMnO1xuaW1wb3J0IEVtb2ppQnJ1c2ggZnJvbSAnLi9saWIvRW1vamlCcnVzaC9pbmRleC5qcyc7XG5cbihmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhY2tncm91bmRTdHIoZXZlbnQuZGV0YWlsLmNvbG9ycylcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFN0cihjb2xvcnNMaXN0KSB7XG4gICAgbGV0IGJnU3RyID0gJyc7XG5cbiAgICBpZihjb2xvcnNMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgYmdTdHIgPSBjb2xvcnNMaXN0WzBdXG4gICAgICByZXR1cm4gYmdTdHI7XG4gICAgfVxuXG4gICAgYmdTdHIgPSBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHtjb2xvcnNMaXN0LmpvaW4oJywnKX0pYDtcbiAgICByZXR1cm4gYmdTdHI7XG4gIH1cblxuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdlbW9qaS1icnVzaCcsIEVtb2ppQnJ1c2gpO1xuICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd0aGVtZS1zd2l0Y2hlcicsIFRoZW1lU3dpdGNoZXIpO1xufSkoKTtcbiIsImNvbnN0IGNvbG9ycyA9IFtcbiAgJ2NyaW1zb24nLFxuICAnZ29sZCcsXG4gICd5ZWxsb3dncmVlbicsXG4gICd0ZWFsJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3JzO1xuIiwiY29uc3QgZm9udFNpemVzID0gW1xuICAxNixcbiAgMjQsXG4gIDMyLFxuICA0MCxcbiAgNDgsXG4gIDU2LFxuICA2NCxcbiAgNzIsXG4gIDgwLFxuICA4OCxcbiAgOTYsXG4gIDEwNCxcbiAgMTEyXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmb250U2l6ZXM7XG4iLCJjb25zdCBpZ25vcmVkVW5pY29kZU1vZGlmaWVycyA9IHtcbiAgNjUwMzg6IDEsIC8vICYjeEZFMEUsIHRleHQgbW9kaWZpZXJcbiAgNjUwMzk6IDEsIC8vICYjeEZFMEYsIGVtb2ppIG1vZGlmaWVyXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RlcCA9ICh7ZnJvbSwgdG99KSA9PiB7XG4gIGNvbnN0IG1vdmVYID0gTWF0aC5hYnModG8ueCAtIGZyb20ueCk7XG4gIGNvbnN0IG1vdmVZID0gTWF0aC5hYnModG8ueSAtIGZyb20ueSk7XG4gIHJldHVybiBNYXRoLm1heChtb3ZlWCxtb3ZlWSk7XG59O1xuXG5leHBvcnQgY29uc3QgcG9pbnRzVG9TdHIgPSAocG9pbnRzTGlzdCkgPT4ge1xuICByZXR1cm4gcG9pbnRzTGlzdFxuICAgIC5tYXAoKHt4LCB5fSkgPT4gYCR7eH0sJHt5fWApXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbi8vIFJldHVybiBzY2FsZSB2YWx1ZSBpZiBzdmcgd2FzIHJlc2l6ZWRcbmV4cG9ydCBjb25zdCBnZXRTY2FsZSA9IChtZWFzdXJlUGF0aCkgPT4ge1xuICBjb25zdCB3aWR0aCA9IG1lYXN1cmVQYXRoLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgY29uc3QgcmVjdCA9IG1lYXN1cmVQYXRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB3aWR0aCAvIHJlY3Qud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3ltYm9sc0xpc3QgPSAoc3RyKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBbXTtcblxuICBmb3IgKGxldCBjaGFyIG9mIHN0cikge1xuICAgIGxldCB1bmljb2RlTnVtID0gY2hhci5jb2RlUG9pbnRBdCgpO1xuICAgIC8vIElnbm9yZSBlbW9qaSBtb2RpZmllcnNcbiAgICAvLyBmaXggcHJvYmxlbSBmb3IgZW1vamkgbGlrZSB0aGlzIOKtkO+4j1xuICAgIC8vIGZvci4ub2YgY2FuJ3QgaGFuZGxlIGl0IGxpa2Ugb25lIHN5bWJvbFxuICAgIGlmKCFjaGFyIHx8IGlnbm9yZWRVbmljb2RlTW9kaWZpZXJzW3VuaWNvZGVOdW1dKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZW1vamkgbW9kaWZpZXIgdG8gZXZlcnkgc3ltYm9sXG4gICAgbGlzdC5wdXNoKGAke2NoYXJ9JiN4RkUwRmApO1xuICB9XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbFNlbGVjdCA9ICh7ZWxlbSwgY3VycmVudFZhbHVlLCBsaXN0fSkgPT4ge1xuICBsaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpdGVtLm5hbWUgPyBpdGVtLm5hbWUgOiBpdGVtO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdmFsdWUgPT09IGN1cnJlbnRWYWx1ZSA/ICdzZWxlY3RlZCcgOiAnJztcbiAgICBlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsdWV9XCIgJHtzZWxlY3RlZH0+JHt2YWx1ZX08L29wdGlvbj5gKTtcbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBmaWxsVGVtcGxhdGUgPSAoe3RtcGwsIGRhdGF9KSA9PiB7XG4gIGlmKCF0bXBsIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHRtcGwucmVwbGFjZSgveyhbXlwiXXsxLH0pfS9nbSwgKG1hdGNoLCBzdHIpID0+IHtcbiAgICBpZiAoZGF0YVtzdHJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRhW3N0cl07XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFbW9qaVN0ckxlbmd0aCA9IChzdHIpID0+IHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuXG4gIGZvciAobGV0IGNoYXIgb2Ygc3RyKSB7XG4gICAgbGV0IHVuaWNvZGVOdW0gPSBjaGFyLmNvZGVQb2ludEF0KCk7XG5cbiAgICBpZighY2hhciB8fCBpZ25vcmVkVW5pY29kZU1vZGlmaWVyc1t1bmljb2RlTnVtXSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY291bnRlcisrO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50ZXI7XG59O1xuIiwiaW1wb3J0IHtnZXRTdGVwLCBwb2ludHNUb1N0ciwgZ2V0U2NhbGUsIGdldFN5bWJvbHNMaXN0LCBmaWxsU2VsZWN0LCBmaWxsVGVtcGxhdGV9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlU3R5bGVzLCB0ZW1wbGF0ZU1hcmt1cCwgdGVtcGxhdGVHcm91cH0gZnJvbSAnLi90bXBsLmpzJztcbmltcG9ydCBzeW1ib2xzTGlzdCBmcm9tICcuL3N5bWJvbHNMaXN0LmpzJztcbmltcG9ydCBsaW5lU3R5bGVzIGZyb20gJy4vbGluZVN0eWxlcy5qcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vY29sb3JzLmpzJztcbmltcG9ydCBmb250U2l6ZXMgZnJvbSAnLi9mb250U2l6ZXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbW9qaUJydXNoIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZChcbiAgICAgIHRlbXBsYXRlU3R5bGVzLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLFxuICAgICAgdGVtcGxhdGVNYXJrdXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICApO1xuXG4gICAgdGhpcy5wYWludEFyZWEgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3BhaW50LWFyZWEnKTtcbiAgICB0aGlzLnRhcmdldEdyb3VwID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCd0YXJnZXQtZ3JvdXAnKTtcbiAgICB0aGlzLmNsZWFyQ29udHJvbCA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZSA9IHRoaXMuZWxlbS5nZXRFbGVtZW50QnlJZCgnaW5wdXQtc3ltYm9scy1jaG9pY2UnKTtcbiAgICB0aGlzLnNlbGVjdFN5bWJvbHMgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zeW1ib2xzJyk7XG4gICAgdGhpcy5hZGRTeW1ib2xzID0gdGhpcy5lbGVtLmdldEVsZW1lbnRCeUlkKCdhZGQtc3ltYm9scycpO1xuICAgIHRoaXMuc2VsZWN0U3R5bGUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1zdHlsZScpO1xuICAgIHRoaXMuc2VsZWN0Rm9udFNpemUgPSB0aGlzLmVsZW0uZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1mb250LXNpemUnKTtcbiAgICB0aGlzLnNjYWxlID0gZ2V0U2NhbGUodGhpcy5wYWludEFyZWEuZ2V0RWxlbWVudEJ5SWQoJ21lYXN1cmUtcmVjdCcpKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKTtcbiAgICB0aGlzLmNvbnRyb2xHZXQgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcignLmNvbnRyb2wtLWdldCcpO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy5saW5rcyA9IHtcbiAgICAgIHBuZzogdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLS1kb3dubG9hZC1wbmcnKVxuICAgIH07XG5cbiAgICB0aGlzLnNlbGVjdGVkID0ge307XG4gICAgdGhpcy5wb2ludHMgPSB7XG4gICAgICBsaXN0OiBbXSxcbiAgICAgIGxhc3Q6IHt9XG4gICAgfTtcbiAgICB0aGlzLnJvdGF0aW9uID0ge1xuICAgICAgbWF4OiA2XG4gICAgfTtcblxuICAgIHRoaXMuY3VycmVudCA9IHtcbiAgICAgIGNvdW50ZXI6IDBcbiAgICB9O1xuXG4gICAgLy8gVHJ5IHRvIGRyYXcgc3RyYWlnaHQgbGlnaHQsIGFkZCBsYXRlclxuICAgIHRoaXMubW92ZVRocmVzaG9sZCA9IHtcbiAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgZGVmYXVsdDogMjBcbiAgICB9O1xuICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMud2F2ZXMgPSB7XG4gICAgICBjb3VudGVyOiAwLFxuICAgICAgbWF4OiAyLFxuICAgICAgaWREaXJlY3Rpb25VcDogdHJ1ZVxuICAgIH07XG5cbiAgICAvLyBVc2VkIHRvIGFkZCBtb3JlIHN5bWJvbHMgZm9yIHRpbnkgZm9udC1zaXplXG4gICAgdGhpcy5wYXRoRmlsbHMgPSB7fTtcblxuICAgIHRoaXMuc3ltYm9scyA9IHtcbiAgICAgIHN0cjogc3ltYm9sc0xpc3RbMF0sXG4gICAgICBjdXJyZW50UG9zOiAwLFxuICAgIH07XG4gICAgdGhpcy5zeW1ib2xzLmxpc3QgPSBnZXRTeW1ib2xzTGlzdCh0aGlzLnN5bWJvbHMuc3RyKTtcblxuICAgIHRoaXMubGluZVN0eWxlID0gT2JqZWN0LnZhbHVlcyhsaW5lU3R5bGVzKVswXTtcbiAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemVzWzNdO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVN5bWJvbHNTZXQgPSB0aGlzLmNoYW5nZVN5bWJvbHNTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZUxpbmVTdHlsZSA9IHRoaXMuY2hhbmdlTGluZVN0eWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VGb250U2l6ZSA9IHRoaXMuY2hhbmdlRm9udFNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlLZXlVcCA9IHRoaXMuYm9keUtleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ib2R5S2V5RG93biA9IHRoaXMuYm9keUtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVRoZW1lID0gdGhpcy5jaGFuZ2VUaGVtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlU3ltYm9sc0lucHV0ID0gdGhpcy5jaG9vc2VTeW1ib2xzSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJvZHlNb3VzZU91dCA9IHRoaXMuYm9keU1vdXNlT3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVwYXJlSW1hZ2VzID0gdGhpcy5wcmVwYXJlSW1hZ2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGVhciA9IHRoaXMuY2xlYXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN5bWJvbHMsXG4gICAgICBsaXN0OiBzeW1ib2xzTGlzdCxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlU3ltYm9sc1NldCxcbiAgICAgIGN1cnJlbnRWYWx1ZTogc3ltYm9sc0xpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3ltYm9sc0xpc3QubGVuZ3RoKV1cbiAgICB9KTtcblxuICAgIHRoaXMuaW5pdFNlbGVjdCh7XG4gICAgICBlbGVtOiB0aGlzLnNlbGVjdFN0eWxlLFxuICAgICAgbGlzdDogT2JqZWN0LnZhbHVlcyhsaW5lU3R5bGVzKSxcbiAgICAgIGhhbmRsZXI6IHRoaXMuY2hhbmdlTGluZVN0eWxlLFxuICAgICAgY3VycmVudFZhbHVlOiAnbWlycm9yZWQtb2Zmc2V0J1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbml0U2VsZWN0KHtcbiAgICAgIGVsZW06IHRoaXMuc2VsZWN0Rm9udFNpemUsXG4gICAgICBsaXN0OiBmb250U2l6ZXMsXG4gICAgICBoYW5kbGVyOiB0aGlzLmNoYW5nZUZvbnRTaXplLFxuICAgICAgY3VycmVudFZhbHVlOiAzMlxuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5jbGVhckNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsZWFyKTtcblxuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24pO1xuICAgIHRoaXMucGFpbnRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCk7XG5cbiAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvb3NlU3ltYm9sc0lucHV0KTtcbiAgICB0aGlzLmFkZFN5bWJvbHMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmNoYW5nZVN5bWJvbHNTZXQpO1xuICAgIHRoaXMuY29udHJvbEdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJlcGFyZUltYWdlcyk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5ib2R5S2V5VXApO1xuICAgIC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm9keUtleURvd24pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlLXRoZW1lJywgdGhpcy5jaGFuZ2VUaGVtZSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvL1xuICB9XG5cbiAgaW5pdFNlbGVjdCh7ZWxlbSwgbGlzdCwgY3VycmVudFZhbHVlLCBoYW5kbGVyfSkge1xuICAgIGZpbGxTZWxlY3Qoe1xuICAgICAgZWxlbSxcbiAgICAgIGxpc3QsXG4gICAgICBjdXJyZW50VmFsdWVcbiAgICB9KTtcblxuICAgIGhhbmRsZXIoKTtcblxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvbk1vdXNlRG93bihldmVudCkge1xuICAgIGlmKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgIHRoaXMuY2xpY2tlZFBhdGggPSBldmVudC50YXJnZXQ7XG4gICAgfVxuICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0TW91c2VPZmZzZXQoZXZlbnQpO1xuICAgIHRoaXMucG9pbnRzLmxhc3QgPSBzdGFydDtcbiAgICB0aGlzLnBvaW50cy5saXN0ID0gW107XG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MgPSAwO1xuXG4gICAgbGV0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XG4gICAgZ3JvdXAuaWQgPSBgZ3JvdXAtJHt0aGlzLmN1cnJlbnQuY291bnRlcn1gO1xuXG4gICAgY29uc3QgY29udGVudCA9IGZpbGxUZW1wbGF0ZSh7XG4gICAgICB0bXBsOiB0ZW1wbGF0ZUdyb3VwLmlubmVySFRNTCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRoaXMuY3VycmVudC5jb3VudGVyLFxuICAgICAgICBmb250U2l6ZTogYCR7dGhpcy5mb250U2l6ZX1weGBcbiAgICAgIH1cbiAgICB9KTtcbiAgICBncm91cC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsY29udGVudCk7XG4gICAgdGhpcy50YXJnZXRHcm91cC5hcHBlbmQoZ3JvdXApO1xuXG4gICAgbGV0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgcGF0aC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXBhdGgnKTtcbiAgICBsZXQgdGV4dFBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0UGF0aCcpO1xuICAgIGNvbnN0IHRleHQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0Jyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSB7XG4gICAgICAuLi50aGlzLmN1cnJlbnQsXG4gICAgICBncm91cCxcbiAgICAgIHBhdGgsXG4gICAgICB0ZXh0LFxuICAgICAgdGV4dERvdWJsZTogbnVsbCxcbiAgICAgIHRleHRQYXRoLFxuICAgICAgdGV4dFBhdGhEb3VibGU6IG51bGwsXG4gICAgICBzdGFydCxcbiAgICAgIGNvdW50ZXI6ICsrdGhpcy5jdXJyZW50LmNvdW50ZXJcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RpZnlQYXRocygpO1xuXG4gICAgdGhpcy5wYWludEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHRoaXMuYm9keU1vdXNlT3V0KTtcbiAgICB0aGlzLm1vdXNlT3V0UG9pbnRzID0ge307XG4gIH1cblxuICBtb2RpZnlQYXRocyhwYXJhbXMgPSB7fSkge1xuICAgIGxldCBoYXNDdXJyZW50ID0gZmFsc2U7XG5cbiAgICBpZighcGFyYW1zLnRleHQpIHtcbiAgICAgIHBhcmFtcyA9IHRoaXMuY3VycmVudDtcbiAgICAgIGhhc0N1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLmRvdWJsZSAmJiAhcGFyYW1zLnRleHREb3VibGUpIHtcbiAgICAgIGxldCB7dGV4dERvdWJsZSwgdGV4dFBhdGhEb3VibGV9ID0gdGhpcy5nZXRUZXh0RG91YmxlKHBhcmFtcyk7XG5cbiAgICAgIHBhcmFtcy50ZXh0RG91YmxlID0gdGV4dERvdWJsZTtcbiAgICAgIHBhcmFtcy50ZXh0UGF0aERvdWJsZSA9IHRleHRQYXRoRG91YmxlO1xuICAgIH1cblxuICAgIGxldCB7Z3JvdXAsIHRleHQsIHRleHREb3VibGUsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZHknLCAnLjM1ZW0nKTtcblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLm1pcnJvcmVkKSB7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZHknLCAnLS4xMmVtJyk7XG4gICAgICB0ZXh0RG91YmxlLnNldEF0dHJpYnV0ZSgnZHknLCAnLS4xMmVtJylcbiAgICAgIHRleHREb3VibGUuc2V0QXR0cmlidXRlKCdyb3RhdGUnLCAxODApO1xuICAgICAgdGV4dFBhdGhEb3VibGUuc2V0QXR0cmlidXRlKCdzdGFydE9mZnNldCcsIGAke3RoaXMucGF0aE9mZnNldH1weGApO1xuICAgIH1cblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnNjYXR0ZXJlZCkge1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTNlbScpO1xuICAgICAgdGV4dERvdWJsZS5zZXRBdHRyaWJ1dGUoJ2R5JywgJy0uMTNlbScpO1xuICAgICAgZ3JvdXAuc3R5bGUubGV0dGVyU3BhY2luZyA9ICcuMWVtJztcbiAgICB9XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zdGFydE9mZnNldCkge1xuICAgICAgdGV4dFBhdGhEb3VibGUuc2V0QXR0cmlidXRlKCdzdGFydE9mZnNldCcsIGAtJHt0aGlzLnBhdGhPZmZzZXR9cHhgKTtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zdGFydE9mZnNldEJldHdlZW4pIHtcbiAgICAgIHRleHRQYXRoRG91YmxlLnNldEF0dHJpYnV0ZSgnc3RhcnRPZmZzZXQnLCBgLSR7dGhpcy5wYXRoT2Zmc2V0fXB4YCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRSb3RhdGlvbigpO1xuICAgIHRoaXMuc2V0V2F2ZXMoKTtcbiAgfVxuXG4gIHNldFJvdGF0aW9uKCkge1xuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLnJvdGF0ZWQpIHtcbiAgICAgIHRoaXMucm90YXRpb24gPSB7XG4gICAgICAgIC4uLnRoaXMucm90YXRpb24sXG4gICAgICAgIHN0ZXBBbmdsZTogMzYwIC8gdGhpcy5yb3RhdGlvbi5tYXgsXG4gICAgICAgIGNvdW50ZXI6IDBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc2V0V2F2ZXMoKSB7XG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMud2F2ZXMpIHtcbiAgICAgIHRoaXMud2F2ZXMuY291bnRlciA9IDA7XG4gICAgICB0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXAgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRleHREb3VibGUocGFyYW1zKSB7XG4gICAgbGV0IHtncm91cCwgdGV4dH0gPSBwYXJhbXM7XG5cbiAgICBjb25zdCB0ZXh0RG91YmxlID0gdGV4dC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGV4dERvdWJsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LS1kb3VibGUnKTtcbiAgICBjb25zdCB0ZXh0UGF0aERvdWJsZSA9IHRleHREb3VibGUucXVlcnlTZWxlY3RvcigndGV4dFBhdGgnKTtcbiAgICB0ZXh0UGF0aERvdWJsZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LXBhdGgtLWRvdWJsZScpO1xuICAgIGdyb3VwLmFwcGVuZCh0ZXh0RG91YmxlKTtcblxuICAgIHJldHVybiB7dGV4dERvdWJsZSwgdGV4dFBhdGhEb3VibGV9O1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBpZighZXZlbnQuYnV0dG9ucykge1xuICAgICAgdGhpcy5tb3VzZU91dFBvaW50cy5maW5pc2hQYXRoID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29vcmRzID0gdGhpcy5nZXRNb3VzZU9mZnNldChldmVudCk7XG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCBtb3ZlU2l6ZSA9IGdldFN0ZXAoe1xuICAgICAgZnJvbTogdGhpcy5wb2ludHMubGFzdCxcbiAgICAgIHRvOiBjb29yZHNcbiAgICB9KTtcblxuICAgIGlmKG1vdmVTaXplID4gdGhpcy5tb3ZlVGhyZXNob2xkLnZhbHVlKSB7XG4gICAgICB0aGlzLnBvaW50cy5saXN0LnB1c2goY29vcmRzKTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aChjb29yZHMpO1xuICAgICAgdGhpcy51cGRhdGVUZXh0KCk7XG4gICAgICB0aGlzLnBvaW50cy5sYXN0ID0gY29vcmRzO1xuICAgIH1cblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgLy8gSGFuZGxlIGNsaWNrIG9uIHBhdGhcbiAgICBpZih0aGlzLmNsaWNrZWRQYXRoKSB7XG4gICAgICB0aGlzLm1vdXNlQ2xpY2tQYXRoKCk7XG5cbiAgICAgIC8vIFJlbW92ZSBsYXRlc3QgcGF0aFxuICAgICAgdGhpcy5jdXJyZW50Lmdyb3VwLnJlbW92ZSgpO1xuICAgICAgdGhpcy5wYWludEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgd2FzIG5vdCBtb3VzZSBtb3ZlXG4gICAgaWYodGhpcy5wb2ludHMubGlzdC5sZW5ndGggPT0gMCAmJiB0aGlzLmN1cnJlbnQuZ3JvdXApIHtcbiAgICAgIC8vIFJlbW92ZSBsYXRlc3QgcGF0aFxuICAgICAgdGhpcy5jdXJyZW50Lmdyb3VwLnJlbW92ZSgpO1xuICAgICAgdGhpcy5wYWludEFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51bnNlbGVjdCgpO1xuXG4gICAgLy8gVHJ5IHRvIGZpeCByYW5kb20gYnVnXG4gICAgaWYoIXRoaXMuY3VycmVudC5wYXRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3IgY29udGludWUgd2l0aCBsYXRlc3QgcGF0aFxuICAgIHRoaXMucG9pbnRzLmxhc3QgPSB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KTtcblxuICAgIGlmKHRoaXMubW91c2VPdXRQb2ludHMgJiYgdGhpcy5tb3VzZU91dFBvaW50cy5maW5pc2hQYXRoKSB7XG4gICAgICB0aGlzLnBvaW50cy5sYXN0ID0gdGhpcy5tb3VzZU91dFBvaW50cy5jb29yZHM7XG4gICAgfVxuXG4gICAgbGV0IHtzdGFydH0gPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50LnBhdGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1wYXRoJyk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhdGgodGhpcy5wb2ludHMubGFzdCk7XG4gICAgdGhpcy51cGRhdGVUZXh0KCk7XG5cbiAgICB0aGlzLnBhaW50QXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5ib2R5TW91c2VPdXQpO1xuICAgIHRoaXMuZmlsbFJlc3RPZlBhdGgoKTtcbiAgICB0aGlzLmNvbnRyb2xzLmRhdGFzZXQuc3RhdGUgPSAnJztcbiAgICB0aGlzLmNvbnRyb2xHZXQuZGlzYWJsZWQgPSAhdGhpcy50YXJnZXRHcm91cC5pbm5lckhUTUw7XG4gIH1cblxuICBib2R5S2V5VXAoZXZlbnQpIHtcbiAgICBjb25zdCBpc0JvZHkgPSBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0JPRFknO1xuICAgIGNvbnN0IGlzRGVsT3JCYWNrU3BhY2UgPSBldmVudC5rZXlDb2RlID09PSA4IHx8IGV2ZW50LmtleUNvZGUgPT09IDQ2O1xuXG4gICAgLy8gUHJldmVudCByZW1vdmluZyBwYXRoIHdoaWxlIGVkaXQgdGV4dCBpbiBpbnB1dFxuICAgIGlmKGlzQm9keSAmJiBpc0RlbE9yQmFja1NwYWNlKSB7XG4gICAgICB0aGlzLnJlbW92ZVBhdGhzKCk7XG4gICAgfVxuICAgIC8vIFVucHJlc3Mgc2hpZnQsIG5vdCB1c2VkIG5vd1xuICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTYpIHtcbiAgICAgIHRoaXMuaXNTdHJhaWdodExpbmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBib2R5TW91c2VPdXQoZXZlbnQpIHtcbiAgICB0aGlzLm1vdXNlT3V0UG9pbnRzID0ge1xuICAgICAgY29vcmRzOiB0aGlzLmdldE1vdXNlT2Zmc2V0KGV2ZW50KVxuICAgIH07XG4gIH1cblxuICBib2R5S2V5RG93bihldmVudCkge1xuICAgIC8vIFByZXNzIHNoaWZ0LCBub3QgdXNlZCBub3dcbiAgICBpZihldmVudC5rZXlDb2RlID09PSAxNikge1xuICAgICAgdGhpcy5pc1N0cmFpZ2h0TGluZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbW91c2VDbGlja1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aElkID0gdGhpcy5jbGlja2VkUGF0aC5pZDtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuY2xpY2tlZFBhdGguY2xvc2VzdCgnZycpO1xuICAgIGdyb3VwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpO1xuXG4gICAgaWYoZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHQnKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkW3BhdGhJZF0gPSBncm91cDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtwYXRoSWRdO1xuICAgIH1cblxuICAgIHRoaXMuY2xpY2tlZFBhdGggPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlUGF0aCh7eCwgeX0pIHtcbiAgICBsZXQge3N0YXJ0fSA9IHRoaXMuY3VycmVudDtcbiAgICBjb25zdCBwb2ludHMgPSBwb2ludHNUb1N0cih0aGlzLnBvaW50cy5saXN0KTtcblxuICAgIHRoaXMuY3VycmVudC5wYXRoLnNldEF0dHJpYnV0ZShcbiAgICAgICdkJyxcbiAgICAgIGBNJHtzdGFydC54fSwke3N0YXJ0Lnl9ICR7cG9pbnRzfSAke3h9LCR7eX1gKTtcbiAgfVxuXG4gIHVwZGF0ZVRleHQocGFyYW1zID0ge30pIHtcbiAgICBpZighcGFyYW1zLnRleHRQYXRoKSB7XG4gICAgICBwYXJhbXMgPSB0aGlzLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgbGV0IHt0ZXh0UGF0aCwgdGV4dFBhdGhEb3VibGV9ID0gcGFyYW1zO1xuXG4gICAgLy8gdGhpcy5wYXRoRmlsbHMua29lZmYgbmVlZCB0byBhZGQgbW9yZSBzeW1ib2xzIGZvciB0aW55IGZvbnQtc2l6ZVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhdGhGaWxscy5rb2VmZjsgaSsrKSB7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgIHRleHRQYXRoLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgc3ltYm9sKTtcblxuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICAgICAgc3ltYm9sID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIHN5bWJvbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsbCBlbXB0eSBwYXRoIGlmIG1vdXNlIG1vdmVzIHRvbyBmYXN0XG4gIGZpbGxSZXN0T2ZQYXRoKHBhcmFtcyA9IHt9KSB7XG4gICAgaWYoIXBhcmFtcy50ZXh0UGF0aCkge1xuICAgICAgcGFyYW1zID0gdGhpcy5jdXJyZW50O1xuICAgIH1cblxuICAgIGxldCB7cGF0aCwgdGV4dFBhdGgsIHRleHRQYXRoRG91YmxlfSA9IHBhcmFtcztcbiAgICBjb25zdCBwYXRoRmlsbHNNYXggPSBwYXRoLmdldFRvdGFsTGVuZ3RoKCkgLyB0aGlzLmZvbnRTaXplICsgdGhpcy5wYXRoT2Zmc2V0O1xuICAgIGNvbnN0IHRTcGFuc0xlbmd0aCA9IHRleHRQYXRoLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBsZXQgbWlzc2VkU3ltYm9scyA9IHBhdGhGaWxsc01heCAtIHRTcGFuc0xlbmd0aDtcblxuICAgIGlmKCFtaXNzZWRTeW1ib2xzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG1pc3NlZFN5bWJvbHM7IGkrKykge1xuICAgICAgdGhpcy51cGRhdGVUZXh0KHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3ltYm9sKCkge1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLnN5bWJvbHMubGlzdFt0aGlzLnN5bWJvbHMuY3VycmVudFBvc107XG4gICAgbGV0IHJvdGF0ZUF0dHIgPSB0aGlzLmdldFJvdGF0ZUF0dHIoKTtcbiAgICBsZXQgZHlBdHRyID0gdGhpcy5nZXREWVdhdmVzQXR0cigpO1xuICAgIGxldCBmb250U2l6ZUF0dHIgPSB0aGlzLmdldEZvbnRTaXplQXR0cigpO1xuXG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MrKztcblxuICAgIGlmKHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID09PSB0aGlzLnN5bWJvbHMubGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3ltYm9scy5jdXJyZW50UG9zID0gMDtcbiAgICB9XG5cbiAgICBzeW1ib2wgPSBgPHRzcGFuICR7cm90YXRlQXR0cn0ke2R5QXR0cn0ke2ZvbnRTaXplQXR0cn0+JHtzeW1ib2x9PC90c3Bhbj5gXG5cbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG5cbiAgZ2V0Um90YXRlQXR0cigpIHtcbiAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMucm90YXRlZCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFuZ2xlID0gdGhpcy5yb3RhdGlvbi5zdGVwQW5nbGUgKiB0aGlzLnJvdGF0aW9uLmNvdW50ZXI7XG4gICAgbGV0IHJvdGF0ZUF0dHIgPSBgIHJvdGF0ZT1cIiR7YW5nbGV9XCJgO1xuXG4gICAgdGhpcy5yb3RhdGlvbi5jb3VudGVyKys7XG4gICAgaWYodGhpcy5yb3RhdGlvbi5jb3VudGVyID49IHRoaXMucm90YXRpb24ubWF4KSB7XG4gICAgICB0aGlzLnJvdGF0aW9uLmNvdW50ZXIgPSAwO1xuICAgIH1cblxuICAgIHJldHVybiByb3RhdGVBdHRyO1xuICB9XG5cbiAgZ2V0RFlXYXZlc0F0dHIoKSB7XG4gICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLndhdmVzKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgbGV0IGR5VmFsID0gLjU1O1xuICAgIGxldCBkaXJlY3Rpb25TaWduID0gdGhpcy53YXZlcy5pZERpcmVjdGlvblVwID8gMSA6IC0xO1xuICAgIGxldCBkeSA9IGR5VmFsICogZGlyZWN0aW9uU2lnbjtcbiAgICBsZXQgZHlBdHRyID0gYCBkeT1cIiR7ZHl9ZW1cImA7XG5cbiAgICAvLyBIYW5kbGUgd2F2ZXMgY291bnRlclxuICAgIGlmKHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCkge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy53YXZlcy5jb3VudGVyLS07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHdhdmVzIGRpcmVjdGlvblxuICAgIGlmKHRoaXMud2F2ZXMuY291bnRlciA9PSB0aGlzLndhdmVzLm1heCkge1xuICAgICAgdGhpcy53YXZlcy5pZERpcmVjdGlvblVwID0gIXRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcDtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLndhdmVzLmNvdW50ZXIgPT09IDApIHtcbiAgICAgIHRoaXMud2F2ZXMuaWREaXJlY3Rpb25VcCA9ICF0aGlzLndhdmVzLmlkRGlyZWN0aW9uVXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGR5QXR0cjtcbiAgfVxuXG4gIGdldEZvbnRTaXplQXR0cigpIHtcbiAgICBpZighdGhpcy5saW5lU3R5bGUucHJvcHMuc2NhdHRlcmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgZm9udFNpemUgPSAoTWF0aC5yYW5kb20oKSAqIDEuMjUgKyAuMjUpLnRvRml4ZWQoMik7XG5cbiAgICByZXR1cm4gYCBmb250LXNpemU9XCIke2ZvbnRTaXplfWVtXCJgO1xuICB9XG5cbiAgdW5zZWxlY3QoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRba2V5XS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVQYXRocygpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFtrZXldLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucG9pbnRzLmxpc3QgPSBbXTtcbiAgICB0aGlzLnRhcmdldEdyb3VwLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMuY29udHJvbEdldC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRQYXRoT2Zmc2V0KCkge1xuICAgIGNvbnN0IGhhbGZQYXR0ZXJuTGVuZ3RoID0gTWF0aC5yb3VuZCh0aGlzLnN5bWJvbHMubGlzdC5sZW5ndGggLyAyKTtcblxuICAgIGlmKHRoaXMubGluZVN0eWxlLnByb3BzLm1pcnJvcmVkKSB7XG4gICAgICB0aGlzLnBhdGhPZmZzZXQgPSAuNSAqIHRoaXMuZm9udFNpemU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXQpIHtcbiAgICAgIHRoaXMucGF0aE9mZnNldCA9IChoYWxmUGF0dGVybkxlbmd0aCArIC41KSAqIHRoaXMuZm9udFNpemU7XG4gICAgfVxuICAgIGVsc2UgaWYodGhpcy5saW5lU3R5bGUucHJvcHMuc3RhcnRPZmZzZXRCZXR3ZWVuKSB7XG4gICAgICB0aGlzLnBhdGhPZmZzZXQgPSBoYWxmUGF0dGVybkxlbmd0aCAqIHRoaXMuZm9udFNpemU7XG4gICAgfVxuICB9XG5cbiAgY2hvb3NlU3ltYm9sc0lucHV0KGV2ZW50KSB7XG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jaG9pY2VfX2xhYmVsLXRleHQnKTtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY2hvaWNlX19pbnB1dCcpO1xuXG4gICAgaWYobGFiZWxUZXh0ICYmIGxhYmVsVGV4dC5kYXRhc2V0LnZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0U3ltYm9sc0Nob2ljZS5kYXRhc2V0Lm1vZGUgPSBsYWJlbFRleHQuZGF0YXNldC52YWx1ZTtcbiAgICB9XG5cbiAgICBpZihpbnB1dCAmJiBpbnB1dC52YWx1ZSkge1xuICAgICAgdGhpcy5jaGFuZ2VTeW1ib2xzU2V0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTeW1ib2xzU2V0KGV2ZW50KSB7XG4gICAgbGV0IGN1cnJlbnRJbnB1dCA9IHRoaXMuc2VsZWN0U3ltYm9scztcbiAgICBpZihldmVudCkge1xuICAgICAgY3VycmVudElucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgIH1cblxuICAgIGlmKCFjdXJyZW50SW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZih0aGlzLnN5bWJvbHMuc3RyID09PSBjdXJyZW50SW5wdXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN5bWJvbHMuc3RyID0gY3VycmVudElucHV0LnZhbHVlO1xuICAgIHRoaXMuc3ltYm9scy5saXN0ID0gZ2V0U3ltYm9sc0xpc3QodGhpcy5zeW1ib2xzLnN0cik7XG4gICAgdGhpcy5zeW1ib2xzLmN1cnJlbnRQb3MgPSAwO1xuXG4gICAgdGhpcy5jaGFuZ2VTeW1ib2xzT25TZWxlY3RlZCgpO1xuICB9XG5cbiAgY2hhbmdlU3ltYm9sc09uU2VsZWN0ZWQoKSB7XG4gICAgaWYoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBncm91cCA9IHRoaXMuc2VsZWN0ZWRba2V5XTtcbiAgICAgIGNvbnN0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXBhdGgnKTtcbiAgICAgIGxldCB0ZXh0UGF0aERvdWJsZSA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXBhdGgtLWRvdWJsZScpO1xuICAgICAgdGV4dFBhdGguaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZih0ZXh0UGF0aERvdWJsZSkge1xuICAgICAgICB0ZXh0UGF0aERvdWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYoIXRoaXMubGluZVN0eWxlLnByb3BzLmRvdWJsZSkge1xuICAgICAgICB0ZXh0UGF0aERvdWJsZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0V2F2ZXMoKTtcblxuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aCh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHRQYXRoLFxuICAgICAgICB0ZXh0UGF0aERvdWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGluZVN0eWxlKCkge1xuICAgIHRoaXMubGluZVN0eWxlID0gbGluZVN0eWxlc1t0aGlzLnNlbGVjdFN0eWxlLnZhbHVlXTtcbiAgICB0aGlzLnN5bWJvbHMuY3VycmVudFBvcyA9IDA7XG5cbiAgICBpZih0aGlzLmxpbmVTdHlsZS5wcm9wcy5zY2F0dGVyZWQpIHtcbiAgICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMztcbiAgICB9XG5cbiAgICB0aGlzLnNldFBhdGhPZmZzZXQoKTtcblxuICAgIHRoaXMuY2hhbmdlTGluZVN0eWxlT25TZWxlY3RlZCgpO1xuICB9XG5cbiAgY2hhbmdlTGluZVN0eWxlT25TZWxlY3RlZCgpIHtcbiAgICBpZihPYmplY3QudmFsdWVzKHRoaXMuc2VsZWN0ZWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5zZWxlY3RlZFtrZXldO1xuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcbiAgICAgIGNvbnN0IHRleHQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCd0ZXh0Jyk7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXBhdGgnKTtcbiAgICAgIGxldCB0ZXh0RG91YmxlID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtLWRvdWJsZScpO1xuICAgICAgbGV0IHRleHRQYXRoRG91YmxlID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLnRleHQtcGF0aC0tZG91YmxlJyk7XG4gICAgICB0ZXh0UGF0aC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgaWYodGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmKCF0aGlzLmxpbmVTdHlsZS5wcm9wcy5kb3VibGUpIHtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUgPSBudWxsO1xuICAgICAgfVxuICAgICAgZWxzZSBpZighdGV4dFBhdGhEb3VibGUpIHtcbiAgICAgICAgbGV0IGRvdWJsZWRUZXh0ID0gdGhpcy5nZXRUZXh0RG91YmxlKHtncm91cCwgdGV4dH0pO1xuICAgICAgICB0ZXh0RG91YmxlID0gZG91YmxlZFRleHQudGV4dERvdWJsZTtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUgPSBkb3VibGVkVGV4dC50ZXh0UGF0aERvdWJsZTtcbiAgICAgICAgdGV4dFBhdGhEb3VibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgZ3JvdXAsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRleHRQYXRoLFxuICAgICAgICB0ZXh0RG91YmxlLFxuICAgICAgICB0ZXh0UGF0aERvdWJsZVxuICAgICAgfTtcblxuICAgICAgdGhpcy5tb2RpZnlQYXRocyhwYXJhbXMpO1xuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aChwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUZvbnRTaXplKCkge1xuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnNlbGVjdEZvbnRTaXplLnZhbHVlO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1zaXplJywgYCR7dGhpcy5mb250U2l6ZX1weGApO1xuICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMztcblxuICAgIGlmKHRoaXMuZm9udFNpemUgPj0gMzIpIHtcbiAgICAgIHRoaXMucGF0aEZpbGxzLmtvZWZmID0gMjtcbiAgICB9XG4gICAgZWxzZSBpZih0aGlzLmZvbnRTaXplID49IDQwKSB7XG4gICAgICB0aGlzLnBhdGhGaWxscy5rb2VmZiA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQYXRoT2Zmc2V0KCk7XG5cbiAgICB0aGlzLmNoYW5nZUZvbnRTaXplT25TZWxlY3RlZCgpO1xuICB9XG5cbiAgY2hhbmdlRm9udFNpemVPblNlbGVjdGVkKCkge1xuICAgIGlmKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKGxldCBrZXkgaW4gdGhpcy5zZWxlY3RlZCkge1xuICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnNlbGVjdGVkW2tleV07XG4gICAgICBjb25zdCB0ZXh0cyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHQnKTtcbiAgICAgIGNvbnN0IHBhdGggPSBncm91cC5xdWVyeVNlbGVjdG9yKCdwYXRoJyk7XG4gICAgICBjb25zdCB0ZXh0UGF0aCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJ3RleHRQYXRoJyk7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5mb250U2l6ZSk7XG5cbiAgICAgIGZvcihsZXQgdGV4dCBvZiB0ZXh0cykge1xuICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnZm9udC1zaXplJywgYCR7dGhpcy5mb250U2l6ZX1weGApO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxsUmVzdE9mUGF0aCh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHRleHRQYXRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUaGVtZShldmVudCkge1xuICAgIGlmKCFldmVudC5kZXRhaWwuYWNjZW50cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICcnO1xuICAgIHRoaXMudGhlbWUgPSBldmVudC5kZXRhaWwuY29sb3JzO1xuICAgIHRoaXMuYWNjZW50cyA9IGV2ZW50LmRldGFpbC5hY2NlbnRzO1xuICAgIHRoaXMub3V0cHV0U3R5bGUgPSB0aGlzLmdldFN0eWxlU3RyKCk7XG4gIH1cblxuICBwcmVwYXJlSW1hZ2VzKCkge1xuICAgIHRoaXMuZmluYWxTaXplcyA9IHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfTtcblxuICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdsb2FkaW5nJztcbiAgICB0aGlzLmZpbmFsU1ZHID0gdGhpcy5wYWludEFyZWEuY2xvbmVOb2RlKHRydWUpO1xuICAgIHRoaXMuZmluYWxTVkcuc3R5bGUgPSB0aGlzLm91dHB1dFN0eWxlO1xuICAgIC8vIEZpeCBwYWludCBTVkcgb24gY2FudmFzIGluIEZpcmVmb3hcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt0aGlzLmZpbmFsU2l6ZXMud2lkdGh9cHhgKTtcbiAgICB0aGlzLmZpbmFsU1ZHLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgYCR7dGhpcy5maW5hbFNpemVzLmhlaWdodH1weGApO1xuXG4gICAgdGhpcy5wcmVwYXJlUG5nKCk7XG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGdldFN0eWxlU3RyKCkge1xuICAgIHJldHVybiBgYmFja2dyb3VuZDogJHt0aGlzLmdldEJhY2tncm91bmRTdHIodGhpcy50aGVtZSl9OyBjb2xvcjogJHt0aGlzLmFjY2VudHMuYmFzZX1gO1xuICB9XG5cbiAgcHJlcGFyZVBuZygpIHtcbiAgICBjb25zdCB4bWwgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKHRoaXMuZmluYWxTVkcpO1xuICAgIGNvbnN0IHN2ZzY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoeG1sKSkpO1xuICAgIGNvbnN0IGI2NFN0YXJ0ID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJztcbiAgICBjb25zdCBpbWFnZTY0ID0gYjY0U3RhcnQgKyBzdmc2NDtcblxuICAgIGNvbnN0IGltZ09iaiA9IG5ldyBJbWFnZSgpO1xuICAgIGltZ09iai5zcmMgPSBpbWFnZTY0O1xuICAgIGltZ09iai53aWR0aCA9IHRoaXMuZmluYWxTaXplcy53aWR0aDtcbiAgICBpbWdPYmouaGVpZ2h0ID0gdGhpcy5maW5hbFNpemVzLmhlaWdodDtcblxuICAgIGltZ09iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmZpbmFsU2l6ZXMud2lkdGg7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmZpbmFsU2l6ZXMuaGVpZ2h0O1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZ09iaiwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIHRoaXMuY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBsZXQgVVJMT2JqID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICB0aGlzLmxpbmtzLnBuZy5ocmVmID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgdGhpcy5saW5rcy5wbmcuZG93bmxvYWQgPSAnZW1vamktYnJ1c2gtZHJhd2luZy5wbmcnO1xuXG4gICAgICAgIHRoaXMuY29udHJvbHMuZGF0YXNldC5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICBnZXRNb3VzZU9mZnNldChldmVudCkge1xuICAgIGxldCB7bGVmdCwgdG9wfSA9IHRoaXMucGFpbnRBcmVhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBzY2FsZSA9IHRoaXMuc2NhbGU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogc2NhbGUgKiAoZXZlbnQuY2xpZW50WCAtIGxlZnQpLFxuICAgICAgeTogc2NhbGUgKiAoZXZlbnQuY2xpZW50WSAtIHRvcClcbiAgICB9O1xuICB9XG59XG4iLCJjb25zdCBsaW5lU3R5bGVzID0ge1xuICAnbGluZWFyJzoge1xuICAgIG5hbWU6ICdsaW5lYXInLFxuICAgIHByb3BzOiB7fVxuICB9LFxuICAnbGluZWFyLXJvdGF0ZWQnOiB7XG4gICAgbmFtZTogJ2xpbmVhci1yb3RhdGVkJyxcbiAgICBwcm9wczoge1xuICAgICAgcm90YXRlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkJzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZCcsXG4gICAgcHJvcHM6IHtcbiAgICAgIGRvdWJsZTogdHJ1ZSxcbiAgICAgIG1pcnJvcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuICAnbWlycm9yZWQtb2Zmc2V0Jzoge1xuICAgIG5hbWU6ICdtaXJyb3JlZC1vZmZzZXQnLFxuICAgIHByb3BzOiB7XG4gICAgICBkb3VibGU6IHRydWUsXG4gICAgICBtaXJyb3JlZDogdHJ1ZSxcbiAgICAgIHN0YXJ0T2Zmc2V0OiB0cnVlXG4gICAgfVxuICB9LFxuICAnbWlycm9yZWQtb2Zmc2V0LWJldHdlZW4nOiB7XG4gICAgbmFtZTogJ21pcnJvcmVkLW9mZnNldC1iZXR3ZWVuJyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldEJldHdlZW46IHRydWVcbiAgICB9XG4gIH0sXG4gICd3YXZlcyc6IHtcbiAgICBuYW1lOiAnd2F2ZXMnLFxuICAgIHByb3BzOiB7XG4gICAgICB3YXZlczogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgJ21pcnJvcmVkLXJhbmRvbSc6IHtcbiAgICBuYW1lOiAnbWlycm9yZWQtcmFuZG9tJyxcbiAgICBwcm9wczoge1xuICAgICAgZG91YmxlOiB0cnVlLFxuICAgICAgbWlycm9yZWQ6IHRydWUsXG4gICAgICBzY2F0dGVyZWQ6IHRydWUsXG4gICAgICBzdGFydE9mZnNldEJldHdlZW46IHRydWVcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW5lU3R5bGVzO1xuIiwiY29uc3QgdGhlbWVzID0gW1xuICAn8J+YhvCfmYLwn6Sq8J+kqPCfmIzwn5iL8J+YgvCfmYPwn5iBJyxcbiAgJ/CfjYEnLFxuICAn8J+mlCcsXG4gICfwn42C8J+NgfCfjYQnLFxuICAn8J+QmicsXG4gICfwn6aQJyxcbiAgJ/CfkKHwn5Cg8J+QnycsXG4gICfwn5C28J+QsfCfkK3wn5C58J+QsCcsXG4gICfwn5CMJyxcbiAgJ+KcqCcsXG4gICfirZDvuI8nLFxuICAn4p2k77iP8J+nofCfkpvwn5Ka8J+SmfCfkpzwn5akJyxcbiAgJ/CflLTwn5+g8J+fofCfn6Lwn5S18J+fo+Kaq++4jycsXG4gICfwn5+l8J+fp/Cfn6jwn5+p8J+fpvCfn6rirJvvuI8nLFxuICAn8J+MsfCfjYAnLFxuICAn8J+MvPCfjLrwn4y4JyxcbiAgJ/CfjLzwn4yx8J+MuvCfjLHwn4y4JyxcbiAgJ/Cfmpfwn5qy8J+am/CfmoLwn5qZ4pu177iP8J+agycsXG4gICfwn6WA8J+nmidcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lcztcbiIsImV4cG9ydCBjb25zdCB0ZW1wbGF0ZVN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZVN0eWxlcy5pbm5lckhUTUwgPSBgPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcblxuICAgIC0tZm9udC1zaXplOiAzMnB4O1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG5cbiAgQSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UpO1xuICB9XG5cbiAgLnZpc3VhbGx5aGlkZGVuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuXG4gIC5wYWludC1hcmVhIHBhdGgge1xuICAgIHN0cm9rZTogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC4zNTtcbiAgICBmaWxsOiBub25lO1xuICAgIHRyYW5zaXRpb246IHN0cm9rZSAuMTVzO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgcGF0aDpob3ZlciB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1ob3Zlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgdGV4dCxcbiAgLnBhaW50LWFyZWEgdGV4dFBhdGgsXG4gIC5wYWludC1hcmVhIC5jdXJyZW50LXBhdGgge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLnBhaW50LWFyZWEgdGV4dFBhdGgge1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIFNFTEVDVCxcbiAgSU5QVVQge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI0VFRTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuaGlnaGxpZ2h0IHBhdGgge1xuICAgIHN0cm9rZTogdmFyKC0tY29sb3ItZm9jdXMpO1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuNjU7XG4gIH1cblxuICAuaGlnaGxpZ2h0OmhvdmVyIHBhdGgge1xuICAgIHN0cm9rZTogdmFyKC0tY29sb3ItZm9jdXNob3Zlcik7XG4gIH1cblxuICAucGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnBhbmVsLS10b3Age1xuICAgIHRvcDogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLnBhbmVsLS1ib3R0b20ge1xuICAgIGJvdHRvbTogMnJlbTtcbiAgfVxuXG4gIC5jaG9pY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuY2hvaWNlX19sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2xhYmVsLS1wcmVzZXRzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICAuY2hvaWNlX19sYWJlbC10ZXh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2hvaWNlX19pbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuY2hvaWNlW2RhdGEtbW9kZT1cInByZXNldHNcIl0gLmNob2ljZV9faW5wdXQtLWN1c3RvbSxcbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJjdXN0b21cIl0gLmNob2ljZV9faW5wdXQtLXByZXNldHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJwcmVzZXRzXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLXByZXNldHMsXG4gIC5jaG9pY2VbZGF0YS1tb2RlPVwiY3VzdG9tXCJdIC5jaG9pY2VfX2xhYmVsLXRleHQtLWN1c3RvbSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAuY2hvaWNlW2RhdGEtbW9kZT1cInByZXNldHNcIl0gLmNob2ljZV9fbGFiZWwtdGV4dC0tcHJlc2V0czpob3ZlcixcbiAgLmNob2ljZVtkYXRhLW1vZGU9XCJjdXN0b21cIl0gLmNob2ljZV9fbGFiZWwtdGV4dC0tY3VzdG9tOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgfVxuXG4gIC5jb250cm9sIHtcbiAgICBwYWRkaW5nOiAuMjVyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6ICAwIDAgMCAycHggdmFyKC0tY29sb3ItYmFzZSkgaW5zZXQ7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSk7XG4gIH1cbiAgLmNvbnRyb2w6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudCBpbnNldDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIH1cbiAgLmNvbnRyb2w6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2V0cmFuc3ApO1xuICB9XG5cbiAgLmNvbnRyb2xzX19kb3dubG9hZHMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cImxvYWRpbmdcIl0gLmNvbnRyb2wtLWdldCxcbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbC0tZ2V0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250cm9sc1tkYXRhLXN0YXRlPVwibG9hZGluZ1wiXSAuY29udHJvbHNfX2Rvd25sb2FkcyxcbiAgLmNvbnRyb2xzW2RhdGEtc3RhdGU9XCJyZWFkeVwiXSAuY29udHJvbHNfX2Rvd25sb2FkcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5jb250cm9sc19fZG93bmxvYWRzIC5jb250cm9sIHtcbiAgICBvcGFjaXR5OiAuMjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAuY29udHJvbHNbZGF0YS1zdGF0ZT1cInJlYWR5XCJdIC5jb250cm9sIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG5cbiAgLnRoZW1lLXN3aXRjaGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuc29jaWFscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDBcbiAgfVxuXG4gIC5zb2NpYWxzX19pdGVtICsgLnNvY2lhbHNfX2l0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG5cbiAgLnNvY2lhbHNfX2ljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IHZhcigtLXRyYW5zaXRpb24pO1xuICB9XG5cbiAgLnNvY2lhbHNfX2ljb246aG92ZXIge1xuICAgIG9wYWNpdHk6IC43NTtcbiAgfVxuXG4gIC5zb2NpYWxzX191c2VybmFtZSB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG48L3N0eWxlPlxuYDtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlTWFya3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlTWFya3VwLmlubmVySFRNTCA9IGBcbjxzdmcgaWQ9XCJwYWludC1hcmVhXCIgY2xhc3M9XCJwYWludC1hcmVhXCI+XG4gIDwhLS0gU2hhcGUgZm9yIG1lYXN1cmluZyBTVkcgc2NhbGluZyAtLT5cbiAgPHJlY3QgaWQ9XCJtZWFzdXJlLXJlY3RcIlxuICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgeD1cIjBcIiB5PVwiMFwiXG4gICAgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIj48L3JlY3Q+XG5cbiAgPGcgaWQ9XCJ0YXJnZXQtZ3JvdXBcIj48L2c+XG48L3N2Zz5cblxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLS10b3BcIj5cbiAgPGRpdiBjbGFzcz1cImNob2ljZVwiIGlkPVwiaW5wdXQtc3ltYm9scy1jaG9pY2VcIiBkYXRhLW1vZGU9XCJwcmVzZXRzXCI+XG4gICAgPGxhYmVsXG4gICAgICBjbGFzcz1cImNob2ljZV9fbGFiZWwgY2hvaWNlX19sYWJlbC0tcHJlc2V0c1wiPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHRcbiAgICAgICAgICBjaG9pY2VfX2xhYmVsLXRleHQtLXByZXNldHNcbiAgICAgICAgICBjb250cm9sXG4gICAgICAgIFwiXG4gICAgICAgIGRhdGEtdmFsdWU9XCJwcmVzZXRzXCJcbiAgICAgICAgPlByZXNldHM8L3NwYW4+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGNsYXNzPVwiY2hvaWNlX19pbnB1dCBjaG9pY2VfX2lucHV0LS1wcmVzZXRzXCJcbiAgICAgICAgaWQ9XCJzZWxlY3Qtc3ltYm9sc1wiPjwvc2VsZWN0PlxuICAgIDwvbGFiZWw+XG5cbiAgICA8bGFiZWxcbiAgICAgIGNsYXNzPVwiY2hvaWNlX19sYWJlbCBjaG9pY2VfX2xhYmVsLS1jdXN0b21cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgY2hvaWNlX19sYWJlbC10ZXh0XG4gICAgICAgICAgY2hvaWNlX19sYWJlbC10ZXh0LS1jdXN0b21cbiAgICAgICAgICBjb250cm9sXG4gICAgICAgIFwiXG4gICAgICAgIGRhdGEtdmFsdWU9XCJjdXN0b21cIlxuICAgICAgICA+TXkgc3ltYm9sczwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cImNob2ljZV9faW5wdXQgY2hvaWNlX19pbnB1dC0tY3VzdG9tXCJcbiAgICAgICAgdHlwZT1cInRleHRcIiBpZD1cImFkZC1zeW1ib2xzXCIgcGxhY2Vob2xkZXI9XCJBZGQgZW1vamkgb3IgdGV4dFwiLz5cbiAgICA8L2xhYmVsPlxuICA8L2Rpdj5cbiAgPHNlbGVjdCBpZD1cInNlbGVjdC1zdHlsZVwiPjwvc2VsZWN0PlxuICA8c2VsZWN0IGlkPVwic2VsZWN0LWZvbnQtc2l6ZVwiPjwvc2VsZWN0PlxuXG4gIDx0aGVtZS1zd2l0Y2hlciBjbGFzcz1cInRoZW1lLXN3aXRjaGVyXCI+PC90aGVtZS1zd2l0Y2hlcj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtLWJvdHRvbVwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsZWFyXCIgY2xhc3M9XCJjb250cm9sXCI+Q2xlYXI8L2J1dHRvbj5cblxuICA8dWwgY2xhc3M9XCJzb2NpYWxzXCI+XG4gICAgPGxpIGNsYXNzPVwic29jaWFsc19faXRlbVwiPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS95b2tzZWwvZW1vamktYnJ1c2gvXCIgY2xhc3M9XCJzb2NpYWxzX19saW5rXCI+PHN2ZyBjbGFzcz1cInNvY2lhbHNfX2ljb24gc29jaWFsc19faWNvbi0tZ2l0aHViXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGQ9XCJNNy45OTksMC40MzFjLTQuMjg1LDAtNy43NiwzLjQ3NC03Ljc2LDcuNzYxIGMwLDMuNDI4LDIuMjIzLDYuMzM3LDUuMzA3LDcuMzYzYzAuMzg4LDAuMDcxLDAuNTMtMC4xNjgsMC41My0wLjM3NGMwLTAuMTg0LTAuMDA3LTAuNjcyLTAuMDEtMS4zMiBjLTIuMTU5LDAuNDY5LTIuNjE0LTEuMDQtMi42MTQtMS4wNGMtMC4zNTMtMC44OTYtMC44NjItMS4xMzUtMC44NjItMS4xMzVjLTAuNzA1LTAuNDgxLDAuMDUzLTAuNDcyLDAuMDUzLTAuNDcyIGMwLjc3OSwwLjA1NSwxLjE4OSwwLjgsMS4xODksMC44YzAuNjkyLDEuMTg2LDEuODE2LDAuODQzLDIuMjU4LDAuNjQ1YzAuMDcxLTAuNTAyLDAuMjcxLTAuODQzLDAuNDkzLTEuMDM3IEM0Ljg2LDExLjQyNSwzLjA0OSwxMC43NiwzLjA0OSw3Ljc4NmMwLTAuODQ3LDAuMzAyLTEuNTQsMC43OTktMi4wODJDMy43NjgsNS41MDcsMy41MDEsNC43MTgsMy45MjQsMy42NSBjMCwwLDAuNjUyLTAuMjA5LDIuMTM0LDAuNzk2QzYuNjc3LDQuMjczLDcuMzQsNC4xODcsOCw0LjE4NGMwLjY1OSwwLjAwMywxLjMyMywwLjA4OSwxLjk0MywwLjI2MSBjMS40ODItMS4wMDQsMi4xMzItMC43OTYsMi4xMzItMC43OTZjMC40MjMsMS4wNjgsMC4xNTcsMS44NTcsMC4wNzcsMi4wNTRjMC40OTcsMC41NDIsMC43OTgsMS4yMzUsMC43OTgsMi4wODIgYzAsMi45ODEtMS44MTQsMy42MzctMy41NDMsMy44MjljMC4yNzksMC4yNCwwLjUyNywwLjcxMywwLjUyNywxLjQzN2MwLDEuMDM3LTAuMDEsMS44NzQtMC4wMSwyLjEyOSBjMCwwLjIwOCwwLjE0LDAuNDQ5LDAuNTM0LDAuMzczYzMuMDgxLTEuMDI4LDUuMzAyLTMuOTM1LDUuMzAyLTcuMzYyQzE1Ljc2LDMuOTA2LDEyLjI4NSwwLjQzMSw3Ljk5OSwwLjQzMXpcIj48L3BhdGg+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cInNvY2lhbHNfX3VzZXJuYW1lIHZpc3VhbGx5aGlkZGVuXCI+eW9rc2VsL2Vtb2ppLWJydXNoLzwvc3Bhbj48L2E+XG4gICAgPC9saT5cblxuICAgIDxsaSBjbGFzcz1cInNvY2lhbHNfX2l0ZW1cIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3lva3NlbF9lblwiIGNsYXNzPVwic29jaWFsc19fbGlua1wiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwic29jaWFsc19faWNvbiBzb2NpYWxzX19pY29uLS10d2l0dGVyXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGQ9XCJNMTUuOTY5LDMuMDU4Yy0wLjU4NiwwLjI2LTEuMjE3LDAuNDM2LTEuODc4LDAuNTE1YzAuNjc1LTAuNDA1LDEuMTk0LTEuMDQ1LDEuNDM4LTEuODA5Yy0wLjYzMiwwLjM3NS0xLjMzMiwwLjY0Ny0yLjA3NiwwLjc5M2MtMC41OTYtMC42MzYtMS40NDYtMS4wMzMtMi4zODctMS4wMzNjLTEuODA2LDAtMy4yNywxLjQ2NC0zLjI3LDMuMjcgYzAsMC4yNTYsMC4wMjksMC41MDYsMC4wODUsMC43NDVDNS4xNjMsNS40MDQsMi43NTMsNC4xMDIsMS4xNCwyLjEyNEMwLjg1OSwyLjYwNywwLjY5OCwzLjE2OCwwLjY5OCwzLjc2NyBjMCwxLjEzNCwwLjU3NywyLjEzNSwxLjQ1NSwyLjcyMkMxLjYxNiw2LjQ3MiwxLjExMiw2LjMyNSwwLjY3MSw2LjA4YzAsMC4wMTQsMCwwLjAyNywwLDAuMDQxYzAsMS41ODQsMS4xMjcsMi45MDYsMi42MjMsMy4yMDYgQzMuMDIsOS40MDIsMi43MzEsOS40NDIsMi40MzMsOS40NDJjLTAuMjExLDAtMC40MTYtMC4wMjEtMC42MTUtMC4wNTljMC40MTYsMS4yOTksMS42MjQsMi4yNDUsMy4wNTUsMi4yNzEgYy0xLjExOSwwLjg3Ny0yLjUyOSwxLjQtNC4wNjEsMS40Yy0wLjI2NCwwLTAuNTI0LTAuMDE1LTAuNzgtMC4wNDZjMS40NDcsMC45MjgsMy4xNjYsMS40NjksNS4wMTMsMS40NjkgYzYuMDE1LDAsOS4zMDQtNC45ODMsOS4zMDQtOS4zMDRjMC0wLjE0Mi0wLjAwMy0wLjI4My0wLjAwOS0wLjQyM0MxNC45NzYsNC4yOSwxNS41MzEsMy43MTQsMTUuOTY5LDMuMDU4elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzb2NpYWxzX191c2VybmFtZSB2aXN1YWxseWhpZGRlblwiPnlva3NlbF9lbjwvc3Bhbj48L2E+XG4gICAgPC9saT5cbiAgPC91bD5cblxuICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiY29udHJvbCBjb250cm9sLS1nZXRcIj5HZXQgaW1hZ2U8L2J1dHRvbj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc19fZG93bmxvYWRzXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29udHJvbC0tZG93bmxvYWQtcG5nXCI+RG93bmxvYWQgUE5HPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYDtcblxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVHcm91cC5pbm5lckhUTUwgPSBgPHBhdGhcbiAgaWQ9XCJwYXRoLXtpZH1cIlxuICBkPVwiXCJcbiAgc3Ryb2tlLXdpZHRoPVwie2ZvbnRTaXplfVwiXG4gIGZpbGw9XCJub25lXCI+PC9wYXRoPlxuPHRleHRcbiAgZm9udC1zaXplPVwie2ZvbnRTaXplfVwiIGNsYXNzPVwidGV4dFwiPlxuICA8dGV4dFBhdGggaHJlZj1cIiNwYXRoLXtpZH1cIiBjbGFzcz1cInRleHQtcGF0aFwiPjwvdGV4dFBhdGg+XG48L3RleHQ+XG5gO1xuIiwiaW1wb3J0IHt0aGVtZXMsIGJhc2VBY2NlbnRzfSBmcm9tICcuL3RoZW1lcy5qcyc7XG5pbXBvcnQge3RlbXBsYXRlfSBmcm9tICcuL3RtcGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZVN3aXRjaGVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICB0aGlzLmVsZW0gPSB0aGlzLnNoYWRvd1Jvb3Q7XG4gICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpO1xuICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhlbWVzLmxlbmd0aCk7XG4gICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtID0gbnVsbDtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuY2xzID0ge1xuICAgICAgY29sbGFwc2VkOiAnY29udHJvbHMtLWNvbGxhcHNlZCcsXG4gICAgICBjdXJyZW50OiAnY29udHJvbC0tY3VycmVudCdcbiAgICB9XG5cbiAgICB0aGlzLmFkZENvbnRyb2xzKCk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENsaWNrID0gdGhpcy5vbkNvbnRyb2xDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlVGhlbWUgPSB0aGlzLmNoYW5nZVRoZW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbG9zZVBhbmVsID0gdGhpcy5jbG9zZVBhbmVsLmJpbmQodGhpcyk7XG4gIH1cblxuICBhZGRDb250cm9scygpIHtcbiAgICB0aGVtZXMuZm9yRWFjaCgodGhlbWUsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgYmdTdHIgPSB0aGlzLmdldEJhY2tncm91bmRTdHIodGhlbWUuY29sb3JzKTtcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnY29udHJvbCc7XG4gICAgICBsZXQgY29sb3IgPSBiYXNlQWNjZW50cy5iYXNlO1xuICAgICAgaWYodGhlbWUuYWNjZW50cykge1xuICAgICAgICBjb2xvciA9IHRoZW1lLmFjY2VudHMuYmFzZTtcbiAgICAgIH1cblxuICAgICAgaWYoaW5kZXggPT09IHRoaXMuY3VycmVudFRoZW1lTnVtKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnIGNvbnRyb2wtLWN1cnJlbnQnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb250cm9sU3RyID0gYDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc05hbWV9XCJcbiAgICAgICAgdGl0bGU9XCIke3RoZW1lLm5hbWV9XCJcbiAgICAgICAgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2JnU3RyfTsgY29sb3I6ICR7Y29sb3J9XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseWhpZGRlblwiPiR7dGhlbWUubmFtZX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPmA7XG5cbiAgICAgIHRoaXMuY29udHJvbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBjb250cm9sU3RyKTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNscy5jdXJyZW50fWApO1xuICAgIH0pXG4gIH1cblxuICBnZXRCYWNrZ3JvdW5kU3RyKGNvbG9yc0xpc3QpIHtcbiAgICBsZXQgYmdTdHIgPSAnJztcblxuICAgIGlmKGNvbG9yc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBiZ1N0ciA9IGNvbG9yc0xpc3RbMF1cbiAgICAgIHJldHVybiBiZ1N0cjtcbiAgICB9XG5cbiAgICBiZ1N0ciA9IGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAke2NvbG9yc0xpc3Quam9pbignLCcpfSlgO1xuICAgIHJldHVybiBiZ1N0cjtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ29udHJvbENsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UtdGhlbWUnLCB0aGlzLmNoYW5nZVRoZW1lKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VQYW5lbCk7XG5cbiAgICAvLyBTZXQgY3VycmVudCB0aGVtZSB0byBwYWdlICYgY29tcG9uZW50XG4gICAgdGhpcy5kaXNwYXRjaENoYW5nZVRoZW1lKCk7XG4gIH1cblxuICBvbkNvbnRyb2xDbGljayhldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xzLmNvbGxhcHNlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lTnVtID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICB0aGlzLmRpc3BhdGNoQ2hhbmdlVGhlbWUoKTtcblxuICAgICAgdGhpcy5jdXJyZW50VGhlbWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbHMuY3VycmVudCk7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNscy5jdXJyZW50KTtcbiAgICAgIHRoaXMuY3VycmVudFRoZW1lRWxlbSA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgdGhpcy5jbG9zZVBhbmVsKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVBhbmVsKGV2ZW50KSB7XG4gICAgaWYoZXZlbnQudGFyZ2V0ID09PSB0aGlzIHx8IHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2xzLmNsYXNzTGlzdC5hZGQodGhpcy5jbHMuY29sbGFwc2VkKTtcbiAgfVxuXG4gIGRpc3BhdGNoQ2hhbmdlVGhlbWUoKSB7XG4gICAgY29uc3QgdGhlbWUgPSB0aGVtZXNbdGhpcy5jdXJyZW50VGhlbWVOdW1dO1xuICAgIGlmKCF0aGVtZS5hY2NlbnRzKSB7XG4gICAgICB0aGVtZS5hY2NlbnRzID0gYmFzZUFjY2VudHM7XG4gICAgfVxuICAgIHRoaXMuY29udHJvbHMuc3R5bGUuYmFja2dyb3VuZCA9IHRoZW1lLmNvbG9yc1swXTtcblxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UtdGhlbWUnLCB7XG4gICAgICBkZXRhaWw6IHRoZW1lLFxuICAgICAgYnViYmxlczogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIGNoYW5nZVRoZW1lKGV2ZW50KSB7XG4gICAgaWYoIWV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvcihsZXQga2V5IGluIGV2ZW50LmRldGFpbC5hY2NlbnRzKSB7XG4gICAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KGAtLWNvbG9yLSR7a2V5fWAsIGV2ZW50LmRldGFpbC5hY2NlbnRzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGJhc2VBY2NlbnRzID0ge1xuICBiYXNlOiAnd2hpdGUnLFxuICBiYXNldHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxuICB0ZXh0OiAnYmxhY2snLFxuICB0ZXh0dHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICBob3ZlcjogJ2FxdWEnLFxuICBmb2N1czogJ29yYW5nZXJlZCcsXG4gIGZvY3VzaG92ZXI6ICdnb2xkJ1xufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lcyA9IFtcbiAge1xuICAgIG5hbWU6ICdGaXJlYnJpY2snLFxuICAgIGNvbG9yczogWydmaXJlYnJpY2snXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0luZGlhbnJlZCcsXG4gICAgY29sb3JzOiBbJ2luZGlhbnJlZCddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR29sZCcsXG4gICAgY29sb3JzOiBbJ2dvbGQnXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2toYWtpJyxcbiAgICBjb2xvcnM6IFsna2hha2knXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1llbGxvd2dyZWVuJyxcbiAgICBjb2xvcnM6IFsneWVsbG93Z3JlZW4nXSxcbiAgICBhY2NlbnRzOiB7XG4gICAgICAuLi5iYXNlQWNjZW50cyxcbiAgICAgIGJhc2U6ICcjMDAwJyxcbiAgICAgIGJhc2V0cmFuc3A6ICdyZ2JhKDAsMCwwLC41KScsXG4gICAgICB0ZXh0OiAnI0ZGRicsXG4gICAgICB0ZXh0dHJhbnNwOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknXG4gICAgfVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1R1cnF1b2lzZScsXG4gICAgY29sb3JzOiBbJ3R1cnF1b2lzZSddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIHRleHQ6ICcjRkZGJyxcbiAgICAgIHRleHR0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnVGVhbCcsXG4gICAgY29sb3JzOiBbJ3RlYWwnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NreWJsdWUnLFxuICAgIGNvbG9yczogWydza3libHVlJ10sXG4gICAgYWNjZW50czoge1xuICAgICAgLi4uYmFzZUFjY2VudHMsXG4gICAgICBiYXNlOiAnIzAwMCcsXG4gICAgICBiYXNldHJhbnNwOiAncmdiYSgwLDAsMCwuNSknLFxuICAgICAgdGV4dDogJyNGRkYnLFxuICAgICAgdGV4dHRyYW5zcDogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTdGVlbGJsdWUnLFxuICAgIGNvbG9yczogWydzdGVlbGJsdWUnXVxuICB9LHtcbiAgICBuYW1lOiAnTWlkbmlnaHRibHVlJyxcbiAgICBjb2xvcnM6IFsnbWlkbmlnaHRibHVlJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEYXJrc2xhdGVibHVlJyxcbiAgICBjb2xvcnM6IFsnZGFya3NsYXRlYmx1ZSddXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5kaWdvJyxcbiAgICBjb2xvcnM6IFsnaW5kaWdvJ11cbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXJwbGUnLFxuICAgIGNvbG9yczogWydwdXJwbGUnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ1doaXRlJyxcbiAgICBjb2xvcnM6IFsnI0ZGRiddLFxuICAgIGFjY2VudHM6IHtcbiAgICAgIC4uLmJhc2VBY2NlbnRzLFxuICAgICAgYmFzZTogJyMwMDAnLFxuICAgICAgYmFzZXRyYW5zcDogJ3JnYmEoMCwwLDAsLjUpJyxcbiAgICAgIHRleHQ6ICcjRkZGJyxcbiAgICAgIHRleHR0cmFuc3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnR3JheScsXG4gICAgY29sb3JzOiBbJyMzMzMnXVxuICB9LFxuICB7XG4gICAgbmFtZTogJ0JsYWNrJyxcbiAgICBjb2xvcnM6IFsnIzAwMCddLFxuICB9LFxuXTtcbiIsImV4cG9ydCBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICAgbWluLXdpZHRoOiAzcmVtO1xuICAgICAgaGVpZ2h0OiA0cmVtO1xuXG4gICAgICAtLWNvbG9yLWJhc2U6IHdoaXRlO1xuICAgICAgLS1jb2xvci1iYXNldHJhbnNwOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgICB9XG5cbiAgICAudmlzdWFsbHloaWRkZW4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBtYXJnaW46IC0xcHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFzZXRyYW5zcCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xuICAgIH1cblxuICAgIC5jb250cm9sIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgd2lkdGg6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldCxcbiAgICAgICAgMCAwIDRweCAycHggcmdiYSgwLDAsMCwuMjUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogbWFyZ2luIC40NXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBtYXJnaW47XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6bm90KGNvbnRyb2wtLWN1cnJlbnQpIHtcblxuICAgIH1cblxuICAgIC5jb250cm9sOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2w6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCBjdXJyZW50Q29sb3IgaW5zZXQsXG4gICAgICAgIDAgMCAwIDRweCB2YXIoLS1jb2xvci1iYXNldHJhbnNwKTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZCAuY29udHJvbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciBpbnNldDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLS4yNXJlbTtcbiAgICAgIHJpZ2h0OiAtLjI1cmVtO1xuICAgICAgYm90dG9tOiAtLjI1cmVtO1xuICAgICAgbGVmdDogLS4yNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jb2xvci1iYXNlKTtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICB9XG5cbiAgICAuY29udHJvbC0tY3VycmVudDpmb2N1czo6YWZ0ZXIge1xuICAgICAgY29udGVudDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udHJvbHMtLWNvbGxhcHNlZDpob3ZlciAuY29udHJvbC0tY3VycmVudCB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY29sb3ItYmFzZSkgaW5zZXQ7XG4gICAgfVxuICAgIC5jb250cm9scy0tY29sbGFwc2VkOmhvdmVyIC5jb250cm9sLS1jdXJyZW50OjphZnRlciB7XG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpXG4gICAgICB9XG4gICAgfVxuICA8L3N0eWxlPlxuXG4gIDxkaXYgY2xhc3M9XCJjb250cm9scyBjb250cm9scy0tY29sbGFwc2VkXCI+PC9kaXY+XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==