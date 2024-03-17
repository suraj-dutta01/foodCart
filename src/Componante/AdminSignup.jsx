import { useState } from "react";
import "../Style/adminsignup.css"
import { Link } from "react-router-dom";
import axios from 'axios'
const AdminSignup = () => {
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let [pass,setPass]=useState("")
    let [gender,setGender]=useState("")
    let admins={name,email,phone,gender,pass}
    let addAdmin=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:1000/manager",admins)
        // fetch("http://localhost:1000/manager",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(admins)
        // })
        
        .then((res)=>{
            alert("admin added successfully")
        })
        .catch((err)=>{
            alert("Invalid data")
        })
    }
    return ( 
        <div className="adminSignup">
            <div className="box2">
            <Link to="/admin"><button id="btn3">login</button></Link>
            <Link to="/adminsignup"><button id="btn4">Signup</button></Link>
            </div>
            <form onSubmit={addAdmin}>
                <label>
                    Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the name" />
                </label>
                <br />
                <label>
                    Email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter the Email" />
                </label>
                <br />
                <label>
                    Phone : <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Entar the phone" />
                </label>
                <br />
                <label id="gen">Gender : 
                <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}} /> Male
                <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}}/> Female
                <input type="radio" name="gender" value="other" onChange={(e)=>{setGender(e.target.value)}}/> other
                </label>
                <br />
                <label>
                    Password : <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="enter the password"/>
                </label>
                <br />
                <button>Register</button>
                <br />
                <p>Are you new to the page? <Link to="/admin">Login</Link> </p>

            </form>
        </div>
     );
}
 
export default AdminSignup;