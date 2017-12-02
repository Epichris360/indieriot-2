import React, { Component } from 'react'
import { injectStripe, 
    CardElement }           from 'react-stripe-elements';

class CheckOutFormStripe extends Component{
    handleSubmit(ev){
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();

        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: this.props.userName })
        .then(({token}) => { 
            this.props.receivedToken(token)
            this.props.stripeStatusFalse
            //console.log('Received Stripe token:', token);
            return
        })
        .catch(err => {
            console.log('err', err.message)
            return
        })

        // However, this line of code will do the same thing:
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                Card Details
                <CardElement style={{base: {fontSize: '18px'}}} />
                {/*
                    this.props.status ? <h3>Processing Payment...</h3> :*/
                    <button style={{marginTop:18, padding: 5}} className="btn btn--primary" 
                        onClick={this.props.stripeStatusTrue}
                    >Buy Tickets!</button>
                }
            </form>
        )
    }
}

export default injectStripe(CheckOutFormStripe)