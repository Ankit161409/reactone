// import './ak.css';       style import in module

import { Fragment } from "react/jsx-runtime";

export default function Aboutpage()
{
   return  <h1 className='h11'>this is from default aboutpage function</h1>
}
export function Aboutpage1()
{
   return( 
   <div className='div'> <h1 className="divh1">this is from aboutpage1 name  function</h1></div>
);
}
export function Aboutpage2()
{
   const name ="ankit";
   const age =50;
   let sub ="java";
   let working  ="true";
   return(
      <Fragment>        
       <div className='div'> 
      <h1 className='h12'>this is from aboutpage2 ankit function</h1></div>
      <h2 className='h12'>this is from aboutpage2 name  function</h2>
      <h1>{name}</h1>
      <h1>{age*10}</h1>
      <h1>{sub}</h1>
      <h1>{working}</h1>
      <h1>{<Aboutpage1/> }</h1>  
      <h1>{ name==="ankit" ? "yes" : "no" }</h1>
      <h1>{<span>this is my element</span>}</h1>
      <h1 style={{color:'red',backgroundColor:'green'}}>this is inline css </h1>
</Fragment>
   )
}


//If you don’t want to wrap your elements in a div or another HTML tag then use fragment
  

