import { useSelector } from "react-redux";

import ExpenseListItem from "../expenseListItem/ExpenseListItem.jsx";
import { selectExpenses } from "../../redux/expense/expenseSlice.js";
import { selectFilters } from "../../redux/filter/filterSlice.js";

import { getVisibleExpenses } from "../../utils/utils.js";

const ExpenseList = () => {
  const expenses = useSelector(selectExpenses);
  const filters = useSelector(selectFilters);
  const expensesList = getVisibleExpenses(expenses, filters);

  return (
    <div className="container">
      <div className="bg-off-white border border-[#e5e5e5] text-grey flex justify-between py-s-size px-m-size">
        <div className="visible md:hidden">Expenses</div>
        <div className="hidden md:block">Expense</div>
        <div className="hidden md:block">Amount</div>
      </div>

      <div className="mb-m-size md:mb-l-size">
        {expensesList.length === 0 ? (
          <div className="list_item text-grey justify-self-center items-center">
            <span>No Expense</span>
          </div>
        ) : (
          expensesList.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};
export default ExpenseList;
