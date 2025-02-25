import {useState, useContext} from "react";
//import { DataContext } from "../App";

export default function NavBar({userName}){
//const {logStatus, setLogStatus}=useContext(DataContext);

var logoutUser=<div>
  
<input type="button" value="Logout"/>

</div>
  return(

    <div className="grid grid-cols-6 bg-neutral-800 text-2xl px-10 py-20">
      <div> </div>
      <div><a href="/Home">Home</a></div>
       <div> </div>
       <div></div>
       <div><a href="/login">Login</a></div>
       
       <div><a href="/register">Register</a></div>
       

    </div>
  );


}