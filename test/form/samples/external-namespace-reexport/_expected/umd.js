(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('highcharts')) :
	typeof define === 'function' && define.amd ? define(['exports', 'highcharts'], factory) :
	factory(global.myBundle = {},global.highcharts);
}(typeof self !== 'undefined' ? self : this, function (exports,highcharts) { 'use strict';

	exports.Highcharts = highcharts;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
