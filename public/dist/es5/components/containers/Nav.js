"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router-dom").Link;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var withRouter = require("react-router").withRouter;


var transparentNav = "bar bar-2 hidden-xs bar--transparent bar--absolute";
var solidNav = "bar bar-2 hidden-xs bar--absolute";

var Nav = (function (Component) {
    function Nav() {
        _classCallCheck(this, Nav);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Nav, Component);

    _prototypeProperties(Nav, null, {
        signout: {
            value: function signout() {
                var _this = this;
                this.props.logout().then(function (data) {
                    _this.props.history.push("/");
                    return;
                })["catch"](function (err) {
                    console.log("err ", err.message);
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: !this.props.nav.show ? "hidden-md hidden-sm" : "nav-container " },
                    React.createElement(
                        "div",
                        { className: "bar bar--sm visible-xs" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-xs-3 col-sm-2" },
                                    React.createElement(
                                        Link,
                                        { to: "/" },
                                        React.createElement("img", { className: "logo logo-dark", alt: "logo", src: "/dist/img/logo-dark.png" }),
                                        React.createElement("img", { className: "logo logo-light", alt: "logo", src: "/dist/img/logo-light.png" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-xs-9 col-sm-10 text-right" },
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "hamburger-toggle", "data-toggle-class": "#menu2;hidden-xs " },
                                        React.createElement("i", { className: "icon icon--sm stack-interface stack-menu" })
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "nav",
                        { id: "menu2", className: this.props.nav.transparent ? transparentNav : solidNav, "data-scroll-class": "90vh:pos-fixed" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-2 text-center text-left-sm hidden-xs col-md-push-5" },
                                    React.createElement(
                                        "div",
                                        { className: "bar__module" },
                                        React.createElement(
                                            Link,
                                            { to: "/" },
                                            React.createElement("img", { className: "logo logo-dark", alt: "logo", src: "/dist/img/logo-dark.png" }),
                                            React.createElement("img", { className: "logo logo-light", alt: "logo", src: "/dist/img/logo-light.png" })
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-5 col-md-pull-2" },
                                    React.createElement(
                                        "div",
                                        { className: "bar__module" },
                                        React.createElement(
                                            "ul",
                                            { className: "menu-horizontal text-left" },
                                            React.createElement(
                                                "li",
                                                { className: "dropdown" },
                                                React.createElement(
                                                    Link,
                                                    { to: "/tickets" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "dropdown__trigger" },
                                                        "Tickets"
                                                    )
                                                )
                                            ),
                                            this.props.user.id != "" ? React.createElement(
                                                "li",
                                                { className: "dropdown" },
                                                React.createElement(
                                                    "span",
                                                    { className: "dropdown__trigger" },
                                                    "Options!"
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "dropdown__container" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "row" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "dropdown__content col-md-2 col-sm-4" },
                                                                React.createElement(
                                                                    "ul",
                                                                    { className: "menu-vertical" },
                                                                    this.props.user.category == "artist" ? React.createElement(
                                                                        "li",
                                                                        { className: "dropdown" },
                                                                        React.createElement(
                                                                            Link,
                                                                            { to: "/account-settings" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Account Settings"
                                                                            )
                                                                        )
                                                                    ) : null,
                                                                    this.props.user.category == "artist" ? React.createElement(
                                                                        "li",
                                                                        { className: "dropdown" },
                                                                        React.createElement(
                                                                            Link,
                                                                            { to: "/create-concert" },
                                                                            React.createElement(
                                                                                "span",
                                                                                { className: "dropdown__trigger" },
                                                                                "Create Concert"
                                                                            )
                                                                        )
                                                                    ) : null,
                                                                    React.createElement(
                                                                        "li",
                                                                        { className: "dropdown" },
                                                                        React.createElement(
                                                                            "span",
                                                                            { className: "dropdown__trigger" },
                                                                            "About"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "dropdown__container" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "container" },
                                                                                React.createElement(
                                                                                    "div",
                                                                                    { className: "row" },
                                                                                    React.createElement(
                                                                                        "div",
                                                                                        { className: "dropdown__content col-md-2" },
                                                                                        React.createElement(
                                                                                            "ul",
                                                                                            { className: "menu-vertical" },
                                                                                            React.createElement(
                                                                                                "li",
                                                                                                null,
                                                                                                React.createElement(
                                                                                                    "a",
                                                                                                    { href: "page-about-company.html" },
                                                                                                    "About Company"
                                                                                                )
                                                                                            ),
                                                                                            React.createElement(
                                                                                                "li",
                                                                                                null,
                                                                                                React.createElement(
                                                                                                    "a",
                                                                                                    { href: "page-about-team.html" },
                                                                                                    "About Team"
                                                                                                )
                                                                                            ),
                                                                                            React.createElement(
                                                                                                "li",
                                                                                                null,
                                                                                                React.createElement(
                                                                                                    "a",
                                                                                                    { href: "page-about-me.html" },
                                                                                                    "About Me"
                                                                                                )
                                                                                            ),
                                                                                            React.createElement(
                                                                                                "li",
                                                                                                null,
                                                                                                React.createElement(
                                                                                                    "a",
                                                                                                    { href: "page-about-history.html" },
                                                                                                    "About History"
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ) : null
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-5 text-right text-left-xs text-left-sm" },
                                    this.props.user.id == "" ? React.createElement(
                                        "div",
                                        { className: "bar__module" },
                                        React.createElement(
                                            Link,
                                            { to: "/signin", className: "btn btn--sm type--uppercase" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "Sign In"
                                            )
                                        ),
                                        React.createElement(
                                            Link,
                                            { to: "/signup", className: "btn btn--sm btn--primary type--uppercase" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "Sign Up"
                                            )
                                        )
                                    ) : React.createElement(
                                        "div",
                                        { className: "bar__module" },
                                        React.createElement(
                                            Link,
                                            { to: "#", onClick: this.signout.bind(this),
                                                className: "btn btn--sm btn--primary type--uppercase"
                                            },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "Sign Out"
                                            )
                                        ),
                                        React.createElement(
                                            "button",
                                            { className: "btn btn--primary", style: { padding: 5 } },
                                            React.createElement(
                                                Link,
                                                { to: "/cart" },
                                                React.createElement("i", { style: { color: "white" }, className: "stack-basket" }),
                                                React.createElement(
                                                    "span",
                                                    { style: { color: "white" } },
                                                    "| ",
                                                    this.props.cart.concerts.length
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Nav;
})(Component);

var stateToProps = function (state) {
    var user = state.user;
    var nav = state.nav;
    var cart = state.cart;
    return {
        user: user, nav: nav, cart: cart
    };
};

var dispatchToProps = function (dispatch) {
    return {
        logout: function () {
            return dispatch(actions.logout());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(withRouter(Nav));
/*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end bar-->*/ /* bar bar--sm bar-1 hidden-xs bar--absolute */ /*<!--end module-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end dropdown content-->*/ /*<!--end row-->*/ /*<!--end dropdown container-->*/ /*<!--end module-->*/ /*<a className="btn btn--sm type--uppercase" href="#">*/ /*</a>*/ /*<!--end module-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end bar-->*/