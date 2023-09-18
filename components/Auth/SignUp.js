'use client';
import { signUpWithCredentials } from '@/actions/authActions';
import Link from 'next/link';
import React from 'react';
import Button from '../global/Button';
import Form from '../global/Form';

const SignUp = () => {
  async function handleSignUpCredentials(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await signUpWithCredentials({ name, email, password });

    if (res?.msg) alert(res?.msg);
  }

  return (
    <div>
      <h2>Sign up With NextAuth</h2>

      <Form action={handleSignUpCredentials} style={{ margin: '30px 0' }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <Button value="Register" />
      </Form>

      <div style={{margin: '30px 0'}}>
        <Link href="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;
