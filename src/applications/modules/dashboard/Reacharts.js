 import { useState,useEffect, Fragment } from 'react';
import axios from 'axios'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Reacharts() {
    const [data, setData] = useState([]);
    const [a,b]=useState([]);
    
      const myapi = () => {
        axios.get('https://dummyjson.com/products').then((d) => {
          setData(d.data.products);
          // console.log(d.data.products);
           
          // const e=(d.data.products.category);            // wrong because products is an array and u can't directly 
          // console.log(e);                                      //  access only single object can aceess

         const udata=d.data.products.map((u)=>
        {
          return u.category
        });
          //  console.log(udata);
         const c=[...new Set(udata)]
            //  console.log(c); 
b(c);
  
        });
      };
    useEffect(()=>
    {
        myapi();
    },[]);

    

  return (
    <Fragment>
<div className='container-fluid '>
    <div className='row  '>
 <div className='col-md-12 ' >
  <select >
{a.map((d)=>{
  return <option key={d}>{d}</option>

})}

  </select>
 </div>
</div></div>

  <div className='container-fluid     graphs  '>
    <div className='row mb-3'>
 <div className='col-md-12 ' style={{ height: "600px", width:"1000px" }}>
  <ResponsiveContainer className='graphs' width="100%" height="90%">

        <BarChart
          width={600 }
          height={400}
          data={data}
           margin={{
            top: 5,
            right: 20,
            left: 50,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#3ffb06ff" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="price" fill="#e74f09ff" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      </div></div></div>
      </Fragment>
  )
}

export default Reacharts
