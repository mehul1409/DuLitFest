import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCS37i6DSVTH1nziR7qMJCQ9Fkmb3KC2H8",
    authDomain: "dulitfest-4877b.firebaseapp.com",
    projectId: "dulitfest-4877b",
    storageBucket: "dulitfest-4877b.appspot.com",
    messagingSenderId: "490311415288",
    appId: "1:490311415288:web:58b72b9c2efdf3a4d6920d",
    measurementId: "G-8FC32JK9RW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;