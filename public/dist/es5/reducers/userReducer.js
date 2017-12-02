"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
	role: "normal",
	id: "",
	category: ""
};
module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];


	switch (action.type) {

		case constants.CURRENT_USER_RECEIVED:
			return action.data;

		case constants.USER_CREATED:
			return action.data;

		case constants.USER_LOGOUT:
			return initialState;

		case constants.UPDATE_USER:
			return action.data;

		default:
			return state;
	}
};