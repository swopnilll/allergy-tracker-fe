import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { loginUserThunk, registerUserThunk,} from './userThunk';

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../localStorageService/auth";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "/user/registerUser",
  async (payload: RegisterPayload, thunkApi) => {
    return registerUserThunk(payload, thunkApi)
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: LoginPayload, thunkAPI) => {
    return loginUserThunk(payload, thunkAPI)
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSideBar: (state: any) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [registerUser.pending.toString()]: (state: any) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled.toString()]: (state: any, { payload }) => {
      const { data: user } = payload;

      state.isLoading = false;
      state.user = user;
      toast.success(`Successfully Registered Your Account`);
      addUserToLocalStorage(user);
    },
    [registerUser.rejected.toString()]: (state: any, { payload }) => {
      state.isLoading = false;
      toast.error(payload.data);
    },
    [loginUser.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.toString()]: (state, { payload }) => {
      const { data: user } = payload;

      state.isLoading = false;
      state.user = user;

      addUserToLocalStorage(user);

      toast.success(`Successfully Logged into Your Account`);
    },
    [loginUser.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload.data);
    },
  },
});

export const { toggleSideBar, logoutUser } = userSlice.actions;

export default userSlice.reducer;
