import React, { Component } from 'react'
import { Nav }              from './containers'
import { connect }          from 'react-redux'
import actions              from '../actions'
import { Link }             from 'react-router-dom'

class Home extends Component{
    componentDidMount(){
        this.props.navBarTransparent()
    }
    render(){
        return(
            <div>
        {/*<Nav transparent={true} />*/}
        <div className="main-container">
            <section className="cover height-90 imagebg text-center" data-overlay="2" id="home">
                <div className="background-image-holder" 
                    style={{backgroundImage: "url('/dist/img/concert-min.png')", opacity:1 }} >
                    <img alt="background" src={"/dist/img/concert-min.png"} />
                </div>
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-sm-8">
                            <img alt="Image" className="unmarg--bottom" src="/dist/img/headline-1.png" />
                            <h3>
                                Indie Concerts, for True Blue Fans. Know'em Before They Become Cool
                            </h3>
                            <Link className="btn btn--primary type--uppercase" to="/tickets" >
                                <span className="btn__text">
                                    What's Going on This Week?
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section className="text-center cta cta-4 space--xxs border--bottom ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <span className="label label--inline">Hot!</span>
                            <span>Are You an Indie Artist or Band? 
                                <a href="#"> Sign Up Now</a> And Get Your First Concert For Free!</span>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section className=" ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="feature feature-1">
                                <img alt="Image" src="/dist/img/noMusicNoLife-min.png" />
                                <div className="feature__body boxed boxed--border">
                                    <h5>Built By Audiophiles For Audiofiles</h5>
                                    <p>
                                        We're Here To Serve. Learn About Our Story, Maybe You'll Want To Work With Us
                                    </p>
                                    <Link to="/about-us" >
                                        Story Time
                                    </Link>
                                </div>
                            </div>
                            {/*<!--end feature-->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="feature feature-1">
                                <img alt="Image" src="/dist/img/Dj-min.png" />
                                <div className="feature__body boxed boxed--border">
                                    <h5>Get Them To Come To You!</h5>
                                    <p>
                                        Live Far Away? Show Your Favorite's Where You Live So They Can Come To You
                                    </p>
                                    <a href="#">
                                        Now!
                                    </a>
                                </div>
                            </div>
                            {/*<!--end feature-->*/}
                        </div>
                        <div className="col-sm-4">
                            <div className="feature feature-1">
                                <img alt="Image" src="/dist/img/backstage-min.png" />
                                <div className="feature__body boxed boxed--border">
                                    <h5>Want To Hang Out?</h5>
                                    <p>
                                        Buy BackStage Passes And Hang Out With Your Favorite Artists!
                                    </p>
                                    <a href="#">
                                        Take My Money
                                    </a>
                                    <span className="label">Hot</span>
                                </div>
                            </div>
                            {/*<!--end feature-->*/}
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section className="text-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                            <h2>Perfect for Fans &amp; Artists A Like!</h2>
                            <p className="lead">
                                Whether Your Here As a Fan or Creator or Both. We've Got You Convered
                            </p>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="feature feature-5 boxed boxed--lg boxed--border">
                                <i className="icon icon-Pantone icon--lg"></i>
                                <div className="feature__body">
                                    <h5>Highly Customizable</h5>
                                    <p>
                                        Stack's visual style is simple yet distinct. Perfect for your next project whether it be basic marketing site, or multi-page company presence.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="feature feature--featured feature-5 boxed boxed--lg boxed--border">
                                <span className="label">Free</span>
                                <i className="icon icon-Duplicate-Window icon--lg"></i>
                                <div className="feature__body">
                                    <h5>Page Builder Included</h5>
                                    <p>
                                        Construct mockups or production-ready pages in-browser with Variant Page Builder &mdash; Included FREE with every licence purchase.
                                    </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section className="bg--primary unpad cta cta-2" id="video">
                <a href="#">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <h2>Build a beautiful site with Stack</h2>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </a>
            </section>
            <footer className="footer-6 unpad--bottom  bg--dark ">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <h6 className="type--uppercase">About Us</h6>
                            <p>
                                Stack is a robust multipurpose HTML template designed with modularity at the core. Easily combine over 290 interface blocks to create websites for any purpose.
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="type--uppercase">Recent Updates</h6>
                            <div className="tweets-feed tweets-feed-2" data-feed-name="mrareweb" data-amount="2"></div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="type--uppercase">Instagram</h6>
                            <div className="instafeed instafeed--gapless" data-user-name="mediumrarethemes" data-amount="6" data-grid="3"></div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h6 className="type--uppercase">Newsletter</h6>
                            <form action="//mrare.us8.list-manage.com/subscribe/post?u=77142ece814d3cff52058a51f&amp;id=f300c9cce8" data-success="Thanks for signing up.  Please check your inbox for a confirmation email." data-error="Please provide your email address.">
                                <input className="validate-required validate-email" type="text" name="EMAIL" placeholder="Email Address" />
                                <button type="submit" className="btn btn--primary type--uppercase">Subscribe</button>
                                <div style={{position: 'absolute', left: '-5000px' }}aria-hidden="true">
                                    <input type="text" name="b_77142ece814d3cff52058a51f_f300c9cce8" tabIndex="-1" value="" />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
            </footer>
        </div>
        </div>
        )
    }
}

const stateToProps = state => {
    return{

    }
}

const dispatchToProps = dispatch => {
    return{
        navBarTransparent: () => dispatch( actions.navBarTransparent() )
    }
}

export default connect(stateToProps,dispatchToProps)(Home)