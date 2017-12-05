import React, { Component } from 'react'

export default (props) => {
    return(
        <footer className="footer-3 text-center-xs space--xs ">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img alt="Image" className="logo" src="/dist/img/logo-dark.png" />
                        <ul className="list-inline list--hover">
                            <li>
                                <a href="#">
                                    <span className="type--fine-print">Get Started</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className="type--fine-print">help@indieriot.io</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 text-right text-center-xs">
                        <ul className="social-list list-inline list--hover">
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
                {/*<!--end of row-->*/}
                <div className="row">
                    <div className="col-sm-6">
                        <p className="type--fine-print">
                            Supercharge your life.
                        </p>
                    </div>
                    <div className="col-sm-6 text-right text-center-xs">
                        <span className="type--fine-print">&copy;
                            <span className="update-year"></span> Stack Inc.</span>
                        <a className="type--fine-print" href="#">Privacy Policy</a>
                        <a className="type--fine-print" href="#">Legal</a>
                    </div>
                </div>
                {/*<!--end of row-->*/}
            </div>
            {/*<!--end of container-->*/}
        </footer>
    )
}