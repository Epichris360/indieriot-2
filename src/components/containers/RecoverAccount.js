import React, { Component } from 'react'
import Nav                  from './Nav'
import { connect }          from 'react-redux'
import actions              from '../../actions'

class RecoverAccount extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:''
        }
    }
    componentDidMount(){
        this.props.notTransparent()
    }
    
    recoverAccount(){
        console.log('recover account')
    } 
    render(){
        return(
            <div>
                {/*<Nav transparent={false} />*/}
                <div className="main-container">
                    <section className="height-100 text-center">
                        <div className="container pos-vertical-center">
                            <div className="row">
                                <div className="col-sm-7 col-md-5">
                                    <h2>Recover your account</h2>
                                    <p className="lead">
                                        Enter email address to send a recovery email.
                                    </p>
                                    <form>
                                        <input type="email" placeholder="Email Address" onChange={e => this.setState({email: e.target.value})} />
                                        <button className="btn btn--primary type--uppercase" 
                                            onClick={this.recoverAccount.bind(this)}
                                        >Recover Account</button>
                                    </form>
                                    <span className="type--fine-print block">Dont have an account yet?
                                        <a href="/">Create account</a>
                                    </span>
                                </div>
                            </div>
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
        notTransparent: () => dispatch( actions.navBarNotTransparent() )
    }
}

export default connect( stateToProps, dispatchToProps )(RecoverAccount)