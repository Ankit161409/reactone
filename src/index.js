import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mainpage from "./applications/modules/dashboard/mainpage.js";
import {Welcomeapp} from "./applications/welcomeapp.js";
 import './applications/css/global.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserLoginpage from './applications/modules/auth/userLoginpage.js';
import UseraRegistorpage from './applications/modules/auth/useraRegistorpage.js';
// import PrcaticeBootstrap from './PrcaticeBootstrap.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PrcaticeBootstrap/> */}
   {/* <Welcomeapp/> */}
   <BrowserRouter>
   <Routes>
   <Route path='' element={<Welcomeapp/>}/> 
   <Route path='dashboard' element={<Mainpage/>}/> 
   <Route path='login' element={<UserLoginpage/>}/> 
   <Route path='register' element={<UseraRegistorpage/>}/> 

   </Routes>
   
   </BrowserRouter>
  </React.StrictMode>
);

   