// // import { decode } from "next-auth/jwt";
// // import { cookies } from "next/headers";

// // export async function getUserTokenAuth(){
// //     const cookie = await cookies();
// //     const sessionToken = cookie.get('next-auth.session-token')?.value


// //     const decodedToken = decode({token: sessionToken, secret: process.env.NEXTAUTH_SECRET || ''})
// //     return decodedToken?.credentialsToken;
// // }

// import { decode } from "next-auth/jwt";
// import { cookies } from "next/headers";

// export async function getUserTokenAuth() {
  
//   const cookie = await cookies();
//   const sessionToken = cookie.get("next-auth.session-token")?.value;

//   if (!sessionToken) return null;
//   if (!process.env.NEXTAUTH_SECRET) {
//     console.error(" NEXTAUTH_SECRET is missing!");
//     return null;
//   }

//   const decodedToken = await decode({
//     token: sessionToken,
//     secret: process.env.NEXTAUTH_SECRET,
//   });

//   return decodedToken?.credentialsToken;
// }

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserTokenAuth() {
  const cookieStore = await cookies();

  const sessionToken =
    cookieStore.get("__Secure-next-auth.session-token")?.value ??
    cookieStore.get("next-auth.session-token")?.value;

  if (!sessionToken || !process.env.NEXTAUTH_SECRET) {
    return null;
  }

  try {
    const decodedToken = await decode({
      token: sessionToken,
      secret: process.env.NEXTAUTH_SECRET,
    });

    return decodedToken?.credentialsToken ?? null;
  } catch (error) {
    console.error("Failed to decode NextAuth session token:", error);
    return null;
  }
}

