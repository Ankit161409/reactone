import React from "react"
// import { FcManager } from "react-icons/fc"
import {Link } from "react-router-dom"
import { MyappList } from "./Controls/AppControl"
export function Welcomeapp()
{
    return(

        <div className="container"> 
        <div className="row"> 
        <div className="col-12 bg-info text-center text-light p-3 "> 
           <h1>welcome to application</h1> 
           <hr/>
        </div>
        </div>
         <div className="row">
 {MyappList.map((app)=>{
return(
 
 <div className="col-md-2  text-center">
            <Link to={app.url} className="border myapp  shadow text-dark mt-3" >
           {app.icons}
            <p>{app.appname}</p>
            </Link>


        </div>
)
 }

)}
    </div>
        </div>
    )
}
