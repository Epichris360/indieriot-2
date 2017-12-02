import React, { Component } from 'react'
import { connect }          from 'react-redux'
import actions              from '../../actions'
import { CartItem, SuccessAlert, WarningAlert }         from '../presentation'
import { Link } from 'react-router-dom'

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            cart:{ concerts:null }, updating: false, updated:false, message: '', err:false
        }
    }
    componentDidMount(){
        this.props.notTransparent()

        this.setState({ cart: this.props.cart })
    }
    changeQty(concert, e){
        const index = this.state.cart.concerts.map( c => c.id ).indexOf(concert.id)
        let { cart } = this.state
        if( e.target.value != '' && e.target.value > 0){
            concert.qty = parseInt(e.target.value)
        }else{
            concert.qty = 0 
        }
        cart.concerts[index] = concert
        const totalArray     = cart.concerts.map( c => c.qty * c.price )
        const total          = totalArray.reduce((a, b) => a + b, 0)
        cart.total           = total
        this.setState({cart})
    }
    updateCart(cartRecive){
        let cart
        if(cartRecive == null){
            cart = this.state.cart
        }else{
            cart = cartRecive
        }
        this.setState({updating:true})
        this.props.updateCart(cart.id, cart)
        .then(data => {
            this.props.notTransparent()
            this.setState({cart:data, updated:true, message:'Cart Was Updated!', updating:false })
            return
        })
        .catch(err => {
            this.props.notTransparent()
            throw err
            return
            this.setState({err: true, message: err.message, updating:false})
            return
        })
    }
    closeAlert(){
        this.setState({err: false, updated:false, message:'' })
    }
    removeFromCart(concert, e){
        //e.preventDefault()
        const { concerts }   = this.state.cart
        const newConcerts    = concerts.filter(c => c.id != concert.id )
        let { cart }         = this.state
        cart.concerts        = newConcerts
        const totalArray     = cart.concerts.map( c => c.qty * c.price )
        const total          = totalArray.reduce((a, b) => a + b, 0)
        cart.total           = total
        this.updateCart( cart )
    }
    render(){
        const cartConcerts = this.state.cart.concerts || [  ]
        return(
            <div className="main-container">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Cart Overview</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{marginTop:-55}} >
                    <div className="container">
                        <form className="cart-form">
                            <div className="row">
                                {
                                    this.state.updated ? <SuccessAlert close={this.closeAlert.bind(this)}
                                    msg={this.state.message} /> : null
                                }
                                {
                                    this.state.err ? <WarningAlert close={this.closeAlert.bind(this)} 
                                        errMessage={this.state.message}
                                    /> : null
                                }
                               {
                                   cartConcerts.map( (con, i) => {
                                       return(
                                           <CartItem con={con} key={i} 
                                                remove={this.removeFromCart.bind(this, con)}
                                                changeQty={this.changeQty.bind(this, con)} 
                                            />
                                       )
                                   })
                               }
                            </div>
                            <div className="row mt--2">
                                <div className="col-sm-12">
                                    <div className="boxed boxed--border cart-total">
                                        <div>
                                            <div className="col-xs-6">
                                                <span className="h5">Total:</span>
                                            </div>
                                            <div className="col-xs-6 text-right">
                                                <span className="h5">{this.state.cart.total}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <br />
                            {
                                this.state.updating ?  <h3>updating..</h3> : 
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-10 text-right text-center-xs">
                                        <button onClick={this.updateCart.bind(this, null)}
                                            style={{ padding: 5 }}
                                            className="btn btn--primary"
                                            >Save Updates</button>
                                    </div>
                                </div>
                            }
                            <br />
                            {/*<!--end of row-->*/}
                            {
                                this.state.updating ? null :
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-10 text-right text-center-xs">
                                        <Link to="/checkout" className="btn btn--primary">
                                            <b style={{color:'white'}} >Proceed &raquo;</b>
                                        </Link>
                                    </div>
                                </div>
                            }
                            {/*<!--end of row-->*/}
                        </form>
                        {/*<!--end cart form-->*/}
                    </div>
                    {/*<!--end of container-->*/}
                </section>
            </div>
        )
    }
}

const stateToProps = state => {
    //get items from cart collection for this user
    const { user, cart } = state
    return{
        user, cart
    }
}

const dispatchToProps = dispatch => {
    return{
        notTransparent: () => dispatch( actions.navBarNotTransparent() ),
        updateCart: (id, params) => dispatch( actions.updateCart(id, params) )
    }
}

export default connect(stateToProps, dispatchToProps)(Cart)