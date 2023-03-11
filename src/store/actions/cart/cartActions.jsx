import { createAsyncThunk } from "@reduxjs/toolkit";
import StoreAxios from "../../../axios/axios";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const response = await StoreAxios.get("/react-useReducer-cart-project");
    const data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
});
