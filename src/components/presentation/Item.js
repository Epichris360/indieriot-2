import React, { Component } from 'react'

export default (props) => {
    return (
        <div className="masonry__item col-sm-4" data-masonry-filter="Computing" >
            <div className="product product--tile bg--secondary text-center" style={{ boxShadow: '10px 10px 5px grey' }} >
                <a href="#">
                    <img alt="Image" src={`${props.con.picture}`}  />
                </a>
                <a className="block" href="#">
                    <div>
                        <h5>{props.con.concertName}</h5>
                    </div>
                    <div>
                        {/*<span className="h4 inline-block type--strikethrough">$899</span>*/}
                        <span className="h4 inline-block">{`$${props.con.price}`}</span>
                    </div>
                </a>

                <button className="btn btn--primary" style={{padding: 5}} onClick={ props.addToCart } >
                    Add To Cart:<i style={{color:'white'}} className="stack-basket"></i>
                </button>
            </div>
        </div>
    )
}