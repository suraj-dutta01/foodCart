import { useState } from "react";
import "../Style/userSignup.css"
import { Link } from "react-router-dom";
import axios from "axios";
const UserSignup = () => {
    let[name,setName]=useState("");
    let[email,setEmail]=useState("")
    let[phone,setPhone]=useState("")
    let[gender,setGender]=useState("")
    let[pass,setPass]=useState("")
    let users={name,email,phone,gender,pass}
    let addUser=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:1000/user",users)
        .then((res)=>{
            alert("registration successfull")
        })
        .catch((err)=>{
            alert("registration failed")
        })
    }
    return ( 
        <div className="usersignup">
            <div className="box4">
            <Link to="/user"><button id="btn7">login</button></Link>
            <Link to="/usersignup"><button id="btn8">Signup</button></Link>
            </div>
           <form onSubmit={addUser}>
            <label>
                name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the name" />
            </label>
            <br />
            <label>
                email: <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter the email" />
            </label>
            <br />
            <label>
                phone : <input type="tel" pattern="[0-9]{10}" value={phone} onChange={(e)=>{setPhone(e.target.phone)}} placeholder="enter the phone" />
            </label>
            <br />
            <label>
                gender:
                <input type="radio" name="gender" value="male" onChange={(e)=>{setGender(e.target.value)}}/> male
                <input type="radio" name="gender" value="female" onChange={(e)=>{setGender(e.target.value)}} /> female
                <input type="radio" name="gender" value="other" onChange={(e)=>{setGender(e.target.value)}} /> other
            </label>
            <br />
            <label>
                password: <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter the password" />
            </label>
            <br />
            <button>Register</button>
            <br />
            <p>Are you new in this page? <Link to="/user">Login</Link></p>

           </form>
        </div>
     );
}
 
export default UserSignup;