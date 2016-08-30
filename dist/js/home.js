webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(1);
	var util = __webpack_require__(2);
	var Greeter = __webpack_require__(3);
	
	$(function () {
	    var c = util.add(1, 2);
	    console.log('1+2=' + c);
	
	    var greeter = new Greeter('world');
	    console.log(greeter.greet());
	    var greeter2 = new Greeter('world2');
	    console.log(greeter2.greet());
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var util = {
	    add: function add(a, b) {
	        return a + b;
	    }
	};
	
	module.exports = util;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var Greeter = function () {
	    function Greeter(message) {
	        this.greeting = message;
	    }
	    Greeter.prototype.greet = function () {
	        return 'Hello, ' + this.greeting;
	    };
	    return Greeter;
	}();
	
	module.exports = Greeter;

/***/ }
]);
//# sourceMappingURL=home.js.map