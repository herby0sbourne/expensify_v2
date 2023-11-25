import moment from "moment";
import { useState } from "react";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const ExpenseForm = ({ onSubmit, data }) => {
  const [error, setError] = useState("");

  const [expense, setExpense] = useState({
    id: data?.id || "",
    desc: data?.desc || "",
    note: data?.note || "",
    amount: data?.amount || "",
    createdAt: moment(data?.createdAt) || moment(),
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onDateChange = (createdAt) => {
    setExpense((prevState) => {
      return {
        ...prevState,
        createdAt,
      };
    });
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setExpense({ ...expense, amount });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { amount, desc } = expense;

    if (!desc || !amount) {
      return setError("Please Provide description or amount.");
    }

    onSubmit({
      id: expense.id,
      desc: expense.desc,
      amount: Number(expense.amount),
      createdAt: expense.createdAt.valueOf(),
      note: expense.note,
    });
  };

  return (
    <form className="flex flex-col [&>*]:mb-m-size" onSubmit={handleOnSubmit}>
      {error && <p className="mb-m-size italic text-red-500">{error}</p>}
      <input
        className="border border-[#cacccd] h-[50px] text-[1.8rem] font-light p-s-size"
        type="text"
        name="desc"
        placeholder="Description"
        autoFocus={true}
        onChange={handleOnChange}
        value={expense.desc}
      />
      <input
        className="border border-[#cacccd] h-[50px] text-[1.8rem] font-light p-s-size"
        type="text"
        name="amount"
        placeholder="Amount"
        onChange={onAmountChange}
        value={expense.amount}
      />
      <DatePicker
        className="border border-[#cacccd] h-[50px] text-[1.8rem] font-light px-s-size"
        calendarIcon={false}
        clearIcon={null}
        // selected={expense.createdAt}
        // defaultValue={moment() || new Date()}
        value={expense.createdAt}
        onChange={onDateChange}
      />
      <textarea
        className="border border-[#cacccd] h-[10rem] text-[1.8rem] font-light p-s-size"
        placeholder="Add a note for your expense (optional)"
        name="note"
        onChange={handleOnChange}
        value={expense.note}
      ></textarea>
      <div>
        <button className="btt">{data ? "Edit Expense" : "Add Expense"}</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
