import { verifyWithCredentials } from '@/actions/authActions';
import React from 'react';

const VerifyPage = async ({ searchParams: { token } }) => {
  const res = await verifyWithCredentials(token);

  return (
    <div>
      <h1 style={{color: 'green'}}>{res?.msg}</h1>
    </div>
  );
};

export default VerifyPage;
