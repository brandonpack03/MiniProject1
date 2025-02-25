
import './App.css';
import {useState, createContext} from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from './Components/NavBar';
import Register from './Components/Register';
export const DataContext=createContext("");
export default function App() {


  const[user,setUser]=useState("");
  function userName(userName){
    setUser(userName);
  }

  var login = 0;
  if(sessionStorage.getItem("logged" != null)){
    login=sessionStorage.getItem("logged");
  }
  const [logStatus, setLogStatus]=useState(login);
  return (
    <div>
    <DataContext.Provider value={{logStatus:logStatus, setLogStatus:setLogStatus}}>
    <div className='w-[100vw] h-[100vh] bg-gray-500'>
         <div className=''> 
          <NavBar userName={userName}/>  
            </div>
       <div className="text-center">
         <BrowserRouter>
           <Routes>

           <Route path="/*" element={<Home user={user}/>}/>

             <Route path="/Home" element={<Home/>}/>
             <Route path="/login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
           </Routes>

          </BrowserRouter>
          </div>
       </div>
    
    </DataContext.Provider>
    
    </div>


   );
}

