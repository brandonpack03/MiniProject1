import {useState, useContext} from "react";

export default function Register(){
    const [fname,setFname]=useState("");
    const [lname, setLname]=useState("");
    const [id, setId]=useState("");
    const [email, setEmail]=useState("");
    const [city,setCity]=useState("");
    const [zipcode, setZipcode]=useState("");
    const [uname, setUname]=useState("");
    const [pwd, setPwd]=useState("");

function check(){
    if(/\d/.test(fname)){
        alert("First Name Cannot Contain Numbers");
        return;
    }
    if(/\d/.test(lname)){
        alert("Last Name Cannot Contain Numbers");
        return;
    }
    if(/[a-zA-Z]/.test(id)){
        alert("ID Cannot Contain Letters");
        return;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Invalid Email");
        return;
    }
    if(/[a-zA-Z]/.test(zipcode)){
        alert("Zipcode Cannot Contain Letters");
        return;
    }
    if(city.includes("Select City")){
        alert("Choose a City.")
        return;
    }
    if (!/^[A-Za-z][A-Za-z0-9]*$/.test(uname)) {
        alert("Username must start with a letter and contain no spaces.");
        return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}/.test(pwd)) {
        alert("Password must be at least 10 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.");
        return;
    } 
    alert(
        "Valid Criteria:\n" +
        "First Name: " + fname + 
        "\nLast Name: " + lname +
        "\nID: " + id + 
        "\nEmail: " + email +
        "\nCity: " + city +
        "\nZipcode: " + zipcode +
        "\nUsername: " + uname +
        "\nPassword: " + pwd
    );

  }

  return (
    <div className="items-center min-h-screen">
      <div className="">
        <h2 className="text-2xl text-center">Register</h2>
        <div className=" items-center grid grid-cols-2 gap-4 w-full ">
          <div>
            <label className="font-medium">First Name</label>
            <input className="border-2 w-full items-center" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Last Name</label>
            <input className="border-2 w-full" type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">ID</label>
            <input className="border-2 w-full" type="text" value={id} onChange={(e) => setId(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Email</label>
            <input className="border-2 w-full" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">City</label>
            <select className="border-2 w-full" value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              <option value="Charlotte">Charlotte</option>
              <option value="Nashville">Nashville</option>
              <option value="Atlanta">Atlanta</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Zipcode</label>
            <input className="border-2 w-full" type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Username</label>
            <input className="border-2 w-full" type="text" value={uname} onChange={(e) => setUname(e.target.value)} />
          </div>

          <div>
            <label className="font-medium">Password</label>
            <input className="border-2 w-full" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
          </div>

</div>
          <button className="border-2  items-center" onClick={check}>
            Submit
          </button>
        </div>
      </div>
  );
}








