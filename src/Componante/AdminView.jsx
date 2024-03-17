import "../Style/adminView.css"
import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
const AdminView = () => {
  let [datax,setData]=useState([])
  let[force,setFource]=useState(true)
  useEffect(()=>{
    axios.get('http://localhost:1000/products')
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{
      console.log(err)
  })
  },[force])
  let removeDish=(id,name)=>{
    axios.delete(`http://localhost:1000/products/${id}`)
    .then((res)=>{
      alert(name+" Is Deleted Successfully")
      setFource(!force)
    })
    .catch((err)=>{
      alert("Data not found")
    })
  }
  let navigate=useNavigate()
  function editproduct(id) {
    navigate(`/adminhomepage/editproduct/${id}`)
  }
  return (
    <div className="adminview">
      {datax.map((e)=>{
        return(
          <div className="products">
            <img src={e.Thumbnale} alt="" />
            <div className="resturent">
            <h4>{e.ResName} ||</h4>
            <b>{e.Rating} <StarIcon/></b>
            </div>
            <h5>{e.dishName}</h5>
            <strike><p>MRP:₹ {e.price}.00</p></strike>
            <br />
            <div className="opt">
              <span>₹{e.price - e.price*20/100}.00</span>
              <div className="but">
              <EditIcon onClick={()=>{editproduct(e.id)}}/>
              <DeleteForeverIcon onClick={()=>{removeDish(e.id,e.dishName)}}/>
              </div>
            </div>
            
          </div>
        )
      })}
      
    </div>
  );
};

export default AdminView;
