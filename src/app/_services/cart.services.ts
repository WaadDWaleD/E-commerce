

'use server';

import { getUserTokenAuth } from "@/Utils/utils";
import { ItemType } from "../cart/cartTable";

export type CartResonseType = {
  numOfCartItems: number;
  products: ItemType[];
  totalCartPrice: number;
  cartId: string;
};

export async function getUserCartSer(): Promise<CartResonseType> {
  const token = await getUserTokenAuth(); // ✅ moved here

  // if (!token)
  //   return { numOfCartItems: 0, products: [], totalCartPrice: 0 };
if (!token)
    return {
      cartId: "",
      numOfCartItems: 0,
      products: [],
      totalCartPrice: 0,
    };
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    headers: { token: token as string },
    cache: "no-store", 
    next: { tags: ['getUserCartSer'] },
  });

  console.log("📦 API Response Status:", res.status);
  const final = await res.json();
  console.log("🧾 API Response Data:", final);

  // if (!final?.data)
  //   return { numOfCartItems: 0, products: [], totalCartPrice: 0 };

  if (!final?.data)
    return {
      cartId: "",
      numOfCartItems: 0,
      products: [],
      totalCartPrice: 0,
    };
  const {
    numOfCartItems,
    data: { products, totalCartPrice },
    cartId
  } = final;

  return { numOfCartItems, products, totalCartPrice , cartId};
}
