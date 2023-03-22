import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {},
  loading: false,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesFetching(state) {
      state.loading = true;
    },
    categoriesFetchingSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload;
    },
    categoriesFetchingError(state, action) {
      state.loading = false;
      state.categories = action.payload.message;
    },
  },
});

export default categoriesSlice.reducer;
