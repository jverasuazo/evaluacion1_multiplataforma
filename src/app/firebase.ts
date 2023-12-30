// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEnBgjQ2i2wZq6YX9Q31zn8QMA19Ixm4M",
  authDomain: "logineva2-f8df7.firebaseapp.com",
  projectId: "logineva2-f8df7",
  storageBucket: "logineva2-f8df7.appspot.com",
  messagingSenderId: "859152977692",
  appId: "1:859152977692:web:aefbc9eb77d6745ec634d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de la aplicación Firebase
export default app;