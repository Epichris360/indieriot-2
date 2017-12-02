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

var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var RecoverAccount = (function (Component) {
    function RecoverAccount(props) {
        _classCallCheck(this, RecoverAccount);

        _get(Object.getPrototypeOf(RecoverAccount.prototype), "constructor", this).call(this, props);
        this.state = {
            email: ""
        };
    }

    _inherits(RecoverAccount, Component);

    _prototypeProperties(RecoverAccount, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.notTransparent();
            },
            writable: true,
            configurable: true
        },
        recoverAccount: {
            value: function recoverAccount() {
                console.log("recover account");
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
                            { className: "height-100 text-center" },
                            React.createElement(
                                "div",
                                { className: "container pos-vertical-center" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-7 col-md-5" },
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Recover your account"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "lead" },
                                            "Enter email address to send a recovery email."
                                        ),
                                        React.createElement(
                                            "form",
                                            null,
                                            React.createElement("input", { type: "email", placeholder: "Email Address", onChange: function (e) {
                                                    return _this.setState({ email: e.target.value });
                                                } }),
                                            React.createElement(
                                                "button",
                                                { className: "btn btn--primary type--uppercase",
                                                    onClick: this.recoverAccount.bind(this)
                                                },
                                                "Recover Account"
                                            )
                                        ),
                                        React.createElement(
                                            "span",
                                            { className: "type--fine-print block" },
                                            "Dont have an account yet?",
                                            React.createElement(
                                                "a",
                                                { href: "/" },
                                                "Create account"
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

    return RecoverAccount;
})(Component);

var stateToProps = function (state) {
    return {};
};

var dispatchToProps = function (dispatch) {
    return {
        notTransparent: function () {
            return dispatch(actions.navBarNotTransparent());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(RecoverAccount);
/*<Nav transparent={false} />*/ /*<!--end of container-->*/