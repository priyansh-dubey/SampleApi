import React from 'react'

function Card(props) {

    let {name , image , price, reviews , average , } = props;

  return (
    <div className='container'>
        <div className="card container" style={{width:"16rem",
            height:"600px" , overflow:"hidden",
            borderRadius:"20px"

        }}>
        <img src={image} className="card-img-top container py-2" style={{height:"350px"}} alt="NOT FOUND"/>
            <div className="card-body px-0 py-0">
                <p className="card-text">{name}</p>
                <p className="card-text">PRICE : {price}</p>
                <p className="card-text">REVIEWS : {reviews}</p>
                <p className="card-text">RATING : {Math.round(average)}⭐</p>
                <div style={{height:"90px"}}>
                <button type="button" className="btn btn-primary">Add To 🛒</button>
                <button type="button" className="btn btn-primary">Buy Now</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Card