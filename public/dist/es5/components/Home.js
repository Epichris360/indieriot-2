"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Nav = require("./containers").Nav;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../actions"));

var Link = require("react-router-dom").Link;
var Home = (function (Component) {
    function Home() {
        _classCallCheck(this, Home);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
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
                    null,
                    React.createElement(
                        "div",
                        { className: "main-container" },
                        React.createElement(
                            "section",
                            { className: "cover height-90 imagebg text-center", "data-overlay": "2", id: "home" },
                            React.createElement(
                                "div",
                                { className: "background-image-holder",
                                    style: { backgroundImage: "url('/dist/img/concert-min.png')", opacity: 1 } },
                                React.createElement("img", { alt: "background", src: "/dist/img/concert-min.png" })
                            ),
                            React.createElement(
                                "div",
                                { className: "container pos-vertical-center" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-8" },
                                        React.createElement("img", { alt: "Image", className: "unmarg--bottom", src: "/dist/img/headline-1.png" }),
                                        React.createElement(
                                            "h3",
                                            null,
                                            "Indie Concerts, for True Blue Fans. Know'em Before They Become Cool"
                                        ),
                                        React.createElement(
                                            Link,
                                            { className: "btn btn--primary type--uppercase", to: "/tickets" },
                                            React.createElement(
                                                "span",
                                                { className: "btn__text" },
                                                "What's Going on This Week?"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "text-center cta cta-4 space--xxs border--bottom " },
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
                                            "span",
                                            { className: "label label--inline" },
                                            "Hot!"
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Are You an Indie Artist or Band?",
                                            React.createElement(
                                                "a",
                                                { href: "#" },
                                                " Sign Up Now"
                                            ),
                                            " And Get Your First Concert For Free!"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: " " },
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
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/noMusicNoLife-min.png" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Built By Audiophiles For Audiofiles"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "We're Here To Serve. Learn About Our Story, Maybe You'll Want To Work With Us"
                                                ),
                                                React.createElement(
                                                    Link,
                                                    { to: "/about-us" },
                                                    "Story Time"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-4" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/Dj-min.png" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Get Them To Come To You!"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Live Far Away? Show Your Favorite's Where You Live So They Can Come To You"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Now!"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-4" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-1" },
                                            React.createElement("img", { alt: "Image", src: "/dist/img/backstage-min.png" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body boxed boxed--border" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Want To Hang Out?"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Buy BackStage Passes And Hang Out With Your Favorite Artists!"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Take My Money"
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { className: "label" },
                                                    "Hot"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "text-center", id: "about" },
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
                                            "Perfect for Fans & Artists A Like!"
                                        ),
                                        React.createElement(
                                            "p",
                                            { className: "lead" },
                                            "Whether Your Here As a Fan or Creator or Both. We've Got You Convered"
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { id: "features" },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature-5 boxed boxed--lg boxed--border" },
                                            React.createElement("i", { className: "icon icon-Pantone icon--lg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Highly Customizable"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Stack's visual style is simple yet distinct. Perfect for your next project whether it be basic marketing site, or multi-page company presence."
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        React.createElement(
                                            "div",
                                            { className: "feature feature--featured feature-5 boxed boxed--lg boxed--border" },
                                            React.createElement(
                                                "span",
                                                { className: "label" },
                                                "Free"
                                            ),
                                            React.createElement("i", { className: "icon icon-Duplicate-Window icon--lg" }),
                                            React.createElement(
                                                "div",
                                                { className: "feature__body" },
                                                React.createElement(
                                                    "h5",
                                                    null,
                                                    "Page Builder Included"
                                                ),
                                                React.createElement(
                                                    "p",
                                                    null,
                                                    "Construct mockups or production-ready pages in-browser with Variant Page Builder — Included FREE with every licence purchase."
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Learn More"
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
                                        { className: "col-sm-8 col-md-6" },
                                        React.createElement(
                                            "h2",
                                            null,
                                            "Building beautiful sites is easy"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "video-cover border--round" },
                                            React.createElement(
                                                "div",
                                                { className: "background-image-holder" },
                                                React.createElement("img", { alt: "image", src: "/dist/img/blog-3.jpg" })
                                            ),
                                            React.createElement("div", { className: "video-play-icon" }),
                                            React.createElement("iframe", { "data-src": "https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1", allowFullScreen: true })
                                        ),
                                        React.createElement(
                                            "span",
                                            null,
                                            "Stack includes Variant Page Builder — used by over",
                                            React.createElement(
                                                "strong",
                                                null,
                                                "17,000"
                                            ),
                                            " customers",
                                            React.createElement(
                                                "a",
                                                { target: "_blank", href: "#" },
                                                "Try Now &nearr;"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "section",
                            { className: "bg--primary unpad cta cta-2", id: "video" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement(
                                    "div",
                                    { className: "container" },
                                    React.createElement(
                                        "div",
                                        { className: "row" },
                                        React.createElement(
                                            "div",
                                            { className: "col-sm-12 text-center" },
                                            React.createElement(
                                                "h2",
                                                null,
                                                "Build a beautiful site with Stack"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "footer",
                            { className: "footer-6 unpad--bottom  bg--dark " },
                            React.createElement(
                                "div",
                                { className: "container" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "About Us"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Stack is a robust multipurpose HTML template designed with modularity at the core. Easily combine over 290 interface blocks to create websites for any purpose."
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Recent Updates"
                                        ),
                                        React.createElement("div", { className: "tweets-feed tweets-feed-2", "data-feed-name": "mrareweb", "data-amount": "2" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Instagram"
                                        ),
                                        React.createElement("div", { className: "instafeed instafeed--gapless", "data-user-name": "mediumrarethemes", "data-amount": "6", "data-grid": "3" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 col-md-3" },
                                        React.createElement(
                                            "h6",
                                            { className: "type--uppercase" },
                                            "Newsletter"
                                        ),
                                        React.createElement(
                                            "form",
                                            { action: "//mrare.us8.list-manage.com/subscribe/post?u=77142ece814d3cff52058a51f&id=f300c9cce8", "data-success": "Thanks for signing up.  Please check your inbox for a confirmation email.", "data-error": "Please provide your email address." },
                                            React.createElement("input", { className: "validate-required validate-email", type: "text", name: "EMAIL", placeholder: "Email Address" }),
                                            React.createElement(
                                                "button",
                                                { type: "submit", className: "btn btn--primary type--uppercase" },
                                                "Subscribe"
                                            ),
                                            React.createElement(
                                                "div",
                                                { style: { position: "absolute", left: "-5000px" }, "aria-hidden": "true" },
                                                React.createElement("input", { type: "text", name: "b_77142ece814d3cff52058a51f_f300c9cce8", tabIndex: "-1", value: "" })
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

    return Home;
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

module.exports = connect(stateToProps, dispatchToProps)(Home);
/*<Nav transparent={true} />*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end feature-->*/ /*<!--end feature-->*/ /*<!--end feature-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end video cover-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<!--end of row-->*/ /*<!--end of container-->*/ /*<div className="footer__lower text-center-xs">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="container">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div className="row">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <div className="col-sm-6">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <span className="type--fine-print">&copy;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <span className="update-year"></span> Medium Rare &mdash; All Rights Reserved</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <div className="col-sm-6 text-right text-center-xs">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <ul className="social-list list-inline">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <a href="#">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <i className="socicon socicon-google icon icon--xs"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <a href="#">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <i className="socicon socicon-twitter icon icon--xs"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <a href="#">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <i className="socicon socicon-facebook icon icon--xs"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <a href="#">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <i className="socicon socicon-instagram icon icon--xs"></i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </div>*/