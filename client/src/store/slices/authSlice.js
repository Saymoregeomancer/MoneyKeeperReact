import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isValidToken:false,
  errors: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authFetching(state) {
      state.loading = true;
      state.errors = [];
    },
    authFetchedSuccess(state) {
      state.loading = false;
      state.isValidToken = true;
    },
    authFetchedError(state, action) {
      state.loading = false;
      state.isValidToken = false;
      state.errors = action.payload;
    },
    authTokenError(state) {
      state.loading = false;
      state.isValidToken = false;
    },
    clearError(state) {
      state.errors = [];
    },
  },
});

export default authSlice.reducer;
