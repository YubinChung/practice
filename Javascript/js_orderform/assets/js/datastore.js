(function (window){  // ready
	'use strict'; // if under ec6 ver.

	// namespace: to avoid overwrite.
	var App = window.App || {};
	
	// constructor 
	function DataStore(){
		console.log('running the DataStore function');

		// make new object
		this.data = {};
	}

	// prototype
	DataStore.prototype.add = function(key, val) {
		this.data[key] = val;
	}
	
	DataStore.prototype.get = function(key) {
		return this.data[key];
	}
	
	DataStore.prototype.getAll = function() {
		return this.data;
	}
	
	DataStore.prototype.remove = function(key) {
		delete this.data[key];
	}

	App.DataStore = DataStore;
	window.App = App;

})(window);