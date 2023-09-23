'use client';

import ProfileCard from './ProfileCard';
import ProfileUpdate from './ProfileUpdate';
import { useSession } from 'next-auth/react';
import ChangePassword from './ChangePassword';

const ProfileComponent = ({ user }) => {
  const { data: session, update } = useSession();

  /**
   * first time: session = undefined, user existes => run server-side
   * next time: session exists => run client side
   */

  return (
    <div>
      <ProfileCard user={session?.user || user} />

      <ProfileUpdate update={update} />

      {(session?.user?.provider === 'credentials' ||
        user?.provider === 'credentials') && <ChangePassword />}
    </div>
  );
};

export default ProfileComponent;
