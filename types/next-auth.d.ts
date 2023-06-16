import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        token: JWT;
    }
    interface JWT {
        exp: number;
        accessToken: String;
    }
}
