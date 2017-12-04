import React, { Component } from 'react'
import { injectStripe, 
    CardElement }           from 'react-stripe-elements';

class CheckOutFormStripe extends Component{
    constructor(props){
        super(props)
        this.state = {
            stripeStatus: false, finished: false
        }
    }
    handleSubmit(ev){
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
        this.setState({stripeStatus: true})
        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: this.props.userName })
        .then( ({token}) => { 
            this.props.receivedToken(token)
            this.setState({stripeStatus: false, finished: true})
            return
        })
        .catch(err => {
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
                {
                    this.state.stripeStatus ? 
                        <h3>Processing...</h3> :
                    this.state.finished ? 
                        <h3>Consider Those Tickets Bought!</h3>  :
                    <button style={{marginTop:18, padding: 5}} className="btn btn--primary" 
                    >Buy Tickets!</button>
                }
            </form>
        )
    }
}

export default injectStripe(CheckOutFormStripe)