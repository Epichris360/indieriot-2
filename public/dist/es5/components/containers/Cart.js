"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var CartItem = require("../presentation").CartItem;
var Cart = (function (Component) {
    function Cart(props) {
        _classCallCheck(this, Cart);

        _get(Object.getPrototypeOf(Cart.prototype), "constructor", this).call(this, props);
        this.state = {};
    }

    _inherits(Cart, Component);

    _prototypeProperties(Cart, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.notTransparent();
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var cartConcerts = this.props.cart.concerts || [];
                return React.createElement(
                    "div",
                    { className: "main-container" },
                    React.createElement(
                        "section",
                        null,
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-sm-12" },
                                    React.createElement(
                                        "h1",
                                        null,
                                        "Cart Overview"
                                    ),
                                    React.createElement("hr", null)
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "section",
                        null,
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "form",
                                { className: "cart-form" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    cartConcerts.map(function (con, i) {
                                        return React.createElement(CartItem, { key: i });
                                    }),
                                    "ertex/indieriot-lkn1xb"
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row mt--2" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-12" },
                                        React.createElement(
                                            "div",
                                            { className: "boxed boxed--border cart-total" },
                                            React.createElement(
                                                "div",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-6" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "h5" },
                                                        "Cart Total:"
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-6 text-right" },
                                                    React.createElement(
                                                        "span",
                                                        null,
                                                        "$989.98"
                                                    )
                                                )
                                            ),
                                            React.createElement("hr", null),
                                            React.createElement(
                                                "div",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-6" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "h5" },
                                                        "Total:"
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "col-xs-6 text-right" },
                                                    React.createElement(
                                                        "span",
                                                        { className: "h5" },
                                                        "$989.98"
                                                    )
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
                                        { className: "col-md-2 col-md-offset-10 text-right text-center-xs" },
                                        React.createElement(
                                            "button",
                                            { type: "submit", className: "btn btn--primary" },
                                            "Proceed »"
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

    return Cart;
})(Component);

var stateToProps = function (state) {
    //get items from cart collection for this user
    var user = state.user;
    var cart = state.cart;
    return {
        user: user, cart: cart
    };
};

var dispatchToProps = function (dispatch) {
    return {
        notTransparent: function () {
            return dispatch(actions.navBarNotTransparent());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(Cart);
/*<!--end of row-->*/ /*<!--end of row-->*/ /*<!--end cart form-->*/ /*<!--end of container-->*/