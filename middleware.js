/**
 * This middleware will protect the desired specific pages.
 * If a user is not logged in, the default behavior is to redirect them to the sign-in page.
 */
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile/:path*', '/protected/:path*', '/dashboard/:path*'], // protected paths
};
