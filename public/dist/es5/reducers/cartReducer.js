"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants"));

var initialState = {
    user_id: "",
    concerts: [],
    total: 0
};

module.exports = function (_x, action) {
    var state = arguments[0] === undefined ? initialState : arguments[0];


    switch (action.type) {

        case constants.POST_CART:
            return action.data[0];

        case constants.GET_CART:
            return action.data[0];

        case constants.UPDATE_CART:
            return action.data[0];

        case constants.BUY_FROM_CART:
            return initialState;

        default:
            return state;
    }
};