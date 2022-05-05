import { useEffect, useState } from "react";
import DisplayExpense from "./components/DisplayExpense";
import IndividualExpense from "./components/IndividualExpense";
// Import the functions you need from the SDKs you need
import { onValue, update } from "firebase/database";
import dbRef from "./firebase";

const App = () => {
	const [expenses, setExpenses] = useState([]);

	//receiving
	useEffect(() => {
		onValue(dbRef, (response) => {
			const values = response.val();

			if (values?.data) {
				setExpenses(values.data);
			}
		});
	}, []);

	const addExpense = (expense) => {
		const newData = [...expenses, expense];
		setExpenses(newData);
		update(dbRef, { data: newData });
	};

	const removeExpense = (expenseIndex) => {
		const newData = [...expenses];
		newData.splice(expenseIndex, 1);
		setExpenses(newData);
		update(dbRef, { data: newData });
	};

	return (
		<div>
			<h2>Steve's Expense Tracker</h2>
			<IndividualExpense addExpense={addExpense} />
			<DisplayExpense expenses={expenses} removeExpense={removeExpense} />
		</div>
	);
};

export default App;