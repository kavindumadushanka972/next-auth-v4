import SignIn from '@/components/Auth/SignIn';
import React from 'react';

/**
 * 
 * @param {*} this params coming from the 'callbackUrl' in the signin page url
 * @returns 
 */
const SignInPage = ({ searchParams: { callbackUrl } }) => {
  return <SignIn callbackUrl={callbackUrl || '/'} />;
};

export default SignInPage;
