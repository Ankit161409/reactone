import React from 'react';
import ReactDOM from 'react-dom/client';
import Xyz ,{Aboutpage1,Aboutpage2} from './Ak';
import './ak.css';          //import style in index js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Bootstrap from './mybootstrap';
import {Hookspage} from './hookspage';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Hookspage/>

   <Xyz></Xyz>
   <Aboutpage2/>
   <Aboutpage1/>
   <Bootstrap/>
   
  </React.StrictMode>
);

 /*
 However, to use it as a JSX element, the first letter must be uppercase.
Why Capital Letter
=>React treats lowercase JSX tags as HTML elements (<div>, <span>, etc.)
=>Uppercase names are interpreted as custom React components.
 <ABC />  react treat as a custom react component .This works because ABC starts with uppercase 
<abc /> // ❌ React treats this as a custom HTML tag, not a component
*/