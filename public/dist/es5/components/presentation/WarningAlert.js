"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "div",
        { className: "alert bg--error" },
        React.createElement(
            "div",
            { className: "alert__body" },
            React.createElement(
                "b",
                null,
                props.errMessage
            )
        ),
        React.createElement(
            "div",
            { className: "alert__close", onClick: props.close },
            "×"
        )
    );
};