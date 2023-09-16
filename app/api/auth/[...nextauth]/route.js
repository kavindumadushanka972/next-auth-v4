import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/utils/database';
import User from '@/models/userModel';

connectDB();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.type === 'oauth') {
        return await signInWithOAuth({ account, profile });
      }
      return true;
    },
    async jwt({ token, trigger, session }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

/**
 *
 * @param {*} param0
 * @returns boolean after signin/signup user
 */
async function signInWithOAuth({ account, profile }) {
  // check if there is a user already
  const user = await User.findOne({ email: profile.email });

  if (user) {
    return true; // signin
  }

  // if not save user data in the database
  const newUser = new User({
    name: profile.name,
    email: profile.email,
    image: profile.picture,
    provider: account.provider,
  });

  await newUser.save();

  return true;
}
