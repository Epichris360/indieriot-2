import React, { Component }               from 'react'
import actions                            from '../../actions'
import { connect }                        from 'react-redux'
import { SuccessAlert, WarningAlert, Footer 
                                        } from '../presentation'
import { Link, Route, Switch }            from 'react-router-dom'
import { TurboClient }                    from '../../utils'
import Dropzone                           from 'react-dropzone'

const defaultProfileImg = "https://lh3.googleusercontent.com/9I8wDIyovcWBjgpB9eT1rVtmZ78x0D12xRhk-K3QLUaoveCdl7edGT74vccpuYaYstyJ4oLiZQyYPipcTLZu73Rci_I"

class UserAccountSettings extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'', bio:'', username:'', email:'', location:'', category:'artist', profileImg:'',
            err:false, success:false , errMessage:'', updating: false, imageUploading: false
        }
    }
    componentDidMount(){
        this.props.notTransparent()
        const { username, email, name, bio, location, category, profileImg } = this.props.user
        this.setState({username, email, name, bio, location, category, profileImg })
    }
    saveProfile(){
        this.setState({updating:true})
        let user = this.props.user
        const { name, bio, username, email, location, category, profileImg } = this.state
        if( name == '' || bio == '' || username == '' || email == '' 
                || location == '' || profileImg == '' ){
            this.setState({ updating:false, err:true, errMessage:'something is empty' })
            return
        }
        user.name       = name
        user.bio        = bio
        user.username   = username
        user.email      = email
        user.location   = location
        user.category   = category
        user.profileImg = profileImg

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
    uploadImg(files){
        const file = files[0]
        this.setState({imageUploading:true})
		TurboClient.uploadFile(file)
		.then(data => {
            this.setState({profileImg: data.result.url, imageUploading:false, 
                success:true, errMessage:'Image Was Uploaded' })
            return
		})
		.catch(err => {
            this.setState({ err:true, errMessage:err.message, imageUploading: false })
            return
        })
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
                                        <img alt="avatar" src={ this.state.profileImg } className="image--sm" />
                                        <span className="h5">{ this.props.user.username }</span>
                                        <span>{`${this.state.category} Account` }</span>
                                        <span className="label">{ this.state.category }</span>
                                    </div>
                                    <hr />
                                    <div className="text-block">
                                        <ul className="menu-vertical">
                                            <li>
                                                <Link to="/account-settings" >Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/account-settings/password-change" 
                                                >Password</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="boxed boxed--lg boxed--border">
                                    <Switch>
                                    <Route exact path={`${this.props.match.path}`}>
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
                                                            <option value="Artist">Artist  </option>
                                                            <option value="MusicFan">Music Fan  </option>
                                                        </select>
                                                    </div>
                                                    {
                                                        this.state.imageUploading ? <h1>Uploading Image...</h1> :
                                                        <Dropzone className="btn btn--primary type--uppercase pull-right" 
                                                            onDrop={this.uploadImg.bind(this)}
                                                        >
                                                            <strong style={{color:'white'}}>Profile Picture!</strong>
                                                        </Dropzone> 
                                                    }
                                                    
                                                    {   !this.state.updating ? 
                                                        <div className="col-md-3 col-sm-4">
                                                            <button className="btn btn--primary type--uppercase"
                                                            onClick={ this.saveProfile.bind(this) }>Save Profile</button>
                                                        </div> : <h1>Updating...</h1>
                                                    }
                                                </div>
                                            </form>
                                        </div>
                                    </Route> 
                                    
                                    <Route path={`${this.props.match.path}/password-change`}>
                                        <div className="account-tab">
                                            <h4>Password</h4>
                                            <p>Passwords must be at least 6 characters in length.</p>
                                            <form onSubmit={ e => e.preventDefault() } >
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <label>Old Password:</label>
                                                        <input type="password" defaultValue="" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label>New Password:</label>
                                                        <input type="password" defaultValue="" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label>Retype New Password:</label>
                                                        <input type="password" defaultValue="" />
                                                    </div>
                                                    <div className="col-md-3 col-sm-4">
                                                        <button className="btn btn--primary type--uppercase">Save Password</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Route>

                                    </Switch>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
                <Footer />
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