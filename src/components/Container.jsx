import React from 'react'
import Card from './Card'
import { useEffect } from 'react';
import { useState } from 'react';

function Container(props) {
 let {data} = props
  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.sampleapis.com/beers/ale")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         //console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center'>
        <h1 className='mt-4 text-danger'>Beers-Available</h1>
        </div>
       
         {
         data.map((data)=>{
            return <div className='col-md-3 my-5'>
            <Card key={data.id} name={data.name} image={data.image} price={data.price} reviews={data.rating.reviews} average={data.rating.average}/>
            </div>
        })
       }
       </div>
    </div>
  )
}

export default Container