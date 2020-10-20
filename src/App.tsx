import React from 'react';
import './App.css';

import firebase from 'firebase';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import firebaseConfig from './firebase-config.json';

import { ChatRoom, SignIn } from './components';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>

      <section>{user ? <ChatRoom auth={auth} firestore={firestore} /> : <SignIn auth={auth} />}</section>
    </div>
  );
}

export default App;
