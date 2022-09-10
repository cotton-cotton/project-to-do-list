// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAddetHteAZZ-uo6Oz2QW-EoCeq4wAJu80',
  authDomain: 'to-do-list-2022.firebaseapp.com',
  projectId: 'to-do-list-2022',
  storageBucket: 'to-do-list-2022.appspot.com',
  messagingSenderId: '644927755587',
  appId: '1:644927755587:web:c0abb019a014856f35cbf6',
  measurementId: 'G-KJJ0L3NFZ0',
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FB_API_KEY,
//   authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FB_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FB_API_ID,
//   measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

export {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
