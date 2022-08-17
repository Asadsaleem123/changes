import React from "react";
import { Link } from "react-router-dom";
function Accountant(){
return (
    <div className="container mx-auto bg-slate-200 h-full">
    
   
    <table className="flex items-center   ">
        <thead className="">
            <th className="border border-solid border-indigo-400 px-8 mx-5">Name</th>
            <th className="border border-solid border-indigo-400 px-8 mx-5">Email</th>
            <th className="border border-solid border-indigo-400 px-8 mx-5">Contact</th>
            <th className="border border-solid border-indigo-400 px-8 mx-5">Address</th>
            <th className="border border-solid border-indigo-400 px-8 mx-5">Action</th>
        </thead>
        <tbody>
            <tr className="" >
                <td className="border border-solid border-black">Asad</td>
                <td className="border border-solid border-black-700 justify-content justify-center " >asad.saleem683@gmail.com</td>
                <td className="border border-black-700 border-solid ">0569236891</td>
                <td className="border border-black-700 border-solid">Jeddah</td>
                <td className="border border-black-700 border-solid"><Link to="">Edit ||</Link> <Link to="">Create ||</Link> <Link to="">View</Link></td>
            </tr>
            <tr>
                <td className="border border-solid border-black">Reem</td>
                <td className="border border-solid border-black">Reem@gmail.com</td>
                <td className="border border-solid border-black">0550532030</td>
                <td className="border border-solid border-black">Jeddah</td>
                <td className="border border-black-700 border-solid"><Link to="">Edit ||</Link> <Link to="">Create ||</Link> <Link to="">View</Link></td>
            </tr>
        </tbody>
    </table>

    </div>
    
    
)
}
export default Accountant;