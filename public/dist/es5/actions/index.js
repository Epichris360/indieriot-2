"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var TurboClient = require("../utils").TurboClient;


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

module.exports = {

	fetchUsers: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("user", params, constants.USERS_RECEIVED));
		};
	},

	addUser: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("user", params, constants.USER_CREATED));
		};
	},

	// Unlike addUser, register() also maintains a session for login state. After calling
	// TurboClient.createUser(), the new user is logged in as well:
	register: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED));
		};
	},

	loginUser: function (credentials) {
		return function (dispatch) {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED));
		};
	},

	currentUser: function () {
		return function (dispatch) {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED));
		};
	},

	logout: function () {
		return function (dispatch) {
			return dispatch(TurboClient.logout(constants.USER_LOGOUT));
		};
	},

	navBarTransparent: function () {
		return function (dispatch) {
			return dispatch({ type: constants.TRANSPARENT, data: null });
		};
	},

	navBarNotTransparent: function () {
		return function (dispatch) {
			return dispatch({ type: constants.NOTTRANSPARENT, data: null });
		};
	},

	noNavBar: function () {
		return function (dispatch) {
			return dispatch({ type: constants.NONAVBAR, data: null });
		};
	},

	updateUser: function (orig, params) {
		return function (dispatch) {
			return dispatch(TurboClient.putRequest("user", orig, params, constants.UPDATE_USER));
		};
	},

	createConcert: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("concerts", params, constants.NEW_CONCERT));
		};
	},

	getAllConcertsActive: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("concerts", null, constants.ALL_CONCERTS));
		};
	},

	createCart: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.postRequest("carts", params, constants.POST_CART));
		};
	},

	getCart: function (params) {
		return function (dispatch) {
			return dispatch(TurboClient.getRequest("carts", params, constants.GET_CART));
		};
	},

	updateCart: function (orig, params) {
		return function (dispatch) {
			return dispatch(TurboClient.putRequest("carts", orig, params, constants.UPDATE_CART));
		};
	}

};