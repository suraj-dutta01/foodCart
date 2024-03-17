import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/userview.css"
import StarIcon from '@mui/icons-material/Star';

const UserView = () => {
    
    let[data,setData]=useState([]) 
    useEffect(()=>{
        axios.get("http://localhost:1000/products")
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    function addtocurt(pId,catagory,ResName,dishName,price,Quantity,Description,Thumbnale,Rating) {
        let data={pId,catagory,ResName,dishName,price,Quantity,Description,Thumbnale,Rating};
        axios.post(`http://localhost:1000/order`,data)
        .then((res)=>{
            alert("product is added")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return ( 
        <div className="userview">
            {data.map((e)=>{
                return(
                    <div className="product">
                        <img src={e.Thumbnale} alt="" />
                        <div className="restu">
                            <h4>{e.ResName} ||</h4>
                            <b>{e.Rating} <StarIcon/></b>
                        </div>
                        <h5>{e.dishName}</h5>
                        <strike><p>MRP:₹ {e.price}.00</p></strike>
                        <br />
                        <div className="opt">
                        <span>₹{e.price - e.price*20/100}.00</span>
                        <div className="but">
                            <button onClick={()=>{addtocurt(e.id,e.catagory,e.ResName,e.dishName,e.price,e.Quantity,e.Description,e.Thumbnale,e.Rating)}}>Add</button>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default UserView;