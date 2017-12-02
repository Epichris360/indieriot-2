"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	transparent: true,
	show: true
};
//true == transparent
//false == not transparent

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];


	switch (action.type) {

		case constants.TRANSPARENT:
			//console.log('works!! from navbarReducer')
			return { transparent: true, show: true };

		case constants.NOTTRANSPARENT:
			return { transparent: false, show: true };

		case constants.NONAVBAR:
			return { transparent: true, show: false };

		default:
			return initialState;
	}
};