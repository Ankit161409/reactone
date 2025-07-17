import React from 'react';
import { useForm } from "react-hook-form"
import {Link} from "react-router-dom"
function UserRegisterPage() {

  const { register,handleSubmit,formState:{errors}} =useForm();
  const formdata=(f)=>
  {
    console.log(f);
  }
  return (

    <form onSubmit={handleSubmit(formdata)}>
     {/* {Main container with margin-top} */}
    <div className="container mt-5">
      
      {/* Row centered horizontally */}
      <div className="row justify-content-center">
        
        {/* Column to hold the form */}
        <div className="col-md-6 shadow p-4 rounded bg-white">
          
          {/* Page Title */}
          <h2 className="text-center mb-4 text-success">User Register Page</h2>
          
          {/* Registration Form */}
         

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" {... register("email",{required:true})}/>
              {errors.email && <p className='text-danger'>email is manadatory</p>}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" {... register("pass",{required:true,minLength:5,maxLength:10})}/>
           {/* {errors.pass && <p className='text-warning'>password is required </p>} */}
           {errors.pass?.type==="required" && <p className='text-warning'>password is required </p>}
           {errors.pass?.type==="minLength" && <p className='text-warning'>minLenght is 5 </p>}
           {errors.pass?.type==="maxLength" && <p className='text-warning'>maxLength is 10 </p>}
           

            </div>

            {/* Date of Birth Field */}
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
              <input type="date" className="form-control" id="dob" {... register("dob",{required:true})} />
           {errors.dob && <p className='text-warning'>DOB is required </p>}

            </div>

            {/* Gender Dropdown */}
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select className="form-select" id="gender" {... register("gender",{required:true})}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
           {errors.gender && <p className='text-warning'>gender is required </p>}

            </div>

            {/* Phone Number Field */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" {... register("phone",{required:true,minLength:10,maxLength:10})} />
           {errors.phone && <p className='text-warning'>phone no is required </p>}
           {errors.phone?.type==="maxLength" && <p className='text-warning'>number must be only 10 digits </p>}
           {errors.phone?.type==="minLength" && <p className='text-warning'>number must be only 10 digits </p>}

            </div>

            {/* Submit Button */}
          <Link to="/login" className="ml-2">  <input type="submit" className="btn btn-success w-100" value="Register"/> </Link> 
            <span className='ml-5 m-3'>if you have already register then please </span> 
<Link to="/login" className="ml-2">Login</Link>
          
        </div>
      </div>
    </div>
    </form>
  );
}

export default UserRegisterPage;



/*{

| **Class**                    | **Description**                                |
| ---------------------------- | ---------------------------------------------- |
| `container mt-5`             | Adds margin-top and centers content            |
| `row justify-content-center` | Centers the form row                           |
| `col-md-6`                   | Responsive column size                         |
| `shadow p-4 rounded`         | Card-like style with padding and border radius |
| `bg-white`                   | Background color (white)                       |
| `form-control`               | Styles the input fields                        |
| `form-select`                | Styles the dropdown                            |
| `btn btn-success w-100`      | Green full-width register button               |

}*/


/*{

========>>>>  ✅ If You Have Only One Validation Rule:
You do NOT need to check the error type.

Example:
jsx
Copy
Edit
<input {...register("email", { required: true })} />

{errors.email && <p>Email is required</p>}  ✅ Fine as is
✅ This works perfectly, because there's only one possible error (required), so there's no confusion.



========>>>> ✅ If You Have Multiple Validation Rules:
You SHOULD check the .type (or use .message) to show the correct message.

Example:
jsx
Copy
Edit
<input
  {...register("phone", {
    required: true,
    minLength: 10,
    maxLength: 10
  })}
/>

{errors.phone?.type === "required" && <p>Phone is required</p>}
{errors.phone?.type === "minLength" && <p>Must be at least 10 digits</p>}
{errors.phone?.type === "maxLength" && <p>Cannot exceed 10 digits</p>}
✅ This ensures each rule has the correct message.

=======>>>>✅ Even Better (Recommended):
Use message inside each rule and display one error message:

jsx
Copy
Edit
<input
  {...register("phone", {
    required: "Phone is required",
    minLength: { value: 10, message: "Must be 10 digits" },
    maxLength: { value: 10, message: "Must be 10 digits" }
  })}
/>

{errors.phone && <p>{errors.phone.message}</p>}
✅ This avoids needing to check type at all, and keeps your code clean and scalable.

------------------------------------------------------------------
=======>
  ❗ What Happens If You Don't Check type for One Error?
Let’s say you only use errors.phone && ... (like your first message):

jsx
Copy
Edit
{errors.phone && <p>Phone number is required</p>}
This message will appear no matter what kind of validation fails — not just for the required rule.

So if a user enters only 5 digits (fails minLength), the message ("Phone number is required") will still show, which is misleading.

}*/