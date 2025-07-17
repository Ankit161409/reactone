import React from 'react'
import {Link} from 'react-router-dom'
function Errorpage() {
  return (
    <div className='container bg-info  ' id='row1'>
       <div className='row' >
          <div className='col-12 text-center mb-5'>
   <h1> 404 error page not found</h1>  </div></div>
       <div className='row'>
     <Link to="/dashboard" className='btn btn-success'>back to home</Link>

</div>
    </div>
  )
}

export default Errorpage
