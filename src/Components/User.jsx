import React, { useEffect, useState } from "react";
import logo from "../assets/xlogo.jpg";
import i18n from "i18next";
import {useTranslation} from "react-i18next";
import cokie from "js-cookie";


function User() {
  const {t}=useTranslation;
  function language_ar(){
    i18n.changeLanguage("ar")
  }
  function language_en(){
    i18n.changeLanguage("en");
  }
  const languages=[
    {
      name:"English",
      code:"en",
      country_code:"USA"

  },
  {
    name:"Arabic",
    code:"ar",
    country_code:"Ksa",
    dir:"rtl"

  }
]
const current_language_code=cokie.get('i18next')|| "en";
const current_langauge=languages.find(l=>l.code==current_language_code );
useEffect(()=>{
document.body.dir=current_langauge.dir||"ltr";

},[current_langauge])

  
 
  function Button() {
    // useEffect(()=>{
      var check=document.getElementById('sidebar');
      var p=check.classList;
    if(check.classList.contains('open-nav')){
      check.classList.remove('open-nav');
      check.classList.add('close-nav');
    }else if(check.classList.contains('close-nav')){
      check.classList.add("open-nav");
      check.classList.remove('close-nav');
      console.log(p);
    }
     
    
    
  
    
   
    
   
  }
  


  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 topbar p-2 bg-light">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2 col-xxl-2">
              <img src={logo} className="logo" />
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5 col-xxl-5 mt-2"><h3>dashboard overview</h3></div>

            <div className="col-sm-5 col-md-5 col-lg-5 col-xxl-5">
              <div className="btn_lng_spc">
                <button className="lang_btn"onClick={language_ar}>AR</button>
                <button className="lang_btn"onClick={language_en}>EN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className=" col-sm-2  col-md-2 col-lg-2 col-xl-2 col-xxl-2 customRow d-inline justify-content-between flex-wrap flex-column open-nav "
          id="sidebar"
        >
          <ul className="nav flex-column text-white">
            <div className=" active-cont my-container">
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