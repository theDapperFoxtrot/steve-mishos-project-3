import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";
import firebase from "./firebase";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Juno College',
      cost: 14482.50,
      date: new Date(2022, 4, 1),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expenses);
  }

  return (
    <div>
      <h2>Steve's Expense Tracker</h2>
      <Expenses addExpense={addExpenseHandler} />
      <div>
      </div>
    </div>
  );
}

export default App;