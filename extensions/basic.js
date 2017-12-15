//basic.js
// ==UserScript==
// @name       Extension - Scratch
// @namespace  http://scratch.mit.edu
// @version    who cares?
// @description  An extension for scratch. By ipodlover3354.
// @match      *://scratch.mit.edu/projects/*
// @author ipodlover3354
// ==/UserScript==

console.log("Extension working. Made by ipodlover3354 using an example script");
/* Extension demonstrating a reporter block */
/* Originally by Sayamindu Dasgupta <sayamindu@media.mit.edu>, May 2014 */
/* This is differnet */

new(function() {
	var ext = {};

	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {
			status: 2,
			msg: 'All set, 11 blocks loaded.'
		};
	};

	ext.one = function() {
		return 3.14;
	};
	ext.two = function() {
		return Infinity;
	};
	
	ext.true = function() {
		return true;
	};
	
	ext.false = function() {
		return false;
	};

	ext.run_script = function(boolean1, boolean2, num1, num2) {
		if (boolean1 === boolean2) {
			if (num1 === num2) {
				return true;
			}

			return false;
		}
	};

	ext.tfCode = function(menu1) {
		if (menu1 === true) {
			return true;
		}
		return false;
	};
	
	ext.odd = function(menu55) {
		if (menu55 === scriptWait) {
			return true;
		}
		return false;
	};
	
	ext.binary = function(meow) {
		if (meow === 1) {
			return true;
		}
		return false;
	};
	
	ext.hat = function(g1, g2, g3, g4) {
		if (g1 === g2) {
			if (g3 != g4) {
				return true;
			}
		}
		return false;
	};
	
	ext.notEqual = function(h1, h2) {
		if (h1 != h2) {
			return true;
		}
		return false;
	};
	
	ext.string = function(i1, i2) {
		if (i1 === i2) {
			return true;
		}
		return false;
	};
	
	ext.booleanHat = function(j1) {
		if (j1 === true) {
			return true;
		}
		return false;
	};
	
	ext.equal3 = function(k1, k2, k3) {
		if (k1 === k2) {
			if (k2 ===k3) {
				if (k1===k2) {
					return true;
				}
			}
		}
		return false;
	};


	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name, param1 default value, param2 default value
			['r', 'pi', 'one'],
			['r', 'infinity', 'two'],
			['h', 'if %b = %b and %n = %n', 'run_script', ' ', ' ', '0', '1'],
			['b', '%s = %s = %s', 'equal3'],
			['b', 'true', 'true',],
			['b', 'false', 'false'],
			[' ', 'do misc. %m.er', 'odd', 'scriptWait'],
			['h', 'if %b = %b and %b not equal to %b', 'hat'],
			['b', '%s != %s', 'notEqual'],
			['h', 'if %s = %s', 'string'],
			['h', 'if %b', 'booleanHat']
		],
		menus: {
			er: ['scriptWait'],
		}
	};

	// Register the extension
	ScratchExtensions.register('Basic - ipodlover3354', descriptor, ext);
})();
