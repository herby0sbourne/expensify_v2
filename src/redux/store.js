import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/userSlice';

const middlewares = [];

if (import.meta.env.VITE_NODE_ENV === 'development') {
  console.log(import.meta.env.VITE_NODE_ENV);
  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});
export default store;
