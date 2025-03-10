import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        togglesidebar: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})


export const { togglesidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;