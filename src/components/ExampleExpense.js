import IndividualExpense from "./IndividualExpense";

const ExampleExpense = (props) => {
  return (
    <div>
      {props.eachExpense.map(each => 
      <IndividualExpense
      key={each.id}
      date={each.date} 
      expenseName={each.expenseName} 
      cost={each.cost} 
      />)}
    </div>
  );
}

export default ExampleExpense;