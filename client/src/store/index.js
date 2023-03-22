import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./slices/transactionSlice";
import categoriesReducer from "./slices/categoriesSlice";
import authReducer from "./slices/authSlice";
const rootReducer = combineReducers({
  transactionsReducer,
  categoriesReducer,
  authReducer
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
