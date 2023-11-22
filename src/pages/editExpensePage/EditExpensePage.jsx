import { useNavigate, useParams } from 'react-router-dom';
import Title from '../../components/Title';
import ExpenseForm from '../../components/expenseForm/ExpenseForm';

import { expenses } from '../../../seedData';

const EditExpensePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleOnSubmit = (expense) => {
    console.log('update expense');
    console.log(expense);
    navigate(-1);
  };

  const handleOnClick = () => {
    console.log('remove expense');
  };

  const expense = expenses.find((expense) => {
    return expense.id == +id;
  });

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
