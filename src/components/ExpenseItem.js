import ExpenseForm from './ExpenseForm';

const ExpenseItem = (props) => {
  const savedExpenseEntry = (savedExpenseEntry) => {
    const expenseEntry = {
      ...savedExpenseEntry,
    };
    props.addExpense(expenseEntry);
  };

  return(
  <div>
  </div>
  )
}

export default ExpenseItem;