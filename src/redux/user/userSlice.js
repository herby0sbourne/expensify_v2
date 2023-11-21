import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.uid = action.payload?.uid || null;
    },
  },
});

const userReducer = userSlice.reducer;

export const { login } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userReducer;
