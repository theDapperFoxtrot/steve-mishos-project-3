import DateBreakdown from "./DateBreakdown";

const DisplayExpense = (props) => {

return (
  <div>
    {props.eachExpense.map(each => {
      return (
        <div>
          <h2>{each.expenseName}</h2>
            <DateBreakdown date={each.date} />
          <div>${each.cost}</div>
        </div>
      )
    })}
  </div>
)
}

export default DisplayExpense;