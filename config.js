import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig={
  apiKey: "AIzaSyDNUdK6q43XMnxZmTDQvTxCWIhjN6lbIdw",
  authDomain: "invoice-system-518a6.firebaseapp.com",
  projectId: "invoice-system-518a6",
  storageBucket: "invoice-system-518a6.appspot.com",
  messagingSenderId: "712591745815",
  appId: "1:712591745815:web:a0fbf26a921bc67c4c0d52",
  measurementId: "G-6TW2WGDFP1"
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