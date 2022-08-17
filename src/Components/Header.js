import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import {withTranslation} from "react-i18next";
import i18next from "i18next";
import {Link} from "react-router-dom";

import LanguageDetector from  "i18next-browser-languagedetector";


class Header extends Component {
  
   


  render() {
    if (!this.props.data) return null;
    

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const {t}=this.props;
    
    
   
    
    return (
      
      
      <header id="home">
         
        
       
    
        
       
        <ParticlesBg type="circle" bg={true} />
        
        <nav id="nav-wrap">
        <div className=" bg-blue-600 ml-5 mt-10 justify-content space-between w-32 ">
              
              <button className="px-4  py-2 text-red-900" onClick={()=>i18next.changeLanguage('ar')}>Ar</button>
              <button className="px-4 py-2 text-red-900" onClick={()=>i18next.changeLanguage("en")}>En</button>
            
          </div>
          <div className="top-0 right-0 absolute w-15  mt-10 p-2 mr-7 rounded bg-slate-700">
            <Link to="/signin"className="text-blue-900 rounded p-2 font-semibold">Signup</Link>
            
          </div>
          <div className="top-0 right-0 absolute  bg-slate-700 w-15 p-2 mr-40 mt-10  rounded">
          <Link to="/login"className="text-black-900 rounded p-10 font-semibold rounded px-2">Login</Link>

          </div>
          
          
        
          
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          

          <ul id="nav" className="nav">
        
          

            <li className="smoothscroll">
              <a  href="#home">
               {t('home')}
              </a>
            </li>

            <li>
              <Link  to="/about">
               {t('about')}
              </Link>
            </li>

            <li>
              <Link  to="/resume">
             {t('achievement')}
              </Link>
            </li>

            <li>
              <Link  to="/portfolio">
                {t('works')}
              </Link>
            </li>

            <li>
              <Link to="/contact">
                {t('contact')}
              </Link>
            </li>
            
            

          </ul>
          
         
          
        </nav>
        
        
        

        <div className="row banner">

          <div className="banner-text">
          
            <Fade bottom>
            <img id="homelogo" src="images/logo.png" width="65%"  ></img>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{t('description')}.</h3>
            </Fade>
            <hr />
            
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}




export default withTranslation()(Header);
