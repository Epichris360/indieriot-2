import React, { Component } from 'react'

export default props => {
    return(
        <div className="masonry__item col-md-4 col-sm-6 filter-marketing" 
            data-masonry-filter="Marketing" style={{ boxShadow: '10px 10px 5px grey' }}
        >
            <article className="feature feature-1">
                <a href="#" className="block">
                    <img alt="Image" src={ props.con.picture } />
                </a>
                <span>{ props.con.concertName }</span>
                <div className="feature__body boxed boxed--border">
                    <button style={{padding:5}} className="btn btn-default" onClick={ props.pick } >
                        More Info
                    </button> 
                </div>
            </article>  
        </div> 
    )
} 