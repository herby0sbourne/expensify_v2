import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";
import expenseReducer from "./expense/expenseSlice.js";

const middlewares = [];

if (import.meta.env.VITE_NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    user: userReducer,
    expenses: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export default store;
