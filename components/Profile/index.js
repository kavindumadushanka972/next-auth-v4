'use client'

import ProfileCard from "./ProfileCard"
import ProfileUpdate from "./ProfileUpdate"

const ProfileComponent = ({user}) => {
  
  return (
    <div>
      <ProfileCard user={user} />

      <ProfileUpdate />
    </div>
  )
}

export default ProfileComponent