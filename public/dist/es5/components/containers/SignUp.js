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
var SignUp = (function (Component) {
    function SignUp(props) {
        _classCallCheck(this, SignUp);

        _get(Object.getPrototypeOf(SignUp.prototype), "constructor", this).call(this, props);
        this.state = {
            username: "", email: "", password: "", passConfirm: "", err: false, errMessage: "", loading: false
        };
    }

    _inherits(SignUp, Component);

    _prototypeProperties(SignUp, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.noNavBar();
            },
            writable: true,
            configurable: true
        },
        signUp: {
            value: function signUp() {
                var _this = this;
                var _state = this.state;
                var username = _state.username;
                var email = _state.email;
                var password = _state.password;
                var passConfirm = _state.passConfirm;
                if (username == "" || email == "" || passConfirm == "" || passConfirm == "") {
                    console.log("something's missing");
                    return;
                }
                if (password != passConfirm) {
                    console.log("passwords dont match!");
                    return;
                }
                this.setState({ loading: true });
                var newUser = { username: username, email: email, password: password };
                this.props.registerUser(newUser).then(function (data) {
                    return;
                }), then(function () {
                    _this.props.createCart({ user_id: _this.props.user.id, concerts: [], total: 0 }).then(function (data) {
                        _this.props.history.push("/");
                        return;
                    });
                    return;
                })["catch"](function (err) {
                    _this.setState({ err: true, errMessage: err.message, loading: false });
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
                    React.createElement("a", { id: "start" }),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "imageblock switchable feature-large height-100" },
                            React.createElement(
                                "div",
                                { className: "imageblock__content col-md-6 col-sm-4 hidden-xs pos-right" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("img", { alt: "image", src: "/dist/img/micstand-min.png" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "container pos-vertical-center" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-md-5 col-sm-7 col-xs-12", style: { marginTop: 50 } },
                                        this.state.err ? React.createElement(WarningAlert, {
                                            errMessage: this.state.errMessage,
                                            close: this.alertOff.bind(this)
                                        }) : null,
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Create an IndieRiot account"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "btn block btn--icon bg--facebook type--uppercase", href: "#" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                React.createElement("i", { className: "socicon-facebook" }),
                                                "Sign up with Facebook"
                                            )
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "btn block btn--icon bg--twitter type--uppercase", href: "#" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                React.createElement("i", { className: "socicon-twitter" }),
                                                "Sign up with Twitter"
                                            )
                                        ),
                                        React.createElement("hr", { "data-title": "OR" }),
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
                                                    { className: "col-xs-12" },
                                                    React.createElement("input", { type: "email", onChange: function (e) {
                                                            return _this.setState({ email: e.target.value });
                                                        }, placeholder: "Email Address" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-12" },
                                                    React.createElement("input", { type: "text", onChange: function (e) {
                                                            return _this.setState({ username: e.target.value });
                                                        }, placeholder: "User Name" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-12" },
                                                    React.createElement("input", { type: "password", onChange: function (e) {
                                                            return _this.setState({ password: e.target.value });
                                                        }, placeholder: "Password" })
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-12" },
                                                    React.createElement("input", { type: "password", onChange: function (e) {
                                                            return _this.setState({ passConfirm: e.target.value });
                                                        }, placeholder: "Password Confirm!" })
                                                ),
                                                this.state.loading ? React.createElement(
                                                    "h3",
                                                    null,
                                                    "Loading..."
                                                ) : React.createElement(
                                                    "div",
                                                    { className: "col-xs-12" },
                                                    React.createElement(
                                                        "button",
                                                        { onClick: this.signUp.bind(this), className: "btn btn--primary type--uppercase" },
                                                        "Create Account"
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-12" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "type--fine-print" },
                                                        React.createElement(
                                                            Link,
                                                            { to: "/" },
                                                            " Back To Main Page"
                                                        )
                                                    ),
                                                    React.createElement("br", null),
                                                    React.createElement(
                                                        "span",
                                                        { className: "type--fine-print" },
                                                        "Need to Sign in? Go",
                                                        React.createElement(
                                                            Link,
                                                            { to: "/signin" },
                                                            " Here"
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
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SignUp;
})(Component);

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        registerUser: function (params) {
            return dispatch(actions.register(params));
        },
        noNavBar: function () {
            return dispatch(actions.noNavBar());
        },
        createCart: function (params) {
            return dispatch(actions.createCart(params));
        }

    };
};

module.exports = connect(stateToProps, dispatchToProps)(SignUp);
/*<!--end row-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/