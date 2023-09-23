## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionalities
- SignIn with OAuth(Google)
- SignIn with Credentials(Email, Password)
- SignUp with Name, Email, Password
- Email Verification
- Update Profile Details
- Change Password
- Reset Password
- Middleware to secure certain pages(Admin Pages)

### .env variables
```dotenv
NEXTAUTH_URL= # ex: http://localhost:3000
NEXTAUTH_SECRET= # type openssl rand -base64 32 on the terminal and put generated value here. Used by NextAuth
GOOGLE_CLIENT_ID= # get from https://console.cloud.google.com
GOOGLE_CLIENT_SECRET= # get from https://console.cloud.google.com
MONGODB_URI= # get from https://www.mongodb.com
TOKEN_SECRET= # type openssl rand -base64 32 on the terminal and put generated value here. Used in jwt sign & verify
EMAIL_USER= # email address for send emails
EMAIL_PASSWORD= # email password to 'EMAIL_USER' account. check https://support.google.com/mail/answer/185833?hl=en to generate the password