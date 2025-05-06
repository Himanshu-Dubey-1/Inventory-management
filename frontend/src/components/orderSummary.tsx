// components/OrderSummary.tsx
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const { items } = useSelector((state: RootState) => state.cart);
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className=" w-full max-w-sm">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <input
            className="w-full border rounded px-2 py-1 text-sm mt-2 "
            placeholder="Add coupon code"
          />
          <div className="flex justify-between mt-4 font-semibold bg-gray-300 p-4">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        <button className="bg-green-600 text-white w-full py-2 mt-4 rounded hover:bg-green-700" onClick={() => toast.success("Checkout successful!")}>
          CHECKOUT
        </button>
      </div>
    </>
  );
}
