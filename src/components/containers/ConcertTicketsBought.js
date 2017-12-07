import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { WarningAlert, SuccessAlert, Footer, PurchasedItems, PurchasedModal,
                          } from '../presentation'

class ConcertTicketsBought extends Component{
    constructor(props){
        super(props)
        this.state = {
            purchasedCarts:null, message: '', err: false, modalOn: false, purchaseModalTemp: null
        }
    }
    componentDidMount(){
      this.props.getMyPurchasedCarts({ user_id: this.props.user.id })
      .then(data => {
          this.setState({ purchasedCarts: data })
          return
      })
      .catch(err => {
          this.setState({ err: true, message: err.message })
          return
      })
    }
    closeAlert(){
        this.setState({ err: false, message:'' })
    }
    showModal(p){
        this.setState({ modalOn: true, purchaseModalTemp: p})
        
    } 
    turnOffModal(){
        this.setState({ modalOn: false, purchaseModalTemp: null })
    }
    render(){
        const carts = this.state.purchasedCarts || []
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
                                            <h1>Tickets I Bought:</h1>
                                            <div className="masonry__container masonry--active" style={{ position:'relative' }} >
                                                {
                                                    this.state.err ? 
                                                    <WarningAlert close={this.closeAlert.bind(this)} 
                                                        errMessage={this.state.message}/> : null
                                                }
                                                <div className="masonry__item col-md-4 col-sm-6"></div>

                                                {/*start of item*/} 
                                                    {
                                                        carts.map( (p,i) => {
                                                            return(
                                                                <PurchasedItems key={i} 
                                                                    showModal={this.showModal.bind(this, p)}
                                                                    item={p}
                                                                />
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
                    {
                        this.state.modalOn ? <PurchasedModal 
                            purchaseModalTemp={this.state.purchaseModalTemp}
                            turnOffModal={this.turnOffModal.bind(this)} 
                        /> : null
                    }
                    
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
        getMyPurchasedCarts: params => dispatch( actions.getMyPurchasedCarts( params ) )
    }
}

export default connect(stateToProps, dispatchToProps)(ConcertTicketsBought)