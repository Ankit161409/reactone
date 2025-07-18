import React from 'react'

function Thirdbranch(props) {
  return (
        <div className='container-fluid mt-5 '>
       <div className='row'>
       <div className='col-md-12 p-5 bg-info'>
     <b className='text-danger'> This is third branch</b><br/>
      <ul>
    {props.namez.map((n)=>
    {
       return <li key={n}>{n}</li>
    })}
</ul>

       </div></div>
    </div>  
      
      

  )
}

export default Thirdbranch
