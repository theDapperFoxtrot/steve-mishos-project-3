import { useState } from 'react';
import Expenses from './components/Expenses';
import IndividualExpense from './components/IndividualExpense';

const exampleExpense = [
  {
    id: '1',
    expenseName: 'Juno College',
    cost: 14482.50,
    date: new Date(2022, 4, 20),
  },
];

const App = () => {
const [expenses, setExpenses] = useState(exampleExpense);

const addExpense = (expense) => {
  setExpenses((priorExpenses) =>
    {return [expense, ...priorExpenses];
    });
}

  return (
    <div>
      <h2>Steve's Expense Tracker</h2>
      {/* <IndividualExpense addExpense={addExpense}/> */}
      <Expenses eachExpense={expenses} />
    </div>
  );
}

export default App;