import DateBreakdown from './DateBreakdown';
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
      <div>
      <DateBreakdown date={props.date} />
        <h2>{props.expenseName}</h2>
        <div>${props.cost}</div>
      </div>
    </div>
  );
}

export default IndividualExpense;