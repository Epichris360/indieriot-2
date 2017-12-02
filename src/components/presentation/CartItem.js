import React, { Component } from 'react'

export default props => {
    //backgroundColor:'#f7f6f2',
    return(
        <div className="col-sm-4" style={{  margin:5, 
            padding:5, boxShadow: '10px 10px 5px grey'}} 
        >
            <div className="product-1" >
                <div className="product__controls">
                    <div className="col-xs-3" style={{marginBottom:5}} >
                        <label>Quantity:</label>
                    </div>
                    <div className="col-xs-6">
                        <input type="number" value={props.con.qty} onChange={props.changeQty} placeholder="QTY" />
                    </div>
                    <div className="col-xs-3 text-right">
                        <button onClick={ props.remove} className="checkmark checkmark--cross bg--error"></button>
                    </div>
                </div>
                <img alt="Image" src={props.con.picture} />
                <div>
                    <h5>{props.con.name}</h5>
                </div>
                <div>
                    <span className="h4 inline-block">{`$${props.con.price} per Ticket`}</span>
                    <br/>
                    <span className="h4 inline-block">{`Total: ${ props.con.qty * props.con.price }`}</span>
                </div>
            </div>
        </div>
    )
}