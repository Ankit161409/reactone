import React from "react"
// import { FcManager } from "react-icons/fc"
import {Link } from "react-router-dom"
import { MyappList } from "./Controls/AppControl"
export function Welcomeapp()
{
    const back=''
    return(

        <div className="container-fluid welcome" style={{ 
    backgroundImage: "url('https://img.freepik.com/free-photo/laptop-notepad-composition-desk_23-2147982557.jpg?semt=ais_hybrid&w=740&q=80')",backgroundSize: "cover",    
    backgroundRepeat: "no-repeat",
   height:"100%"
}}> 
        <div className="row"> 
        <div className="col-12 bg-dark text-center text-light p-3 txt "> 
           <h1>Welcome to application</h1> 
           <hr/>
        </div>
        </div>
         <div className="row">
 {MyappList.map((app)=>{
return(
 
 <div className="col-md-2  text-center" key={app.url}>
            <Link to={app.url} className="border myapp  text-dark mt-3" >
           {app.icons}
            <p>{app.appname}</p>
            </Link>


        </div>
);
 }

)}
    </div>
        </div>
    )
}
