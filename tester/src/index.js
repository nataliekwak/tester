import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBGH3e_gE9xW4kLl5InR3c-pvJTvt12M9Y",
  authDomain: "natalie-kwak.firebaseapp.com",
  projectId: "natalie-kwak",
  storageBucket: "natalie-kwak.appspot.com",
  messagingSenderId: "670660586950",
  appId: "1:670660586950:web:96b0df91987359d28716c7",
  measurementId: "G-4S01QBEDCQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
