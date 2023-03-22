import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  activeDate: '0',
  loading: false,
  error: "",
};

export const transactionsSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transactionsFetching(state) {
      state.loading = true;
    },
    transactionsFetchingSuccess(state, action) {
      state.loading = false;
      state.transactions = action.payload;
    },
    transactionsFetchingError(state, action) {
      state.loading = false;
      state.transactions = action.payload.message;
    },
    addtransactions(state, action) {
      state.transactions.push(action.payload);
    },
    activeDateSetter(state, action) {
      state.activeDate = action.payload;
    },
  },
});



export default transactionsSlice.reducer;
