import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh Cart",
      authorize: async function (credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const finalRes = await res.json();

        if (finalRes.message === "success") {
          const decodedObject: { id: string } = jwtDecode(finalRes.token);
          return {
            id: decodedObject.id,
            name: finalRes.user.name,
            email: finalRes.user.email,
            credentialsToken: finalRes.token,
          };
        }
        return null;
      },
      credentials: {
        email: { type: "email", label: "User Email" },
        password: { type: "password", label: "Password" },
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.credentialsToken = params.user.credentialsToken;
        params.token.userId = params.user.id;
      }
      return params.token;
    },
    session(params) {
      if (params.session.user) {
        params.session.user.id = params.token.userId as string;
      }
      return params.session;
    },
  },

  session:{
    maxAge: 60 * 60 * 24
  }
};


// import type { NextAuthOptions } from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const nextAuthConfig: NextAuthOptions = {
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(credentials),
//         });

//         const user = await res.json();

//         if (res.ok && user?.token) {
//           return user; // نجاح
//         } else {
//           throw new Error(user?.message || "Invalid credentials");
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login", // صفحة تسجيل الدخول
//   },
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };
