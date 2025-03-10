import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/api";
import { IUser } from "../../../models/IUser";
import { toast } from "react-toastify";

// Actions

export const fetchusers = createAsyncThunk("fetchusers", async () => {
    try {
        const users = await axiosInstance.get("/users");
        if (!users) {
            toast.error("Error Occured while fetching users");
            return [];
        }

        return users.data;
    } catch (error) {
        toast.error("Error Occured while fetching users");
        console.log(error);
    }
})

// Slice

type IUserState = {
    user: IUser[],
    status: boolean,
    error: null | string,
}


export const userSlice = createSlice({
    name: "users",
    initialState: {
        user: [],
        status: false,
        error: null
    } as IUserState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(fetchusers.pending, (state : IUserState) => {
            state.status = true;
        })
        builder.addCase(
            fetchusers.fulfilled,
              (state: IUserState, action: any) => {
                state.status = false;
                state.user = action.payload;
              }
            );
            builder.addCase(
                fetchusers.rejected,
              (state: IUserState, action: any) => {
                state.status = false;
                state.error = action.error.message;
              }
            );
    }
})


export default userSlice.reducer;