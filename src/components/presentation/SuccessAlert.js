import React, { Component } from 'react'

export default props => {
    return(
        <div className="alert bg--success">
            <div className="alert__body">
                <b>{ props.msg }</b>
            </div>
            <div className="alert__close" onClick={props.close} >
            ×
            </div>
        </div>      
    )
} 