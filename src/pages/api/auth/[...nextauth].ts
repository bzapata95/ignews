import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  //Configure one o more authentication provider
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    })
    // ... add more provider here
  ],
})