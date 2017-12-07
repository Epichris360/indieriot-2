//will have to refactor to make many concerts.
import React, { Component }           from 'react'
import { connect }                    from 'react-redux'
import { SuccessAlert, WarningAlert } from '../presentation'
import { TurboClient }                from '../../utils'
import Dropzone                       from 'react-dropzone'
import actions                        from '../../actions'

class CreateNewConcert extends Component{
    constructor(props){
        super(props)
        this.state = {
            err: false, errMessage:'', submitting: false, concertName:'', price:'', description:'', picture:'',
            imageUploading:false, success: false
        }
    }
    componentDidMount(){
        this.props.notTransparent()
    }
    
    createConcert(){
        const { concertName, price, description, picture } = this.state 
        if( concertName == '' || price == '' || description == '' || picture == '' ){
            this.setState({ err: true, errMessage:'Something is empty!' })
            return
        }
        const concert = { user_id: this.props.user.id, concertName, price, description,
                picture, isActive:'true', created_at: new Date(), updated_at: new Date() }

        this.props.createConcert(concert)
        .then(data => {
            this.props.notTransparent()
            //this.setState({ success: true, errMessage:'Concert Was Created!!!' })
            this.props.history.push("/")
            return
        })
        .catch(err => {
            this.props.notTransparent()
            this.setState({ err: true, errMessage:err.message })
            return
        })
    }
    uploadImg(files){
        const file = files[0]
        this.setState({imageUploading:true})
		TurboClient.uploadFile(file)
		.then(data => {
            this.setState({picture: data.result.url, imageUploading:false, 
                success:true, errMessage:'Image Was Uploaded' })
            return
		})
		.catch(err => {
            this.setState({ err:true, errMessage:err.message, imageUploading: false })
            return
        })
    }
    closeAlert(){
        this.setState({err: false, success:false, errMessage:'' })
    }
    render(){
        return(
            <div className="main-container">
                <div style={{ height:50 }} />
                <section className="bg--secondary space--sm">
                    <div className="container are all self taught and say">
                        <div className="row">

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
                                                    <label>Name of Concert:</label>
                                                    <input type="text" 
                                                        onChange={ e => this.setState({concertName: e.target.value}) } 
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Price:</label>
                                                    <input type="number" 
                                                        onChange={ e => this.setState({price: parseInt(e.target.value)}) } 
                                                    />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Description:</label>
                                                    <textarea rows="4" 
                                                        onChange={ e => this.setState({ description: e.target.value }) }
                                                    ></textarea>
                                                </div>
                                                {
                                                    this.state.imageUploading ? <h1>Uploading Image...</h1> :
                                                    <Dropzone className="btn btn--primary type--uppercase pull-right" 
                                                        onDrop={this.uploadImg.bind(this)}
                                                    >
                                                        <strong style={{color:'white'}}>Select File</strong>
                                                    </Dropzone> 
                                                }
                                                
                                                {   !this.state.submitting ? 
                                                    <div className="col-md-3 col-sm-4">
                                                        <button className="btn btn--primary type--uppercase"
                                                        style={{ marginTop:20, padding:'5px' }}
                                                        onClick={ this.createConcert.bind(this) }>Create Concert</button>
                                                    </div> : <h1>Submitting...</h1>
                                                }
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="boxed boxed--lg boxed--border">
                                    <div id="account-profile" className="account-tab">
                                        <h3>Picture Preview:</h3>
                                        <hr/>
                                        <img src={this.state.picture} alt="" border={1} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
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
        createConcert: params => dispatch( actions.createConcert(params) ),
        notTransparent: () => dispatch( actions.navBarNotTransparent() )
    }
}

export default connect(stateToProps,dispatchToProps)(CreateNewConcert)