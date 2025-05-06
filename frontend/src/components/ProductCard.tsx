import { Link } from 'react-router-dom';
import {IProduct} from '../models/IProduct'
import React from 'react';

interface IProps {
    products: IProduct[];
  }

const ProductCard: React.FC<IProps> = ({ products }) => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    {products.map((product) =>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative bg-gradient-to-br from-white to-purple-200 p-6">
        <img src={product.picture} alt={product.name} className="w-full h-48 object-contain" />
        
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description.slice(0,120)} . . .</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm">
            <span className="text-gray-500 font-medium ">PRICE</span>
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          </div>
          <Link to={`/main/${product._id}`}  key={product._id}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md">
            Details
          </button>
          </Link>
        </div>
      </div>
    </div>
     )}
    </div>
    </>
  );
};

export default ProductCard;
