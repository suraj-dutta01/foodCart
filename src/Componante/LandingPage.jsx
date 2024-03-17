import {Link} from "react-router-dom";
import "../Style/landingPage.css"
const LandingPage = () => {
    return ( 
        <div className="lpage">
            <div className="subLp">
            <Link to="/admin">
               <img id="i1" src="https://media.istockphoto.com/id/954805524/vector/gear-icon-vector-male-user-person-profile-avatar-symbol-on-cog-wheel-for-settings-and.jpg?s=612x612&w=is&k=20&c=bIiCNyBTUy2csDiRpDCEITI6oyR7ThpBtMNv5w0DdU0=" alt="" />
               <h3>Admin</h3>
            </Link>
            <Link to="/user">
                <img src="https://cdn.icon-icons.com/icons2/933/PNG/96/round-account-button-with-user-inside_icon-icons.com_72596.png" alt="" />
                <h3>User</h3>
            </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;