import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9F5Q2_QkiqGgKn9FpUmFmp7Uo6EN7rV8",
    authDomain: "dulitfest-5950b.firebaseapp.com",
    projectId: "dulitfest-5950b",
    storageBucket: "dulitfest-5950b.appspot.com",
    messagingSenderId: "843100678909",
    appId: "1:843100678909:web:501ab018236eb8ef32ac94",
    measurementId: "G-PFNVLRWS8R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };