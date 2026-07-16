

// 'use server';

// import { cookies } from "next/headers";
// import { RegisterFormType } from "./register.types";

// export async function handleRegister(data: RegisterFormType) {
//   try {
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const finalResp = await res.json();
//     console.log('finalResp', finalResp);

//     if (finalResp.message === 'success') {
//       const cookieStore = cookies();
//       cookieStore.set('user-token', finalResp.token, {
//         httpOnly: true,
//         sameSite: 'strict',
//         maxAge: 60 * 60 * 24, // 1 day
//       });

//       return { success: true };
//     }

//     return { success: false, message: finalResp.message };

//   } catch (error) {
//     console.error('handleRegister error', error);
//     return { success: false, message: 'Server error' };
//   }
// }
'use server';

import { cookies } from "next/headers";
import { RegisterFormType } from "./register.types";

export async function handleRegister(data: RegisterFormType) {
  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const finalResp = await res.json();
    console.log('finalResp', finalResp);

    if (finalResp.message === 'success') {
      const cookieStore = await cookies();

      cookieStore.set('user-token', finalResp.token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
      });

      return { success: true };
    }

    return { 
      success: false, 
      message: finalResp.message 
    };

  } catch (error) {
    console.error('handleRegister error', error);

    return { 
      success: false, 
      message: 'Server error' 
    };
  }
}