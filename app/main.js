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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://business-timeline-app-v1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/JSModules/BusinessTimelineHandler.js":
/*!**************************************************!*\
  !*** ./src/JSModules/BusinessTimelineHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BusinessTimelineHandler)\n/* harmony export */ });\nclass BusinessTimelineHandler{\r\n    constructor(){\r\n        this.users = [];\r\n        this.timelines = [];\r\n    }\r\n\r\n    addUser(user){\r\n        this.users.push(user);\r\n        return true;\r\n    }\r\n\r\n    addTimeline(timeline){\r\n        this.timelines.push(timeline);\r\n        return true;\r\n    }\r\n\r\n    getTimelineAsColData(){\r\n        this.colPoints = [];\r\n        this.timelines.forEach(timeline => {\r\n            let points = timeline.getColData();\r\n            this.colPoints.push(points);\r\n        })\r\n        return this.colPoints;        \r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/BusinessTimelineHandler.js?");

/***/ }),

/***/ "./src/JSModules/builders/BusinessTimelineBuilder.js":
/*!***********************************************************!*\
  !*** ./src/JSModules/builders/BusinessTimelineBuilder.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BusinessTimelineBuilder)\n/* harmony export */ });\n/* harmony import */ var _utility_BusinessTimeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/BusinessTimeline */ \"./src/JSModules/utility/BusinessTimeline.js\");\n\r\n\r\nclass BusinessTimelineBuilder{\r\n    timezone;\r\n    user;\r\n    canBuildTimeline = false;\r\n\r\n    addTimezone(timezone){\r\n        this.timezone = timezone;\r\n        return this;\r\n    }\r\n    addUser(user){\r\n        this.user = user;\r\n        return this;\r\n    }\r\n\r\n    canBuild(){\r\n        let t = this.timezone;\r\n        let u = this.user;\r\n        if(\r\n            (t != null) &&\r\n            (u != null)\r\n        ){\r\n            this.canBuildTimeline = true;\r\n        }\r\n        return this.canBuildTimeline;\r\n    }\r\n\r\n    buildTimeline(){\r\n        let timeline = new _utility_BusinessTimeline__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.timezone);\r\n        timeline.calculateWorkTime(this.user.schedule, this.user.timezone);\r\n        return timeline;\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/builders/BusinessTimelineBuilder.js?");

/***/ }),

/***/ "./src/JSModules/builders/UserBuilder.js":
/*!***********************************************!*\
  !*** ./src/JSModules/builders/UserBuilder.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserBuilder)\n/* harmony export */ });\n/* harmony import */ var _utility_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/User */ \"./src/JSModules/utility/User.js\");\n\r\n\r\nclass UserBuilder {\r\n    name;\r\n    timezone;\r\n    schedule;\r\n    ready = false;\r\n\r\n    addName(name) {\r\n        this.name = name;\r\n        return this;\r\n    }\r\n    addTimezone(timezone) {\r\n        this.timezone = timezone;\r\n        return this;\r\n    }\r\n    addSchedule(schedule) {\r\n        this.schedule = schedule;\r\n        return this;\r\n    }\r\n\r\n    canBuild() {\r\n        if (\r\n            this.name != null &&\r\n            this.timezone != null &&\r\n            this.schedule != null\r\n        ) {\r\n            this.ready = true;\r\n        }\r\n        return this.ready;\r\n    }\r\n\r\n    buildUser(){\r\n        if(this.ready) return new _utility_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.name, this.timezone, this.schedule);\r\n        return false;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/builders/UserBuilder.js?");

/***/ }),

/***/ "./src/JSModules/utility/BusinessTimeline.js":
/*!***************************************************!*\
  !*** ./src/JSModules/utility/BusinessTimeline.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BusinessTimeline)\n/* harmony export */ });\n/* harmony import */ var _WorkTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkTime */ \"./src/JSModules/utility/WorkTime.js\");\n/* harmony import */ var _Hour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hour */ \"./src/JSModules/utility/Hour.js\");\n/* harmony import */ var _WorkTimeColApproach__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkTimeColApproach */ \"./src/JSModules/utility/WorkTimeColApproach.js\");\n\r\n\r\n\r\n\r\nclass BusinessTimeline{\r\n    format = \"en-US\"\r\n    calculatedWorkTime = []\r\n\r\n    constructor(timezone){\r\n        this.timezone = timezone;\r\n    }\r\n\r\n    calculateWorkTime(workTimes, originalTimezone){\r\n        let dates = [];\r\n        workTimes.forEach(workTime => {\r\n            console.log(\"CONVERTING FROM TIMEZONE \" + originalTimezone + \"TO TIMEZONE \" + this.timezone);\r\n            let start = workTime.startTime;\r\n            let end = workTime.endTime;\r\n\r\n            let startDate = new Date(new Date().toLocaleString(this.format, {timeZone: originalTimezone}));\r\n            let endDate = new Date(new Date().toLocaleString(this.format, {timeZone: originalTimezone}));\r\n\r\n            startDate.setHours(start.hour, start.min, 0);\r\n            endDate.setHours(end.hour, end.min, 0);\r\n\r\n            let lastStart = startDate;\r\n            let lastEnd = endDate;\r\n\r\n            startDate = new Date(startDate.toLocaleString(this.format, {timeZone: this.timezone}));\r\n            endDate = new Date(endDate.toLocaleString(this.format, {timeZone: this.timezone}));\r\n\r\n            console.log(\"=====\");\r\n            console.log(\"OLD VS NEW DATA\");\r\n            console.log(\"OLD: \");\r\n            console.log(lastStart);\r\n            console.log(lastEnd);\r\n            \r\n\r\n            let startHour = new _Hour__WEBPACK_IMPORTED_MODULE_1__[\"default\"](startDate.getHours(), startDate.getMinutes());\r\n            let endHour = new _Hour__WEBPACK_IMPORTED_MODULE_1__[\"default\"](endDate.getHours(), endDate.getMinutes());\r\n\r\n            console.log(\"NEW: \");\r\n            console.log(startHour);\r\n            console.log(endHour);\r\n            console.log(\"=====\");\r\n\r\n            dates.push(new _WorkTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startHour, endHour));\r\n        });\r\n        this.calculatedWorkTime = dates;\r\n        return this.calculatedWorkTime;\r\n    }\r\n\r\n    getColData(){\r\n        let helper = new _WorkTimeColApproach__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        console.log(\"SENDING DATA TO PROCESS\");\r\n        console.log(this.calculatedWorkTime);\r\n        let response =  helper.getTimelinePoints(this.calculatedWorkTime);\r\n        return response;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/utility/BusinessTimeline.js?");

/***/ }),

/***/ "./src/JSModules/utility/Hour.js":
/*!***************************************!*\
  !*** ./src/JSModules/utility/Hour.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hour)\n/* harmony export */ });\nclass Hour{\r\n    constructor(hour, min){\r\n        this.hour = hour;\r\n        this.min = min;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/utility/Hour.js?");

/***/ }),

/***/ "./src/JSModules/utility/User.js":
/*!***************************************!*\
  !*** ./src/JSModules/utility/User.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\nclass User{\r\n    constructor(name, timezone, schedule){\r\n        this.name = name;\r\n        this.timezone = timezone;\r\n        this.schedule = schedule;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/utility/User.js?");

/***/ }),

/***/ "./src/JSModules/utility/WorkTime.js":
/*!*******************************************!*\
  !*** ./src/JSModules/utility/WorkTime.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WorkTime)\n/* harmony export */ });\nclass WorkTime{\r\n    constructor(start,end){\r\n        this.startTime = start;\r\n        this.endTime = end;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/utility/WorkTime.js?");

/***/ }),

/***/ "./src/JSModules/utility/WorkTimeColApproach.js":
/*!******************************************************!*\
  !*** ./src/JSModules/utility/WorkTimeColApproach.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WorkTimeColApproach)\n/* harmony export */ });\n/* harmony import */ var _Hour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hour */ \"./src/JSModules/utility/Hour.js\");\n\r\n\r\nclass WorkTimeColApproach{\r\n    constructor(totalCols = 48){\r\n        this.totalCols = totalCols;\r\n        this.conversionFactor = this.totalCols / 24;\r\n    }\r\n\r\n    getTimelinePoints(userWorkTimes){\r\n        this.startPoints = [];\r\n        this.endPoints = [];\r\n\r\n        userWorkTimes.forEach(time => {\r\n            let startTime = time.startTime;\r\n            let endTime = time.endTime;\r\n\r\n            let startHour =  new _Hour__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startTime.hour, startTime.min);\r\n            let endHour =  new _Hour__WEBPACK_IMPORTED_MODULE_0__[\"default\"](endTime.hour, endTime.min);\r\n\r\n            let hourPoints = this.calculateHourPoints(startHour.hour);\r\n            let minPoints = this.calculateMinPoints(startHour.min);\r\n            let points = hourPoints + minPoints;\r\n\r\n            console.log(\"START Hour: \" + startHour.hour + \":\" + startHour.min + \" is getting the next points: \" + points);\r\n\r\n            this.startPoints.push(points);\r\n\r\n            hourPoints = this.calculateHourPoints(endHour.hour);\r\n            minPoints = this.calculateMinPoints(endHour.min);\r\n            points = hourPoints + minPoints;\r\n\r\n            console.log(\"END Hour: \" + endHour.hour + \":\" + endHour.min + \" is getting the next points: \" + points);\r\n\r\n            this.endPoints.push(points);\r\n        });\r\n        return [this.startPoints, this.endPoints];\r\n    }\r\n\r\n    calculateHourPoints(hour){\r\n        let hourPoint = hour * this.conversionFactor;\r\n        return hourPoint;\r\n    }\r\n\r\n    calculateMinPoints(min){\r\n        let minPoints = (min / 60) * this.conversionFactor;\r\n        return minPoints;\r\n    }\r\n}\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/JSModules/utility/WorkTimeColApproach.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testing/testCreations */ \"./src/testing/testCreations.js\");\n\r\n\r\n\r\nwindow.onload = (event) => {\r\n    console.log(\"Page is fully loaded\");\r\n    console.log(\"CREATING USERS ... \");\r\n    let user = _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createUser();\r\n    console.log(user);\r\n    let userB = _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createUserB();\r\n    console.log(userB);\r\n    \r\n    console.log(\"CREATING TIMELINE...\");\r\n    let timelineA = _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTimeline(user);\r\n    console.log(timelineA);\r\n    let timelineB = _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTimeline(userB);\r\n    console.log(timelineB);\r\n\r\n    console.log(\"CREATING HANDLER\");\r\n    let userArray = [user, userB];\r\n    let timelineArray = [timelineA, timelineB];\r\n    let handler = _testing_testCreations__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleTimelines(userArray, timelineArray);\r\n\r\n    let pointData = handler.getTimelineAsColData();\r\n    console.log(pointData);    \r\n};\r\n\r\n\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/index.js?");

/***/ }),

/***/ "./src/testing/testCreations.js":
/*!**************************************!*\
  !*** ./src/testing/testCreations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _JSModules_builders_UserBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../JSModules/builders/UserBuilder */ \"./src/JSModules/builders/UserBuilder.js\");\n/* harmony import */ var _JSModules_builders_BusinessTimelineBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../JSModules/builders/BusinessTimelineBuilder */ \"./src/JSModules/builders/BusinessTimelineBuilder.js\");\n/* harmony import */ var _JSModules_BusinessTimelineHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSModules/BusinessTimelineHandler */ \"./src/JSModules/BusinessTimelineHandler.js\");\n/* harmony import */ var _JSModules_utility_WorkTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../JSModules/utility/WorkTime */ \"./src/JSModules/utility/WorkTime.js\");\n/* harmony import */ var _JSModules_utility_Hour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSModules/utility/Hour */ \"./src/JSModules/utility/Hour.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createUser(){\r\n    let user = false;\r\n    let workTimes = [];\r\n    let hourA = new _JSModules_utility_Hour__WEBPACK_IMPORTED_MODULE_4__[\"default\"](5,30);\r\n    let hourB = new _JSModules_utility_Hour__WEBPACK_IMPORTED_MODULE_4__[\"default\"](10,30);\r\n    let workTime = new _JSModules_utility_WorkTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"](hourA, hourB);\r\n\r\n    workTimes.push(workTime);\r\n\r\n    let userBuilder = new _JSModules_builders_UserBuilder__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n        .addName(\"MemberA\")\r\n        .addTimezone(\"America/Mexico_City\")\r\n        .addSchedule(workTimes);\r\n    if (userBuilder.canBuild()) {\r\n        user = userBuilder.buildUser();\r\n    }\r\n    return user;\r\n}\r\n\r\nfunction createUserB(){\r\n    let user = false;\r\n    let workTimes = [];\r\n    // let hourA = new Hour(10,30);\r\n    // let hourB = new Hour(22,0);\r\n    let hourA = new _JSModules_utility_Hour__WEBPACK_IMPORTED_MODULE_4__[\"default\"](5,30);\r\n    let hourB = new _JSModules_utility_Hour__WEBPACK_IMPORTED_MODULE_4__[\"default\"](10,30);\r\n    let workTime = new _JSModules_utility_WorkTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"](hourA, hourB);\r\n\r\n    workTimes.push(workTime);\r\n\r\n    let timezoneA = \"Asia/Colombo\";\r\n    let timezoneB = \"Indian/Chagos\";\r\n    let timezoneC = \"America/Thule\";\r\n\r\n    let userBuilder = new _JSModules_builders_UserBuilder__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n        .addName(\"MemberB\")\r\n        .addTimezone(timezoneA)\r\n        .addSchedule(workTimes);\r\n    if (userBuilder.canBuild()) {\r\n        user = userBuilder.buildUser();\r\n    }\r\n    return user;\r\n\r\n}\r\n\r\nfunction createTimeline(user){\r\n    let timezoneA = \"America/Denver\";\r\n    let timezone = \"America/Mexico_City\";\r\n    let timeline = false;\r\n    let builder = new _JSModules_builders_BusinessTimelineBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        .addTimezone(timezoneA)\r\n        .addUser(user);\r\n    if(builder.canBuild()) timeline = builder.buildTimeline();\r\n\r\n    return timeline;\r\n}\r\n\r\nfunction handleTimelines(userArray, timelineArray){\r\n    let handler = new _JSModules_BusinessTimelineHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    userArray.forEach(user => {\r\n        handler.addUser(user);        \r\n    });\r\n    timelineArray.forEach(timeline => {\r\n        handler.addTimeline(timeline);\r\n    })\r\n    return handler;\r\n}\r\n\r\nconst Testing = {\r\n    createUser,\r\n    createUserB,\r\n    createTimeline,\r\n    handleTimelines\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testing);\n\n//# sourceURL=webpack://business-timeline-app-v1/./src/testing/testCreations.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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