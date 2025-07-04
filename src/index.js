import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mainpage from "./applications/modules/dashboard/mainpage.js";
import {Welcomeapp} from "./applications/welcomeapp.js";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import UserLoginpage from './applications/modules/auth/userLoginpage.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   {/* <Welcomeapp/> */}
   <BrowserRouter>
   <Routes>
   <Route path='' element={<Welcomeapp/>}/> 
   <Route path='dashboard' element={<Mainpage/>}/> 
   <Route path='login' element={<UserLoginpage/>}/> 

   </Routes>
   
   </BrowserRouter>
  </React.StrictMode>
);

  