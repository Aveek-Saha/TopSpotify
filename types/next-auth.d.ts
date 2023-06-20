import NextAuth, { Account, DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        token: JWT;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: Account.accessToken,
        exp?: Account.exp
    }
}
