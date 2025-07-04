import React from 'react';
    import { FcCloseUpMode ,FcDislike} from "react-icons/fc";
    import { ImHome3 } from "react-icons/im";
    import {ImAidKit} from "react-icons/im";
import {FaAdn} from "react-icons/fa";
function Mybootstrappage() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-100'>
          <h1 className='text-danger bg-info border'> <FcCloseUpMode/>this is bootstrap <ImHome3/> page <FcDislike/><ImAidKit/></h1>
       <h1 className="text-primary">Welcome to React + Bootstrap<FaAdn/> </h1>
      <button className="btn btn-success">Click Me</button>
        </div>
      </div>
    </div>
  )
}

export default Mybootstrappage;