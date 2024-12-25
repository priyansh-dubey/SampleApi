import React, { useEffect, useState } from 'react'
import Container from './Container';

export default function Navbar() {

    const [input , setInput] = useState([]);

    const [data, setData] = useState([]);


    const fetchData = ()=>{
        useEffect(() => {
            fetch(`https://api.sampleapis.com/beers/ale`)
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                //console.log(data);
                setData(data);
              });
          }, []);
    }

    fetchData()

    const handleClick = ()=>{
        let newData = data.filter((data)=>{
            if(data.name==input){
                return data.id
            }
    })

    setData(newData)

    }

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/?#">BeeRworld</a>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" onChange={handleChange}aria-label="Search"/>
                        <button className="btn btn-outline-success" onClick={handleClick} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <Container data={data}/>

    </div>
  )
}
