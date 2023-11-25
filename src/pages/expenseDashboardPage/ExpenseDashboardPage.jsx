import ExpenseList from "../../components/expenseList/ExpenseList.jsx";
import ExpensesSummary from "../../components/expensesSummary/ExpensesSummary.jsx";
import ExpenseListFilters from "../../components/expenseListFilters/expenseListFilters.jsx";

const ExpenseDashboardPage = () => {
  return (
    <>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </>
  );
};
export default ExpenseDashboardPage;
