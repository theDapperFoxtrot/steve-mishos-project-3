import { useState } from "react";

const ExpenseForm = (props) => {
  const [date, setDate] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [cost, setCost] = useState('');
  
  const dateHandler = (event) => {
    setDate(event.target.value)
  }

  const expenseNameHandler = (event) => {
    setExpenseName(event.target.value)
  }

  const costHandler = (event) => {
    setCost(event.target.value);
  }

  const formHandler = (event) => {
    event.preventDefault();

    const expenseEntry = {
      date: new Date(date),
      expenseName: expenseName,
      cost: cost,
    };

    props.savedExpenseEntry(expenseEntry);
    setDate('');
    setExpenseName('');
    setCost('');
  }

  return(
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={date} onChange={dateHandler}/>
        <label htmlFor="expenseName">Expense</label>
        <input type="text" name="expenseName" value={expenseName} onChange={expenseNameHandler}/>
        <label htmlFor="cost">Cost</label>
        <input type="number" min="0.01" step="0.01" name="cost" value={cost} onChange={costHandler}/>
        <button>Add Expense</button>
      </form>
    </div>
  )
}

export default ExpenseForm;