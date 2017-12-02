"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Footer = require("../presentation").Footer;
var AboutPage = (function (Component) {
    function AboutPage() {
        _classCallCheck(this, AboutPage);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(AboutPage, Component);

    _prototypeProperties(AboutPage, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.navBarTransparent();
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "main-container" },
                    React.createElement(
                        "section",
                        { className: "text-center imagebg space--lg", "data-overlay": "3" },
                        React.createElement(
                            "div",
                            { className: "background-image-holder",
                                style: { backgroundImage: "url('/dist/img/cool-blur-min.jpg')", opacity: 1 }
                            },
                            React.createElement("img", { alt: "background", src: "/dist/img/cool-blur-min.jpg" })
                        ),
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-8 col-md-6" },
                                    React.createElement(
                                        "h1",
                                        null,
                                        "Hi, We're IndieRiot"
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "lead" },
                                        "An innovative collective of like-minded folks making useful and enduring technology for indie artists and fans alike"
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" },
                                    React.createElement(
                                        "h2",
                                        null,
                                        "Built on passion and ingenuity"
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "lead" },
                                        "IndieRiot is built to offer high-quality, high-value services backed by timely and personable support. Recognised and awarded on multiple occasions for producing consistently outstanding results for our customers, it's no wonder over 20,000 customers enjoy using IndieRiot."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-11" },
                                    React.createElement(
                                        "div",
                                        { className: "slider border--round", "data-arrows": "true", "data-paging": "true",
                                            "data-children": 3
                                        },
                                        React.createElement(
                                            "ul",
                                            { className: "slides flickity-enabled is-draggable", tabIndex: 0 },
                                            React.createElement(
                                                "li",
                                                { className: "slide" },
                                                React.createElement("img", { alt: "Image", src: "img/gallery-1.jpg" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "slide" },
                                                React.createElement("img", { alt: "Image", src: "img/cowork-1.jpg" })
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "slide" },
                                                React.createElement("img", { alt: "Image", src: "img/cowork-5.jpg" })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center bg--secondary" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" },
                                    React.createElement(
                                        "h2",
                                        null,
                                        "What drives us"
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "lead" },
                                        "Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "bg--secondary" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature" },
                                        React.createElement(
                                            "h4",
                                            null,
                                            "Inclusion"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag."
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature" },
                                        React.createElement(
                                            "h4",
                                            null,
                                            "Ingenuity"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag."
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature" },
                                        React.createElement(
                                            "h4",
                                            null,
                                            "Innovation"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag."
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" },
                                    React.createElement(
                                        "h2",
                                        null,
                                        "Meet the makers"
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "lead" },
                                        "Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-1.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Vera Duncan"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Founder & CEO"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-3.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Zach Smith"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Co-Founder & CTO"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-2.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Bernice Lucas"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Chief of Operations"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-4.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Cameron Nguyen"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Lead Designer"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-5.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Josie Web"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Head of Development"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-sm-4" },
                                    React.createElement(
                                        "div",
                                        { className: "feature feature-8" },
                                        React.createElement("img", { alt: "Image", src: "/dist/img/avatar-round-6.png" }),
                                        React.createElement(
                                            "h5",
                                            null,
                                            "Bryce Vaughn"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Marketing Director"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        { className: "text-center" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3" },
                                    React.createElement(
                                        "div",
                                        { className: "cta" },
                                        React.createElement(
                                            "h2",
                                            null,
                                            "We're always looking for talent"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "lead" },
                                            "Got what it takes to work with us? Great! Send us a link to your resumé or portfolio to become part of our talent pool."
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "btn btn--primary type--uppercase", href: "#" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "See Job Openings"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(Footer, null),
                    React.createElement(
                        "a",
                        { className: "back-to-top inner-link", href: "#start", "data-scroll-class": "100vh:active" },
                        React.createElement("i", { className: "stack-interface stack-up-open-big" })
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return AboutPage;
})(Component);

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        navBarTransparent: function () {
            return dispatch(actions.navBarTransparent());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(AboutPage);
/*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/