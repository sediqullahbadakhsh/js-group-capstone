/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(178, 216, 147, 0.836);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  padding: 0 20%;\\r\\n  height: 40px;\\r\\n  background-color: rgba(109, 212, 25, 0.829);\\r\\n  box-shadow: 0 10px 15px rgb(24, 51, 4);\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 24px;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  justify-items: center;\\r\\n  gap: 50px;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nnav li a {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nnav li a:hover {\\r\\n  color: #fff;\\r\\n  font-size: 18px;\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.recipes {\\r\\n  padding: 20px 0;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  column-gap: 2%;\\r\\n  row-gap: 40px;\\r\\n  list-style-type: none;\\r\\n  margin: 50px 80px;\\r\\n}\\r\\n\\r\\n.recipe-item {\\r\\n  background-color: rgba(248, 196, 26, 0.76);\\r\\n  padding: 10px;\\r\\n  box-shadow: 1px 15px 30px rgba(0, 0, 0, 0.568);\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.food-img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.recipe-name {\\r\\n  padding: 5px 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\ni {\\r\\n  font-size: large;\\r\\n  cursor: pointer;\\r\\n  color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\ni:active {\\r\\n  font-size: larger;\\r\\n}\\r\\n\\r\\n.small {\\r\\n  width: 54px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(109, 212, 25);\\r\\n  box-shadow: 0 3px 7px rgb(24, 51, 4);\\r\\n  color: rgb(255, 255, 255);\\r\\n  font-weight: bold;\\r\\n  font-size: 1em;\\r\\n  letter-spacing: 0.2px;\\r\\n  padding: 0.5rem 1.5rem;\\r\\n  text-align: center;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  position: fixed;\\r\\n  background-color: rgb(109, 212, 25);\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n.footer small {\\r\\n  padding-left: 20px;\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 10px;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-track {\\r\\n  border-radius: 5px;\\r\\n  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb {\\r\\n  border-radius: 5px;\\r\\n  background-color: rgb(109, 212, 25);\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar-thumb:hover {\\r\\n  background-color: rgb(109, 212, 25);\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  padding-top: 10px;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow-y: initial !important;\\r\\n  background-color: rgba(248, 196, 26, 0.76);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 50%;\\r\\n  height: 90vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: #000;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#modalContent {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#modalContent img {\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n#modalContent table {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#modalContent table td {\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nform span {\\r\\n  color: #f00;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\nform input,\\r\\ntextarea {\\r\\n  width: 50%;\\r\\n  border: 2px solid #000;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.pad-btm {\\r\\n  padding-bottom: 15px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ListItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ListItems.js */ \"./src/modules/ListItems.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nwindow.onload = () => {\n  (0,_modules_ListItems_js__WEBPACK_IMPORTED_MODULE_0__.listItems)();\n};\n\n\n//# sourceURL=webpack://js-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/ListItems.js":
/*!**********************************!*\
  !*** ./src/modules/ListItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listLikes\": () => (/* binding */ listLikes),\n/* harmony export */   \"listItems\": () => (/* binding */ listItems)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n/* harmony import */ var _countRecipes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countRecipes.js */ \"./src/modules/countRecipes.js\");\n\n\n\n\n// FetchData\nconst fetchData = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken',\n  );\n  const data = await response.json();\n  return data.meals;\n};\n\n// list Data\n\nconst listLikes = () => {\n  (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.getAPI)().then((response) => {\n    const like = Array.from(document.querySelectorAll('.likes'));\n    for (let i = 0; i < like.length; i += 1) {\n      response.forEach((item) => {\n        if (item.item_id === like[i].id) {\n          if (like[i].childNodes.length <= 1) {\n            const small = document.createElement('small');\n            small.className = 'small';\n            small.textContent = `${item.likes} likes`;\n            like[i].appendChild(small);\n          } else {\n            like[i].removeChild(like[i].childNodes[1]);\n            const small = document.createElement('small');\n            small.className = 'small';\n            small.textContent = `${item.likes} likes`;\n            like[i].appendChild(small);\n          }\n        }\n      });\n    }\n  });\n};\n\nconst addLike = () => {\n  const heart = Array.from(document.querySelectorAll('.fas'));\n  heart.forEach((item) => {\n    item.addEventListener('click', async () => {\n      await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.postAPI)(item.id);\n      listLikes();\n    });\n  });\n};\n\nconst listItems = async () => {\n  const ul = document.querySelector('.recipes');\n  const food = await fetchData();\n  food.forEach((element) => {\n    const li = document.createElement('li');\n    li.className = 'recipe-item';\n\n    const img = document.createElement('img');\n    img.className = 'food-img';\n    img.src = element.strMealThumb;\n    img.alt = 'food';\n\n    const p = document.createElement('p');\n    p.textContent = element.strMeal;\n    p.className = 'recipe-name';\n\n    const div = document.createElement('div');\n    div.className = 'likes';\n    div.id = element.idMeal;\n\n    const heart = document.createElement('i');\n    heart.classList.add('fas', 'fa-heart');\n    heart.id = element.idMeal;\n\n    const btn = document.createElement('button');\n    btn.type = 'button';\n    btn.className = 'comments';\n    btn.innerText = 'Comments';\n    btn.id = element.idMeal;\n    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn);\n\n    div.appendChild(heart);\n    p.appendChild(div);\n    li.appendChild(img);\n    li.appendChild(p);\n    li.appendChild(btn);\n    ul.appendChild(li);\n  });\n\n  const recipe = document.querySelectorAll('.recipe-item');\n  const counter = document.querySelector('.recipes-counter');\n  counter.innerText = `Recipes (${(0,_countRecipes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(recipe)})`;\n\n  addLike();\n};\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/ListItems.js?");

/***/ }),

/***/ "./src/modules/countRecipes.js":
/*!*************************************!*\
  !*** ./src/modules/countRecipes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countRecipes = (recipe) => recipe.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countRecipes);\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/countRecipes.js?");

/***/ }),

/***/ "./src/modules/createComment.js":
/*!**************************************!*\
  !*** ./src/modules/createComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\nconst createComment = async (e, btn) => {\n  e.preventDefault();\n\n  const name = document.getElementById('name');\n  const insight = document.getElementById('insight');\n  const message = document.getElementById('message');\n  const itemC = document.getElementById('itemC');\n\n  if (name.value === '') {\n    message.textContent = 'Please enter your name';\n    return;\n  }\n  if (insight.value === '') {\n    message.textContent = 'Please enter an insight';\n    return;\n  }\n\n  const body = {\n    item_id: btn.id,\n    username: name.value,\n    comment: insight.value,\n  };\n\n  const postComment = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.postCommentAPI)(body);\n  if (postComment === 'Created') {\n    message.textContent = 'Your comment has successfully Added';\n  } else {\n    message.textContent = 'Something went wrong';\n  }\n\n  name.value = '';\n  insight.value = '';\n\n  const allComments = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsAPI)(btn.id);\n  itemC.innerHTML = allComments\n    .map((e) => {\n      const { username, comment } = e;\n      return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;\n    })\n    .join('<br />');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComment);\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/createComment.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComment.js */ \"./src/modules/createComment.js\");\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\n\n\n// Fetch Single data API\nconst fetchSingleData = async (id) => {\n  const response = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,\n  );\n  const { meals } = await response.json();\n  return meals[0];\n};\n// get data individually\nconst comments = (btn) => {\n  const modal = document.getElementById('commentModal');\n  const span = document.getElementsByClassName('close')[0];\n  const modalContent = document.getElementById('modalContent');\n\n  btn.onclick = async () => {\n    const data = await fetchSingleData(btn.id);\n    const allComments = await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_1__.getCommentsAPI)(btn.id);\n\n    const {\n      strMealThumb,\n      strMeal,\n      strCategory,\n      strArea,\n      strIngredient1,\n      strIngredient2,\n      strIngredient3,\n      strIngredient4,\n      strIngredient5,\n      strIngredient6,\n      strIngredient7,\n      strIngredient8,\n      strIngredient9,\n      strIngredient10,\n      strIngredient11,\n      strIngredient12,\n      strIngredient13,\n      strIngredient14,\n      strInstructions,\n    } = data;\n    modal.style.display = 'block';\n    modalContent.innerHTML = `\n    <img src=${strMealThumb} alt=${strMeal} />\n    <h1>${strMeal}</h1>\n    <h2>Instructions</h2>\n    <p>${strInstructions}</p>\n    <table>\n    <tr>\n    <td><strong>Category:</strong> ${strCategory}</td>\n    <td><strong>Area:</strong> ${strArea}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 1:</strong> ${strIngredient1}</td>\n    <td><strong>Ingredient 2:</strong> ${strIngredient2}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 3:</strong> ${strIngredient3}</td>\n    <td><strong>Ingredient 4:</strong> ${strIngredient4}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 5:</strong> ${strIngredient5}</td>\n    <td><strong>Ingredient 6:</strong> ${strIngredient6}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 7:</strong> ${strIngredient7}</td>\n    <td><strong>Ingredient 8:</strong> ${strIngredient8}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 9:</strong> ${strIngredient9}</td>\n    <td><strong>Ingredient 10:</strong> ${strIngredient10}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 11:</strong> ${strIngredient11}</td>\n    <td><strong>Ingredient 12:</strong> ${strIngredient12}</td>\n    </tr>\n    <tr>\n    <td><strong>Ingredient 13:</strong> ${strIngredient13}</td>\n    <td><strong>Ingredient 14:</strong> ${strIngredient14}</td>\n    </tr>\n    </table>\n    <h2>Comments (2)</h2>\n    <div id=\"itemC\"></div>\n    <form>\n          <h2>Add a Comment</h2>\n          <span id=\"message\"></span>\n          <br />\n          <div class=\"pad-btm\">\n            <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your Name\" />\n          </div>\n          <div class=\"pad-btm\">\n            <textarea\n              name=\"insight\"\n              id=\"insight\"\n              placeholder=\"Your Insight\"\n              cols=\"30\"\n              rows=\"5\"\n            ></textarea>\n          </div>\n          <div class=\"pad-btm\">\n            <input type=\"button\" class=\"comments\" id=\"commentBtn${btn.id}\" value=\"Submit\" />\n          </div>\n        </form>\n    `;\n\n    const itemC = document.getElementById('itemC');\n    itemC.innerHTML = allComments\n      .map((e) => {\n        const { username, comment } = e;\n        return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;\n      })\n      .join('<br />');\n\n    const createCommentBtn = document.getElementById(`commentBtn${btn.id}`);\n    createCommentBtn.addEventListener('click', (e) => (0,_createComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, btn));\n  };\n\n  span.onclick = () => {\n    modal.style.display = 'none';\n  };\n\n  window.onclick = (event) => {\n    if (event.target === modal) {\n      modal.style.display = 'none';\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postAPI\": () => (/* binding */ postAPI),\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI),\n/* harmony export */   \"postCommentAPI\": () => (/* binding */ postCommentAPI),\n/* harmony export */   \"getCommentsAPI\": () => (/* binding */ getCommentsAPI)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6YOsY20BziHENblJkLk/';\n\nconst postAPI = async (id) => {\n  const response = await fetch(`${url}likes`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\nconst getAPI = async () => {\n  const response = await fetch(`${url}likes`);\n  const data = await response.json();\n  return data;\n};\n\nconst postCommentAPI = async (body) => {\n  const response = await fetch(`${url}comments`, {\n    method: 'POST',\n    body: JSON.stringify(body),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\nconst getCommentsAPI = async (id) => {\n  const response = await fetch(`${url}comments?item_id=${id}`);\n  const data = await response.json();\n  return data;\n};\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/involvementAPI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;