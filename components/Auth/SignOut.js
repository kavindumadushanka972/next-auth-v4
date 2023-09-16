'use client';
import { signOut } from 'next-auth/react';

/**
 * signout the user by removing sessoin cookies
 * @returns
 */
const SignOut = () => {
  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOut;
