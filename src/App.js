import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react=firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // configuration
  apiKey: "AIzaSyDBNob_goOJUqhQtdK1Gy0tESmf6aU_bVg",
  authDomain: "notbitcoinceo-chat-app.firebaseapp.com",
  projectId: "notbitcoinceo-chat-app",
  storageBucket: "notbitcoinceo-chat-app.appspot.com",
  messagingSenderId: "562662856768",
  appId: "1:562662856768:web:6d303e23f314f68656e7a5",
  measurementId: "G-SCF6HK0HEK"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState();

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {}
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  } auth.signInWithPopup(provider);

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {}

export default App;

