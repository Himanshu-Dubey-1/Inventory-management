import React, { useContext, useEffect, useState } from 'react'
import InventoryCard from '../components/inventoryCard'
import { IProduct } from '../models/IProduct'
import axios from 'axios'
import { toast } from 'react-toastify'
import { inventoryContext } from '../context/inventoryProvider'


const Inventory = () => {

 
  // const getAllProducts = async () => {
  //   try {
  //     const product = await axios.get("http://localhost:5000/items", {withCredentials: true} )
  //     if(!product){
  //       productctx.setProducts([] as IProduct[])
  //       toast.error("Error Occured while fetching users")
  //     }
  //     else{productctx.setProducts(product.data)}
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Error Occured while fetching Products")
  //   }
  // }

  // // get APi for products at /items
  // useEffect(()=>{
  //   getAllProducts()
  // },[])

  const productctx = useContext(inventoryContext)


  return (
    <div><InventoryCard products={productctx.products}/></div>
  )
}

export default Inventory