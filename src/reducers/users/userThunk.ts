import { login, register } from "../../services/auth";

export const registerUserThunk = async (payload: any, thunkAPI: any) => {
    try {
        const resp = await register(payload);
        return resp;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error);
      }
  };

  export const loginUserThunk = async (payload: any, thunkAPI: any) => {
    try {
        const resp = await login(payload);
        return resp;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error);
      }
  };