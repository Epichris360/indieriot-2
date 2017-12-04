import React, { Component } from 'react'
import { Link }             from 'react-router-dom'
import { connect }          from 'react-redux'
import { CheckoutItem, WarningAlert, 
        SuccessAlert }      from '../presentation'
import { Elements }         from 'react-stripe-elements'
import CheckOutFormStripe   from './CheckOutFormStripe'
import axios                from 'axios'
import actions              from '../../actions'

class Checkout extends Component{
    constructor(props){
        super(props)
        this.state = {
            token:null, message:'', success:false, err: false
        }
    }
    receivedToken(token){
        //gets token from stripe elements, then sends token to 
        //backend so that the charge can be made
        const charge = this.props.cart.total
        axios.post('http://localhost:3000/charge-card', {
            params: {
                token: token, 
                charge: charge,
                cart: this.props.cart
            }
        })
        .then((response) => {
            //console.log(response)
            this.setState({success: true, message:'The Operation was a Success'})
            this.props.newCartAfterPurchased()
            return
        })
        .catch( (error) => {
            //console.log(error)
            this.setState({err: true, message:'There was an Error Please Try Again'})
            return
        });
    }

    closeAlert(){
        this.setState({err: false, message:'', success:false })
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
                        {/*</div>*/}
                        {/*<!--end of row-->*/}
                        {/*<div className="row">*/}
                            <div className="col-md-2 col-md-offset-10 text-right text-center-xs">
                                <Link to="/cart" style={{ padding:3 }} className="btn">Revise Cart</Link>
                            </div>
                        {/*</div>*/}
                        {/*<!--end of row-->*/}
                        {/*<div className="row mt--2">*/}
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
                        {/*</div>*/}
                        {/*<!--end of row-->*/}
                        {/*<div className="row">*/}
                            <div className="col-sm-12 col-md-8 col-md-offset-2 cart-customer-details">                                
                                <div className="row">
                                    {
                                        this.state.success ? <SuccessAlert msg={this.state.message}
                                            close={this.closeAlert.bind(this) }
                                        /> : null
                                    }
                                    {
                                        this.state.err ? <WarningAlert errMessage={this.state.message} 
                                            close={this.closeAlert.bind(this)}
                                        /> : null
                                    }
                                    <Elements>
                                        <CheckOutFormStripe userName={ this.props.user.name } 

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
        newCartAfterPurchased: () => dispatch( actions.newCartAfterPurchased() )
    }
}

export default connect(stateToProps, dispatchToProps)(Checkout)