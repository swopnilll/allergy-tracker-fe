import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getAllAllergiesForUser } from "../../services/allergyService";

const initialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "isHighRisk",
  sortOptions: ["latest", "oldest", "a-z", "z-a", "isHighRisk"],
};

const initialState = {
  isLoading: false,
  allergies: [],
  totalAllergies: 0,
  numOfPages: 1,
  page: 1,
  ...initialFiltersState,
};

const allAllergiesSlice = createSlice({
  name: "allAllergies",
  initialState,
  reducers: {},
});

export default allAllergiesSlice.reducer;
