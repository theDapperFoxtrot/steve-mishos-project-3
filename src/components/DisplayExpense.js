const DisplayExpense = ({ expenses, removeExpense }) => {
	return (
		<div>
			{expenses.map((expense, index) => (
				<div key={expense.expenseName}>
					<h2>{expense.expenseName}</h2>
					<div>{new Date(expense.date).toLocaleDateString()}</div>
					<div>${expense.cost}</div>
					<button
						onClick={() => {
							window.confirm(
								`Are you sure you want to remove ${expense.expenseName}? \nThis cannot be undone`
							) && removeExpense(index);
						}}
					>
						X
					</button>
				</div>
			))}
		</div>
	);
};

export default DisplayExpense;
