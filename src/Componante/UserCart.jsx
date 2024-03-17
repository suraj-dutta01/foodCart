import axios from "axios";
import { useEffect, useState } from "react";
import "../Style/usercart.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const UserCart = () => {
    let[force,setForce]=useState(false)
    let[force2,setForce2]=useState(false)
    let [data,setData]=useState([]);
    let total=0;
    
    useEffect(()=>{
       axios.get(`http://localhost:1000/order`)
       .then((res)=>{
        setData(res.data)
       })
       .catch((err)=>{
        console.log(err);
       })
    },[force,force2])
    function deleteDish(id,price) {
        axios.delete(`http://localhost:1000/order/${id}`)
        .then((res)=>{
            total=total-Number(price)
            alert("removed")
            setForce2(!force2)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
     function addDish(id,price) {
        let quantity=document.getElementById(`${id}`)
        quantity.innerHTML=Number(`${quantity.innerText}`)+1
        total=(Number(price)+Number(total))   
     } 
     function removeDish(id,price) {
        let quantity=document.getElementById(`${id}`)
        if(Number(`${quantity.innerText}`)>1){
            quantity.innerHTML=Number(`${quantity.innerText}`)-1
            total=total-Number(price)
        }else{
            alert("dish removed")
            axios.delete(`http://localhost:1000/order/${id}`)
            setForce(!force)
            total=total-Number(price)
        }
     }
    if(data.length==0){
        return(
            <div className="">
                <h1 id="mark">cart is empty</h1>
            </div>
        )
    }else{
        return ( <div className="maincart">
        {
        data.map((e)=>{
           return(
            <div className="cart">
                <div className="food">
                <img style={{height:"100px", width:"100px"} } src={e.Thumbnale} alt="" />
                <p>{e.dishName}</p>
                <h2>₹ {e.price}</h2>
                {total=total+Number(e.price)}
                </div>
                <div className="butns">
                    <RemoveCircleOutlineIcon onClick={()=>{removeDish(e.id,e.price)}}/>
                    <div className="box">
                        <p id={e.id}>1</p>
                    </div>
                    <AddCircleOutlineIcon onClick={()=>{addDish(e.id,e.price)}}/>
                   <DeleteForeverIcon onClick={()=>{deleteDish(e.id,e.price)}}/>
                </div>
            </div>
           )
        })
        }
        <div className="place">
                    <h2>Total : ₹ {total}</h2>
                    <button>Place Order</button>
                </div>
    </div> );
    }
}
 
export default UserCart;