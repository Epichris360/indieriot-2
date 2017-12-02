import React, { Component } from 'react'

export default props => {
    return(
        <div className="alert bg--error">
            <div className="alert__body">
                <b>{props.errMessage}</b>
            </div>
            <div className="alert__close" onClick={ props.close } >
            ×
            </div>
        </div>
    )
}