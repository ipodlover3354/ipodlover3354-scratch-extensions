//expert.js
// ==UserScript==
// @name       Extension - Scratch
// @namespace  http://scratch.mit.edu
// @version    who cares?
// @description  An extension for scratch. By ipodlover3354.
// @match      *://scratch.mit.edu/projects/*
// @author ipodlover3354
// ==/UserScript==

console.log("Script loaded correctly");

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

	//ext.function = function(per1, per2) {};
	ext._1 = function(_1,_2,_3){
		if ( _2 === "+" ) {
			return _1 + _3;
		}if ( _2 === "-" ) {
			return _1 - _3;
		}if ( _2 === "*" ) {
			return _1 * _3;
		}if ( _2 === "/" ) {
			return _1 / _3;
		}if ( _2 === "%" ) {
			return _1 % _3;
		}if ( _2 === "=" ) {
			if (_1===_3){
				return _1 +'='+ _3;
			}else{
				return _1 +'=/='+ _3;
			}
		}if ( _2 === "<" ) {
			if (_1<_3){
				return _3;
			}else{
				return _1;
			}
		}if ( _2 === ">" ) {
			if (_1>_3){
				return _1;
			}else{
				return _3;
			}
		}if ( _2 === "<=" ) {
			if (_1<=_3){
				return _3;
			}else{
				return _1;
			}
		}if ( _2 === ">=" ) {
			if (_1>=_3){
				return _1;
			}else{
				return _3;
			}
		}
	};
	ext._5 = function(_1,_2,_3){
		$.ajax({
              url: 'https://currencyconverter.p.mashape.com/?from='+ _1 +'&from_amount='+_2+'&to='+_3,
              dataType: 'jsonp',
              success: function( result_data ) {
                  // Got the data - parse it and return the temperature
                  result = result_data["to_amount"];
                  callback(result);
              }
        });
	};
  ext._6 = function(_1){
  return isFinite(_1);
  };
	
	// Block and block menu descriptions
	/*var descriptor = {
		blocks: [
			//['type', 'name', 'function','def1','def2],
			['r','%n %m.math %n','_1','','+',''],
			['-'],
			[' ','load extension %s |BUGGY|','_2'],
			['f','unload extension %s |BUGGY|','_3'],
			[' ','refresh extension %s |BUGGY|','_4'],
			['-'],
			['R','convert %n %s into %s |BUGGY|','_5'],
          ['-']*/
	
	// Block and block menu descriptions
	var descriptor = {
		blocks: [
			//['type', 'name', 'function','def1','def2],
			['r','%n %m.math %n','_1','','+',''],
			['-'],
			[' ','load extension %s |BUGGY|','_2'],
			['f','unload extension %s |BUGGY|','_3'],
			[' ','refresh extension %s |BUGGY|','_4'],
			['-'],
			['R','convert %n %s into %s |BUGGY|','_5'],
          ['-'],
          ['b','%s is number?','_6']
		],
		menus: {
			//name: [one,two]
			math: ['+','-','*','/','%',{},'=','<','>','<=','>='],
		}
	};
	//After loading block functions
	ext._2 = function(_1){
		ScratchExtensions.register(_1, descriptor, ext); 
	};
	ext._3 = function(_1){
		ScratchExtensions.unregister(_1); 
	};
	ext._4 = function(_1){
		ScratchExtensions.unregister(_1); 
		ScratchExtensions.register(_1, descriptor, ext); 
	};

	// Register the extension
	ScratchExtensions.register('Advanced Blocks - ipodlover3354', descriptor, ext);
})();