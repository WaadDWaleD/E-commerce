import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    credentialsToken?: string;
    id: string;
  }

  interface Session {
    user: {
      id: string;
      credentialsToken?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    credentialsToken?: string;
    userId?: string;
  }
}