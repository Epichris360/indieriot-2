"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = _interopRequire(require("./Nav"));

var Link = require("react-router-dom").Link;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var WarningAlert = require("../presentation").WarningAlert;
var SignIn = (function (Component) {
    function SignIn(props) {
        _classCallCheck(this, SignIn);

        _get(Object.getPrototypeOf(SignIn.prototype), "constructor", this).call(this, props);
        this.state = {
            username: "", password: "", err: false, errMessage: "", loader: false
        };
    }

    _inherits(SignIn, Component);

    _prototypeProperties(SignIn, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.navBarTransparent();
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login() {
                var _this = this;
                var _state = this.state;
                var username = _state.username;
                var password = _state.password;
                if (username == "" || password == "") {
                    this.setState({ err: true, errMessage: "something is empty!" });
                    return;
                }
                this.setState({ loader: true });
                var user = { username: username, password: password };
                this.props.login(user).then(function (data) {
                    //console.log('data ', data)
                    _this.props.history.push("/tickets");
                    return;
                })["catch"](function (err) {
                    _this.setState({ err: true, errMessage: err.message, loader: false });
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        alertOff: {
            value: function alertOff() {
                this.setState({ err: false, errMessage: "" });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "height-100 imagebg text-center", "data-overlay": "4" },
                            React.createElement(
                                "div",
                                { className: "background-image-holder",
                                    style: { background: "url('/dist/img/headphones-girl-min.jpg')", opacity: 1 } },
                                React.createElement("img", { alt: "background", src: "/dist/img/headphones-girl-min.jpg" })
                            ),
                            React.createElement(
                                "div",
                                { className: "container pos-vertical-center" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-7 col-md-5" },
                                        this.state.err ? React.createElement(WarningAlert, {
                                            errMessage: this.state.errMessage,
                                            close: this.alertOff.bind(this)
                                        }) : null,
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Login to continue"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "lead" },
                                            "Get Those Ticket! or Get To Your Fans!"
                                        ),
                                        React.createElement(
                                            "form",
                                            { onSubmit: function (e) {
                                                    return e.preventDefault();
                                                } },
                                            React.createElement(
                                                "div",
                                                { className: "row" },
                                                React.createElement(
                                                    "div",
                                                    { className: "col-sm-12" },
                                                    React.createElement("input", { type: "text",
                                                        onChange: function (e) {
                                                            return _this.setState({ username: e.target.value });
                                                        },
                                                        autoFocus: true,
                                                        placeholder: "Username"
                                                    })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-sm-12" },
                                                    React.createElement("input", { type: "password", placeholder: "Password",
                                                        onChange: function (e) {
                                                            return _this.setState({ password: e.target.value });
                                                        }
                                                    })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-sm-12" },
                                                    !this.state.loader ? React.createElement(
                                                        "button",
                                                        { className: "btn btn--sm type--uppercase",
                                                            onClick: this.login.bind(this)
                                                        },
                                                        React.createElement(
                                                            "b",
                                                            { style: { color: "white" } },
                                                            "Login"
                                                        )
                                                    ) : React.createElement(
                                                        "h3",
                                                        null,
                                                        "Loading.."
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "span",
                                            { className: "type--fine-print block" },
                                            "Dont have an account yet?",
                                            React.createElement(
                                                Link,
                                                { to: "/signup" },
                                                " Create account"
                                            )
                                        ),
                                        React.createElement(
                                            "span",
                                            { className: "type--fine-print block" },
                                            "Forgot your username or password?",
                                            React.createElement(
                                                Link,
                                                { to: "/recover-account" },
                                                " Recover account"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
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

    return SignIn;
})(Component);

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        login: function (params) {
            return dispatch(actions.loginUser(params));
        },
        navBarTransparent: function () {
            return dispatch(actions.navBarTransparent());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(SignIn);
/*<Nav transparent={true} />*/ /*<!--end of row-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/