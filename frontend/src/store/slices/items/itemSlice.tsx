import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../api/api";
import { IProduct } from "../../../models/IProduct";
import { toast } from "react-toastify";

// Actions

export const fetchitems = createAsyncThunk("fetchitems", async () => {
  try {
    const product = await axiosInstance.get("/items");
    if (!product) {
      toast.error("Error Occured while fetching users");
      return [];
    }
    return product.data;
  } catch (error) {
    console.log(error);
    toast.error("Error Occured while fetching Products");
  }
});

export const postitem = createAsyncThunk("postitems", async (item: any) => {
  try {
     const response = await axiosInstance.post("/item", item)
     toast.success("Product Added Successfully");
     return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Error Occured while adding Product");
  }
})

export const updateitem = createAsyncThunk("updateitem", async ({id, ...req}: {id: string})=> {
  try {
    const response = await axiosInstance.patch(`/${id}`, req);
    toast.success("Product Updated Successfully");
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Error Occured while updating Product");
  }
})

// Slice

type IProductState = {
  items: IProduct[];
  status: boolean;
  error: null | string;
};

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    status: false,
    error: null,
  } as IProductState,
  reducers: {},
  extraReducers: (builder: any) => {

    //fetch items

    builder.addCase(fetchitems.pending, (state: IProductState) => {
      state.status = true;
    });
    builder.addCase(
      fetchitems.fulfilled,
      (state: IProductState, action: any) => {
        state.status = false;
        state.items = action.payload;
      }
    );
    builder.addCase(
      fetchitems.rejected,
      (state: IProductState, action: any) => {
        state.status = false;
        state.error = action.error.message;
      }
    );

    //post Item

    builder.addCase(postitem.pending, (state: IProductState) => {
      state.status = true;
    });
    builder.addCase(postitem.fulfilled, (state: IProductState, action: any)=> {
      state.status = false;
      state.items.push(action.payload);
    })
    builder.addCase(postitem.rejected, (state: IProductState, action: any) => {
      state.status = false;
      state.error = action.error.message;
    })

    //update Item

    builder.addCase(updateitem.pending, (state: IProductState) => {
      state.status = true;
    });
    builder.addCase(updateitem.fulfilled, (state: IProductState, action: any) => {
      state.status = false;
      const index = state.items.findIndex((item) => item._id === action.payload._id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    });
    builder.addCase(updateitem.rejected, (state: IProductState, action: any) => {
      state.status = false;
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
