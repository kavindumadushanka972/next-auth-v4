'use server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

const ProtectedServerPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>
        This is a <i style={{ color: 'red' }}>Server-Side</i> protected page
      </h1>

      <p>
        You are logged in as: <b>{session?.user?.name}</b>
      </p>
    </div>
  );
};

export default ProtectedServerPage;
