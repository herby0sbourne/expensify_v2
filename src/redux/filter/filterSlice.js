import moment from "moment/moment";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.text = action.payload.text;
    },
    sortByAmount: (state) => {
      state.sortBy = "amount";
    },
    sortByDate: (state) => {
      state.sortBy = "date";
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload.startDate;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload.endDate;
    },
  },
});

export const { filterBy, sortByAmount, sortByDate, setStartDate, setEndDate } =
  filtersSlice.actions;

const filtersReducer = filtersSlice.reducer;

export default filtersReducer;
