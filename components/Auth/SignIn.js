'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

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

      <div style={{margin: '30px 0'}}>
        <Link href="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
