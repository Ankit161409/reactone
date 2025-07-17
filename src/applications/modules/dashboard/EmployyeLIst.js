import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom'
function EmployeeList() {
  const [data, setData] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      setData(d.data.products);
    });
  };
useEffect(()=>
{
    myapi();
},[]);
  return (
    <div className="container-fluid cont">
      {/* <input type="button" value="Get Data" className="btn btn-success mb-3" onClick={myapi} /> */}

      <div className="row">
        {data.map((product) => {
            return(
          <div className="col-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5  >{product.title}</h5>
                <p className="p1" >{product.description}</p>
                <p className="p1">{product.brand}</p>
                <p className="card-text">{product.price}</p>
               <Link to={"detailsPage/"+product.id} className='btn btn-info'>Details</Link>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}

export default EmployeeList;
