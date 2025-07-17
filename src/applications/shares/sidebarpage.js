import React from 'react';
import { Link } from 'react-router-dom';
 
function Sidebarpage() {
  return (
    <div className="flex-shrink-0 p-3 bg-white  side">
    <a href="/dashboard" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">

      <span className="fs-5 fw-semibold  text-dark">Collapsible</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
    <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
  Home
</button>
 
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/dashboard" className="link-dark rounded">home</Link></li>
            <li><Link to="landing" className="link-dark rounded">dashboard</Link></li>
            <li><Link to="employeelist" className="link-dark rounded">products</Link></li>
            <li><Link to="chart" className="link-dark rounded">Graph</Link></li>
          </ul>
        </div>
      </li>
       </ul>   
       </div>  
  );
}

export default Sidebarpage;
