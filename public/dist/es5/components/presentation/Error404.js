"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router-dom").Link;
module.exports = function (props) {
    return React.createElement(
        "div",
        { className: "main-container" },
        React.createElement(
            "section",
            { className: "height-100 bg--dark text-center" },
            React.createElement(
                "div",
                { className: "container pos-vertical-center" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-sm-12" },
                        React.createElement(
                            "h1",
                            { className: "h1--large" },
                            "404"
                        ),
                        React.createElement(
                            "p",
                            { className: "lead" },
                            "The page you were looking for was not found."
                        ),
                        React.createElement(
                            Link,
                            { to: "/" },
                            "Go back to home page"
                        )
                    )
                )
            )
        )
    );
};

/*<!--end of row-->*/ /*<!--end of container-->*/