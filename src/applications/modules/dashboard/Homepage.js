import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../reduxpage/Actionlist';
import axios from 'axios';

function Homepage() {

const disp=useDispatch();
  const localdata = JSON.parse(localStorage.getItem("apidata"));
  // console.log(localdata);

   const statedata=useSelector((state)=>state.counter.value)

  const incre=()=>{
    disp(increment());
  }
  
  const decre=()=>{
    disp(decrement());
  }


  const [data,apidata]=useState([]);

  const dataapi =()=>{
  axios.get("http://localhost:5700/akjson").then((d)=>
  {

    console.log(d.data);
    apidata(d.data);
  });
  }
  useEffect(()=>{
    dataapi();
  },[])
    

   return (
    <Fragment>
     <div>
      
      <h1>value : {statedata}</h1>
      <input type="button" value="increment" className='btn btn-dark' onClick={()=>disp(increment())}></input>
     <p><input type="button" value="increment" className='btn btn-dark' onClick={incre}></input>   </p>                         
   <p>  <input type="button" value="decrement" className='btn btn-info' onClick={()=>disp(decrement())}></input></p>
   <p>  <input type="button" value="decrement" className='btn btn-info' onClick={decre}></input></p>
     </div>
    <div className='container-fluid p-5'>
      {/* localdata length is : {localdata?.length  }          // ✅ Safe: Returns undefined */}
  
<div className='row  '>
  
<div className='col-md-6 bg-info mt-5 '>
   <p className='mt-4'> Products details </p>
      <table border="2"  className='table' > 
         <thead >
        <tr>
          <th>
         Id
          </th>
          <th>
          title
          </th>
          <th>
          price
          </th>
            <th>
            stock
          </th>
             <th>
            category
          </th>
           <th>
            warranty
          </th>
           <th>
          return Policy
          </th>
        </tr>
        </thead>
        <tbody  >
        {localdata.map((n) => {
          return(
          <tr key={n.id}>
            <td>{n.id} </td>
            <td>{n.title} </td>
            <td>{n.price} </td>
            <td>{n.stock} </td>
            <td>{n.category} </td>
            <td>{n.warrantyInformation} </td>
            <td>{n.returnPolicy} </td>

          </tr>);
        })}
        </tbody>
      </table>
      </div>
   
      
<div className='col-md-6 bg-info mt-5'>
  <p className='mt-4'>Registered user data </p>
 <table border="2"  className='table' > 
    <thead >
        <tr>
          
       </tr>
        <tr>
          <th>
         Id
          </th>
          <th>
        email
          </th>
          <th>
          pass
          </th>
            <th>
            dob
          </th>
             <th>
        phone
          </th>
           <th>
            gender
          </th>
        </tr>
        </thead>
        <tbody>
        {data.map((x) => {
          return(
          <tr key={x.id}>
            <td>{x.id} </td>
            <td>{x.email} </td>
            <td>{x.pass} </td>
            <td>{x.dob} </td>
            <td>{x.phone} </td>
            <td>{x.gender} </td>
        

          </tr>);
        })}
        </tbody>
      </table>



  
</div>

</div>
    </div>
    </Fragment>
  )
}

export default Homepage
