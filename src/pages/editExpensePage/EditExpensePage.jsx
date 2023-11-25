import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Title from "../../components/Title";
import ExpenseForm from "../../components/expenseForm/ExpenseForm";

import {
  selectExpenses,
  startEditExpense,
  startRemoveExpense,
} from "../../redux/expense/expenseSlice.js";

const EditExpensePage = () => {
  const { id } = useParams();
  const expenses = useSelector(selectExpenses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const expense = expenses.find((expense) => {
    return expense.id === id;
  });

  const handleOnSubmit = (expense) => {
    dispatch(startEditExpense(expense));
    navigate("/");
  };

  const handleOnClick = () => {
    dispatch(startRemoveExpense(id));
    navigate("/");
  };

  return (
    <div>
      <Title heading="Edit Expense" />
      <div className="container">
        <ExpenseForm onSubmit={handleOnSubmit} data={expense} />
        <button className="btt bg-[#888888]" onClick={handleOnClick}>
          Remove Expense
        </button>
      </div>
    </div>
  );
};
export default EditExpensePage;
