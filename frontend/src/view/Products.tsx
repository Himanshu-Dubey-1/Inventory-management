import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../models/IProduct';
import axios from 'axios';
import { toast } from 'react-toastify';


const Products = () => {


  const [products, setProducts] = useState([] as IProduct[])

  const getAllProducts = async () => {
    try {
      const product = await axios.get("http://localhost:5000/items", {withCredentials: true} )
      if(!product){
        setProducts([] as IProduct[])
        toast.error("Error Occured while fetching users")
      }
      else{setProducts(product.data)}
    } catch (error) {
      console.log(error)
      toast.error("Error Occured while fetching Products")
    }
  }

  // get APi for products at /items
  useEffect(()=>{
    getAllProducts()
  },[])


  return (
    <div><ProductCard products={products}/></div>
  )
}

export default Products