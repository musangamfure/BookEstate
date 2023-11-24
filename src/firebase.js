// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjSTJEOlTZS765qJP_sQh13GZVHuIAqQw',
  authDomain: 'bookestate-31215.firebaseapp.com',
  projectId: 'bookestate-31215',
  storageBucket: 'bookestate-31215.appspot.com',
  messagingSenderId: '607999557593',
  appId: '1:607999557593:web:87f0ca908cd2bdcf28e3c8',
  measurementId: 'G-C6TWY7ECS1',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics();
export const db = getFirestore();
