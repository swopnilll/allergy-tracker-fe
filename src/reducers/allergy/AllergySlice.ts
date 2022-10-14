import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";

import {
  deleteAllergy,
  addAllergyForUser,
  editAllergy,
} from "../../services/allergyService";
import { getAllAllergy } from "../allAllergies/AllAllergySlice";
import { logoutUser } from "../users/UserSlice";

const initialState: AllergySlice = {
  isLoading: false,
  isEditing: false,
  name: "",
  severity: "L1",
  isHighRisk: false,
  symtoms: "",
  editAllergyId: null,
};

export const addAllergy = createAsyncThunk(
  "allergy/addAllergy",

  async (payload: AllergyPayload, thunkApi: any) => {
    try {
      return await addAllergyForUser(payload);
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
      }
    }
  }
);

export const handleDeleteAllergy = createAsyncThunk(
  "allergy/handleDeleteAllergy",

  async ({ allergyId, userId }: any, thunkApi) => {
    try {
      const resp = await deleteAllergy(allergyId);

      thunkApi.dispatch(getAllAllergy({ id: userId, searchParam: "" }));

      return resp;
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
      }
    }
  }
);

export const handleEditAllergy = createAsyncThunk(
  "allergy/handleEditAllergy",

  async (payload: any, thunkApi) => {
    console.log(payload);
    try {
      return await editAllergy(payload);
    } catch (error: any) {
      if (error.response.status === 401) {
        thunkApi.dispatch(logoutUser());
        return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
      }
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
    setEditJob: (state, { payload }) => {
      console.log("Going to edit");
      console.log(payload);
      console.log(state);
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: {
    [addAllergy.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [addAllergy.fulfilled.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Successfully Added new Allergy");
    },
    [addAllergy.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [handleDeleteAllergy.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [handleDeleteAllergy.fulfilled.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Successfully deleted  Allergy");
    },
    [handleDeleteAllergy.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [handleEditAllergy.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [handleEditAllergy.fulfilled.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.success("Successfully Edited  Allergy");
    },
    [handleEditAllergy.rejected.toString()]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { handleChange, clearValues, setEditJob } = allergySlice.actions;

export default allergySlice.reducer;
