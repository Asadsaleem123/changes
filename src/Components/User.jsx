

import React, { useEffect } from "react";


function User() {
  return(
 <div>
  <div class="row  text-white">
    <div class="col-sm-2 vh-100 bg-light">
    <div class="offcanvas offcanvas-start offcan_width" id="demo">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title">Side Bar</h1>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <li className="nav-item">
      <a className="nav-link">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link">
        About
      </a>
    </li>
 
   
  </div>
</div>

<div class="container-fluid mt-3">

 
  <button class="btn btn-primary mt-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
   opne menu
  </button>
</div>


    </div>
    <div className="col-sm-10 ">
       <div className="row">
        <div className="col-sm-6">
          <h3>Dshboard overview</h3>
        </div>
        <div className="col-sm-6 position-relative">
          <div className="position-absolute bg-info mt-2 mr-0">
          <button className="btn btn-md btn-primary">Ar</button>
          <button className="btn btn-md btn-primary">En</button>

          </div>
          
        </div>
           
       
       </div>
    </div>
  </div>

 </div>


  );

}
export default User;