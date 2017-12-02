"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
module.exports = function (props) {
    return React.createElement(
        "div",
        { className: "masonry__item col-sm-4", "data-masonry-filter": "Computing" },
        React.createElement(
            "div",
            { className: "product product--tile bg--secondary text-center", style: { backgroundColor: "#f1f2ed" } },
            React.createElement(
                "a",
                { href: "#" },
                React.createElement("img", { alt: "Image", src: "" + props.con.picture })
            ),
            React.createElement(
                "a",
                { className: "block", href: "#" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "h5",
                        null,
                        props.con.concertName
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "span",
                        { className: "h4 inline-block" },
                        "$" + props.con.price
                    )
                )
            ),
            React.createElement(
                "button",
                { className: "btn btn--primary", style: { padding: 5 }, onClick: props.addToCart },
                "Add To Cart:",
                React.createElement("i", { style: { color: "white" }, className: "stack-basket" })
            )
        )
    );
};

/*<span className="h4 inline-block type--strikethrough">$899</span>*/