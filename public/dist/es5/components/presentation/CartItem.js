"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "div",
        { className: "col-sm-4" },
        React.createElement(
            "div",
            { className: "product-1" },
            React.createElement(
                "div",
                { className: "product__controls" },
                React.createElement(
                    "div",
                    { className: "col-xs-3" },
                    React.createElement(
                        "label",
                        null,
                        "Quantity:"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-6" },
                    React.createElement("input", { type: "number", name: "quantity", placeholder: "QTY" })
                ),
                React.createElement(
                    "div",
                    { className: "col-xs-3 text-right" },
                    React.createElement("button", { className: "checkmark checkmark--cross bg--error" })
                )
            ),
            React.createElement("img", { alt: "Image", src: "img/product-small-8.png" }),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h5",
                    null,
                    "Canon 550D"
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    { className: "h4 inline-block" },
                    "$849 per Ticket"
                ),
                React.createElement("br", null),
                React.createElement(
                    "span",
                    { className: "h4 inline-block" },
                    "Total: qty*price"
                )
            )
        )
    );
};