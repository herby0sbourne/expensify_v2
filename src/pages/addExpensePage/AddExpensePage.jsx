import Title from '../../components/Title.jsx';
import ExpenseForm from '../../components/expenseForm/ExpenseForm.jsx';

const AddExpensePage = () => {
  const submitExpense = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <Title heading="Add Expenses" />
      <div className="container">
        <ExpenseForm onSubmit={submitExpense} />
      </div>
    </div>
  );
};
export default AddExpensePage;
