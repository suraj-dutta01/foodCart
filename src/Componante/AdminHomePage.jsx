import { Route, Routes } from "react-router-dom";
import AdminNavbur from "./AdminNavbar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditProduct from "./EditProduct";

const AdminHomePage = () => {
    return ( 
        <div className="">
            <AdminNavbur/>
         <Routes>
            <Route path="/adminview" element={<AdminView/>}/>
            <Route path="/adminproduct" element={<AdminAddProduct/>}/>
            <Route path="/editproduct/:id" element={<EditProduct/>}/>
         </Routes>
        </div>
     );
}
 
export default AdminHomePage;