import React, { Component } from 'react'

export default props => {
    return(
        <div class="col-sm-4" style={{ boxShadow: '10px 10px 5px grey' }} >
            <div class="product">
                <span class="label">QTY: {props.con.qty}</span>
                <img alt="Image" src={props.con.picture} />
                <div>
                    <h5> {props.con.name} </h5>
                </div>
                <div>
                    <span class="h4 inline-block">{`$${props.con.price}`}</span>
                </div>
            </div>
        </div>
    )
}