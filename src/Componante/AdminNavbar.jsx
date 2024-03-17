import { Link } from "react-router-dom";
import "../Style/adminnavbar.css"
const AdminNavbur = () => {
    return ( 
        <div className="AdminNavbar">
            <div className="logo">
                <h1>Food<span>Cart</span></h1>
            </div>
            <div className="option">
                <Link to="/adminhomepage/adminview">view</Link>
                <Link to="/adminhomepage/adminproduct">Add product</Link>
            </div>
        </div>
     );
}
 
export default AdminNavbur;