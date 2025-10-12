"use client";

import { CartContextProvider } from "@/app/cart/CartContext";
import { WishlistProvider } from "@/app/wishList/WishlistContext";
import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>
    <CartContextProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
      
    </CartContextProvider>
    
    </SessionProvider>
}
