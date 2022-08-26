
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0hSCc8l8aGwb5QRUH-Df-fZAfv1EzPDk",
    authDomain: "coder-react-9562c.firebaseapp.com",
    projectId: "coder-react-9562c",
    storageBucket: "coder-react-9562c.appspot.com",
    messagingSenderId: "516168585893",
    appId: "1:516168585893:web:fdcf572b831d3873d1734c"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;