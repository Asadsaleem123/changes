import React, { useEffect, useState } from "react";
import logo from "../assets/xlogo.jpg";

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
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 topbar p-2 bg-light">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2 col-xxl-2">
              <img src={logo} className="logo" />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5 col-xxl-5 mt-2"><h3> dashboard overview</h3></div>

            <div className="col-sm-5 col-md-5 col-lg-5 col-xxl-5">
              <div className="btn_lng_spc">
                <button className="lang_btn">AR</button>
                <button className="lang_btn">EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className=" col-sm-2  col-md-2 col-lg-2 col-xl-2 col-xxl-2 customRow d-inline justify-content-between flex-wrap flex-column active-nav side-navbar"
          id="sidebar"
        >
          <ul className="nav flex-column text-white">
            <div className=" active-cont my-containe">
              <a className="btn border-0 " id="mbtn" onClick={Button}>
                <i className="bx bx-menu "></i>
              </a>
            </div>

            <li href="#" className="nav-link">
              <span className=" visible side_cont  " id="home ">
                Home
              </span>
              <i className="bx bxs-dashboard   home"></i>
            </li>
            <li href="#" className="nav-link">
              <span className="side_cont">Profile</span>
              <i className="bx bx-user-check   profile"></i>
            </li>
            <li href="#" className="nav-link">
              <span className="side_cont" >Contact</span>
              <i className="bx bx-conversation  contact"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default User;
