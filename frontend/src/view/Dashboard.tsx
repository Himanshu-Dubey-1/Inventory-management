import { useContext, useEffect } from "react";
import { IProduct } from "../models/IProduct";
import { inventoryContext } from "../context/inventoryProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { IUser } from "../models/IUser";


const Dashboard = () => {
  const allctx = useContext(inventoryContext)

  const getAllProducts = async () => {
    try {
      const product = await axios.get("http://localhost:5000/items", {withCredentials: true} )
      if(!product){
        allctx.setProducts([] as IProduct[])
        toast.error("Error Occured while fetching users")
      }
      else{allctx.setProducts(product.data)}
    } catch (error) {
      console.log(error)
      toast.error("Error Occured while fetching Products")
    }
  }


  const getallusers = async () => {
    try {
      const user = await axios.get("http://localhost:5000/users", {withCredentials: true})
      if(!user){
        allctx.setUsers([] as IUser[])
        toast.error("Error Occured while fetching users")
      }
      else{allctx.setUsers(user.data)}
    } catch (error) {
      console.log(error)
      toast.error("Error Occured while fetching users")
    }
  }


  useEffect(()=>{
      getAllProducts()
      getallusers()
    },[])


  return (
    <div className="flex gap-x-5">
      <div>
        {/* product page */}
        <div className="bg-gray-100 mt-8 rounded-xl shadow-lg">
          <div className="mx-auto px-4 sm:py-2 lg:max-w-7xl ">
          <div className="items-center mb-4">
              <div className="text-center items-center justify-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Products</h2>
              </div>
              <hr className="mx-20"/>
            </div>
            

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 overflow-y-auto max-h-200 pr-5">
              {allctx.products.map((product) => (
                <div key={product._id} className="group relative border border-gray-200 p-2 rounded-md shadow-md">
                  <img
                    alt={"NO Image Found"}
                    src={product.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-70"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          {/* user page */}
          <div className="p-6 bg-white shadow-md rounded-lg mr-12 mt-8 ">
            <div className="items-center mb-4">
              <div className="text-center items-center justify-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Users</h2>
              </div>
              <hr className="mx-14"/>
            </div>

            <div className="overflow-y-scroll max-h-85 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Name
                    </th>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Title
                    </th>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {allctx.users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-900">{user.username}</td>
                      <td className="px-4 py-3 text-gray-500">{user.email}</td>
                      <td className="px-4 py-3 text-gray-500">{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          {/* inventory page */}
          <div className="p-6 bg-white shadow-md rounded-lg mt-6 mr-12">
          <div className="items-center mb-4">
              <div className="text-center items-center justify-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Product Inventory</h2>
              </div>
              <hr className="mx-14"/>
            </div>
            <div className="overflow-y-auto max-h-80">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Name
                    </th>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Price
                    </th>
                    <th className="text-left px-4 py-3 text-gray-700 font-medium">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {allctx.products.map((inventory) => (
                    <tr key={inventory._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-500">
                        {inventory.name}
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        ${inventory.price}
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {inventory.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
