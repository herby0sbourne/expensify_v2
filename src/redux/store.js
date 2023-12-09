import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import expenseReducer from "./expense/expenseSlice.js";
import filtersReducer from "./filter/filterSlice.js";
import loadingReducer from "./loading/loadingSlice.js";

const middlewares = [];

if (import.meta.env.VITE_NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
    filters: filtersReducer,
    expenses: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export default store;
