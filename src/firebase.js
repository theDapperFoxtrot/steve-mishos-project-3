import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCsnwIJjd52GraCe0fsi2PLv18qSg4woRA",
	authDomain: "my-expense-tracker-4a3de.firebaseapp.com",
	projectId: "my-expense-tracker-4a3de",
	storageBucket: "my-expense-tracker-4a3de.appspot.com",
	messagingSenderId: "533947615813",
	appId: "1:533947615813:web:d0b14cbeb6cc1d4b19712c",
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const dbRef = ref(database);

export default dbRef;
