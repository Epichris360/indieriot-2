import React, { Component } from 'react'
import { Link }             from 'react-router-dom'

export default props => {
    
    return(
        <div className="modal-instance" >
            <div className="modal-container modal-active" >
                <div className="modal-content" >
                    <button className="btn btn-danger pull-right " 
                        onClick={ props.exit }
                    >X</button>
                    <div className="boxed boxed--lg" >
                        <div>
                            <h1>{ props.con.concertName }</h1>
                            <hr/>
                            <p>
                                Description: <br/>
                                { props.con.description }
                            </p>
                            <span>Price:{` ${props.con.price}`}</span>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}