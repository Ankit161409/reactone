 

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import {useState} from 'react'


 
function UserLoginpage() {


  const nav=useNavigate();

  const [mail,updmail]=useState('ankit@gmail.com');
  const [pass,updpass]=useState('ankit1234');

  const updatemail=(m)=>
  {
    updmail(m.target.value)
  }
const updatepass=(p)=>
  {
    updpass(p.target.value)
  }

  const validationlogin=()=>
  {
if(mail==="" || pass==="")
{
  toast.warning("your email or password is blank",{position:"top-left",theme:"dark",autoClose:2000})
}
else
{
  toast.success("congrats login success",{position:"top-left",theme:"dark",autoClose:2000})
  setTimeout(()=>
  {
    nav("/dashboard");
  },2000)
}


  }

  return (
    // Main container with Bootstrap padding and margin utilities
    <div className="container mt-5">
      
      {/* Centering the row */}
      <div className="row justify-content-center">
        
        {/* Column with shadow, padding, rounded corners and a white background */}
        <div className="col-md-6 col-lg-4 shadow p-4 rounded bg-white">
          
          {/* Title */}
          <ToastContainer/>
          <h2 className="text-center mb-4 text-primary">User Login</h2>
          
          {/* Login Form */}
          <form>
            
            {/* Email input field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email"  value={mail} onInput={updatemail}/>
            </div>
            
            {/* Password input field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" value={pass} onInput={updatepass}/>
            </div>
            
            {/* Submit button */}
            <input type="button" className="btn btn-primary w-100" value="login" onClick={validationlogin}/> 
           <span className="if"> if you already not register then please </span> 
<Link to="/Register" className="reg">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLoginpage;


/*{

| **Class**                    | **Purpose**                                               |
| ---------------------------- | --------------------------------------------------------- |
| `container mt-5`             | Centers content and adds top margin                       |
| `row justify-content-center` | Horizontally centers the column inside the row            |
| `col-md-6 col-lg-4`          | Makes the form responsive on different screen sizes       |
| `shadow p-4`                 | Adds box-shadow and padding                               |
| `rounded`                    | Rounded corners on the form box                           |
| `bg-white`                   | White background (you can change to `bg-light` or others) |
| `form-label`                 | Styles form labels                                        |
| `form-control`               | Styles the input fields                                   |
| `btn btn-primary w-100`      | Primary colored button with full width                    |

}*/