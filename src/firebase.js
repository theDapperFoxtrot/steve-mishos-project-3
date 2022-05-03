// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;