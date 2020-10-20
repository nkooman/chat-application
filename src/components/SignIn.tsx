import React from 'react';

import firebase from 'firebase';

export const SignIn = ({ auth }: { auth: firebase.auth.Auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};
