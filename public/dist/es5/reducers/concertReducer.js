"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var constants = _interopRequire(require("../constants"));

var initialState = [];

module.exports = function (_x, action) {
  var state = arguments[0] === undefined ? initialState : arguments[0];
  var newState = undefined;
  switch (action.type) {

    case constants.ALL_CONCERTS:
      return [].concat(_toConsumableArray(action.data));

    case constants.NEW_CONCERT:


      return [].concat(_toConsumableArray(action.data), _toConsumableArray(state));

    default:
      return state;
  }
};