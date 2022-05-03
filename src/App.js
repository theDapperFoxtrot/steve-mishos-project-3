import Expenses from "./components/Expenses";

const App = () => {
  
  const addNewExpense = () => {
    <Expenses items={expenses} />
  }

  const expenses = [
    {
      id: 'e1',
      title: 'Juno College',
      cost: 14482.50,
      date: new Date(2022, 4, 1),
    },
  ];

  return (
    <div>
      <h2>Steve's Expense Tracker</h2>
      <Expenses items={expenses} />
      <div>
      <button onClick={addNewExpense}>Add Expense</button>
      </div>
    </div>
  );
}

export default App;