declare namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      CLIENT_ID: string
      CLIENT_SECRET: string
    }
  }