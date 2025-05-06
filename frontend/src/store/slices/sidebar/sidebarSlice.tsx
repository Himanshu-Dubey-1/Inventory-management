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
        },
        togglesidebarOff: (state) => {
            state.isOpen = false;
        }
    }
})


export const { togglesidebar, togglesidebarOff } = sidebarSlice.actions;
export default sidebarSlice.reducer;