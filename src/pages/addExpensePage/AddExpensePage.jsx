import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Title from "../../components/Title.jsx";
import ExpenseForm from "../../components/expenseForm/ExpenseForm.jsx";

import { startAddExpense } from "../../redux/expense/expenseSlice.js";

const AddExpensePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addExpense = (expense) => {
    dispatch(startAddExpense(expense));
    navigate("/");
  };
  return (
    <div>
      <Title heading="Add Expenses" />
      <div className="container">
        <ExpenseForm onSubmit={addExpense} />
      </div>
    </div>
  );
};
export default AddExpensePage;
