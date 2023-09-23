/**
 * This middleware will protect the desired specific pages.
 * If a user is not logged in, the default behavior is to redirect them to the sign-in page.
 */
// export { default } from 'next-auth/middleware';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;

    if (pathname.startsWith('/dashboard') && token?.user?.role !== 'admin') {
      // return NextResponse.redirect(origin);
      return new NextResponse('You are not authorized!');
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token; // if true => matcher pages will accessible
      },
    },
  }
);

// The middleware function will only be invoked if the authorized callback returns true.
export const config = {
  matcher: ['/profile/:path*', '/protected/:path*', '/dashboard/:path*'], // protected paths
};
