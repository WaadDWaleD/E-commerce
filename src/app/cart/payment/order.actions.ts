'use server';

import { getUserTokenAuth } from "@/Utils/utils"
import { revalidatePath } from "next/cache";

export type ShippingAddressType = {
        details: string,
        phone: string,
        city: string
}


// export  async function createCashOrder(cartId: string, shippingAddress: ShippingAddressType) {
//     const token = await getUserTokenAuth();
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
//         method: "post",
//         body: JSON.stringify({shippingAddress}),
//         headers: {
//             "Content-Type" : "application/json",
//             token: token as string
//         }
//     });

//     const final = await res.json();
//     console.log('final create order', final)
//     if(final.status === "success"){
//         revalidatePath('/cart');
//         return true;
//     }
//     else{
//         return false;
//     }
// }
export async function createCashOrder(cartId: string, shippingAddress: ShippingAddressType) {
    const token = await getUserTokenAuth();

    if (!cartId) {
        console.error("❌ Missing cartId");
        return false;
    }

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, {
        method: "POST",
        body: JSON.stringify({ shippingAddress }),
        headers: {
            "Content-Type": "application/json",
            token: token as string,
        },
    });

    const final = await res.json();
    console.log("🧾 final create order:", final); // 👈 شوف الرد هنا

    if (final.status === "success") {
        revalidatePath("/cart");
        return true;
    } else {
        console.error("❌ Create order failed:", final);
        return false;
    }
}


// export async function createCheckoutSession(cartId: string, shippingAddress: ShippingAddressType) {
//     const token = await getUserTokenAuth();
//     const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
//         method: "post",
//         body: JSON.stringify({shippingAddress}),
//         headers: {
//             "Content-Type" : "application/json",
//             token: token as string
//         }
//     });

//     const final = await res.json();
//     console.log('final create checkout', final)
//     if(final.status === "success"){
//         // revalidatePath('/cart');
//         return final.session.url;
//     }
//     else{
//         return false;
//     }
// }

export async function createCheckoutSession(cartId: string, shippingAddress: ShippingAddressType) {
  const token = await getUserTokenAuth();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {
      method: "post",
      body: JSON.stringify({ shippingAddress }),
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
    }
  );

  const final = await res.json();
  console.log("🧾 Checkout API response:", final); // <---- مهم جدًا

  if (final.status === "success") {
    return final.session.url;
  } else {
    console.error("❌ Checkout failed:", final.message || final.errors || final);
    return false;
  }
}
