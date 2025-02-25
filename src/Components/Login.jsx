import {useState, useContext} from "react";
//import { DataContext } from "../App";

export default function Login({}){
//const {logStatus, setLogStatus}=useContext(DataContext);

var logSt=0;
if(sessionStorage.getItem("logged" != null)){
  login=sessionStorage.getItem("logged");
}
const [uname,setUname]=useState("");
const [pwd, setPwd]=useState("");
const [loginSt,setLogStatus]=useState((sessionStorage.getItem("logged")!=null?sessionStorage.getItem("logged"):0));

function check(){
  if(uname.trim()==="user1"  && pwd.trim() === "test"){
    sessionStorage.setItem("logged",1); 
    setLogStatus(1);
  } else if(uname.trim()==="" || pwd.trim() ===""){
    alert("Please fill out both fields");
  } else {
    alert("Login Failed");
  }
    //setLogStatus(1)
  //alert(sessionStorage.getItem("logged"));
  }

function logout(){
sessionStorage.setItem("logged",0);
setLogStatus(0);
//alert(sessionStorage.getItem("logged"));

}

var login=
    <div className="items-center">
      <div className="">
        <h2 className="text-2xl text-center">Login</h2>
        <div className=" items-center">
  Username
   <input className="border-2" type="text" id="uname" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
   <br></br>Password
   <input className="border-2" type="password" id="pwd" value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
  <br></br>
  <input className="border-2" type="button" value="Login" onClick={check}/>
  </div>
  </div>
</div>


var logoutUser=<div>
<input type="button" value="Logout" onClick={logout}/>
</div>
  return(

    <div className="">
      <div></div>
       <div></div>
       <div></div>
       <div> </div>
       <div> </div>
       <div>{loginSt == 0?login:logoutUser}</div>

    </div>
  );


}