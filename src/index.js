import React,{Fragment, lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Mainpage from "./applications/modules/dashboard/mainpage.js";
import { Welcomeapp } from "./applications/welcomeapp.js";
import './applications/css/global.css'
// import '../src/output.css'  
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
import {Provider} from 'react-redux';
import { actionstore } from './applications/modules/reduxpage/Mystorage.js';
import TailwindPage from './applications/modules/dashboard/TailwindPage.js';
import MUIpage from './applications/modules/dashboard/MUIpage.js';
import Box from '@mui/material/Box';
import Html  from './applications/pages/Html.jsx';
import Css from './applications/pages/Css.jsx';
import LinearProgress from '@mui/material/LinearProgress';
import AboutJs from './applications/pages/AboutJs.jsx';
import AboutJava from './applications/pages/AboutJava.jsx';


 const Lazypage=lazy(()=>import("./applications/modules/dashboard/Lazypage.js"));  // when using suspence or lazy loading, import this way
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={actionstore}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcomeapp />} />

        <Route path='login' element={<UserLoginpage />} />
        <Route path='html' element={<Html/>} />
        <Route path='Css' element={<Css/>} />
        <Route path='javaScript' element={<AboutJs/>} />
        <Route path='java' element={<AboutJava/>} />
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
            <Route path='lazypage' element={<Suspense fallback={ <Fragment> <LinearProgress sx={{pt:10}}/>  <Box sx={{ width: '100%' ,pt:10}}>
      <LinearProgress />
    </Box>
      <LinearProgress color="success"  />
      <LinearProgress color="inherit" /></Fragment>}><Lazypage/> </Suspense>}> </Route>
            <Route path='tailwind' element={<TailwindPage/> }> </Route>
            <Route path='mui' element={<MUIpage/> }> </Route>
            
          
          {/* <Route path=' ' element={<Homepage/>}> </Route> */}

        </Route>
      </Routes>

    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

