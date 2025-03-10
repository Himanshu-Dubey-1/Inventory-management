import { Link } from 'react-router-dom';
import {IProduct} from '../models/IProduct'
import React from 'react'

interface IProps {
  products: IProduct[];
}

const ProductCard: React.FC<IProps> = ({products}) => {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
      

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/${product._id}`}  key={product._id}>
            <div className="group relative border border-gray-200 p-2 rounded-md shadow-md">
              <img
                alt={"NO Image Found"}
                src={product.picture}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-65"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </p>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProductCard