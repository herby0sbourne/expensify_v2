import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import {
  filterBy,
  selectFilters,
  setDate,
  sortByAmount,
  sortByDate,
} from "../../redux/filter/filterSlice.js";

import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const ExpenseListFilters = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    dispatch(filterBy(e.target.value));
  };

  const onDateChange = (date) => {
    const startDate = date ? moment(date[0]) : moment().startOf("month");
    const endDate = date ? moment(date[1]) : moment().endOf("month");

    const dates = [startDate, endDate];
    dispatch(setDate(dates));
  };

  const onSortChange = (e) => {
    e.target.value === "date"
      ? dispatch(sortByDate())
      : dispatch(sortByAmount());
  };

  return (
    <div className="container">
      <div className="flex flex-col mb-m-size md:flex-row md:mb-l-size">
        <div className="mb-s-size md:m-[0] md:mr-s-size">
          <input
            type="text"
            placeholder="Search Expenses"
            className="border border-[#cacccd] h-[50px] font-light p-s-size"
            value={filters.text || ""}
            onChange={onTextChange}
          />
        </div>

        <div className="mb-s-size md:m-[0] md:mr-s-size">
          <select
            value={filters.sortBy}
            onChange={onSortChange}
            className="border border-[#cacccd] h-[50px] font-light p-s-size"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="mb-s-size md:m-[0] md:mr-s-size">
          <DateRangePicker
            calendarIcon={false}
            value={[filters.startDate, filters.endDate]}
            // value={[new Date(), new Date()]}
            onChange={onDateChange}
            className="border border-[#cacccd] h-[50px] font-light p-s-size"
          />
        </div>
      </div>
    </div>
  );
};
export default ExpenseListFilters;
