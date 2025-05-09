// redux/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string
  title: string
  price: number
  quantity: number
  image: string
  category: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find(i => i.id === action.payload.id)
      if (item) item.quantity += action.payload.quantity
      else state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (
        state,
        action: PayloadAction<{ id: string; quantity: number }>
      ) => {
        const item = state.items.find(i => i.id === action.payload.id)
        if (item) {
          if (action.payload.quantity <= 0) {
            state.items = state.items.filter(i => i.id !== action.payload.id)
          } else {
            item.quantity = action.payload.quantity
          }
        }
      },
    clearCart: (state) => {
      state.items = []
    }
  },
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
