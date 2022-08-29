import React, { Component, useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Signup from "./Components/signup";
import Login from "./Components/login";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import User from "./Components/User";
import Admin from "./Components/Admin";
import Accountant from "./Components/Accountant";
import Agent from "./Components/Agent";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }
  
  

 

  render() {
   
    return (
      <div className="App">
      {/*
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        */}
        
         { <Header data={this.state.resumeData.main} /> }
       
       <Routes>
        <Route exact path="/contact"element={<Contact data={this.state.resumeData.main}/>}/>
        <Route exact path="/portfolio"element={<Portfolio data={this.state.resumeData.portfolio}/>}/>
        <Route exact path="/resume"element={<Resume data={this.state.resumeData.resume}/>}/>
        <Route exact path="/about"element={<About data={this.state.resumeData.main}/>}/>
        <Route exact path="/agent"element={<Agent/>} />
        <Route exact path="/accountant" element={<Accountant/>}/>
        <Route exact path="/User"element={<User/>}/>
        <Route exact path="/admin"element={<Admin/>}/>
         <Route exact path="/signin"element={<Signup/>}/>
         <Route exact path="/login"element={<Login/>}/>
       </Routes>
       {/* <Footer data={this.state.resumeData.main}/> */}

       
         
      
      
        
        
      </div>
   
        
         
   );
      }
      
  
    
   
  }


export default App;
