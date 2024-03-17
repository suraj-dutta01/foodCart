import { useEffect, useState } from "react";
import "../Style/adminlogin.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
const AdminLogin = () => {
    let [uname,setUname]=useState("");
    let[password,setPassword]=useState("");
    let [admin,setAdmin]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
          axios.get("http://localhost:1000/manager")
          .then((res)=>{
              setAdmin(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
    },[])
    function login(e){
        e.preventDefault();
        let log=false;
        admin.map((e)=>{
            if(e.email==uname && e.pass==password){
                log=true;
            }
        })
        if(log){
            alert("login successfull")
            navigate('/adminhomepage')
        }else{
            alert("login failed")
        }
    }   
//   async function login(x) {
//         x.preventDefault();
//         let rawData=await fetch("http://localhost:1000/manager")
//         let data=await rawData.json()
//         let log=false;
//         data.map((e)=>{
//             if(e.name==uname && e.pass ==password){
//                 log=true;
//             }
//         })
//         if(log){
//             alert("login successfull")
//         }else{
//             alert("Login failed")
//         }
//     }
    return ( 
        <div className="adminLogin">
            <div className="box">
            <Link to="/admin"><button id="btn1" >login</button></Link>
            <Link to="/adminsignup"><button id="btn2">Signup</button></Link>
            </div>
            <form onSubmit={login}>
                <label>
                    username : <input type="text" value={uname}  onChange={(e)=>{setUname(e.target.value)}} placeholder="enter user name" />
                </label>
                <br />
                <label>
                    password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter password" />
                </label>
                <br />
                <button>Login</button>
                <p>Are you new to the page? <Link to="/adminsignup">Sign up</Link> </p>
            </form>
        </div>
     );
}
 
export default AdminLogin;