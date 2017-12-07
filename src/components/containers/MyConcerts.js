import React, { Component }         from 'react'
import { WarningAlert, Footer, MyConcertsItem 
                                  } from '../presentation'
import { connect }                  from 'react-redux'
import actions                      from '../../actions'

// for artists to see their concerts and modify them
class MyConcerts extends Component{
    constructor(props){
        super(props)
        this.state = {
            err: false, message: '', myconcerts:[]
        }
    }
    componentDidMount(){
        this.props.getMyConcerts( { user_id: this.props.user.id } )
        .then(data => {
            console.log('data: ',data)
            this.setState({ myconcerts: [...data] })
            return
        })
        .catch(err => {
            console.log('err: ', err.message )
            return
        })
    }
    render(){
        console.log('user from props', this.props.user)
        const myConcerts = this.state.myconcerts
        return(
            <div>
                <div style={{ height:'60px' }}></div>
                <div className="main-container">
                    <section className="space--sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="masonry">
                                        
                                        <div className="row">
                                            <h1>My Concerts:</h1>
                                            <hr/>
                                            <div className="masonry__container masonry--active" style={{ position:'relative' }} >
                                                {
                                                    this.state.err ? 
                                                    <WarningAlert close={this.closeAlert.bind(this)} 
                                                        errMessage={this.state.message}/> : null
                                                }
                                                <div className="masonry__item col-md-4 col-sm-6"></div>

                                                {/*start of item*/} 
                                                {
                                                    myConcerts.map( (con,i) => {
                                                        return(
                                                            <MyConcerts con={con} key={i} />
                                                        )
                                                    })
                                                }
                                                {/*<!--end item-->*/}
                                            </div>
                                            {/*<!--end of masonry container-->*/}
                                        </div>
                                        {/*<!--end row-->*/}
                                    </div>
                                    {/*<!--end masonry-->*/}
                                </div>
                            </div>
                            {/*<!--end of row-->*/}
                        </div>
                        {/*<!--end of container-->*/}
                    </section>
                    
                    <Footer />
                </div>

                <a className="back-to-top inner-link" href="#start" data-scroll-class="100vh:active">
                    <i className="stack-interface stack-up-open-big"></i>
                </a>
                
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
        getMyConcerts: params => dispatch( actions.getMyConcerts(params) )
    }
}
 
export default connect(stateToProps, dispatchToProps)(MyConcerts)