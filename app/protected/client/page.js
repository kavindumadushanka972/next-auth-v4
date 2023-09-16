'use client';
import { useSession } from 'next-auth/react';

const ProtectedClientPage = () => {

  const { data: session } = useSession(); // session cookies

  return (
    <div>
      <h1>
        This is a <i style={{ color: 'red' }}>Client-Side</i> protected page
      </h1>

      <p>
        You are logged in as: <b>{session?.user?.name}</b>
      </p>
    </div>
  );
};

export default ProtectedClientPage;
