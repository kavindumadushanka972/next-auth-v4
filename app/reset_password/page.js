import ResetPasswordComponent from '@/components/Auth/ResetPassword';
import React from 'react';

/**
 * ResetPasswordPage component renders the ResetPasswordComponent with a token prop.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.searchParams - An object containing search parameters from the URL.
 * @param {string} props.searchParams.token - The token extracted from the URL.
 * @returns {JSX.Element} The ResetPasswordPage component.
 */
const ResetPasswordPage = ({ searchParams: { token } }) => {
  return <ResetPasswordComponent token={token} />;
};

export default ResetPasswordPage;
