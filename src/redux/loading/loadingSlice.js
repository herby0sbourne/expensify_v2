import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  // initialState: true,
  reducers: {
    setLoading: (state) => true,
    clearLoading: (state) => false,
  },
});

export const { setLoading, clearLoading } = loadingSlice.actions;

export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
