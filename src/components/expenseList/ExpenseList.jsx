import ExpenseListItem from '../expenseListItem/ExpenseListItem.jsx';

import { expenses } from '../../../seedData.js';

const ExpenseList = () => {
  return (
    <div className="container">
      <div className="bg-off-white border border-[#e5e5e5] text-grey flex justify-between py-s-size px-m-size">
        <div className="visible md:hidden">Expenses</div>
        <div className="hidden md:block">Expense</div>
        <div className="hidden md:block">Amount</div>
      </div>

      <div className="mb-m-size md:mb-l-size">
        {expenses.length === 0 ? (
          <div className="list_item text-grey justify-self-center items-center">
            <span>No Expense</span>
          </div>
        ) : (
          expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};
export default ExpenseList;
