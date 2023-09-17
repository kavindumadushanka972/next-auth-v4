'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import User from "@/models/userModel"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation';

export async function updateUser({name, image}) {
  const session = await getServerSession(authOptions)
  if(!session) throw new Error('Unauthorized!')
  
  try {
    const user = await User.findByIdAndUpdate(session?.user?._id, {
      name, image
    }, {new: true}).select('-password')

    if(!user) throw new Error('Email does not exist!')

    return {msg: 'Update Profile Successfull!'}
  } catch (error) {
    redirect(`/errors?error=${error.message}`)
  }
}