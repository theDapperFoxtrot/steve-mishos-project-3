import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {

  return(
  <div>
    <ExpenseItem title={props.items[0].title} amount={props.items[0].cost} date={props.items[0].date}/>
  </div>
  )
}

export default Expenses;