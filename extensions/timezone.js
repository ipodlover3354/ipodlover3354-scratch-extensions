//translate.js
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
	
	ext.gettimestamp = function(ts1, ts2, ts3, ts4, ts5, ts6) {
		var UTC = Date.UTC(ts1, ts2, ts3, ts4, ts5, ts6);
		return UTC;
	};

		ext.secret = function(k1, k2, k3 ,callback) {
		$.ajax({
              url: 'https://maps.googleapis.com/maps/api/timezone/json?location='+ k1 + ',' + k2 +'&timestamp='+ k3,
              dataType: 'json',
              success: function( result_data ) {
                  result = result_data["timeZoneName"];
                  callback(result);
              }
        });
	};
	
	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			// Block type, block name, function name, param1 default value, param2 default value
			['R','time zone name for location x coords %n y coords %n timestamp %n','secret'],
			['r','timestamp year %n month %n day %n hours %n minutes %n seconds %n','gettimestamp']
		],
		menus: {
		}
	};

	// Register the extension
	ScratchExtensions.register('TimeZone - ipodlover3354', descriptor, ext);
})();
