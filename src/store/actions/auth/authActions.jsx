import { createAsyncThunk } from "@reduxjs/toolkit";
import StoreAxios from "../../../axios/axios";
import { redirect } from "react-router-dom";

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await StoreAxios.post("/auth/users/", payload);
      const data = response.data;
      redirect("/login");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const response = await StoreAxios.post("/api/token/", payload);
      const data = response.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
