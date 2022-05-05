import { useEffect, useState } from 'react';
import DisplayExpense from './components/DisplayExpense';
import IndividualExpense from './components/IndividualExpense';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnwIJjd52GraCe0fsi2PLv18qSg4woRA",
  authDomain: "my-expense-tracker-4a3de.firebaseapp.com",
  projectId: "my-expense-tracker-4a3de",
  storageBucket: "my-expense-tracker-4a3de.appspot.com",
  messagingSenderId: "533947615813",
  appId: "1:533947615813:web:d0b14cbeb6cc1d4b19712c"
};

const firebase = initializeApp(firebaseConfig);

const exampleExpense = [
  {
    id: 'i1',
    expenseName: 'Juno College',
    cost: 14482.50,
    date: new Date(2022, 4, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(exampleExpense);
  const [singleExpense, setSingleExpense] = useState({});
  // Initialize Firebase

const addExpense = (expense) => {
  setSingleExpense(() =>
    {return expense;
    });
  }
  //sending
  useEffect(() => {

  }, [singleExpense]);

  //receiving
  useEffect(() => {
  const database = getDatabase(firebase)
  const dbRef = ref(database)

  onValue(dbRef, (response) => {
    const newState = [];
    const data = response.val();
    for (let key in data) {
      newState.push(data[key]);
    }
    setExpenses(newState);
    console.log(response.val());
    })
  }, []);

  return (
    <div>
      <h2>Steve's Expense Tracker</h2>
      <IndividualExpense addExpense={addExpense}/>
      <DisplayExpense eachExpense={expenses} />
    </div>
  );
}

export default App;