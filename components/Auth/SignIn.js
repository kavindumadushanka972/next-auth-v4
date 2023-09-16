'use client';
import { signIn } from 'next-auth/react';

/**
 * Signs in users with desired providers and redirect the user to
 * callbackUrl after successfully signin in
 * @param {*} 
 * @returns 
 */
const SignIn = ({ callbackUrl }) => {
  return (
    <div>
      <h2>Sign In With NextAuth</h2>

      {/* Google Login */}
      <div style={{ margin: '30px 0' }}>
        <button onClick={() => signIn('google', { callbackUrl })}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
