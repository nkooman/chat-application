import React, { FormEvent, createRef, useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Message } from '../types'
import { ChatMessage } from './ChatMessage';
import { nameof } from '../utils';

export const ChatRoom = ({ auth, firestore }: { auth: firebase.auth.Auth, firestore: firebase.firestore.Firestore }) => {
  const scrollTo = createRef<HTMLDivElement>();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy(nameof<Message>('createdAt')).limit(25);

  const [messages] = useCollectionData<Message>(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  
  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const uid = auth.currentUser?.uid || ''
    const photoURL = auth.currentUser?.photoURL || ''


    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    scrollTo.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main>
        {messages &&
          messages.map(msg => <ChatMessage auth={auth} message={msg} key={msg.id} />)}

        <div ref={scrollTo}></div>
      </main>

      <form onSubmit={e => sendMessage(e)}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} type="text"/>

        <button type="submit">🕊</button>
      </form>
    </>
  );
};
