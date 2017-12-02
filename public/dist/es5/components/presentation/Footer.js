"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "footer",
        { className: "footer-3 text-center-xs space--xs " },
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-6" },
                    React.createElement("img", { alt: "Image", className: "logo", src: "/dist/img/logo-dark.png" }),
                    React.createElement(
                        "ul",
                        { className: "list-inline list--hover" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "type--fine-print" },
                                    "Get Started"
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "span",
                                    { className: "type--fine-print" },
                                    "help@stack.io"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-sm-6 text-right text-center-xs" },
                    React.createElement(
                        "ul",
                        { className: "social-list list-inline list--hover" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "socicon socicon-google icon icon--xs" })
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "socicon socicon-twitter icon icon--xs" })
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "socicon socicon-facebook icon icon--xs" })
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("i", { className: "socicon socicon-instagram icon icon--xs" })
                            )
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-sm-6" },
                    React.createElement(
                        "p",
                        { className: "type--fine-print" },
                        "Supercharge your web workflow"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-sm-6 text-right text-center-xs" },
                    React.createElement(
                        "span",
                        { className: "type--fine-print" },
                        "©",
                        React.createElement("span", { className: "update-year" }),
                        " Stack Inc."
                    ),
                    React.createElement(
                        "a",
                        { className: "type--fine-print", href: "#" },
                        "Privacy Policy"
                    ),
                    React.createElement(
                        "a",
                        { className: "type--fine-print", href: "#" },
                        "Legal"
                    )
                )
            )
        )
    );
};

/*<!--end of row-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/