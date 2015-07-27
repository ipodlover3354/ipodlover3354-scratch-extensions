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

new(function() {
	var ext = this;

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
	
	ext.color = function(color) {
		return color;
	}
	
	ext.decodeURI = function(uri) {
		return decodeURI(uri);
	}
	ext.encodeURI = function(uri) {
		return encodeURI(uri);
	}


	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name, param1 default value, param2 default value
			['r',"return color %c",'color'],
			['r','decode URI %s','decodeURI'],
			['r','encode URI %s','encodeURI']
		],
		menus: {
			
	}};;

	// Register the extension
	ScratchExtensions.register(' - ipodlover3354', descriptor, ext);
})();