import { configureStore } from "@reduxjs/toolkit";
import  itemReducer from "./slices/items/itemSlice";
import userReducer from "./slices/user/userSlice";
import sidebarReducer from "./slices/sidebar/sidebarSlice"

export const store = configureStore({
    reducer: {
        items: itemReducer,
        users: userReducer,
        sidebar: sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch