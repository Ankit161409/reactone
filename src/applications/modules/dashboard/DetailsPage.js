import { useState,useEffect  } from 'react'
import { useParams } from 'react-router-dom';
import React  from 'react'
import axios from 'axios';
 
 
 import { Link } from 'react-router-dom';
function DetailsPage() {

const {id}=useParams();

 const [data, setData] = useState({});

  const iddata =()=> {
    axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
    console.log(d.data);  
       setData(d.data);
    });
  };
useEffect(()=>
{
    iddata();
},[]);

  return (
    <div className='container-fluid detailcont'>
   <div className='row'>
    <div className='col-4  img'><img src={data.thumbnail}/></div>
    <div className='col-8  '>
       <p className='h1'> {data.category}</p>
       <p className='h2'> {data.title}</p>
       <p className='h4'> {data.description}</p>
       <p className='h1'> {data.availabilityStatus}</p>
       <p className='h2'> {data.price}</p>
       <p className='h6'> {data.returnPolicy}</p>
       <p className='h3'> {data.warrantyInformation}</p>
       <p className='h3'>stocks : {data.stock<=50? <span className='  stock'>{data.stock}</span>: data.stock}</p>
                    <Link to="/dashboard/employeelist" className='btn btn-success'>Back</Link>
   
       
        
        
        </div>
  
    </div> 
    
    
    
    </div>
  )
}

export default DetailsPage
