import React from 'react';
import firebase from 'firebase';

import { Message } from '../types';

export const ChatMessage = ({ auth, message }: { auth: firebase.auth.Auth, message: Message }) => {
  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="Chat message user avatar" />
      <p>{text}</p>
    </div>
  );
};
