import { useState } from 'react';

const ExpenseDate = (props) => {
  let exampleDate = new Date(2022, 4, 1);
  const [date, setDate] = useState(exampleDate);
  
  const dateChangeHandler = (event) => {
    setDate(event.target.date);
  }
  const month = date.toLocaleString('en-US', {month: '2-digit'});
  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const year = date.getFullYear();

  return(
<div>
  <div>{year}</div>
  <div>{month}</div>
  <div>{day}</div>
  <input type="date" min='2018-01-01' max='2022-12-31' id='expenseDate' onChange={dateChangeHandler} />
</div>)
}

export default ExpenseDate;