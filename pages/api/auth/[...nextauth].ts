import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            authorization:
                "https://accounts.spotify.com/authorize?scope=user-read-email,user-top-read",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.refresh_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.token = token
        
            return session;
        },
    },
};
export default NextAuth(authOptions);
