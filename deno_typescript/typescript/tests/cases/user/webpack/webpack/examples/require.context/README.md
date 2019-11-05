# example.js

``` javascript
function getTemplate(templateName) {
	return require("./templates/"+templateName);
}
console.log(getTemplate("a"));
console.log(getTemplate("b"));
```

# templates/

* a.js
* b.js
* c.js

All templates are of this pattern:

``` javascript
module.exports = function() {
	return "This text was generated by template X";
}
```

# dist/output.js

<details><summary><code>/******/ (function(modules) { /* webpackBootstrap */ })</code></summary>

``` javascript
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
```

</details>

``` javascript
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function getTemplate(templateName) {
	return __webpack_require__(1)("./"+templateName);
}
console.log(getTemplate("a"));
console.log(getTemplate("b"));

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./templates sync ^\.\/.*$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a": 2,
	"./a.js": 2,
	"./b": 3,
	"./b.js": 3,
	"./c": 4,
	"./c.js": 4
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./templates/a.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	return "This text was generated by template A";
}

/***/ }),
/* 3 */
/*!************************!*\
  !*** ./templates/b.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	return "This text was generated by template B";
}

/***/ }),
/* 4 */
/*!************************!*\
  !*** ./templates/c.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	return "This text was generated by template C";
}

/***/ })
/******/ ]);
```

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.29.0
    Asset      Size  Chunks             Chunk Names
output.js  5.41 KiB       0  [emitted]  main
Entrypoint main = output.js
chunk    {0} output.js (main) 603 bytes [entry] [rendered]
    > ./example.js main
 [0] ./example.js 146 bytes {0} [built]
     single entry ./example.js  main
 [1] ./templates sync ^\.\/.*$ 217 bytes {0} [built]
     cjs require context ./templates [0] ./example.js 2:8-44
 [2] ./templates/a.js 80 bytes {0} [optional] [built]
     context element ./a [1] ./templates sync ^\.\/.*$ ./a
     context element ./a.js [1] ./templates sync ^\.\/.*$ ./a.js
 [3] ./templates/b.js 80 bytes {0} [optional] [built]
     context element ./b [1] ./templates sync ^\.\/.*$ ./b
     context element ./b.js [1] ./templates sync ^\.\/.*$ ./b.js
 [4] ./templates/c.js 80 bytes {0} [optional] [built]
     context element ./c [1] ./templates sync ^\.\/.*$ ./c
     context element ./c.js [1] ./templates sync ^\.\/.*$ ./c.js
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.29.0
    Asset      Size  Chunks             Chunk Names
output.js  1.54 KiB       0  [emitted]  main
Entrypoint main = output.js
chunk    {0} output.js (main) 603 bytes [entry] [rendered]
    > ./example.js main
 [0] ./templates/a.js 80 bytes {0} [optional] [built]
     context element ./a [4] ./templates sync ^\.\/.*$ ./a
     context element ./a.js [4] ./templates sync ^\.\/.*$ ./a.js
 [1] ./templates/b.js 80 bytes {0} [optional] [built]
     context element ./b [4] ./templates sync ^\.\/.*$ ./b
     context element ./b.js [4] ./templates sync ^\.\/.*$ ./b.js
 [2] ./templates/c.js 80 bytes {0} [optional] [built]
     context element ./c [4] ./templates sync ^\.\/.*$ ./c
     context element ./c.js [4] ./templates sync ^\.\/.*$ ./c.js
 [3] ./example.js 146 bytes {0} [built]
     single entry ./example.js  main
 [4] ./templates sync ^\.\/.*$ 217 bytes {0} [built]
     cjs require context ./templates [3] ./example.js 2:8-44
```

# Code Splitting

See [this example combined with code splitting](../code-splitted-require.context)