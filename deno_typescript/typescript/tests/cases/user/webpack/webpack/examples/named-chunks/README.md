# example.js

``` javascript
var a = require("a");

require.ensure(["b"], function(require) {
	// a named chunk
	var c = require("c");
}, "my own chunk");

require.ensure(["b"], function(require) {
	// another chunk with the same name
	var d = require("d");
}, "my own chunk");

require.ensure([], function(require) {
	// the same again
}, "my own chunk");

require.ensure(["b"], function(require) {
	// chunk without name
	var d = require("d");
});
```


# dist/output.js

<details><summary><code>/******/ (function(modules) { /* webpackBootstrap */ })</code></summary>

``` javascript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".output.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
```

</details>

``` javascript
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var a = __webpack_require__(/*! a */ 3);

__webpack_require__.e(/*! require.ensure | my own chunk */ 1).then((function(require) {
	// a named chunk
	var c = __webpack_require__(/*! c */ 4);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

__webpack_require__.e(/*! require.ensure | my own chunk */ 1).then((function(require) {
	// another chunk with the same name
	var d = __webpack_require__(/*! d */ 1);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

__webpack_require__.e(/*! require.ensure | my own chunk */ 1).then((function(require) {
	// the same again
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

__webpack_require__.e(/*! require.ensure */ 2).then((function(require) {
	// chunk without name
	var d = __webpack_require__(/*! d */ 1);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);


/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./node_modules/a.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module a

/***/ })
/******/ ]);
```

# dist/1.output.js

``` javascript
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/*!***************************!*\
  !*** ./node_modules/b.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module b

/***/ }),
/* 1 */
/*!***************************!*\
  !*** ./node_modules/d.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module d

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/*!***************************!*\
  !*** ./node_modules/c.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module c

/***/ })
]]);
```

# dist/2.output.js

``` javascript
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */
/*!***************************!*\
  !*** ./node_modules/b.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module b

/***/ }),
/* 1 */
/*!***************************!*\
  !*** ./node_modules/d.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// module d

/***/ })
]]);
```

# Info

## Unoptimized

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.29.0
      Asset       Size  Chunks             Chunk Names
1.output.js  677 bytes       1  [emitted]  my own chunk
2.output.js  463 bytes       2  [emitted]  
  output.js   9.07 KiB       0  [emitted]  main
Entrypoint main = output.js
chunk    {0} output.js (main) 432 bytes >{1}< >{2}< [entry] [rendered]
    > ./example.js main
 [2] ./example.js 421 bytes {0} [built]
     single entry ./example.js  main
     + 1 hidden module
chunk    {1} 1.output.js (my own chunk) 33 bytes <{0}> [rendered]
    > [2] ./example.js 13:0-15:18
    > [2] ./example.js 3:0-6:18
    > [2] ./example.js 8:0-11:18
    3 modules
chunk    {2} 2.output.js 22 bytes <{0}> [rendered]
    > [2] ./example.js 17:0-20:2
    2 modules
```

## Production mode

```
Hash: 0a1b2c3d4e5f6a7b8c9d
Version: webpack 4.29.0
      Asset       Size  Chunks             Chunk Names
1.output.js  112 bytes    1, 2  [emitted]  my own chunk
2.output.js   92 bytes       2  [emitted]  
  output.js   2.19 KiB       0  [emitted]  main
Entrypoint main = output.js
chunk    {0} output.js (main) 432 bytes >{1}< >{2}< [entry] [rendered]
    > ./example.js main
 [2] ./example.js 421 bytes {0} [built]
     single entry ./example.js  main
     + 1 hidden module
chunk    {1} 1.output.js (my own chunk) 33 bytes <{0}> [rendered]
    > [2] ./example.js 13:0-15:18
    > [2] ./example.js 3:0-6:18
    > [2] ./example.js 8:0-11:18
    3 modules
chunk    {2} 2.output.js 22 bytes <{0}> [rendered]
    > [2] ./example.js 17:0-20:2
    2 modules
```