
'use server';

import { cookies } from 'next/headers';
import { decode } from 'next-auth/jwt';
import { revalidatePath, revalidateTag } from 'next/cache';
import { getUserTokenAuth } from '@/Utils/utils';

type AddResult = {
  success: boolean;
  message?: string;
  numOfCartItems?: number;
};

export async function addProductToCart(productId: string): Promise<AddResult> {
  try {
    const cookieStore = cookies();
    const sessionToken =
      cookieStore.get('next-auth.session-token')?.value ||
      cookieStore.get('__Secure-next-auth.session-token')?.value;

    if (!sessionToken) return { success: false, message: 'no-session' };
    if (!process.env.NEXTAUTH_SECRET) return { success: false, message: 'server-misconfig' };

    const decoded = await decode({ token: sessionToken, secret: process.env.NEXTAUTH_SECRET });
    const credentialsToken = (decoded as any)?.credentialsToken;
    if (!credentialsToken) return { success: false, message: 'no-credentials-token' };

    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', token: credentialsToken },
      body: JSON.stringify({ productId }),
      cache: 'no-store',
    });

    const data = await res.json().catch(() => null);
    if (!res.ok) return { success: false, message: data?.message || `API ${res.status}` };

    const num = data?.numOfCartItems ?? data?.data?.numOfCartItems ?? data?.data?.numOfItems ?? 0;

    revalidateTag('getUserCartSer');
    return { success: true, message: 'added', numOfCartItems: num };
  } catch (error) {
    console.error('addProductToCart ERROR:', error);
    return { success: false, message: 'exception' };
  }
}


export async function removeItemFromCart(id: string) {
  try {
    const token = await getUserTokenAuth();
    if (!token) return { success: false, message: "no-token" };

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
      method: "DELETE",
      headers: { token },
      cache: "no-store",
    });

    const data = await res.json().catch(() => null);
    console.log("🧾 removeItemFromCart API response:", res.status, data);

    if (!res.ok || !data) return { success: false, message: data?.message || "remove-failed" };

    const count = Number(data.numOfCartItems) || Number(data.data?.numOfCartItems) || 0;

    return { success: true, numOfCartItems: count };
  } catch (err) {
    console.error("🔥 removeItemFromCart error:", err);
    return { success: false, message: "exception" };
  }
}


////update


export async function updateCartItemQuantity(productId: string, count: number) {
  try {
    const token = await getUserTokenAuth();
    if (!token) return { success: false, message: "no-token" };

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      body: JSON.stringify({ count: count.toString() }),
    });

    const data = await res.json().catch(() => null);
    console.log('updateCartItemQuantity response:', res.status, data);

    if (!res.ok || !data) return { success: false, message: data?.message || 'update-failed' };

    // ارجع العدد الجديد للعناصر من السيرفر
    const numOfCartItems = data.numOfCartItems ?? data.data?.numOfCartItems ?? 0;

    return { success: true, numOfCartItems };
  } catch (err) {
    console.error('updateCartItemQuantity error:', err);
    return { success: false, message: 'exception' };
  }
}


//Delete cart 

export async function clearUserCart() {
  try {
    const token = await getUserTokenAuth();
    if (!token) return { success: false, message: "User not authenticated" };

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
      method: "DELETE",
      headers: {
        token,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "Failed to clear cart" };
    }

    return { success: true, numOfCartItems: 0 };
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
}