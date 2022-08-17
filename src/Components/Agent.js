import React from "react";
import '../assets/style.css';

function Agent() {

  return (
    <div className="continer-fluid "style={{position:"relative"}}>
    <div className="row">
        <div className="col-sm-2 sidebar bg-dark text-white mt-2"style={{height:"767px"}}>
            <div className="">
                {/* <img src="user.webp"style="width:50px;height:30px;radius:50%;margin-top:10px;margin-left:10px"/> */}
            </div>
           <div >
            
            <nav>
                <ul>
                    <li className="nav-item">
                        <a className="nav-link">Asad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Hamza</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Reem</a>

                    </li>
                    
                </ul>
            </nav>
           </div>
        </div>
       <div className="col-sm-10 mr-0 mt-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="text-white navbar-nav  ">
                <li className="nav-item   ml-auto">
                    <a className="nav-link  ">Home</a>
                </li>
                <li className="nav-item  ml-auto">
                    <a className="nav-link  ">Contact</a>
                </li>
                <li className="nav-item  ml-auto">
                    <a className="nav-link  ">Services</a>
                </li>
                <li className="nav-item  ml-auto">
                    <a className="nav-link  ">Products</a>
                </li>
            </ul>
        </nav>
        <div className="row content">
            <div className="col-sm-4 mt-3 ml-4" >
                <div className="card"style={{height: "200px"}} >
                    <h1 className="text-center">I'm first card</h1>
                </div>
            </div>
            <div className="col-sm-4 mt-3" >
                <div className="card"style={{height: "200px"}} >
                    <h1 className="text-center">I'm 2nd card</h1>
                </div>

            </div>
            <div className="col-sm-4 mt-3" >
                <div className="card"style={{height: "200px"}} >
                    <h1 className="text-center">I'm 3rd card</h1>

                </div>

            </div>
        </div>
        <div className="row content">
            <div className="col-sm-6 mt-3" >
                 <div className="card" style={{height:"400px" }}>
                    <h1 className="text-center">I'm 6 columns</h1>


                 </div>
            </div>
            <div className="col-sm-6 mt-3" >
                <div className="card" style={{height:"400px"}}>
                    <h1 className="text-center">I'm also 6 cols</h1>
                </div>
            </div>
        </div>
       </div>

    </div>
    <footer className="bg-dark text-white p-2">
        @copy right Made by Asad saleem
    </footer>
   
  </div>
  )
}
export default Agent;