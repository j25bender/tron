/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	const LightCycle = __webpack_require__(1);

	const canvas = document.getElementById('game');
	const context = canvas.getContext('2d');

	let lightCycle1 = new LightCycle(100, 300, 50, 20, 1);
	let AilightCycle1 = new LightCycle(450, 300, 50, 20, 1);

	const lightCycles = [lightCycle1, AilightCycle1];

	requestAnimationFrame(function gameLoop() {
	    context.clearRect(0, 0, canvas.width, canvas.height);
	    lightCycles.forEach(lightCycle => lightCycle.draw(context));

	    requestAnimationFrame(gameLoop);
	});

	// canvas.addEventListener('keydown', function(event) {
	//     // event.preventDefault;
	//     console.log(event.which)
	// })

	function inputKeyUp(e) {
	    e.which = e.which || e.keyCode;
	    if (e.which == 13) {
	        // use 1 turbo boost
	        console.log('Did it work you dumb asshole?');
	    }
	}

	// requestAnimationFrame(gameLoop);

	//start screen with directions

	//level 1 only two opposing lightCycle and no obstacles

	//animation should start on time delay or keydown event

	//lightCycle should leave wall trail 

	//game lost on contact with either canvas boundry or wall trail

	//game won upon destruction of ai

	//score should update and lives lost should decrement if necessary

	//canvas should reload to either same level on loss or next level

	//difficulty should increase with more ai lightCycle, obstacles, speed etc.

	//game over when 3 lives lost

	//game won when all levels completed

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	class LightCycle {
	  constructor(x, y, width, height, dx) {
	    this.x = x;
	    this.y = y;
	    this.width = width;
	    this.height = height;
	    this.dx = dx;
	  }

	  draw(context) {
	    context.fillRect(this.x, this.y, this.width, this.height, this.dx);
	  }

	  move() {
	    console.log('move!');
	  }
	}

	module.exports = LightCycle;

/***/ })
/******/ ]);