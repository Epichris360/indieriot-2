import React, { Component } from 'react'

export default props => {
    const month = new Date(props.purchaseModalTemp.timestamp).getMonth() + 1
    const day   = new Date(props.purchaseModalTemp.timestamp).getDate()
    const year  = new Date(props.purchaseModalTemp.timestamp).getFullYear()
    
    return(
        <div className="modal-instance" >
            <div className="modal-container modal-active" >
                <div className="modal-content" >
                    <div className="boxed boxed--lg" >
                        <button className="btn  btn--lg pull-right " 
                            onClick={ props.turnOffModal }
                        >X</button>
                        <div>
                            <span>Concerts Bought:</span>
                            <hr/>
                            <table className="border--round table--alternate-row">
                                <thead>
                                    <tr>
                                        <th>Concert Name:</th>
                                        <th>Qty:</th>
                                        <th>Cost:</th>
                                        <th>Total:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {   props.purchaseModalTemp.concerts.map( (p,i) => {
                                            return(
                                                <tr key={i} >
                                                    <td>{ p.concertName }</td>
                                                    <td>{ p.qty }</td>
                                                    <td>{ p.price }</td>
                                                    <td>{ p.qty * parseInt(p.price) }</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                            <span>Total Of Purchase: {props.purchaseModalTemp.total}</span>
                            <br/>
                            <span>Date:{`${month}/${day}/${year}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}