import React, { useState, useEffect } from 'react';
import './css/App.css';
import Button from '@mui/material/Button';
import {teal, purple} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

  const theme = createTheme({
    palette: {
      primary:{
        main: '#00695c',
      },
      secondary: purple,
    },
  });

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
    } else {
      // No user is signed in.
      console.log("No user is signed in.");
    }
  });


  return (
      <div className='Google-login'>
        <ThemeProvider theme={theme}>
            <Button className='Google-login-btn' variant="contained" color='primary' onClick={signInWithGoogle}>Sign in with Google</Button>;
        </ThemeProvider>
      </div>
  );
}

export default Login;