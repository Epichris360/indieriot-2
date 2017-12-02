import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { Footer }           from '../presentation'

class AboutPage extends Component{
    componentDidMount(){
        this.props.navBarTransparent()
    }
    render(){
        return(
            <div className="main-container">
                <section className="text-center imagebg space--lg" data-overlay="3">
                    <div className="background-image-holder" 
                        style={{backgroundImage: "url('/dist/img/cool-blur-min.jpg')", opacity:1 }}
                    >
                        <img alt="background" src="/dist/img/cool-blur-min.jpg" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-6">
                                <h1>Hi, We're IndieRiot</h1>
                                <p className="lead">
                                    An innovative collective of like-minded folks making useful and enduring technology for indie artists and fans alike
                                </p>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <h2>Built on passion and ingenuity</h2>
                                <p className="lead">
                                    IndieRiot is built to offer high-quality, high-value services backed by timely and personable support. Recognised and awarded on multiple occasions for producing consistently outstanding results for our customers, it's no wonder over 20,000 customers enjoy using IndieRiot.
                                </p>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-11">
                                <div className="slider border--round" data-arrows="true" data-paging="true"
                                    data-children={3}
                                >
                                    <ul className="slides flickity-enabled is-draggable" tabIndex={0}>
                                        <li className="slide" >
                                            <img alt="Image" src="img/gallery-1.jpg" />
                                        </li>
                                        <li className="slide" >
                                            <img alt="Image" src="img/cowork-1.jpg" />
                                        </li>
                                        <li className="slide" >
                                            <img alt="Image" src="img/cowork-5.jpg" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center bg--secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <h2>What drives us</h2>
                                <p className="lead">
                                    Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag. 
                                </p>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="bg--secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="feature">
                                    <h4>Inclusion</h4>
                                    <p>
                                    Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag. 
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature">
                                    <h4>Ingenuity</h4>
                                    <p>
                                        Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature">
                                    <h4>Innovation</h4>
                                    <p>
                                        Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag.                                         
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                <h2>Meet the makers</h2>
                                <p className="lead">
                                    Artisan paleo ea, try-hard iPhone qui ugh lorem 90's polaroid raw denim messenger bag.                                     
                                </p>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-1.png" />
                                    <h5>Vera Duncan</h5>
                                    <span>Founder &amp; CEO</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-3.png" />
                                    <h5>Zach Smith</h5>
                                    <span>Co-Founder &amp; CTO</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-2.png" />
                                    <h5>Bernice Lucas</h5>
                                    <span>Chief of Operations</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-4.png" />
                                    <h5>Cameron Nguyen</h5>
                                    <span>Lead Designer</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-5.png" />
                                    <h5>Josie Web</h5>
                                    <span>Head of Development</span>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="feature feature-8">
                                    <img alt="Image" src="/dist/img/avatar-round-6.png" />
                                    <h5>Bryce Vaughn</h5>
                                    <span>Marketing Director</span>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <div className="cta">
                                    <h2>We're always looking for talent</h2>
                                    <p className="lead">
                                        Got what it takes to work with us? Great! Send us a link to your resumé or portfolio to become part of our talent pool.
                                    </p>
                                    <a className="btn btn--primary type--uppercase" href="#">
                                        <span className="btn__text">
                                            See Job Openings
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>

                <Footer />
                <a className="back-to-top inner-link" href="#start" data-scroll-class="100vh:active">
                    <i className="stack-interface stack-up-open-big"></i>
                </a>
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

export default connect(stateToProps,dispatchToProps)(AboutPage)