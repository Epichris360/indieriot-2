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

var _presentation = require("../presentation");

var Item = _presentation.Item;
var Footer = _presentation.Footer;
var WarningAlert = _presentation.WarningAlert;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var SalesColumns = (function (Component) {
    function SalesColumns(props) {
        _classCallCheck(this, SalesColumns);

        _get(Object.getPrototypeOf(SalesColumns.prototype), "constructor", this).call(this, props);
        this.state = { err: false, errMessage: "" };
    }

    _inherits(SalesColumns, Component);

    _prototypeProperties(SalesColumns, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                this.props.notTransparent();
                this.props.getConcerts({ isActive: "true" }).then(function (data) {
                    _this.props.notTransparent();
                    return;
                }).then(function () {
                    _this.props.getCart({ user_id: _this.props.user.id }).then(function (data) {
                        _this.props.notTransparent();
                        return;
                    });
                    _this.props.notTransparent();
                    return;
                })["catch"](function (err) {
                    _this.props.notTransparent();
                    _this.setState({ err: true, errMessage: err.message });
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        addToCart: {
            value: function addToCart(concert) {
                console.log("super orig", this.props.cart.concerts);
                var origCart = Object.assign({}, this.props.cart, {});
                var cart = Object.assign({}, this.props.cart, {});
                cart.concerts.push(concert);
                console.log("origCart", origCart.concerts);
                console.log("cart", cart.concerts);
            },
            writable: true,
            configurable: true
        },
        closeAlert: {
            value: function closeAlert() {
                this.setState({ err: false, errMessage: "" });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                var concerts = this.props.concerts;
                return React.createElement(
                    "div",
                    null,
                    React.createElement("div", { style: { height: "60px" } }),
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "switchable switchable--switch space--xs" },
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
                                            "div",
                                            { className: "height-50 imagebg border--round", "data-overlay": "2" },
                                            React.createElement(
                                                "div",
                                                { className: "background-image-holder",
                                                    style: { backgroundImage: "url('/dist/img/mix-img.jpg')", opacity: 1 } },
                                                React.createElement("img", { alt: "background", src: "/dist/img/mix-img.jpg" })
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "pos-vertical-center col-sm-6 col-md-5 col-md-offset-1" },
                                                React.createElement(
                                                    "h2",
                                                    null,
                                                    "Need a Good Time? You've Got it!"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    { className: "lead" },
                                                    "Get Ready for it. Hurry up before they make it big, so you can say that you knew them before they were cool."
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "space--sm" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-12" },
                                        this.state.err ? React.createElement(WarningAlert, { close: this.closeAlert.bind(this),
                                            errMessage: this.state.errMessage }) : null,
                                        React.createElement(
                                            "div",
                                            { className: "masonry masonry--tiles" },
                                            React.createElement("div", { className: "masonry-filter-container" }),
                                            React.createElement(
                                                "div",
                                                { className: "row" },
                                                React.createElement(
                                                    "div",
                                                    { className: "masonry__container masonry--active",
                                                        style: { position: "relative", height: "1130.12px" } },
                                                    React.createElement("div", { className: "masonry__item col-sm-4" }),
                                                    concerts.map(function (con, i) {
                                                        return React.createElement(Item, { con: con, key: i,
                                                            addToCart: _this.addToCart.bind(_this, con)
                                                        });
                                                    })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(Footer, null)
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SalesColumns;
})(Component);

var stateToProps = function (state) {
    var concerts = state.concerts;
    var user = state.user;
    var cart = state.cart;
    return {
        concerts: concerts, user: user, cart: cart
    };
};

var dispatchToProps = function (dispatch) {
    return {
        getConcerts: function (params) {
            return dispatch(actions.getAllConcertsActive(params));
        },
        notTransparent: function () {
            return dispatch(actions.navBarNotTransparent());
        },
        getCart: function (params) {
            return dispatch(actions.getCart(params));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(SalesColumns);
/*<!--end of row-->*/ /*<!--end of container-->*/ /*<span>Category:</span>
                                                  <div className="masonry-filter-holder">
                                                     <div className="masonry__filters" data-filter-all-text="All Categories"></div>
                                                  </div>*/ /*<!--end masonry container-->*/ /*<!--end of row-->*/ /*<!--end masonry-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/