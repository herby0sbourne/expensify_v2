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
      state.text = action.payload;
    },
    sortByAmount: (state) => {
      state.sortBy = "amount";
    },
    sortByDate: (state) => {
      state.sortBy = "date";
    },
    setDate: (state, action) => {
      state.startDate = action.payload[0];
      state.endDate = action.payload[1];
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

export const {
  filterBy,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
  setDate,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

const filtersReducer = filtersSlice.reducer;
export default filtersReducer;
