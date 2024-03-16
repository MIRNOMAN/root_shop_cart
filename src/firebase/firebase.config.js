// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRKMATfv06R7e0TPwb5kZ8utgJcXI0AQ",
  authDomain: "rootcart-shop.firebaseapp.com",
  projectId: "rootcart-shop",
  storageBucket: "rootcart-shop.appspot.com",
  messagingSenderId: "558860631279",
  appId: "1:558860631279:web:c88a57cc3ff112e3246f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth;