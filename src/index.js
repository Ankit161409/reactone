import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mainpage from "./applications/modules/dashboard/mainpage.js";
import { Welcomeapp } from "./applications/welcomeapp.js";
import './applications/css/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginpage from './applications/modules/auth/userLoginpage.js';
import UseraRegistorpage from './applications/modules/auth/useraRegistorpage.js';
import Homepage from './applications/modules/dashboard/Homepage.js';
import EmployyeLIst from './applications/modules/dashboard/EmployyeLIst.js';
import Errorpage from './applications/shares/errorpage.js';
import DetailsPage from './applications/modules/dashboard/DetailsPage.js';
import LandingPage from './applications/modules/dashboard/LandingPage.js';
import Reacharts from './applications/modules/dashboard/Reacharts.js';
import Mainbranch from './applications/modules/dashboard/props/Mainbranch.js';
 
 const Lazypage=lazy(()=>import("./applications/modules/dashboard/Lazypage.js"));  // when using suspence import this type
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp />} />

        <Route path='login' element={<UserLoginpage />} />
        <Route path='register' element={<UseraRegistorpage />} />
            <Route path='*' element={<Errorpage/>}> </Route>

        <Route path='dashboard' element={<Mainpage />}>
            <Route path='' element={<Homepage />}> </Route>
            <Route path='employeelist' element={<EmployyeLIst />}> </Route>
            <Route path='*' element={<Errorpage/>}> </Route>
            <Route path='employeelist/detailsPage/:id' element={<DetailsPage/>}> </Route>
            <Route path='landing' element={<LandingPage/>}> </Route>
            <Route path='chart' element={<Reacharts/> }> </Route>
            <Route path='props' element={<Mainbranch/> }> </Route>
            <Route path='lazypage' element={<Suspense fallback={<p className='fallbackMsg'>please wait page is loading......</p>}><Lazypage/> </Suspense>}> </Route>
          
          {/* <Route path=' ' element={<Homepage/>}> </Route> */}

        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

