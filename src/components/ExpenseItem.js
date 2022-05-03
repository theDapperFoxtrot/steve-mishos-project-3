import ExpenseDate from './ExpenseDate';
import { useState } from 'react';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [cost, setCost] = useState(props.cost);

  const clickHandler = () => {
    let title = document.querySelector('#expenseTitle');
    let cost = document.querySelector('#expenseCost');

    setTitle(title.value);
    setCost(cost.value);
  }

  return (
    <div>
      <ExpenseDate date={props.date} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>${cost}</div>
        </div>
      </div>
      <div>
        <input type="text" id='expenseTitle' />
        <button onClick={clickHandler}>Change Title</button>
        <input type="text" id='expenseCost' />
        <button onClick={clickHandler}>Change Cost</button>
      </div>
    </div>)
}

export default ExpenseItem;