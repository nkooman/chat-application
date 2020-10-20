import React from 'react';

import { FirebaseAuth } from '@firebase/auth-types';

export const SignOut = ({ auth }: { auth: FirebaseAuth }) => {
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};
