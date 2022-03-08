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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ListItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ListItems.js */ \"./src/modules/ListItems.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nwindow.onload = () => {\r\n  (0,_modules_ListItems_js__WEBPACK_IMPORTED_MODULE_0__.listItems)();\r\n};\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/ListItems.js":
/*!**********************************!*\
  !*** ./src/modules/ListItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listLikes\": () => (/* binding */ listLikes),\n/* harmony export */   \"listItems\": () => (/* binding */ listItems)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _fetchAllData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAllData.js */ \"./src/modules/fetchAllData.js\");\n/* harmony import */ var _involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementAPI.js */ \"./src/modules/involvementAPI.js\");\n\r\n\r\n\r\n\r\nconst listLikes = () => {\r\n  (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.getAPI)().then((response) => {\r\n    const like = Array.from(document.querySelectorAll(\".likes\"));\r\n    for (let i = 0; i < like.length; i += 1) {\r\n      response.forEach((item) => {\r\n        if (item.item_id === like[i].id) {\r\n          if (like[i].childNodes.length <= 1) {\r\n            const small = document.createElement(\"small\");\r\n            small.className = \"small\";\r\n            small.textContent = `${item.likes} likes`;\r\n            like[i].appendChild(small);\r\n          } else {\r\n            like[i].removeChild(like[i].childNodes[1]);\r\n            const small = document.createElement(\"small\");\r\n            small.className = \"small\";\r\n            small.textContent = `${item.likes} likes`;\r\n            like[i].appendChild(small);\r\n          }\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\nconst addLike = () => {\r\n  const heart = Array.from(document.querySelectorAll(\".far\"));\r\n  heart.forEach((item) => {\r\n    item.addEventListener(\"click\", async () => {\r\n      if (item.style.color !== \"red\") {\r\n        item.classList.remove(\"far\");\r\n        item.classList.add(\"fas\");\r\n        item.style.color = \"red\";\r\n        await (0,_involvementAPI_js__WEBPACK_IMPORTED_MODULE_2__.postAPI)(item.id);\r\n        listLikes();\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n// List Items\r\nconst listItems = async () => {\r\n  const ul = document.querySelector(\".recipes\");\r\n  const food = await (0,_fetchAllData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  food.forEach((element) => {\r\n    const li = document.createElement(\"li\");\r\n    li.className = \"recipe-item\";\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.className = \"food-img\";\r\n    img.src = element.strMealThumb;\r\n    img.alt = \"food\";\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = element.strMeal;\r\n    p.className = \"recipe-name\";\r\n\r\n    const div = document.createElement(\"div\");\r\n    div.className = \"likes\";\r\n    div.id = element.idMeal;\r\n\r\n    const heart = document.createElement(\"i\");\r\n    heart.classList.add(\"far\", \"fa-heart\");\r\n    heart.id = element.idMeal;\r\n\r\n    const btn = document.createElement(\"button\");\r\n    btn.type = \"button\";\r\n    btn.className = \"comments\";\r\n    btn.innerText = \"Comments\";\r\n    btn.id = element.idMeal;\r\n    (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn);\r\n\r\n    div.appendChild(heart);\r\n    p.appendChild(div);\r\n    li.appendChild(img);\r\n    li.appendChild(p);\r\n    li.appendChild(btn);\r\n    ul.appendChild(li);\r\n  });\r\n  addLike();\r\n};\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/ListItems.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchSingleData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchSingleData.js */ \"./src/modules/fetchSingleData.js\");\n\r\n\r\nconst comments = (btn) => {\r\n  const modal = document.getElementById('commentModal');\r\n  const span = document.getElementsByClassName('close')[0];\r\n  const modalContent = document.getElementById('modalContent');\r\n\r\n  btn.onclick = async () => {\r\n    const data = await (0,_fetchSingleData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btn.id);\r\n    const {\r\n      strMealThumb,\r\n      strMeal,\r\n      strCategory,\r\n      strArea,\r\n      strIngredient1,\r\n      strIngredient2,\r\n      strIngredient3,\r\n      strIngredient4,\r\n      strIngredient5,\r\n      strIngredient6,\r\n      strIngredient7,\r\n      strIngredient8,\r\n      strIngredient9,\r\n      strIngredient10,\r\n      strIngredient11,\r\n      strIngredient12,\r\n      strIngredient13,\r\n      strIngredient14,\r\n      strInstructions,\r\n    } = data;\r\n    modal.style.display = 'block';\r\n    modalContent.innerHTML = `\r\n    <img src=${strMealThumb} alt=${strMeal} />\r\n    <h1>${strMeal}</h1>\r\n    <h2>Instructions</h2>\r\n    <p>${strInstructions}</p>\r\n    <table>\r\n    <tr>\r\n    <td><strong>Category:</strong> ${strCategory}</td>\r\n    <td><strong>Area:</strong> ${strArea}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 1:</strong> ${strIngredient1}</td>\r\n    <td><strong>Ingredient 2:</strong> ${strIngredient2}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 3:</strong> ${strIngredient3}</td>\r\n    <td><strong>Ingredient 4:</strong> ${strIngredient4}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 5:</strong> ${strIngredient5}</td>\r\n    <td><strong>Ingredient 6:</strong> ${strIngredient6}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 7:</strong> ${strIngredient7}</td>\r\n    <td><strong>Ingredient 8:</strong> ${strIngredient8}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 9:</strong> ${strIngredient9}</td>\r\n    <td><strong>Ingredient 10:</strong> ${strIngredient10}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 11:</strong> ${strIngredient11}</td>\r\n    <td><strong>Ingredient 12:</strong> ${strIngredient12}</td>\r\n    </tr>\r\n    <tr>\r\n    <td><strong>Ingredient 13:</strong> ${strIngredient13}</td>\r\n    <td><strong>Ingredient 14:</strong> ${strIngredient14}</td>\r\n    </tr>\r\n    </table>\r\n    `;\r\n  };\r\n\r\n  span.onclick = () => {\r\n    modal.style.display = 'none';\r\n  };\r\n\r\n  window.onclick = (event) => {\r\n    if (event.target === modal) {\r\n      modal.style.display = 'none';\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/fetchAllData.js":
/*!*************************************!*\
  !*** ./src/modules/fetchAllData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchData = async () => {\r\n  const response = await fetch(\r\n    'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken',\r\n  );\r\n  const data = await response.json();\r\n  return data.meals;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/fetchAllData.js?");

/***/ }),

/***/ "./src/modules/fetchSingleData.js":
/*!****************************************!*\
  !*** ./src/modules/fetchSingleData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchSingleData = async (id) => {\r\n  const response = await fetch(\r\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,\r\n  );\r\n  const { meals } = await response.json();\r\n  return meals[0];\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchSingleData);\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/fetchSingleData.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postAPI\": () => (/* binding */ postAPI),\n/* harmony export */   \"getAPI\": () => (/* binding */ getAPI)\n/* harmony export */ });\nconst postAPI = async (id) => {\r\n  const response = await fetch(\r\n    \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6YOsY20BziHENblJkLk/likes/\",\r\n    {\r\n      method: \"POST\",\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        \"Content-type\": \"application/json; charset=UTF-8\",\r\n      },\r\n    }\r\n  );\r\n  return response.text();\r\n};\r\n\r\nconst getAPI = async () => {\r\n  const response = await fetch(\r\n    \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/j6YOsY20BziHENblJkLk/likes/\"\r\n  );\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack://js-group-capstone/./src/modules/involvementAPI.js?");

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