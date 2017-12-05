import React, { Component } from 'react'
import Nav                  from './Nav'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { WarningAlert }     from '../presentation'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',password:'', err:false, errMessage:'', loader:false
        }
    }
    componentDidMount(){
        this.props.navBarTransparent()
    }
    login(){
        const { username, password } = this.state
        if( username == '' || password == '' ){
            this.setState({ err: true, errMessage:'something is empty!' })
            return
        }
        this.setState({loader: true})
        const user = { username, password }
        this.props.login(user)
        .then(data => {
            //console.log('data ', data)
            this.props.history.push("/tickets")
            return
        })
        .catch(err => {
            this.setState({ err:true, errMessage: err.message, loader:false })
            return 
        })
    }
    alertOff(){
        this.setState({ err:false, errMessage:'' })
    }
    render(){
        return(
            <div>
                {/*<Nav transparent={true} />*/}
                <div className="main-container">
                    <section className="height-100 imagebg text-center" data-overlay="4">
                        <div className="background-image-holder"
                                style={{background: "url('/dist/img/headphones-girl-min.jpg')", opacity:1 }} >
                            <img alt="background" src="/dist/img/headphones-girl-min.jpg"  />
                        </div>
                        <div className="container pos-vertical-center">
                            <div className="row">
                                <div className="col-sm-7 col-md-5">
                                    {
                                        this.state.err ? <WarningAlert 
                                            errMessage={this.state.errMessage} 
                                            close={ this.alertOff.bind(this) }
                                        /> : null
                                    }
                                    <h2>Login to continue</h2>
                                    <p className="lead">
                                        Get Those Ticket! or Get To Your Fans!
                                    </p>
                                    <form onSubmit={ e => e.preventDefault() }  >
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <input type="text" 
                                                    onChange={ e => this.setState( {username: e.target.value} ) } 
                                                    autoFocus={true}
                                                    placeholder="Username" 
                                                />
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="password" placeholder="Password" 
                                                    onChange={ e => this.setState( {password:e.target.value} ) }
                                                />
                                            </div>
                                            <div className="col-sm-12" >
                                                {
                                                    !this.state.loader ? 
                                                    <button className="btn btn--sm type--uppercase" 
                                                    onClick={this.login.bind(this)}
                                                    >
                                                    <b style={{color:'white', padding:5}} >Login</b>
                                                    </button> : <h3>Loading..</h3>
                                                }
                                            </div>
                                        </div>
                                        {/*<!--end of row-->*/}
                                    </form>
                                    <span className="type--fine-print block">Dont have an account yet?
                                        <Link to="/signup" > Create account</Link>
                                    </span>
                                    <span className="type--fine-print block">Forgot your username or password?
                                        <Link to="/recover-account" > Recover account</Link>
                                    </span>
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </div>
                        {/*<!--end of container-->*/}
                    </section>
                </div>
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
       login: params => dispatch( actions.loginUser(params) ),
       navBarTransparent: () => dispatch( actions.navBarTransparent() )
    }
}

export default connect(stateToProps,dispatchToProps)(SignIn)