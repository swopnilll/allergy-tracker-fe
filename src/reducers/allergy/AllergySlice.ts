import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import {
  addAllergyForUser,
} from "../../services/allergyService";
import { logoutUser } from "../users/UserSlice";

const initialState: AllergySlice = {
  isLoading: false,
  isEditing: false,
  name: "",
  severity: "L1",
  isHighRisk: false,
  symtoms: "",
};

export const addAllergy = createAsyncThunk(
  "allergy/addAllergy",

  async (payload: AllergyPayload, thunkApi) => {
    try {
      return await addAllergyForUser(payload);
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue('Unauthorized! Logging Out...');
      }

      return thunkApi.rejectWithValue(error);
    }
  }
);

const allergySlice = createSlice({
  name: "allergy",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;

      state[name as keyof AllergySlice] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: {
    [addAllergy.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [addAllergy.fulfilled.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Successfully Added new Allergy")
    },
    [addAllergy.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues } = allergySlice.actions;

export default allergySlice.reducer;
