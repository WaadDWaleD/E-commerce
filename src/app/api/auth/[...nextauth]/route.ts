// import { nextAuthConfig } from "@/next-auth/nextAuth.config";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";




// const nextHandler = NextAuth(nextAuthConfig)

// export {nextHandler as GET, nextHandler as POST}


import NextAuth from "next-auth";
import { nextAuthConfig } from "@/next-auth/nextAuth.config";

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
