import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getAllAllergiesForUser } from "../../services/allergyService";
import { logoutUser } from "../users/UserSlice";

const initialFiltersState = {
  search: "",
  sort: "isHighRisk",
  sortOptions: ["latest", "oldest", "a-z", "z-a", "isHighRisk"],
};

const initialState: AllAllergySlice = {
  isLoading: false,
  allergies: [],
  totalAllergies: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

export const getAllAllergy = createAsyncThunk(
  "allAllergies/getAllAllergy",

  async (payload: any, thunkApi: any) => {
    
    const { search } = thunkApi.getState().allAllergies;

    console.log(search);

    try {
      return await getAllAllergiesForUser(+payload.id, search || "");
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
      }
    }
  }
);

const allAllergiesSlice = createSlice({
  name: "allAllergies",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },

    hideLoading: (state) => {
      state.isLoading = false;
    },

    handleChange: (state, { payload: { name, value } }) => {
      state[name as keyof AllAllergySlice] = value;
    },

    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
  },
  extraReducers: {
    [getAllAllergy.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [getAllAllergy.fulfilled.toString()]: (state, { payload }) => {
      state.isLoading = false;
      const { data: allAllergies } = payload;

      state.allergies = allAllergies.data;
    },
    [getAllAllergy.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { showLoading, hideLoading, handleChange, clearFilters } = allAllergiesSlice.actions;

export default allAllergiesSlice.reducer;
