import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig={
  apiKey: "AIzaSyCB7zBWpsGoKJgVqxbQxV3i-9ibQ8eYXSo",
  authDomain: "invoice-2-e2535.firebaseapp.com",
  projectId: "invoice-2-e2535",
  storageBucket: "invoice-2-e2535.appspot.com",
  messagingSenderId: "406319759564",
  appId: "1:406319759564:web:83d1295f877927eb2f0269",
  measurementId: "G-W3J94JJR4X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { auth };
export default db;
export {firebaseConfig};