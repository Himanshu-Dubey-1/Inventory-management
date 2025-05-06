import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/Hooks/hook";

import { useState } from "react";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const products = useAppSelector((state) => state.items.items);

  const { id } = useParams();
  const Product = products.find((product) => product._id === id);

  if (!Product) {
    return <h2>Card not found!</h2>;
  }

  const totalPrice = (Product.price * quantity).toFixed(2);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-full p-6 mx-auto bg-white  shadow-lg pb-25 flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="p-20 bg-gradient-to-br from-blue-100 bg-purple-100 justify-center">
        <img
          src={Product.picture}
          alt={Product.name}
          className="w-full max-w-lg object-contain "
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between max-w-2xl">
        <div>
          <span className="text-xs text-green-600 font-semibold uppercase">
            New
          </span>
          <h1 className="text-4xl font-bold text-gray-800">{Product.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{Product.category}</p>

          {/* Price and Quantity */}
          <div className="flex items-center mt-6 gap-20">
            <div>
              <p className="text-sm text-gray-500">PRICE</p>
              <p className="text-green-600 text-xl font-bold">
                €{Product.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity UI */}
            <div>
              <p className="text-sm text-gray-500 mb-1">QUANTITY</p>
              <div className="flex items-center border rounded-full overflow-hidden w-fit">
                <button
                  onClick={decrement}
                  className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 text-center outline-none"
                />
                <button
                  onClick={increment}
                  className="px-3 py-1 text-lg bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700 text-sm leading-relaxed">
            {Product.description}
          </div>

        </div>

        {/* Total and Add to Cart */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">TOTAL PRICE</p>
            <p className="text-xl font-semibold">€{totalPrice}</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
