import ExpenseForm from './ExpenseForm';
import firebase from '../firebase';
import { getDatabase, ref, push, set } from "firebase/database";

const Expenses = (props) => {
  const savedExpenseEntry = (savedExpenseEntry) => {
    const expenseEntry = {
      ...savedExpenseEntry,
    };
    props.addExpense(expenseEntry);
  };


// Create a new post reference with an auto-generated id
const database = getDatabase();
const postListRef = ref(database);
const newPostRef = push(postListRef);
set(newPostRef, {
    // ...
});
  return(
  <div>
    <ExpenseForm savedExpenseEntry={savedExpenseEntry} />
  </div>
  )
}

export default Expenses;