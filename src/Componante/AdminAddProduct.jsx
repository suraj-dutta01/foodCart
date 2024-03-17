import { useState } from "react";
import "../Style/adminAddProduct.css"
import axios from "axios";
const AdminAddProduct = () => {
      let[catagory,setCatagory]=useState("");
      let[ResName,setResname]=useState("");
      let[dishName,setDishName]=useState("");
      let[price,setPrice]=useState("");
      let[Quantity,setQuantity]=useState("");
      let[Description,setDescription]=useState("");
      let[Thumbnale,setThumbnale]=useState("");
      let[Rating,setRating]=useState("");
      let Dishess={catagory,ResName,dishName,price,Quantity,Description,Thumbnale,Rating}
      console.log(ResName);
      console.log(dishName);
      console.log(price);
      console.log(catagory);
      function addDish(e) {
        e.preventDefault();
       axios.post("http://localhost:1000/products",Dishess)
       .then((res)=>{
        alert("dish Added")
       })
       .catch((rej)=>{
        alert("dish not added")
       })
        
      }
    return ( 
        <div className="addproduct">
            <form onSubmit={addDish}>
               <label>
                Caregory: <select value={catagory} onChange={(e)=>{setCatagory(e.target.value)}}>
                    <option>Starters</option>
                    <option>Veg</option>
                    <option>Non-Veg</option>
                    <option>Sea Food</option>
                    <option>Breads</option>
                    <option>Chinish</option>
                    <option>Beverages</option>
                    <option>Desserts</option>
                </select>
               </label>
               <br />
               <label>
               Restaurant Name: <input type="text" value={ResName} onChange={(e)=>{setResname(e.target.value)}} placeholder="Enter the Restaurant name" />
               </label>
               <br />
               <label>
                Dish Name : <input type="text" value={dishName} onChange={(e)=>{setDishName(e.target.value)}} placeholder="Enter the Dish Name" />
               </label>
               <br />
               <label>
                Price : <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Entar the Price" />
               </label>
               <br />
               <label>
                Quantity : <input type="number" value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
               </label>
               <br />
               <label>
                Description : <textarea cols="30" rows="2" value={Description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter the description"></textarea>
               </label>
               <br />
               <label>
                ThubnelURL: <input type="text" value={Thumbnale} onChange={(e)=>{setThumbnale(e.target.value)}} placeholder="Entar the image url" />
               </label>
               <br />
               <label>
                Rating : <input type="number" value={Rating} onChange={(e)=>{setRating(e.target.value)}} />
               </label>
               <br />
               <button>Add Dish</button>
            </form>
        </div>
     );
}
 
export default AdminAddProduct;