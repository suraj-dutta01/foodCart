import { Route, Routes } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserView from "./UserView";
import UserCart from "./UserCart";

const UserHomePage = () => {
    return (  
        <div className="">
            <UserNavbar/>
            <Routes>
                <Route path="/userview" element={<UserView/>}/>
                <Route path="/usercart" element={<UserCart/>}/>
            </Routes>
        </div>
    );
}
 
export default UserHomePage;