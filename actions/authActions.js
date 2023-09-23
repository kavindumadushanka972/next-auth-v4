'use server';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import User from '@/models/userModel';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { generateToken, verifyToken } from '@/utils/token';
import sendEmail from '@/utils/sendEmail';

const BASE_URL = process.env.NEXTAUTH_URL;

/**
 * Updates user name and user profile image
 * @param {Object} params - An object containing name and image
 * @param {string} params.name - name
 * @param {stirng} params.image - image url
 * @returns
 */
export async function updateUser({ name, image }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error('Unauthorized!');

    const user = await User.findByIdAndUpdate(
      session?.user?._id,
      {
        name,
        image,
      },
      { new: true }
    ).select('-password');

    if (!user) throw new Error('Email does not exist!');

    return { msg: 'Update Profile Successfull!' };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

/**
 * this function will responsible to send an email with the encrypted user data
 * @param {*} data
 * @returns
 */
export async function signUpWithCredentials(data) {
  try {
    const user = await User.findOne({ email: data.email });

    if (user) throw new Error('Email already exists!');

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    const token = generateToken({ user: data });

    await sendEmail({
      to: data.email,
      url: `${BASE_URL}/verify?token=${token}`,
      text: 'VERIFY EMAIL',
    });

    return {
      msg: 'SignUp Success! Check your email to complete the registration.',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

/**
 * this function will verify user data
 * @param {*} token
 * @returns
 */
export async function verifyWithCredentials(token) {
  try {
    const { user } = verifyToken(token);

    const userExist = await User.findOne({ email: user.email });

    if (userExist) return { msg: 'Verification success!' };

    const newUser = new User(user);

    await newUser.save();

    return {
      msg: 'Verification success!',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

/**
 * Changes user password, if provider is only 'credentials'
 * @param {Object} params - An object containing old password and new password.
 * @param {string} params.old_pass - Old Passowrd
 * @param {string} params.new_pass - New Password
 * @returns
 */
export async function changePasswordWithCredentials({ old_pass, new_pass }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) throw new Error('Unauthorized!');

    if (session?.user?.provider !== 'credentials') {
      throw new Error(
        `This account is signed in with ${session?.user?.provider}. You can't change the password!`
      );
    }

    const user = await User.findById(session?.user?._id);
    if (!user) throw new Error('User does not exist!');

    const compare = await bcrypt.compare(old_pass, user.password);
    if (!compare) throw new Error('Old password does not match!');

    const newPass = await bcrypt.hash(new_pass, 12);

    await User.findByIdAndUpdate(user._id, { password: newPass });

    return {
      msg: 'Password Changed Successfully!',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}

/**
 * Sends an email with encrypted user id
 * @param {Object} params - An object containing email.
 * @param {string} params.email - The recipient's email address.
 * @returns
 */
export async function forgotPasswordWithCredentials({ email }) {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User does not exists for this email!');

    if (user?.provider !== 'credentials') {
      throw new Error(
        `This account is signed in with ${user?.provider}. You can't reset the password!`
      );
    }

    const token = generateToken({ userId: user._id });

    await sendEmail({
      to: email,
      url: `${BASE_URL}/reset_password?token=${token}`,
      text: 'RESET PASSWORD'
    })

    return {
      msg: 'Success! Check your email to reset your password.',
    };
  } catch (error) {
    redirect(`/errors?error=${error.message}`);
  }
}
