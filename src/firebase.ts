
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDZdlRYDPCC7u-qphADIb3VfZABeh8Z34",
  authDomain: "whyer-96ede.firebaseapp.com",
  projectId: "whyer-96ede",
  storageBucket: "whyer-96ede.appspot.com",
  messagingSenderId: "364725439698",
  appId: "1:364725439698:web:66fcc8ee5eb7b90ce3310b",
  measurementId: "G-V2KLL7ESZH"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;