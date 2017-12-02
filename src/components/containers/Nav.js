import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { withRouter }       from 'react-router'

const transparentNav = "bar bar-2 hidden-xs bar--transparent bar--absolute"
const solidNav       = "bar bar-2 hidden-xs bar--absolute"

class Nav extends Component{
    signout(){
        this.props.logout()
        .then(data => {
            this.props.history.push("/")
            return
        })
        .catch(err => {
            console.log('err ',err.message)
            return
        })
    }
    render(){
        return(
            <div className={ !this.props.nav.show ? 'hidden-md hidden-sm': "nav-container "}>
                <div className="bar bar--sm visible-xs">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-sm-2">
                                <Link to="/" >
                                    <img className="logo logo-dark" alt="logo" src="/dist/img/logo-dark.png" />
                                    <img className="logo logo-light" alt="logo" src="/dist/img/logo-light.png" />
                                </Link>
                            </div>
                            <div className="col-xs-9 col-sm-10 text-right">
                                <a href="#" className="hamburger-toggle" data-toggle-class="#menu2;hidden-xs ">
                                    <i className="icon icon--sm stack-interface stack-menu"></i>
                                </a>
                            </div>
                        </div>
                    {/*<!--end of row-->*/}
                    </div>
                {/*<!--end of container-->*/}
                </div>
                {/*<!--end bar-->*/}
                {/* bar bar--sm bar-1 hidden-xs bar--absolute */}
                <nav id="menu2" className={ this.props.nav.transparent ? transparentNav : solidNav } data-scroll-class='90vh:pos-fixed'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 text-center text-left-sm hidden-xs col-md-push-5">
                                <div className="bar__module">
                                    <Link to="/" >
                                        <img className="logo logo-dark" alt="logo" src="/dist/img/logo-dark.png" />
                                        <img className="logo logo-light" alt="logo" src="/dist/img/logo-light.png" />
                                    </Link>
                                </div>
                                {/*<!--end module-->*/}
                            </div>
                            <div className="col-md-5 col-md-pull-2">
                                <div className="bar__module">
                                    <ul className="menu-horizontal text-left">
                                        <li className="dropdown">
                                            <Link to="/tickets" > 
                                                <span className="dropdown__trigger">
                                                    Tickets
                                                </span>
                                            </Link>
                                        </li>
                                        {
                                            this.props.user.id != '' ? 
                                                <li className="dropdown">
                                                    <span className="dropdown__trigger">Options!</span>
                                                    <div className="dropdown__container">
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="dropdown__content col-md-2 col-sm-4">
                                                                    <ul className="menu-vertical">
                                                                        {
                                                                            this.props.user.category == 'artist' ?
                                                                                <li className="dropdown" >
                                                                                    <Link to="/account-settings" >
                                                                                        <span className="dropdown__trigger">
                                                                                            Account Settings
                                                                                        </span>
                                                                                    </Link>
                                                                                </li> : null
                                                                        }
                                                                        {
                                                                            this.props.user.category == 'artist' ? 
                                                                                
                                                                                <li className="dropdown" >
                                                                                    <Link to="/create-concert" >
                                                                                        <span className="dropdown__trigger">
                                                                                            Create Concert
                                                                                        </span>
                                                                                    </Link>
                                                                                </li> : null
                                                                        }
                                                                        <li className="dropdown">
                                                                            <span className="dropdown__trigger">About</span>
                                                                            <div className="dropdown__container">
                                                                                <div className="container">
                                                                                    <div className="row">
                                                                                        <div className="dropdown__content col-md-2">
                                                                                            <ul className="menu-vertical">
                                                                                                <li>
                                                                                                    <a href="page-about-company.html">
                                                                                                        About Company
                                                                                                    </a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="page-about-team.html">
                                                                                                        About Team
                                                                                                    </a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="page-about-me.html">
                                                                                                        About Me
                                                                                                    </a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="page-about-history.html">
                                                                                                        About History
                                                                                                    </a>
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    {/*<!--end dropdown content-->*/}
                                                                                    </div>
                                                                                    {/*<!--end row-->*/}
                                                                                </div>
                                                                            </div>
                                                                            {/*<!--end dropdown container-->*/}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                {/*<!--end dropdown content-->*/}
                                                            </div>
                                                            {/*<!--end row-->*/}
                                                        </div>
                                                    </div>
                                                    {/*<!--end dropdown container-->*/}
                                                </li> : null
                                        
                                        }
                                    </ul>
                                </div>
                                {/*<!--end module-->*/}
                            </div>
                            <div className="col-md-5 text-right text-left-xs text-left-sm">
                                {
                                    this.props.user.id == '' ? 
                                    <div className="bar__module">
                                        {/*<a className="btn btn--sm type--uppercase" href="#">*/}
                                        <Link to="/signin" className="btn btn--sm type--uppercase"  >
                                            <span className="btn__text">
                                                Sign In
                                            </span>
                                        </Link >
                                        {/*</a>*/}
                                        <Link to="/signup" className="btn btn--sm btn--primary type--uppercase" >
                                            <span className="btn__text">
                                                Sign Up
                                            </span>
                                        </Link>
                                    </div> : 

                                    <div className="bar__module">
                                        <Link to="#" onClick={this.signout.bind(this)}
                                            className="btn btn--sm btn--primary type--uppercase" 
                                        >
                                            <span className="btn__text" >
                                                Sign Out
                                            </span>
                                        </Link>
                                        { ' ' }
                                        <Link to="/cart">
                                            <button className="btn btn--primary" style={{padding:5}} >
                                                    <i style={{color:'white'}} className="stack-basket"></i> 
                                                    <span style={{color:'white'}} >| { this.props.cart.concerts.length }</span>
                                            </button>
                                        </Link>
                                    </div>
                                }
                                
                                {/*<!--end module-->*/}
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </nav>
                {/*<!--end bar-->*/}
            </div> 
        )
    }
}

const stateToProps = state => {
    const { user, nav, cart } = state
    return{
        user, nav, cart
    }
}

const dispatchToProps = dispatch => {
    return{
        logout: () => dispatch( actions.logout() )
    }
}

export default connect(stateToProps, dispatchToProps)( withRouter(Nav) )