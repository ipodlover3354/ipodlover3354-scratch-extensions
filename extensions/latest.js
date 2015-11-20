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
	var ext = this;

	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {
			status: 2,
			msg: 'All set!'
		};
	};

	/*ext.NAME = function() {
		CODE
	};*/
	
	ext.openWeb = function(link) {
		window.location.href = link;
	};

	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name, param1 default value, param2 default value
			[' ', 'open %s in a new window', 'openWeb', 'http://scratchx.org/'],
		],
		menus: {
		}
	};

	// Register the extension
	ScratchExtensions.register('Latest - ipodlover3354', descriptor, ext);
})();
