import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "../reducers/users/UserSlice";
import AllergySlice from "../reducers/allergy/AllergySlice";
import AllAllergySlice from "../reducers/allAllergies/AllAllergySlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    allergy: AllergySlice,
    allAllergies: AllAllergySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
