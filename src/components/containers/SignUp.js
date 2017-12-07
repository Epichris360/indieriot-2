import React, { Component } from 'react'
import Nav                  from './Nav'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { WarningAlert }     from '../presentation'
import { v4 }               from 'uuid'

const defaultProfileImg = "https://lh3.googleusercontent.com/9I8wDIyovcWBjgpB9eT1rVtmZ78x0D12xRhk-K3QLUaoveCdl7edGT74vccpuYaYstyJ4oLiZQyYPipcTLZu73Rci_I"

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',email:'',password:'',passConfirm:'', err:false, errMessage:'', loading:false
        }
    }
    componentDidMount(){
        this.props.noNavBar()
    }
    signUp(){
        const { username, email, password, passConfirm } = this.state
        if( username == '' || email == '' || passConfirm == '' || passConfirm == '' ){
            console.log('something\'s missing')
            return
        }
        if(password != passConfirm){
            console.log('passwords dont match!')
            return
        }
        this.setState({loading:true})
        const newUser = { username, email, password, confirmationNum: v4(), profileImg:defaultProfileImg }
        this.props.registerUser(newUser)
        .then( data => {
            return
        })
        ,then( () => {
            this.props.createCart( { user_id:this.props.user.id , concerts:[], total:0} )
            .then( data => {
                this.props.history.push("/")
                return
            })
            return
        })
        .catch(err => {
            this.setState({err:true, errMessage: err.message, loading:false})
            return
        })
    }
    alertOff(){
        this.setState({ err:false, errMessage:'' })
    }
    render(){
        return(
            <div  >
                <a id="start"></a>
                <div className="main-container"  >
                    <section className="imageblock switchable feature-large height-100">
                        <div className="imageblock__content col-md-6 col-sm-4 hidden-xs pos-right">
                            <div >
                                <img alt="image" src="/dist/img/micstand-min.png" />
                            </div>
                        </div>
                        <div className="container pos-vertical-center" >
                            <div className="row">
                                <div className="col-md-5 col-sm-7 col-xs-12" style={{marginTop:50}} >
                                    {
                                        this.state.err ? 
                                            <WarningAlert 
                                                errMessage={this.state.errMessage} 
                                                close={ this.alertOff.bind(this) }
                                            /> : null
                                    }
                                    <h2>Create an IndieRiot account</h2>
                                    
                                    <a className="btn block btn--icon bg--facebook type--uppercase" href="#">
                                        <span className="btn__text">
                                            <i className="socicon-facebook"></i>
                                            Sign up with Facebook
                                        </span>
                                    </a>
                                    <a className="btn block btn--icon bg--twitter type--uppercase" href="#">
                                        <span className="btn__text">
                                            <i className="socicon-twitter"></i>
                                            Sign up with Twitter
                                        </span>
                                    </a>
                                    <hr data-title="OR" />
                                    <form onSubmit={ e => e.preventDefault() } >
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <input type="email" onChange={ e => this.setState({email : e.target.value}) }  placeholder="Email Address" />
                                            </div>
                                            <div className="col-xs-12">
                                                <input type="text" onChange={ e => this.setState({username: e.target.value}) }  placeholder="User Name" />
                                            </div>
                                            <div className="col-xs-12">
                                                <input type="password" onChange={ e => this.setState({password: e.target.value}) }  placeholder="Password" />
                                            </div>
                                            <div className="col-xs-12">
                                                <input type="password" onChange={ e => this.setState({passConfirm: e.target.value}) }  placeholder="Password Confirm!" />
                                            </div>
                                            {
                                                this.state.loading ? <h3>Loading...</h3> : 
                                                <div className="col-xs-12">
                                                    <button onClick={this.signUp.bind(this)} className="btn btn--primary type--uppercase">Create Account</button>
                                                </div>
                                            }
                                            <div className="col-xs-12">
                                                
                                                <span className="type--fine-print">
                                                    <Link to="/" > Back To Main Page</Link>
                                                </span>
                                                <br/>
                                                <span className="type--fine-print">Need to Sign in? Go  
                                                    <Link to="/signin"> Here</Link>
                                                </span>
                                            </div>
                                        </div>
                                        {/*<!--end row-->*/}
                                    </form>
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </div>
                        {/*<!--end of container-->*/}
                    </section>
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
        registerUser: params => dispatch( actions.register(params) ),
        noNavBar: () => dispatch( actions.noNavBar() ),
        createCart: params => dispatch( actions.createCart(params) )

    }
}

export default connect(stateToProps, dispatchToProps)(SignUp)