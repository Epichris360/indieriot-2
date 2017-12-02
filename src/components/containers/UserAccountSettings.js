import React, { Component }               from 'react'
import actions                            from '../../actions'
import { connect }                        from 'react-redux'
import { SuccessAlert, WarningAlert }     from '../presentation'
import { Link, Route }                           from 'react-router-dom'

class UserAccountSettings extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'', bio:'', username:'', email:'', location:'', category:'artist',
            err:false, success:false , errMessage:'', updating: false
        }
    }
    componentDidMount(){
        this.props.notTransparent()
        const { username, email, name, bio, location, category } = this.props.user
        this.setState({username, email, name, bio, location, category })
    }
    saveProfile(){
        this.setState({updating:true})
        let user = this.props.user
        const { name, bio, username, email, location, category } = this.state
        if( name == '' || bio == '' || username == '' || email == '' || location == '' ){
            this.setState({ updating:false, err:true, errMessage:'something is empty' })
            return
        }
        user.name     = name
        user.bio      = bio
        user.username = username
        user.email    = email
        user.location = location
        user.category = category
        this.props.updateUser(this.props.user,user) 
        .then(data => {
            this.setState({ success:true, errMessage:'The Update Was Completed!', updating:false })
            this.props.notTransparent()
            return
        })
        .catch(err => {
            this.props.notTransparent()
            this.setState({ err:true, errMessage:'Something went wrong. Please try again.', updating: false })
            return
        })
    }
    closeAlert(){
        this.setState({err: false, success:false, errMessage:'' })
    }
    render(){
        //<Route path={`${this.props.match.path}/email-notification`}>
            //<h1>yada yada</h1>
        //</Route>
        return(
            <div className="main-container">
                <div style={{ height:50 }} ></div>
                <section className="bg--secondary space--sm">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">
                                <div className="boxed boxed--lg boxed--border">
                                    <div className="text-block text-center">
                                        <img alt="avatar" src="img/avatar-round-3.png" className="image--sm" />
                                        <span className="h5">{ this.props.user.username }</span>
                                        <span>Pro Account</span>
                                        <span className="label">Pro</span>
                                    </div>
                                    <hr />
                                    <div className="text-block">
                                        <ul className="menu-vertical">
                                            <li>
                                                <Link to="/account-settings" >Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/account-settings/email-notification" >Email Notifications</Link>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle-class=".account-tab:not(.hidden);hidden|#account-billing;hidden">Billing Details</a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle-class=".account-tab:not(.hidden);hidden|#account-password;hidden">Password</a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle-class=".account-tab:not(.hidden);hidden|#account-delete;hidden">Delete Account</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="boxed boxed--lg boxed--border">

                                    
                                    <div id="account-profile" className="account-tab">
                                        {
                                            this.state.err ? <WarningAlert errMessage={this.state.errMessage} 
                                                    close={ this.closeAlert.bind(this) }
                                                /> : this.state.success ? 
                                                <SuccessAlert 
                                                close={this.closeAlert.bind(this)} 
                                                msg={this.state.errMessage} /> : null
                                        }
                                        <h4>Profile</h4>
                                        <form onSubmit={e => e.preventDefault() } >
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Name:</label>
                                                    <input type="text" 
                                                        onChange={ e => this.setState({name: e.target.value}) } 
                                                        value={ this.state.name }
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>User Name:</label>
                                                    <input type="text" 
                                                        onChange={ e => this.setState({username: e.target.value}) } 
                                                        value={ this.state.username }
                                                    />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Email Address:</label>
                                                    <input type="email" 
                                                        onChange={ e => this.setState({ email: e.target.value }) }
                                                        value={ this.state.email }
                                                    />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Location:</label>
                                                    <input type="text"
                                                        onChange={ e => this.setState({ location: e.target.value }) }
                                                        value={ this.state.location }
                                                    />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Bio:</label>
                                                    <textarea rows="4" 
                                                        onChange={ e => this.setState({ bio: e.target.value }) }
                                                        value={this.state.bio}
                                                    ></textarea>
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Pick a Category</label>
                                                    <select value={this.state.category} 
                                                        onChange={ e => this.setState({ category: e.target.value }) } className=" btn btn-default" 
                                                    >
                                                        <option value="artist">Artist  </option>
                                                        <option value="musicFan">Music Fan  </option>
                                                    </select>
                                                </div>
                                                
                                                {   !this.state.updating ? 
                                                    <div className="col-md-3 col-sm-4">
                                                        <button className="btn btn--primary type--uppercase"
                                                        onClick={ this.saveProfile.bind(this) }>Save Profile</button>
                                                    </div> : <h1>Updating...</h1>
                                                }
                                            </div>
                                        </form>
                                    </div>

                                    <div id="account-notifications" className="hidden account-tab">
                                        <h4>Email Notifications</h4>
                                        <p>Select the frequency with which you'd like to recieve product summary emails:</p>
                                        <form>
                                            <div className="row">
                                                <div className="boxed bg--secondary boxed--border">
                                                    <div className="col-xs-4 text-center">
                                                        <div className="input-radio">
                                                            <span>Never</span>
                                                            <input type="radio" name="frequency" value="never" className="validate-required" />
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-4 text-center">
                                                        <div className="input-radio checked">
                                                            <span>Weekly</span>
                                                            <input type="radio" name="frequency" value="weekly" className="validate-required" />
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-4 text-center">
                                                        <div className="input-radio">
                                                            <span>Monthly</span>
                                                            <input type="radio" name="frequency" value="monthly" className="validate-required" />
                                                            <label></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-5">
                                                    <button type="submit" className="btn btn--primary type--uppercase">Save Preferences</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="account-billing" className="hidden account-tab">
                                        <h4>Billing Details</h4>
                                        <div className="boxed boxed--border bg--secondary">
                                            <h5>Payment Methods</h5>
                                            <hr />
                                            <form>
                                                <div className="row">
                                                    <ul>
                                                        <li>
                                                            <div className="col-sm-6">
                                                                <p>
                                                                    <i className="material-icons">credit_card</i>
                                                                    <span> Mastercard ending in
                                                                        <strong>4722</strong>
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <div className="col-sm-3 text-right text-left-xs">
                                                                <button type="submit" className="btn bg--error">Remove</button>
                                                            </div>
                                                            <div className="col-sm-3 text-right text-left-xs">
                                                                <button type="submit" className="btn">Edit</button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <hr />
                                                <button type="submit" className="btn">Add New Method</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div id="account-password" className="hidden account-tab">
                                        <h4>Password</h4>
                                        <p>Passwords must be at least 6 characters in length.</p>
                                        <form>
                                            <div className="row">
                                                <div className="col-xs-12">
                                                    <label>Old Password:</label>
                                                    <input type="password" name="old-password" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>New Password:</label>
                                                    <input type="password" name="new-password" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Retype New Password:</label>
                                                    <input type="password" name="new-password-confirm" />
                                                </div>
                                                <div className="col-md-3 col-sm-4">
                                                    <button type="submit" className="btn btn--primary type--uppercase">Save Password</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="account-delete" className="hidden account-tab">
                                        <h4>Delete Account</h4>
                                        <p>Permanently remove your account using the button below. Warning, this action is permanent.</p>
                                        <form>
                                            <button type="submit" className="btn bg--error type--uppercase">Delete Account</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <footer className="footer-3 text-center-xs space--xs ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <img alt="Image" className="logo" src="img/logo-dark.png" />
                                <ul className="list-inline list--hover">
                                    <li>
                                        <a href="#">
                                            <span className="type--fine-print">Get Started</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="type--fine-print">help@stack.io</span>
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
                                    Supercharge your web workflow
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
            </div>
        )
    }
}

const stateToProps = state => {
    const { user } = state
    return{
        user
    }
}

const dispatchToProps = dispatch => {
    return{
        notTransparent: () => dispatch( actions.navBarNotTransparent() ),
        updateUser: (orig, params) => dispatch( actions.updateUser(orig, params) )
    }
}

export default connect(stateToProps, dispatchToProps)(UserAccountSettings)