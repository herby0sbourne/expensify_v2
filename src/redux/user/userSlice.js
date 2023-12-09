import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStatePromise } from "../../firebase/firebase";

export const getAuthUser = createAsyncThunk(
  "GetAuth",
  async (_, { dispatch }) => {
    const user = await onAuthStatePromise();
    dispatch(login(user));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.uid = action.payload?.uid || null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

const userReducer = userSlice.reducer;

export const { login } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userReducer;
