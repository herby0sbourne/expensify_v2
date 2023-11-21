import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.uid = action.payload?.uid;
    },
  },
});
// uid:'hH9PD9EcKkhUi3Ae8Evxk9XRV6F3'
const userReducer = userSlice.reducer;

export const { login } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userReducer;
