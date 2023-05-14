import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC9ATpAVzLdDjrJB2IATAZa8Q6EgcE-5tw",
    authDomain: "todo-vercel.firebaseapp.com",
    databaseURL: "https://todo-vercel-default-rtdb.firebaseio.com",
    projectId: "todo-vercel",
    storageBucket: "todo-vercel.appspot.com",
    messagingSenderId: "858968134576",
    appId: "1:858968134576:web:e7b23ac4d609bcb079bc75",
    measurementId: "G-M2T82X0XLQ"
};

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)