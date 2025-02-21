import React, { useState } from "react";
import { IProduct } from "../models/IProduct";

interface IProps {
  products: IProduct[]
}


const UserTable: React.FC<IProps> = ({products}) => {

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">ProductID</th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Name</th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Price</th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Quantity</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((products) => (
              <tr key={products._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{products._id}</td>
                <td className="px-4 py-3 text-gray-500">{products.name}</td>
                <td className="px-4 py-3 text-gray-500">${products.price}</td>
                <td className="px-4 py-3 text-gray-500">{products.quantity}</td>
                <td className="px-4 py-3 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 transition">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
