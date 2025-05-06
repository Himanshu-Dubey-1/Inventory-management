// components/CartItem.tsx
import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../store/slices/cart/cartSlice'
import { FaTimes } from 'react-icons/fa'

interface CartItemProps {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  picture: string;
  description: string;
}

export default function CartItem({ _id: id, name, price, quantity, picture, category }: CartItemProps) {
  const dispatch = useDispatch()

  const handleQuantity = (type: 'inc' | 'dec') => {
    const newQty = type === 'inc' ? quantity + 1 : quantity - 1
    if (newQty > 0) {
      dispatch(updateQuantity({ id, quantity: newQty }))
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b py-4">
      <div className="flex items-center gap-4 sm:gap-10">
        <img src={picture} alt={name} className="w-20 h-20 object-cover rounded-xl" />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>

      <div className="flex sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
        <p className="text-base font-medium">${price}</p>
        <div className="flex items-center border rounded-full bg-gray-100 overflow-hidden">
          <button onClick={() => handleQuantity('dec')} className="px-3 sm:py-1 text-lg font-bold">−</button>
          <span className="sm:px-4 sm:py-1">{quantity}</span>
          <button onClick={() => handleQuantity('inc')} className="px-3 sm:py-1 text-lg font-bold">+</button>
        </div>
        <p className="text-base font-medium sm:w-20  text-right">${price * quantity}</p>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="border rounded-full p-1"
        >
          <FaTimes className="text-lg" />
        </button>
      </div>
    </div>
  )
}
