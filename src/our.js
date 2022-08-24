import React from "react";
import Admin from "../src/Components/Admin";
import User from "../src/Components/User";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Our() {
 
  return (
    
    
    
     
 
      <Routes>
       <Route exact path="/admin"element={<Admin/>}/>
       <Route exact path="/User"element={<User/>}/>
      </Routes>
  
  
  );
}
export default Our;