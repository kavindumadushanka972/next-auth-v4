'use client';

import { SessionProvider } from 'next-auth/react';

/**
 * This is the session context which keeps session variables such as user etc.
 * By wrapping children components with this 'SessionProvider', session variables
 * can be used inside children components
 * @param {*} param0
 * @returns
 */
const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
