import React, { useEffect, useState } from "react";
import loginImg from "../assets/login.jpg";
import Signup from "./signup";
import { Link,useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import Admin from "./Admin";

function Login() {
    const [Error,seterror]=useState("");
    const [user_roles,setrole]=useState("");
    const navigate=useNavigate();
    const [axioss,set_axios_data]=useState([]);
    const url = "https://api.xtecknow.com/api/login";
    const [dataa, setdata] = useState({
        email: "",
        password: ""
    });
    
   
    
        // axios.post(url,{
        //     email:"newUser@gmail.com",
        //     password:"1123"
        // }).then((response)=>{
        //     set_axios_data(response.data.user)

        //     console.log(axioss.data.original.user.role);
        // })

   
    function Submit(e) {
       

       
        e.preventDefault()
      
            axios.post(url, {
                email: dataa.email,
                password: dataa.password
    
    
            }).then(response => {

               let role = response.data.data.original.user.role;
              //  set_axios_data(response.data);
               // console.log(axioss.data.original.user.role);
            // //   
               if(role==1){
                 navigate('/admin')
               }else if(role==2){
                navigate("/User")
               }
             
              
            }).catch((error)=>{
                if(error.response){
                    seterror(error.response.data);
                    seterror(error.response.status);
                    seterror(error.response.headers);
                    console.log(Error);
    
                }
                
               
            })

        
        
    }
    function handle(e) {
        const newdata = { ...dataa }
        newdata[e.target.id] = e.target.value
        setdata(newdata)
        console.log(newdata)
    }
    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={loginImg} alt="no iimage" />
            </div>
           
           
            <div className="bg-gray-100 flex flex-col justify-center">
                <form onSubmit={(e) => Submit(e)} className="max-w-[400px] w-full mx-auto bg-white p-4 ">
                    <h2 className="text-4xl font-bold text-center py-6">XTEC</h2>
                    <div className="flex flex-col py-2" >
                        <label >Email</label>
                        {/* {axioss.map((value)=>{
                            return (
                                <h1>{value.role}</h1>
                            )

                        })
                        } */}
                        <h1>HELLO</h1>
                        <input className="border p-2" type="email" name="email" id="email"onChange={(e)=>handle(e)} />
                    </div>
                    <div className="flex flex-col py-2">
                        <label >Password</label>
                        <input onChange={(e)=>handle(e)}id="password" className="border p-2" type="password" name="password"
                        />
                    </div>
                    <button id="btn" className="border w-full my-5 py-2 bg-indigo-600" type="submit">Sign In</button>
                    <div className="flex justify-between">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>
                        <Link className="text-blue-600" to="/signup">Create An Account</Link>
                    </div>
                </form>
            </div>

        </div>

    );
}
export default Login;