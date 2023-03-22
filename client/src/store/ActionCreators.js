import { transactionsSlice } from "./slices/transactionSlice";
import { categoriesSlice } from "./slices/categoriesSlice";
import { authSlice } from "./slices/authSlice";
import { request } from "../services/request.service";
import apiConfig from "../config/api.json";

export const setActiveDate = (date) => {
  return async (dispatch) => {
    dispatch(transactionsSlice.actions.activeDateSetter(date));
  };
};

export const fetchTransactions = (date) => {
  return async (dispatch) => {
    const { url, method, headers, token } = apiConfig.Transactions;
    try {
      dispatch(transactionsSlice.actions.transactionsFetching());
      const response = await request({
        url,
        method,
        body: { date: date },
        headers,
        token,
      });
      const { isOk, ...array } = response;

      if (!isOk && !array.data.isAuth) {
        dispatch(authSlice.actions.authTokenError());
        return;
      }

      dispatch(
        transactionsSlice.actions.transactionsFetchingSuccess(array.data)
      );
    } catch (e) {
      dispatch(transactionsSlice.actions.transactionsFetchingError(e));
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(categoriesSlice.actions.categoriesFetching());
      const response = await request(apiConfig.Categories);
      const { isOk, ...array } = response;
      if (!isOk && !array.data.isAuth) {
        dispatch(authSlice.actions.authTokenError());
        return;
      }
      dispatch(categoriesSlice.actions.categoriesFetchingSuccess(array.data));
    } catch (e) {
      dispatch(categoriesSlice.actions.categoriesFetchingError(e));
    }
  };
};
export const fetchAuth = (requestData) => {
  return async (dispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      const response = await request(requestData);
      if (!response.isOk) {
        dispatch(authSlice.actions.authFetchedError(response.data.errors));
        return;
      }
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: response.data.token,
          userId: response.data.userId,
        })
      );
      dispatch(authSlice.actions.authFetchedSuccess(response));
      return;
    } catch (e) {
      console.log(e);
    }
  };
};

export const checkToken = () => {
  return async (dispatch) => {
    try {
      dispatch(authSlice.actions.authFetching());
      const response = await request(apiConfig.Auth);
      if (!response.isOk) {
        throw "";
      }
      dispatch(authSlice.actions.authFetchedSuccess());
      return;
    } catch (e) {
      dispatch(authSlice.actions.authTokenError());
    }
  };
};
