"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

//will have to refactor to make many concerts.
var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var _presentation = require("../presentation");

var SuccessAlert = _presentation.SuccessAlert;
var WarningAlert = _presentation.WarningAlert;
var TurboClient = require("../../utils").TurboClient;
var Dropzone = _interopRequire(require("react-dropzone"));

var actions = _interopRequire(require("../../actions"));

var CreateNewConcert = (function (Component) {
    function CreateNewConcert(props) {
        _classCallCheck(this, CreateNewConcert);

        _get(Object.getPrototypeOf(CreateNewConcert.prototype), "constructor", this).call(this, props);
        this.state = {
            err: false, errMessage: "", submitting: false, concertName: "", price: "", description: "", picture: "",
            imageUploading: false, success: false
        };
    }

    _inherits(CreateNewConcert, Component);

    _prototypeProperties(CreateNewConcert, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.notTransparent();
            },
            writable: true,
            configurable: true
        },
        createConcert: {
            value: function createConcert() {
                var _this = this;
                var _state = this.state;
                var concertName = _state.concertName;
                var price = _state.price;
                var description = _state.description;
                var picture = _state.picture;
                if (concertName == "" || price == "" || description == "" || picture == "") {
                    this.setState({ err: true, errMessage: "Something is empty!" });
                    return;
                }
                var concert = { user_id: this.props.user.id, concertName: concertName, price: price, description: description,
                    picture: picture, isActive: "true", created_at: new Date(), updated_at: new Date() };

                this.props.createConcert(concert).then(function (data) {
                    _this.props.notTransparent();
                    _this.setState({ success: true, errMessage: "Concert Was Created!!!" });
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
        uploadImg: {
            value: function uploadImg(files) {
                var _this = this;
                var file = files[0];

                this.setState({ imageUploading: true });
                TurboClient.uploadFile(file).then(function (data) {
                    _this.setState({ picture: data.result.url, imageUploading: false,
                        success: true, errMessage: "Image Was Uploaded" });
                    return;
                })["catch"](function (err) {
                    _this.setState({ err: true, errMessage: err.message, imageUploading: false });
                    return;
                });
            },
            writable: true,
            configurable: true
        },
        closeAlert: {
            value: function closeAlert() {
                this.setState({ err: false, success: false, errMessage: "" });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                return React.createElement(
                    "div",
                    { className: "main-container" },
                    React.createElement("div", { style: { height: 50 } }),
                    React.createElement(
                        "section",
                        { className: "bg--secondary space--sm" },
                        React.createElement(
                            "div",
                            { className: "container are all self taught and say" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-8" },
                                    React.createElement(
                                        "div",
                                        { className: "boxed boxed--lg boxed--border" },
                                        React.createElement(
                                            "div",
                                            { id: "account-profile", className: "account-tab" },
                                            this.state.err ? React.createElement(WarningAlert, { errMessage: this.state.errMessage,
                                                close: this.closeAlert.bind(this)
                                            }) : this.state.success ? React.createElement(SuccessAlert, {
                                                close: this.closeAlert.bind(this),
                                                msg: this.state.errMessage }) : null,
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Profile"
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
                                                        { className: "col-sm-6" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Name of Concert:"
                                                        ),
                                                        React.createElement("input", { type: "text",
                                                            onChange: function (e) {
                                                                return _this.setState({ concertName: e.target.value });
                                                            }
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-6" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Price:"
                                                        ),
                                                        React.createElement("input", { type: "number",
                                                            onChange: function (e) {
                                                                return _this.setState({ price: e.target.value });
                                                            }
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Description:"
                                                        ),
                                                        React.createElement("textarea", { rows: "4",
                                                            onChange: function (e) {
                                                                return _this.setState({ description: e.target.value });
                                                            }
                                                        })
                                                    ),
                                                    this.state.imageUploading ? React.createElement(
                                                        "h1",
                                                        null,
                                                        "Uploading Image..."
                                                    ) : React.createElement(
                                                        Dropzone,
                                                        { className: "btn btn--primary type--uppercase pull-right",
                                                            onDrop: this.uploadImg.bind(this)
                                                        },
                                                        React.createElement(
                                                            "strong",
                                                            { style: { color: "white" } },
                                                            "Select File"
                                                        )
                                                    ),
                                                    !this.state.submitting ? React.createElement(
                                                        "div",
                                                        { className: "col-md-3 col-sm-4" },
                                                        React.createElement(
                                                            "button",
                                                            { className: "btn btn--primary type--uppercase",
                                                                style: { marginTop: 20, padding: "5px" },
                                                                onClick: this.createConcert.bind(this) },
                                                            "Create Concert"
                                                        )
                                                    ) : React.createElement(
                                                        "h1",
                                                        null,
                                                        "Submitting..."
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "col-md-3" },
                                    React.createElement(
                                        "div",
                                        { className: "boxed boxed--lg boxed--border" },
                                        React.createElement(
                                            "div",
                                            { id: "account-profile", className: "account-tab" },
                                            React.createElement(
                                                "h3",
                                                null,
                                                "Picture Preview:"
                                            ),
                                            React.createElement("hr", null),
                                            React.createElement("img", { src: this.state.picture, alt: "", border: 1 })
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

    return CreateNewConcert;
})(Component);

var stateToProps = function (state) {
    var user = state.user;
    return {
        user: user
    };
};

var dispatchToProps = function (dispatch) {
    return {
        createConcert: function (params) {
            return dispatch(actions.createConcert(params));
        },
        notTransparent: function () {
            return dispatch(actions.navBarNotTransparent());
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(CreateNewConcert);