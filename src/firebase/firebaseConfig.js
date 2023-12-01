import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRW9YO-xxSrO0e_i48JzMTJc0AgPjP_rQ",
  authDomain: "formulario-cadastro-contatos.firebaseapp.com",
  projectId: "formulario-cadastro-contatos",
  storageBucket: "formulario-cadastro-contatos.appspot.com",
  messagingSenderId: "646735398610",
  appId: "1:646735398610:web:26db0291c1bdb683440f0b"
};


initializeApp(firebaseConfig);

const db = getFirestore()
export default db