'use server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ProfileComponent from '@/components/Profile';
import { getServerSession } from 'next-auth';

const ProfileServerPage = async () => {

  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 style={{ color: 'red' }}>Profile Server Side</h1>

      <ProfileComponent user={session?.user} />
    </div>
  );
};

export default ProfileServerPage;
