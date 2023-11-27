import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../redux/expense/expenseSlice.js";
import { selectFilters } from "../../redux/filter/filterSlice.js";
import {
  fixAmount,
  getVisibleExpenses,
  getExpensesTotal,
} from "../../utils/utils.js";

const ExpensesSummary = () => {
  const expenses = useSelector(selectExpenses);
  const filters = useSelector(selectFilters);

  const filteredExpenses = getVisibleExpenses(expenses, filters);
  const expensesTotal = getExpensesTotal(filteredExpenses);
  const expenseCount = filteredExpenses.length;

  return (
    <div className="bg-off-white py-l-size px-[0] mb-l-size">
      <div className="container">
        <h1 className="font-light">
          Viewing <span className="font-bold">{expenseCount}</span>
          {expenseCount <= 1 ? " expense" : " expenses"} total{" "}
          <span className="font-bold">{fixAmount(expensesTotal)}</span>
        </h1>
        <div className="mt-m-size">
          <Link to="/create" className="btt">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExpensesSummary;
