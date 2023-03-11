import { createSlice } from "@reduxjs/toolkit";
import { getUser, login, register } from "../../actions/auth/authActions";

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    },
    [register.rejected]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    [login.rejected]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.isAuthenticated = true;
    },
    [getUser.rejected]: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
