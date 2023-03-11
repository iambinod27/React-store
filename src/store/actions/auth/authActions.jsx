import { createAsyncThunk } from "@reduxjs/toolkit";
import StoreAxios from "../../../axios/axios";
import { getHttpOnlyCookies } from "../../../utils/getHttpOnlyCookies";

const access_token = getHttpOnlyCookies("access_token");

export const register = createAsyncThunk(
  "auth/register",
  async (payload, thunkAPI) => {
    try {
      const response = await StoreAxios.post("/auth/users/", payload);
      const data = response.data;
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

export const getUser = createAsyncThunk(
  "auth/userInfo",
  async (_, thunkAPI) => {
    try {
      const response = await StoreAxios("/auth/users/", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Access-Control-Allow-Origin": true,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
