import React, { useState, useEffect } from 'react';
import './css/App.css';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

function Login({onLogin, setStart}) {

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAERTNpMBLxr3ExY7s4YnuXAJUzVnRFzq8",
    authDomain: "alieninvaderreact.firebaseapp.com",
    projectId: "alieninvaderreact",
    storageBucket: "alieninvaderreact.appspot.com",
    messagingSenderId: "351353651255",
    appId: "1:351353651255:web:eebc74b16d376a1ba6ffb2",
  };

  initializeApp(firebaseConfig);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider)
        .then((result) => {
          // User signed in
          console.log(result.user);
        }).catch((error) => {
      // Handle Errors here.
      console.error(error);
    });
  };

  const auth = getAuth();
  auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      console.log("User is signed in:", user);
      // setUserId(user.uid)
      onLogin(user.uid)
      // setStart(true);
    } else {
      // No user is signed in.
      console.log("No user is signed in.");
    }
  });


  return (
      <div>
        <button onClick={signInWithGoogle} >Sign in with Google</button>
      </div>
  );
}

export default Login;