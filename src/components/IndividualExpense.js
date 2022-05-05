import ExpenseForm from './ExpenseForm';

const IndividualExpense = (props) => {
  const savedExpenseEntryHandler = (expenseEntry) => {
    const savedExpense = {
      ...expenseEntry,
      id: Math.random().toString()
    };
    props.addExpense(savedExpense);
  };

  return (
    <div>
      <ExpenseForm savedExpenseEntry={savedExpenseEntryHandler} />
    </div>
  );
}

export default IndividualExpense;