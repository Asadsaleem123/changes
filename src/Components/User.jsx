import React, { useEffect, useState } from "react";

function User() {
  // var menu_btn = document.getElementById("#menu-btn");
  var sidebar = document.getElementById("sidebar");
  var container = document.querySelector(".my-container");
  function Button() {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
  }

  //   var home=document.getElementById('home');

  //       if(document.getElementById('mbtn').clicked==true){
  //         home.classList.add("invisible");
  //         home.classList.remove('visible');
  //       }
  //       else {
  //         home.classList.add("visible");
  //         home.classList.remove('invisible');
  //       }

  return (
    <>
      <div className="row">
      
           
          
        <div
          className=" col-sm-2  d-inline justify-content-between flex-wrap flex-column active-nav side-navbar"
          id="sidebar"
        >
                
           
       

               

          <ul className="nav flex-column text-white w-100">
            <a href="#" className="nav-link h3 text-white my-2">
              Home
              <br />
            </a>
       
            <li href="#" className="nav-link">
              <span className="mx-3 visible fs-2 " id="home ">
               Home 
              </span>
              <i className="bx bxs-dashboard mx-2 fs-2 home"></i>
            </li>
            <li href="#" className="nav-link">
              <span className="mx-3 fs-2">
                Profile 
              </span>
              <i className="bx bx-user-check mx-2 fs-2 profile"></i>
            </li>
            <li href="#" className="nav-link">
              <span className="mx-3 fs-2">
                Contact 
              </span>
              <i className="bx bx-conversation fs-2  contact"></i>
            </li>
          </ul>
        </div>
        <div className="col-sm-1 active-cont my-container"id="sidebar">
        <a className="btn border-0 " id="mbtn" onClick={Button}>
              <i className="bx bx-menu"></i>
            </a>
        </div>
       
         
        <div className="col-sm-9 p-2 bg-danger">
         
          <div className="row">
            <div className="col-sm-6">
                <h3 className="text-center mt-2">Dshboard overview</h3>
            </div>
            <div className="col-sm-6">
                <div className="mr-0 text-end">
                <button className="btn btn-md btn-info">
                    Ar
                </button>
                <button className="btn btn-md btn-info">EN</button>

                </div>
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
