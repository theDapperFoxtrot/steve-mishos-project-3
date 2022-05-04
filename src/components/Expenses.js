import IndividualExpense from "./IndividualExpense";

const Expenses = (props) => {
  return (
    <div>
      {props.eachExpense.map(each => 
      <IndividualExpense 
      date={each.date} 
      expenseName={each.expenseName} 
      cost={each.cost} 
      />)}
    </div>
  );
}

export default Expenses;