//intermediate.js
console.log("Extension working. Made by ipodlover3354 using an example script");

var one = 1;

new(function() {
	var ext = this;

	// Cleanup function when the extension is unloaded
	ext._shutdown = function() {};

	// Status reporting code
	// Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {
			status: 2,
			msg: 'All set, 8 blocks loaded.'
		};
	};
	
	ext.form1 = function(a1) {
		if (a1 === true){
			return 1;
		}
		return 0;
	};
	
	ext.form2 = function(b1) {
		if (b1 === 1){
			return true;
		}
		return false;
	};
	
	ext.form3 = function(c1, c2) {
		if (c1 === c2) {
			return true;
		}
		return false;
	};
	
	ext.form4 = function(d1) {
		one = d1;
	};
	
	ext.form5 = function(e1) {
		if (one === e1) {
			one = 1;
			return true;
		}
		return false;
	};
  
  	ext.form6 = function(h1, h2) {
      	return h2 + h1;
    };
	
	ext.form7 = function(j1, j2) {
		if (j2 === '8-bit') {
			if (j1 <= 255) {
				return true;
			}
		} if (j2 === '16-bit') {
			if (j1 <= 32768) {
				return true;
			}
		} if (j2 === '32-bit') {
			if (j1 <= 2147483648) {
				return true;
			}
		}
		return false;
	};
	
	ext.secret = function(k1, callback) {
		
		$.ajax({
              url: 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http%3A%2F%2Fgoo.gl%2F'+ k1,
              dataType: 'jsonp',
              success: function( result_data ) {
                  // Got the data - parse it and return the temperature
                  result = result_data["longUrl"];
                  callback(result);
              }
        });
	};
	
	
	var descriptor = {
		blocks: [
			// Block type, block name, function name, param1 default value, param2 default value
			['r', 'convert %b to binary', 'form1'],
			['b', 'convert %n to true/false', 'form2', '0'],
			['h', 'if %n = %b', 'form3', '1'],
			[' ', 'broadcast message id %n', 'form4', '1'],
			['h', 'when i get broadcast id %n', 'form5', '1'],
          	['r', 'swap order %s %s', 'form6', 'hello', 'world'],
			['b', '%n is %m.bit', 'form7','8', '8-bit'],
			['R', 'grab %s goo.gl shortened link', 'secret'],
		],
		menus: {
			bit: ['8-bit', '16-bit', '32-bit']
		},
		url: ''
	};
/*
	// Register the extension*/
	ScratchExtensions.register('Intermediate - ipodlover3354', descriptor, ext);
})();