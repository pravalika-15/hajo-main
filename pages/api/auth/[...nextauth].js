import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url == "/my-trips") {
        return Promise.resolve("/");
      }

      return Promise.resolve("/");
    },
    async signIn({ account, profile }) {
      return (
        profile.email_verified && profile.email.endsWith("@iitbhilai.ac.in")
      );
      // return true // Do different verification for other providers that don't have `email_verified`
    },
  },
});
