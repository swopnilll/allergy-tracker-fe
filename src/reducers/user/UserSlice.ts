import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import { login, register } from "../../services/auth";

import { getUserFromLocalStorage, addUserToLocalStorage } from "../../localStorageService/auth";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "/user/registerUser",
  async (payload: RegisterPayload, thunkApi) => {
    try {
      const resp = await register(payload);
      return resp;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload: LoginPayload, thunkAPI) => {
    try {
      const resp = await login(payload);
      return resp;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending.toString()]: (state: any) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled.toString()]: (state: any, { payload }) => {
      const { data: user } = payload;

      state.isLoading = false;
      console.log(user);
      state.user = user;
      toast.success(`Successfully Registered Your Account`);
      addUserToLocalStorage(user);
    },
    [registerUser.rejected.toString()]: (state: any, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.toString()]: (state, { payload } ) => {
      console.log(payload);
      toast.success(`Successfully Loggedn into Your Account`);
      const { data: user } = payload;
      console.log(user);
      state.isLoading = false;
      state.user = user;
      addUserToLocalStorage(user);
    },
    [loginUser.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
