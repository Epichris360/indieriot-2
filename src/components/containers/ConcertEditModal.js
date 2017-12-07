import React, { Component }           from 'react'
import { SuccessAlert, WarningAlert } from '../presentation'
import { TurboClient }                from '../../utils'
import Dropzone                       from 'react-dropzone'
import actions                        from '../../actions'
import { connect }                    from 'react-redux'

class ConcertEditModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            concert: {},
            concertName:'', price:0, description:'', picture: '',

            imageUploading:false, err: false, success: false, message:'', updating: false
        }
    }
    componentDidMount(){
        const { concertName, price, description, picture } = this.props.con
        this.setState({ concert: this.props.con, concertName, price, description, picture })
    }
    uploadImg(files){
        const file = files[0]
        this.setState({imageUploading:true})
		TurboClient.uploadFile(file)
		.then(data => {
            this.setState({picture: data.result.url, imageUploading:false, 
                success:true, message:'Image Was Uploaded' })
            return
		})
		.catch(err => {
            this.setState({ err:true, message:err.message, imageUploading: false })
            return
        })
    }
    updateConcert(){
        this.setState({ updating: true })
        let { concert } = this.state
        const { concertName, price, description, picture } = this.state

        if( concertName == '' || price <= 0 || description == '' || picture == '' ){
            this.setState({updating: false, err: true, success: false, message: "Something is Empty Please Check!" })
            return
        }

        concert.concertName = concertName
        concert.price       = price
        concert.description = description 
        concert.picture     = picture

        this.props.updateMyConcert( concert.id, concert )
        .then(data => {
            this.props.updateConcert(concert)
            this.setState({updating: false, err: false, success: true, message:'Updated!!!!' })
            return
        })
        .catch(err => {
            this.setState({updating: false, err: true, success: false, message: err.message })
            return
        })
    }
    closeAlert(){
        this.setState({err: false, success:false, message:'' })
    }
    render(){
        return(
            <div className="modal-instance" >
                <div className="modal-container modal-active" >
                    <div className="modal-content" >
                        <button className="btn btn-danger pull-right " 
                            onClick={ this.props.exit }
                        >X</button>
                        <div className="boxed boxed--lg" >
                            <div className="row">
                                <div className="col-md-12">

                                    <div id="account-profile" className="account-tab">
                    
                                        <form onSubmit={e => e.preventDefault() } >
                                            {
                                                this.state.err ? <WarningAlert errMessage={this.state.message} 
                                                        close={ this.closeAlert.bind(this) }
                                                    /> : this.state.success ? 
                                                    <SuccessAlert 
                                                    close={this.closeAlert.bind(this)} 
                                                    msg={this.state.message} /> : null
                                            }
                                            <h1>Update The Concert Info!</h1>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Name of Concert:</label>
                                                    <input type="text" 
                                                        onChange={ e => this.setState({concertName: e.target.value}) } 
                                                        value={ this.state.concertName }
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <label>Price:</label>
                                                    <input type="number" 
                                                        onChange={ e => this.setState({price: parseInt(e.target.value)}) } 
                                                        value={ this.state.price}
                                                    />
                                                </div>
                                                <div className="col-sm-12">
                                                    <label>Description:</label>
                                                    <textarea rows="4" 
                                                        onChange={ e => this.setState({ description: e.target.value }) }
                                                        value={ this.state.description }
                                                    ></textarea>
                                                </div> 
                                                
                                            </div>
                                        </form>
                                    </div>

                                </div>

                                <div className="col-md-12">
                                    <div id="account-profile" className="account-tab">
                                        <h3>Picture Preview:</h3>
                                        <hr/>
                                        <img src={this.state.picture} border={1} />
                                    </div>
                                </div>
                                {
                                    this.state.updating ? <h1>Updating......</h1>   : 
                                    this.state.imageUploading ? <h1>Uploading Image...</h1> :
                                    <div className="col-md-12">

                                        <Dropzone className="btn btn--primary type--uppercase pull-right" 
                                            onDrop={this.uploadImg.bind(this)}
                                        >
                                            <strong style={{color:'white'}}>Select File</strong>
                                        </Dropzone>        
                                        <div className="col-md-3 col-sm-4">
                                            <button className="btn btn--primary type--uppercase"
                                            style={{ marginTop:20, padding:'5px' }}
                                            onClick={ this.updateConcert.bind(this) }>Update Concert</button>
                                        </div>

                                    </div>
                                }

                            </div>
                        </div>
                    </div>
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
        updateMyConcert: (id, params) => dispatch( actions.updateMyConcert(id, params) )
    }
}

export default connect(stateToProps, dispatchToProps)(ConcertEditModal)