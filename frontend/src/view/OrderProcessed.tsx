// src/pages/OrderSuccess.tsx
import React from "react";
import { Link } from "react-router-dom";


const OrderSuccess: React.FC = () => {
  const orderNumber = "472849"; 


  return (
    <div className="min-h-[37rem] sm:min-h-[44rem] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-lg p-10 rounded-md shadow-lg text-center">
        <div className="text-left text-sm text-gray-400 mb-1 tracking-widest">
          ORDER NO.
        </div>
        <div className="text-left text-sm text-gray-800 font-medium mb-6 tracking-wider">
          {orderNumber}
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-10 h-1 bg-blue-500 rounded-full" />
        </div>

        <h1 className="text-3xl font-bold text-gray-700 tracking-widest mb-4">THANKS FOR ORDERING</h1>

        <p className="text-gray-400 tracking-wide text-sm mb-8">
          YOUR ORDER IS <br /> BEING PROCESSED
        </p>
        <Link to="/main/products">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm tracking-wider hover:bg-blue-600 transition"
          >
          KEEP SHOPPING
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
