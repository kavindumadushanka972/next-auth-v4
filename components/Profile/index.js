'use client'

import ProfileCard from "./ProfileCard"

const ProfileComponent = ({user}) => {
  
  return (
    <div>
      <ProfileCard user={user} />
    </div>
  )
}

export default ProfileComponent