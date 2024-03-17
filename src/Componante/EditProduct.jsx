
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/editproduct.css"
const EditProduct = () => {
    let[catagory,setCatagory]=useState("")
    let[ResName,setResName]=useState("")
    let[dishName,setDishName]=useState("")
    let[price,setPrice]=useState("")
    let[Quantity,setQuantity]=useState("")
    let[Description,setDescription]=useState("")
    let[Thumbnale,setThumbnale]=useState("")
    let[Rating,setRating]=useState("")
    let param=useParams()
    console.log(param.id);

    useEffect(()=>{
        axios.get(`http://localhost:1000/products/${param.id}`)
    .then((res)=>{
      console.log(res);
      setCatagory(res.data.catagory)
      setResName(res.data.ResName)
      setDishName(res.data.dishName)
      setPrice(res.data.price)
      setQuantity(res.data.Quantity)
      setDescription(res.data.Description)
      setThumbnale(res.data.Thumbnale)
      setRating(res.data.Rating)

    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
    let data={catagory,ResName,dishName,price,Quantity,Description,Thumbnale,Rating}
    let editItem=(e)=>{
      e.preventDefault()
      axios.put(`http://localhost:1000/products/${param.id}`,data)
      .then((res)=>{
        alert("updated successfully")
      })
      .catch((err)=>{
        alert("not updated")
      })
    }
  return (
    <div className="editproduct">
      <form onSubmit={editItem}>
        <label>
          Catagory:
          <select required value={catagory} onChange={(e)=>{setCatagory(e.target.value)}}>
            <option>Starter</option>
            <option>Veg</option>
            <option>Non-Veg</option>
            <option>Sea Food</option>
            <option>Breads</option>
            <option>Chinish</option>
            <option>Baverages</option>
            <option>Desserts</option>
          </select>
        </label>
        <br />
        <label>
            Resturante Name: <input type="text" value={ResName} onChange={(e)=>{setResName(e.target.value)}} placeholder="Enter Resturant name" />
        </label>
        <br />
        <label>
            Dish Name: <input type="text" value={dishName} onChange={(e)=>{setDishName(e.target.value)}} placeholder="Entar the dish name"/>
        </label>
        <br />
        <label>
            Price: <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter the price" />
        </label>
        <br />
        <label>
            Quantity: <input type="number" value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}} />
        </label>
        <br />
        <label >
            Description: <textarea value={Description} onChange={(e)=>{setDescription(e.target.value)}}  cols="30" rows="2" placeholder="Enter the description"></textarea>
        </label>
        <br />
        <label>
            ThumbnaleURL: <input type="text" value={Thumbnale} onChange={(e)=>{setThumbnale(e.target.value)}} placeholder="Entar the thumbnale url" />
        </label>
        <br />
        <label>
            Rating: <input type="number" value={Rating}  onChange={(e)=>{setRating(e.target.value)}}/>
        </label>
        <br />
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
