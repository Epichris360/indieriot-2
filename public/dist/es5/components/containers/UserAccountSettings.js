"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var _presentation = require("../presentation");

var SuccessAlert = _presentation.SuccessAlert;
var WarningAlert = _presentation.WarningAlert;
var _reactRouterDom = require("react-router-dom");

var Link = _reactRouterDom.Link;
var Route = _reactRouterDom.Route;
var UserAccountSettings = (function (Component) {
    function UserAccountSettings(props) {
        _classCallCheck(this, UserAccountSettings);

        _get(Object.getPrototypeOf(UserAccountSettings.prototype), "constructor", this).call(this, props);
        this.state = {
            name: "", bio: "", username: "", email: "", location: "", category: "artist",
            err: false, success: false, errMessage: "", updating: false
        };
    }

    _inherits(UserAccountSettings, Component);

    _prototypeProperties(UserAccountSettings, null, {
        componentDidMount: {
            value: function componentDidMount() {
                this.props.notTransparent();
                var _props$user = this.props.user;
                var username = _props$user.username;
                var email = _props$user.email;
                var name = _props$user.name;
                var bio = _props$user.bio;
                var location = _props$user.location;
                var category = _props$user.category;
                this.setState({ username: username, email: email, name: name, bio: bio, location: location, category: category });
            },
            writable: true,
            configurable: true
        },
        saveProfile: {
            value: function saveProfile() {
                var _this = this;
                this.setState({ updating: true });
                var user = this.props.user;
                var _state = this.state;
                var name = _state.name;
                var bio = _state.bio;
                var username = _state.username;
                var email = _state.email;
                var location = _state.location;
                var category = _state.category;
                if (name == "" || bio == "" || username == "" || email == "" || location == "") {
                    this.setState({ updating: false, err: true, errMessage: "something is empty" });
                    return;
                }
                user.name = name;
                user.bio = bio;
                user.username = username;
                user.email = email;
                user.location = location;
                user.category = category;
                this.props.updateUser(this.props.user, user).then(function (data) {
                    _this.setState({ success: true, errMessage: "The Update Was Completed!", updating: false });
                    _this.props.notTransparent();
                    return;
                })["catch"](function (err) {
                    _this.props.notTransparent();
                    _this.setState({ err: true, errMessage: "Something went wrong. Please try again.", updating: false });
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
                //<Route path={`${this.props.match.path}/email-notification`}>
                //<h1>yada yada</h1>
                //</Route>
                return React.createElement(
                    "div",
                    { className: "main-container" },
                    React.createElement("div", { style: { height: 50 } }),
                    React.createElement(
                        "section",
                        { className: "bg--secondary space--sm" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { className: "row" },
                                React.createElement(
                                    "div",
                                    { className: "col-md-4" },
                                    React.createElement(
                                        "div",
                                        { className: "boxed boxed--lg boxed--border" },
                                        React.createElement(
                                            "div",
                                            { className: "text-block text-center" },
                                            React.createElement("img", { alt: "avatar", src: "img/avatar-round-3.png", className: "image--sm" }),
                                            React.createElement(
                                                "span",
                                                { className: "h5" },
                                                this.props.user.username
                                            ),
                                            React.createElement(
                                                "span",
                                                null,
                                                "Pro Account"
                                            ),
                                            React.createElement(
                                                "span",
                                                { className: "label" },
                                                "Pro"
                                            )
                                        ),
                                        React.createElement("hr", null),
                                        React.createElement(
                                            "div",
                                            { className: "text-block" },
                                            React.createElement(
                                                "ul",
                                                { className: "menu-vertical" },
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: "/account-settings" },
                                                        "Profile"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: "/account-settings/email-notification" },
                                                        "Email Notifications"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#", "data-toggle-class": ".account-tab:not(.hidden);hidden|#account-billing;hidden" },
                                                        "Billing Details"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#", "data-toggle-class": ".account-tab:not(.hidden);hidden|#account-password;hidden" },
                                                        "Password"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#", "data-toggle-class": ".account-tab:not(.hidden);hidden|#account-delete;hidden" },
                                                        "Delete Account"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
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
                                                            "Name:"
                                                        ),
                                                        React.createElement("input", { type: "text",
                                                            onChange: function (e) {
                                                                return _this.setState({ name: e.target.value });
                                                            },
                                                            value: this.state.name
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-6" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "User Name:"
                                                        ),
                                                        React.createElement("input", { type: "text",
                                                            onChange: function (e) {
                                                                return _this.setState({ username: e.target.value });
                                                            },
                                                            value: this.state.username
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Email Address:"
                                                        ),
                                                        React.createElement("input", { type: "email",
                                                            onChange: function (e) {
                                                                return _this.setState({ email: e.target.value });
                                                            },
                                                            value: this.state.email
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Location:"
                                                        ),
                                                        React.createElement("input", { type: "text",
                                                            onChange: function (e) {
                                                                return _this.setState({ location: e.target.value });
                                                            },
                                                            value: this.state.location
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Bio:"
                                                        ),
                                                        React.createElement("textarea", { rows: "4",
                                                            onChange: function (e) {
                                                                return _this.setState({ bio: e.target.value });
                                                            },
                                                            value: this.state.bio
                                                        })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Pick a Category"
                                                        ),
                                                        React.createElement(
                                                            "select",
                                                            { value: this.state.category,
                                                                onChange: function (e) {
                                                                    return _this.setState({ category: e.target.value });
                                                                }, className: " btn btn-default"
                                                            },
                                                            React.createElement(
                                                                "option",
                                                                { value: "artist" },
                                                                "Artist  "
                                                            ),
                                                            React.createElement(
                                                                "option",
                                                                { value: "musicFan" },
                                                                "Music Fan  "
                                                            )
                                                        )
                                                    ),
                                                    !this.state.updating ? React.createElement(
                                                        "div",
                                                        { className: "col-md-3 col-sm-4" },
                                                        React.createElement(
                                                            "button",
                                                            { className: "btn btn--primary type--uppercase",
                                                                onClick: this.saveProfile.bind(this) },
                                                            "Save Profile"
                                                        )
                                                    ) : React.createElement(
                                                        "h1",
                                                        null,
                                                        "Updating..."
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { id: "account-notifications", className: "hidden account-tab" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Email Notifications"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Select the frequency with which you'd like to recieve product summary emails:"
                                            ),
                                            React.createElement(
                                                "form",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "boxed bg--secondary boxed--border" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "col-xs-4 text-center" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "input-radio" },
                                                                React.createElement(
                                                                    "span",
                                                                    null,
                                                                    "Never"
                                                                ),
                                                                React.createElement("input", { type: "radio", name: "frequency", value: "never", className: "validate-required" }),
                                                                React.createElement("label", null)
                                                            )
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "col-xs-4 text-center" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "input-radio checked" },
                                                                React.createElement(
                                                                    "span",
                                                                    null,
                                                                    "Weekly"
                                                                ),
                                                                React.createElement("input", { type: "radio", name: "frequency", value: "weekly", className: "validate-required" }),
                                                                React.createElement("label", null)
                                                            )
                                                        ),
                                                        React.createElement(
                                                            "div",
                                                            { className: "col-xs-4 text-center" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "input-radio" },
                                                                React.createElement(
                                                                    "span",
                                                                    null,
                                                                    "Monthly"
                                                                ),
                                                                React.createElement("input", { type: "radio", name: "frequency", value: "monthly", className: "validate-required" }),
                                                                React.createElement("label", null)
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-4 col-sm-5" },
                                                        React.createElement(
                                                            "button",
                                                            { type: "submit", className: "btn btn--primary type--uppercase" },
                                                            "Save Preferences"
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { id: "account-billing", className: "hidden account-tab" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Billing Details"
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "boxed boxed--border bg--secondary" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Payment Methods"
                                                ),
                                                React.createElement("hr", null),
                                                React.createElement(
                                                    "form",
                                                    null,
                                                    React.createElement(
                                                        "div",
                                                        { className: "row" },
                                                        React.createElement(
                                                            "ul",
                                                            null,
                                                            React.createElement(
                                                                "li",
                                                                null,
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "col-sm-6" },
                                                                    React.createElement(
                                                                        "p",
                                                                        null,
                                                                        React.createElement(
                                                                            "i",
                                                                            { className: "material-icons" },
                                                                            "credit_card"
                                                                        ),
                                                                        React.createElement(
                                                                            "span",
                                                                            null,
                                                                            " Mastercard ending in",
                                                                            React.createElement(
                                                                                "strong",
                                                                                null,
                                                                                "4722"
                                                                            )
                                                                        )
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "col-sm-3 text-right text-left-xs" },
                                                                    React.createElement(
                                                                        "button",
                                                                        { type: "submit", className: "btn bg--error" },
                                                                        "Remove"
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "col-sm-3 text-right text-left-xs" },
                                                                    React.createElement(
                                                                        "button",
                                                                        { type: "submit", className: "btn" },
                                                                        "Edit"
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement("hr", null),
                                                    React.createElement(
                                                        "button",
                                                        { type: "submit", className: "btn" },
                                                        "Add New Method"
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { id: "account-password", className: "hidden account-tab" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Password"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Passwords must be at least 6 characters in length."
                                            ),
                                            React.createElement(
                                                "form",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "row" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-xs-12" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Old Password:"
                                                        ),
                                                        React.createElement("input", { type: "password", name: "old-password" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-6" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "New Password:"
                                                        ),
                                                        React.createElement("input", { type: "password", name: "new-password" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-sm-6" },
                                                        React.createElement(
                                                            "label",
                                                            null,
                                                            "Retype New Password:"
                                                        ),
                                                        React.createElement("input", { type: "password", name: "new-password-confirm" })
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "col-md-3 col-sm-4" },
                                                        React.createElement(
                                                            "button",
                                                            { type: "submit", className: "btn btn--primary type--uppercase" },
                                                            "Save Password"
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { id: "account-delete", className: "hidden account-tab" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Delete Account"
                                            ),
                                            React.createElement(
                                                "p",
                                                null,
                                                "Permanently remove your account using the button below. Warning, this action is permanent."
                                            ),
                                            React.createElement(
                                                "form",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "submit", className: "btn bg--error type--uppercase" },
                                                    "Delete Account"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
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
                                    React.createElement("img", { alt: "Image", className: "logo", src: "img/logo-dark.png" }),
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
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return UserAccountSettings;
})(Component);

var stateToProps = function (state) {
    var user = state.user;
    return {
        user: user
    };
};

var dispatchToProps = function (dispatch) {
    return {
        notTransparent: function () {
            return dispatch(actions.navBarNotTransparent());
        },
        updateUser: function (orig, params) {
            return dispatch(actions.updateUser(orig, params));
        }
    };
};

module.exports = connect(stateToProps, dispatchToProps)(UserAccountSettings);
/*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/