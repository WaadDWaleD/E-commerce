


'use server';

import { getUserTokenAuth } from "@/Utils/utils";

const baseUrl = "https://ecommerce.routemisr.com/api/v1/wishlist";

export type WishlistResponseType = {
  success: boolean;
  message?: string;
  wishlistId?: string;
  data?: any;
};

export async function addProductToWishlistSer(productId: string): Promise<WishlistResponseType> {
  const token = await getUserTokenAuth();
  if (!token) return { success: false, message: "User not authenticated" };

  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify({ productId }),
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to add to wishlist");
    return { success: true, message: "added" };
  } catch (err: any) {
    console.error("Add wishlist error:", err);
    return { success: false, message: err.message };
  }
}

export async function removeProductFromWishlistSer(productId: string): Promise<WishlistResponseType> {
  const token = await getUserTokenAuth();
  if (!token) return { success: false, message: "User not authenticated" };

  try {
    const res = await fetch(`${baseUrl}/${productId}`, {
      method: "DELETE",
      headers: { token: token as string },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to remove from wishlist");
    return { success: true, message: "removed" };
  } catch (err: any) {
    console.error("Remove wishlist error:", err);
    return { success: false, message: err.message };
  }
}

export async function getWishlistProductsServer(): Promise<any[]> {
  const token = await getUserTokenAuth();

  if (!token) {
    console.log("❌ No token found in getWishlistProductsServer");
    return [];
  }

  try {
    console.log("🛰️ Fetching wishlist from:", baseUrl);
    const res = await fetch(baseUrl, {
      headers: { token: token as string },
      cache: "no-store",
    });

    console.log("📡 Wishlist response status:", res.status);

    if (!res.ok) throw new Error("Failed to fetch wishlist");

    const data = await res.json();
    console.log("✅ Wishlist response JSON:", data);

    return data?.data || [];
  } catch (err: any) {
    console.error("❌ Get wishlist error:", err);
    return [];
  }
}
