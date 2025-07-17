import React,{useEffect,useState} from 'react'
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
    useEffect(()=>
    {
        myapi();
    },[]);



  return (
    <div className='container-fluid mt-5'>
    <div className='row mb-3'>

    <div className='col-md-3 '>
     <div class="card bg-primary ">
  <div class="card-body text-light">
    <h5 class="card-title">Total products</h5> 
    {data.total} 
  </div>
</div> 
 </div>

<div className='col-md-3 '>
     <div class="card bg-warning">
  <div class="card-body">
    <h5 class="card-title">Data limit</h5> 
    {data.limit} 

  </div>
</div>
 </div>


<div className='col-md-3 '>
     <div class="card bg-danger">
  <div class="card-body">
    <h5 class="card-title">total products</h5>  
     {a.length}
  </div>
</div>
 </div>

 
<div className='col-md-3 '>
     <div class="card bg-info">
  <div class="card-body">
    <h5 class="card-title">Skip value</h5>  
    {data.skip}
  </div>
</div>
 </div>
 </div>


 <div className='row mb-3'>
 <div className='col-md-10 '>
     <div class="card bg-info">
  <div class="card-body text-light">
    <h5 class="card-title">total produc</h5>  
 <Reacharts/>
  </div>
</div>
 </div>

 <div className='col-md-2 '>
     <div class="card bg-primary">
  <div class="card-body">
    <h5 class="card-title">total produc</h5>  
  </div>
</div>
 </div>

 

   </div>
   <div className='row'>
 <div className='col-md-12 '>
     <div class="card bg-info">
  <div class="card-body">
    <h5 class="card-title">total produc</h5>  
  </div>
</div>
 </div>

  
 

   </div>


   </div>
  )
}

export default LandingPage
