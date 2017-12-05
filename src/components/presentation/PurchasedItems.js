import React, { Component } from 'react'

export default props => {
    const month = new Date(props.item.timestamp).getMonth() + 1
    const day   = new Date(props.item.timestamp).getDate()
    const year  = new Date(props.item.timestamp).getFullYear()
    return(
        <div className="masonry__item col-md-4 col-sm-6 filter-marketing" 
            data-masonry-filter="Marketing" style={{ boxShadow: '10px 10px 5px grey' }}
        >
            <article className="feature feature-1">
                <a href="#" className="block">
                    <img alt="Image" src={ props.item.concerts[0].picture } />
                </a>
                <div className="feature__body boxed boxed--border">
                    <h5>
                        {
                            props.item.length > 1 ? `${props.item.concerts[0].concertName} plus other concerts` : 
                            `${props.item.concerts[0].concertName} ticket(s)`
                        }
                    </h5>
                    <span>Date: { `${day}/${month}/${year}` }</span>
                    <br/>
                    <span>Total Cost: {props.item.total}</span>
                    <br/>
                    <button style={{padding:5}} className="btn btn-default" onClick={props.showModal} >
                        More Info
                    </button> 
                </div>
            </article> 
        </div>
    )
}