import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Reacharts from './Reacharts';

function LandingPage() {

  const [data, setData] = useState([]);
  const [a, b] = useState([]);

  const myapi = () => {
    axios.get('https://dummyjson.com/products').then((d) => {
      setData(d.data);
      console.log(d.data);
      b(d.data.products);
    });
  };
  useEffect(() => {
    myapi();
  }, []);


  return (
    <div className='container-fluid mt-5'>
      <div className='row mb-3'>

        <div className='col-md-3 '>
          <div className="card bg-primary ">
            <div className="card-body text-light">
              <h5 className="card-title">Total products</h5>
              {data.total}
            </div>
          </div>
        </div>

        <div className='col-md-3 '>
          <div className="card bg-warning">
            <div className="card-body">
              <h5 className="card-title">Data limit</h5>
              {data.limit}

            </div>
          </div>
        </div>


        <div className='col-md-3 '>
          <div className="card bg-danger">
            <div className="card-body">
              <h5 className="card-title">total products</h5>
              {a.length}
            </div>
          </div>
        </div>


        <div className='col-md-3 '>
          <div className="card bg-info">
            <div className="card-body">
              <h5 className="card-title">Skip value</h5>
              {data.skip}
            </div>
          </div>
        </div>
      </div>


      <div className='row mb-3'>
        <div className='col-md-10 '>
          <div className="card bg-info">
            <div className="card-body text-light">
              <h5 className="card-title">total produc</h5>
            <div style={{width:'100%', height:'300px'}}>
               <Reacharts />
              </div> 
            </div>
          </div>
        </div>

        <div className='col-md-2 '>
          <div className="card bg-primary">
            <div className="card-body">
              <h5 className="card-title">total produc</h5>
            </div>
          </div>
        </div>



      </div>
      <div className='row'>
        <div className='col-md-12 '>
          <div className="card bg-info">
            <div className="card-body">
              <h5 className="card-title">total produc</h5>
            </div>
          </div>
        </div>




      </div>


    </div>
  )
}

export default LandingPage
