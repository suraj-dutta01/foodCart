import { useEffect, useState } from "react";
import "../Style/userlogin.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
    let [uname,setUname]=useState("");
    let[password,setPassword]=useState("");
    let[users,setUsers]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:1000/user")
        .then((res)=>{
            setUsers(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
let log=false;
let i;
    function login() {
        users.map((e)=>{
            if(e.email==uname && e.pass==password){
             log=true;
             i=e.id;
            }
        })
        if(log){
            alert("user login successfull")
            navigate(`/userhomepage/${i}`)
        }else{
            alert("user login failed")
        }
    }
    return ( 
        <div className="userLogin">
            <div className="box3">
            <Link to="/user"><button id="btn5">login</button></Link>
            <Link to="/usersignup"><button id="btn6">Signup</button></Link>
            </div>
            <form onSubmit={login} >
                <label>
                    username : <input type="text" value={uname} onChange={(e)=>{setUname(e.target.value)}} placeholder="enter the username" />
                </label>
                <br />
                <label>
                    password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter the password" />
                </label>
                <br />
                <button>login</button>
                <p>Are you new in this page? <Link to="/usersignup">Sign Up</Link></p>

            </form>
        </div>
     );
}
 
export default UserLogin;



