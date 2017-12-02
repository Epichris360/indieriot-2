import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import { CheckoutItem, WarningAlert, 
        SuccessAlert }      from '../presentation'
import { Elements }         from 'react-stripe-elements'
import CheckOutFormStripe   from './CheckOutFormStripe'
import axios                from 'axios'

class Checkout extends Component{
    constructor(props){
        super(props)
        this.state = {
            token:null, stripeStatus:false, message:'', success:false, err: false
        }
    }
    receivedToken(token){
        const charge = this.props.cart.total
        axios.post('http://localhost:3000/charge-card', {
            params: {
                token: token, 
                charge: charge
            }
        })
        .then(function (response) {
            console.log(response)
            this.setState({success: true, message:'The Operation was a Success'})
            return
        })
        .catch(function (error) {
            //console.log(error)
            this.setState({err: true, message:'There was an Error Please Try Again'})
            return
        });
    }
    stripeStatus(status){

        this.setState({ stripeStatus: status })
    }
    render(){
        return(
            <div className="main-container">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Checkout</h1>
                        </div>
                    </div>
                    {/*<!--end of row-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
            <section>
                <div className="container">
                    <div className="cart-form"  >
                        <div className="row">
                            {/*beginning of item*/}
                            
                            {
                                this.props.cart.concerts.map( (con,i) => {
                                    return(
                                        <CheckoutItem key={i} con={con}  />
                                    )
                                })
                            }
                            
                            {/*end of item*/}
                        </div>
                        {/*<!--end of row-->*/}
                        <div className="row">
                            <div className="col-md-2 col-md-offset-10 text-right text-center-xs">
                                <Link to="/cart" style={{ padding:3 }} className="btn">Revise Cart</Link>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                        <div className="row mt--2">
                            <div className="col-sm-12">
                                <div className="boxed boxed--border cart-total">
                                    <div>
                                        <div className="col-xs-6">
                                            <span className="h5">Total:</span>
                                        </div>
                                        <div className="col-xs-6 text-right">
                                            <span className="h5">{`${this.props.cart.total}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                        <div className="row" style={{marginTop:-50}} >
                            <div className="col-sm-12 col-md-8 col-md-offset-2 cart-customer-details">                                
                                <div className="row"> 
                                    <Elements>
                                        <CheckOutFormStripe userName={ this.props.user.name } 
                                            status={this.state.stripeStatus}
                                            stripeStatusTrue={this.stripeStatus.bind(this, true)}
                                            stripeStatusFalse={this.stripeStatus.bind(this, false)}
                                            receivedToken={this.receivedToken.bind(this)} 
                                        />
                                    </Elements>
                                </div>
                                {/*<!--end of row-->*/}
                            </div>
                        </div>
                        {/*<!--end of row-->*/}
                    </div>
                    {/*<!--end checkout form-->*/}
                </div>
                {/*<!--end of container-->*/}
            </section>
        </div>
        )
    }
}

const stateToProps = state => {
    const { cart, user } = state
    return{
        cart, user
    }
}

const dispatchToProps = dispatch => {
    return{

    }
}

export default connect(stateToProps, dispatchToProps)(Checkout)