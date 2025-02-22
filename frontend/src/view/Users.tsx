import React, { useContext, useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios';
import {toast} from 'react-toastify' 
import { IUser } from '../models/IUser';
import { inventoryContext } from '../context/inventoryProvider';

const Users = () => {
  // const [users, setUsers] = useState([] as IUser[])

  // const getallusers = async () => {
  //   try {
  //     const user = await axios.get("http://localhost:5000/users", {withCredentials: true})

  //     if(!user){
  //       setUsers([] as IUser[])
  //       toast.error("Error Occured while fetching users")
  //     }
  //     else{setUsers(user.data)}
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("Error Occured while fetching users")
  //   }
  // }

  // // get API for users at /users  
  // useEffect(()=>{
  //   getallusers()
  // },[])

  const Userctx = useContext(inventoryContext)

  return (
    <div><UserCard users={Userctx.users}/></div>
  )
}

export default Users