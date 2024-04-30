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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./jpn-text.png */ \"./src/jpn-text.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n#main-column {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n\np {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.title {\n    font-size: 30px;\n    font-weight: 500;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    padding: 10px 0px 0px 0px;\n}\n\nheader {\n    text-align: center;\n}\n\n.name {\n    font-size: 20px;\n    font-weight: 500;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    padding: 10px 0px 0px 0px;\n    text-align: left;\n    left: 20px;\n    position: relative;\n}\n\n\n.section {\n    border: 2px solid red;\n    border-radius: 10%;\n    text-align: center;\n    width: 50%;\n    background-color: rgb(229, 229, 229);\n}\n\n\nimg {\n    width: 50%;\n    padding: 20px 0px 0px 0px;\n}\n\n.section img {\n    width: 200px;\n    height: 200px;\n    padding: 20px 0px 0px 0px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\nfunction createParagraphElem(text, cls) {\n    let p = document.createElement('p');\n    p.innerText = text;\n    if (cls.length > 0) {\n        p.className = cls;\n    }\n    return p;\n}\n\nfunction createContactDiv(name, title, number, email) {\n    let d = document.createElement('div');\n    d.className = 'section';\n    let pName = document.createElement('p');\n    pName.className = 'name';\n    pName.innerText = name;\n    let pTitle = document.createElement('p');\n    pTitle.innerText = title;\n    let pNumber = document.createElement('p');\n    pNumber.innerText = number;\n    let pMail = document.createElement('p');\n    pMail.innerText = email;\n    d.appendChild(pName);\n    d.appendChild(pTitle);\n    d.appendChild(pNumber);\n    d.appendChild(pMail);\n    return d;\n}\n\n\nfunction createAboutPage() {\n    // Create top level div\n    let mainColumn = document.createElement('div')\n    mainColumn.id = 'main-column'\n\n    // Header Section\n    let headerDiv = document.createElement('div')\n    headerDiv.className = 'section'\n    let headerText = createParagraphElem(\"Contact Us!\", \"title\");\n    headerDiv.appendChild(headerText);\n    mainColumn.appendChild(headerDiv)\n\n    // Contacts Section\n    let contactData = [\n        {name: 'Sato Kurosawa', title: 'Manager', email: 'sato@gmail.com', number: '555-555-5511'},\n        {name: 'Moeko Kurosawa', title: 'First Lady', email: 'moeko@gmail.com', number: '555-555-5512'},\n        {name: 'Fujiko Kurosawa', title: 'Kiddo', email: 'fuji@gmail.com', number: '555-555-5514'},\n    ]\n\n    for (let i = 0; i < contactData.length; i++) {\n        let contact = contactData[i];\n        let child = createContactDiv(contact.name, contact.title, contact.number, contact.email);\n        mainColumn.appendChild(child);\n    }\n\n    return mainColumn\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _japan_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./japan.jpg */ \"./src/japan.jpg\");\n\n\nfunction createParagraphElem(text, cls) {\n    let p = document.createElement('p');\n    p.innerText = text;\n    if (cls.length > 0) {\n        p.className = cls;\n    }\n    return p;\n}\n\nfunction createHomePage() {\n    // Create top level div\n    let mainColumn = document.createElement('div')\n    mainColumn.id = 'main-column'\n\n    // Header Section\n    let headerDiv = document.createElement('div')\n    headerDiv.className = 'section'\n    let headerText = createParagraphElem(\"Nippon Brooklyn\", \"title\");\n    headerDiv.appendChild(headerText);\n\n    mainColumn.appendChild(headerDiv)\n\n    // Title Section\n    let titleDiv = document.createElement('div')\n    titleDiv.id = 'main-section'\n    titleDiv.className = 'section'\n    let img = document.createElement('img')\n    img.src = _japan_jpg__WEBPACK_IMPORTED_MODULE_0__\n    titleDiv.appendChild(img);\n    let titletext = createParagraphElem(\"Nippon Brooklyn is Williamsburg's premier Japanese cafe and bar. We serve fulfilling drinks and modern japanese eats at fair price. We also have a chic, vibrant atmosphere befitting the Brooklyn vibe. Come and visit Tokyo with us!\", \"\");\n    titleDiv.appendChild(titletext);\n\n    mainColumn.appendChild(titleDiv)\n\n    // Hours Section\n    let hoursDiv = document.createElement('div')\n    hoursDiv.className = 'section'\n    let hoursText1 = createParagraphElem(\"Hours\", \"title\");\n    let hoursText2 = createParagraphElem(\"Monday-Friday: 10am-9pm\", \"\");\n    let hoursText3 = createParagraphElem(\"Saturday-Sunday: 11am-11pm\", \"\");\n    hoursDiv.appendChild(hoursText1);\n    hoursDiv.appendChild(hoursText2);\n    hoursDiv.appendChild(hoursText3);\n\n    mainColumn.appendChild(hoursDiv)\n\n    // Location Section\n    let locationDiv = document.createElement('div')\n    locationDiv.className = 'section'\n    let locationtext1 = createParagraphElem(\"Location\", \"title\");\n    let locationtext2 = createParagraphElem(\"20 North 5th Street, Brooklyn NY, 11249\", \"\");\n    locationDiv.appendChild(locationtext1);\n    locationDiv.appendChild(locationtext2);    \n    mainColumn.appendChild(locationDiv)\n    \n    return mainColumn\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nlet content = document.getElementById('content');\n\n// Button Listeners\n\nlet homeBtn = document.getElementById(\"h\")\nhomeBtn.addEventListener(\"click\", function() {\n    content.innerHTML = '';\n    let newContent = (0,_home__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();\n    content.appendChild(newContent);\n})\n\nlet aboutBtn = document.getElementById(\"a\")\naboutBtn.addEventListener(\"click\", function() {\n    content.innerHTML = '';\n    let newContent = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createAboutPage)();\n    content.appendChild(newContent);\n})\n\nlet menuBtn = document.getElementById(\"m\")\nmenuBtn.addEventListener(\"click\", function() {\n    content.innerHTML = '';\n    let newContent = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuPage)();\n    content.appendChild(newContent);\n})\n\nlet pageContent = (0,_home__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();\ncontent.appendChild(pageContent);\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _cola_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cola.png */ \"./src/cola.png\");\n/* harmony import */ var _iced_tea_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iced-tea.png */ \"./src/iced-tea.png\");\n/* harmony import */ var _matcha_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matcha.png */ \"./src/matcha.png\");\n/* harmony import */ var _okonomiyaki_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./okonomiyaki.png */ \"./src/okonomiyaki.png\");\n/* harmony import */ var _ramen_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ramen.png */ \"./src/ramen.png\");\n/* harmony import */ var _curry_rice_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./curry-rice.png */ \"./src/curry-rice.png\");\n/* harmony import */ var _shumai_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shumai.png */ \"./src/shumai.png\");\n/* harmony import */ var _takoyaki_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./takoyaki.png */ \"./src/takoyaki.png\");\n/* harmony import */ var _tempura_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tempura.png */ \"./src/tempura.png\");\n\n\n\n\n\n\n\n\n\n\nfunction createParagraphElem(text, cls) {\n    let p = document.createElement('p');\n    p.innerText = text;\n    if (cls.length > 0) {\n        p.className = cls;\n    }\n    return p;\n}\n\nfunction createItemDiv(name, price, description, image) {\n    let d = document.createElement('div');\n    d.className = 'section';\n    let pName = document.createElement('p');\n    pName.className = 'name';\n    pName.innerText = name;\n    let pPrice = document.createElement('p');\n    pPrice.innerText = price;\n    let pDesc = document.createElement('p');\n    pDesc.innerText = description;\n    let img = document.createElement('img');\n    img.src = image;\n    d.appendChild(pName);\n    d.appendChild(pPrice);\n    d.appendChild(pDesc);\n    d.appendChild(img);\n    return d;\n}\n\n\nfunction createHeaderDiv(text) {\n    let headerDiv = document.createElement('div')\n    headerDiv.className = 'section'\n    let headerText = createParagraphElem(text, \"title\");\n    headerDiv.appendChild(headerText);\n    return headerDiv\n}\n\nfunction createMenuPage() {\n    // Create top level div\n    let mainColumn = document.createElement('div')\n    mainColumn.id = 'main-column'\n\n    // Header Section\n    let headerDiv3 = createHeaderDiv(\"Appetizers\");\n    mainColumn.appendChild(headerDiv3);\n\n    // Appetizer Section\n    let appetizers = [\n        {name: 'Takoyaki', price: '10$', description: 'Fried Octopos Balls!', image: _takoyaki_png__WEBPACK_IMPORTED_MODULE_7__},\n        {name: 'Shrimp Tempura', price: '10$', description: 'With a light batter!', image: _tempura_png__WEBPACK_IMPORTED_MODULE_8__},\n        {name: 'Shu Mai', price: '10$', description: 'Shrimp Dumplings!', image: _shumai_png__WEBPACK_IMPORTED_MODULE_6__},\n    ]\n    for (let i = 0; i < appetizers.length; i++) {\n        let appetizer = appetizers[i];\n        let child = createItemDiv(appetizer.name, appetizer.price, appetizer.description, appetizer.image);\n        mainColumn.appendChild(child);\n    }\n\n    let headerDiv2 = createHeaderDiv(\"Mains\");\n    mainColumn.appendChild(headerDiv2);\n\n    // Mains Section\n    let mains = [\n        {name: 'Okonomiyaki', price: '15$', description: 'Savory Japanese Pancake!', image: _okonomiyaki_png__WEBPACK_IMPORTED_MODULE_3__},\n        {name: 'House Ramen', price: '15$', description: 'With Chasu Pork and Eggs!', image: _ramen_png__WEBPACK_IMPORTED_MODULE_4__},\n        {name: 'Curry Rice', price: '18$', description: 'Comes with Chicken Karaage!', image: _curry_rice_png__WEBPACK_IMPORTED_MODULE_5__},\n    ]\n    for (let i = 0; i < mains.length; i++) {\n        let main = mains[i];\n        let child = createItemDiv(main.name, main.price, main.description, main.image);\n        mainColumn.appendChild(child);\n    }\n    \n    let headerDiv1 = createHeaderDiv(\"Beverages\");\n    mainColumn.appendChild(headerDiv1);\n\n    // Beverages Section\n    let beverages = [\n        {name: 'Coca Cola', price: '2$', description: 'Ice cold coke!', image: _cola_png__WEBPACK_IMPORTED_MODULE_0__},\n        {name: 'Iced Tea', price: '2$', description: 'Comes with Black or Green Tea flavored. Unsweetened!', image: _iced_tea_png__WEBPACK_IMPORTED_MODULE_1__},\n        {name: 'Matcha Latte', price: '2$', description: 'Comes either hot or iced!', image: _matcha_png__WEBPACK_IMPORTED_MODULE_2__},\n    ]\n    for (let i = 0; i < beverages.length; i++) {\n        let beverage = beverages[i];\n        let child = createItemDiv(beverage.name, beverage.price, beverage.description, beverage.image);\n        mainColumn.appendChild(child);\n    }\n\n    return mainColumn\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/cola.png":
/*!**********************!*\
  !*** ./src/cola.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e5a84c5d3ef02c6868e.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/cola.png?");

/***/ }),

/***/ "./src/curry-rice.png":
/*!****************************!*\
  !*** ./src/curry-rice.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c64504a51e13ff5fea66.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/curry-rice.png?");

/***/ }),

/***/ "./src/iced-tea.png":
/*!**************************!*\
  !*** ./src/iced-tea.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc7e9d904dcafdf41156.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/iced-tea.png?");

/***/ }),

/***/ "./src/japan.jpg":
/*!***********************!*\
  !*** ./src/japan.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b6d9e1f1fccf0d4ff268.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/japan.jpg?");

/***/ }),

/***/ "./src/jpn-text.png":
/*!**************************!*\
  !*** ./src/jpn-text.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"24f47b1aa587d9589276.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/jpn-text.png?");

/***/ }),

/***/ "./src/matcha.png":
/*!************************!*\
  !*** ./src/matcha.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5012024e3e87e114fcd3.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/matcha.png?");

/***/ }),

/***/ "./src/okonomiyaki.png":
/*!*****************************!*\
  !*** ./src/okonomiyaki.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c4045f92307b8f81836.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/okonomiyaki.png?");

/***/ }),

/***/ "./src/ramen.png":
/*!***********************!*\
  !*** ./src/ramen.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cdf0242dcc00d879e0e1.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/ramen.png?");

/***/ }),

/***/ "./src/shumai.png":
/*!************************!*\
  !*** ./src/shumai.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"208cada994efe3f226a8.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/shumai.png?");

/***/ }),

/***/ "./src/takoyaki.png":
/*!**************************!*\
  !*** ./src/takoyaki.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"169d124445000411f040.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/takoyaki.png?");

/***/ }),

/***/ "./src/tempura.png":
/*!*************************!*\
  !*** ./src/tempura.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a65654989d0b0fd0b37.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/tempura.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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