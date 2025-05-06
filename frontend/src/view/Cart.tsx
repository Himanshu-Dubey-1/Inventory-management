// pages/Cart.tsx
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartItem from "../components/cartItem";
import OrderSummary from "../components/orderSummary";
import { useEffect } from "react";

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
            window.scrollTo(0, 0)
          },[])

  if(items.length === 0) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Cart is Empty</h1>
            <p className="text-center text-gray-500">Add some products to your cart to see them here.</p>
        </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex-1 bg-white shadow-lg p-6 rounded-lg">
          <div className="hidden sm:block">
          <div className="flex justify-between items-center border-b py-4 ">
            <div className="flex items-center gap-14">
              <h2>Product</h2>
              <div>
                <h4 className="">Name</h4>
              </div>
            </div>
            <div className="flex items-center gap-19 mr-20">
              <p className="">Price</p>
              <div className="flex items-center">
                <h2>quantity</h2>
              </div>
              <p className="w-12 text-right">Total</p>
            </div>
          </div>
          </div>
          <div className="flex-1 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                _id={item.id}
                name={item.title}
                category={item.category} // Replace with actual category if available
                picture={item.image}
                description="Default Description" // Replace with actual description if available
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  );
}
