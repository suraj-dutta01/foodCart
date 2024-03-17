import { Link } from "react-router-dom";
import "../Style/userNavbar.css"
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
           <div className="logo">
                <h1>Food<span>Cart</span></h1>
            </div>
            <div className="Uoption">
                <Link to="/userhomepage/userview">view</Link>
                <Link to="/userhomepage/usercart">Cart</Link>
            </div>
        </div>
     );
}
 
export default UserNavbar;