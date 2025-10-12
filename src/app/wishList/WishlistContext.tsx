



'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getWishlistProductsServer, removeProductFromWishlistSer } from "../_services/wishlist.services";

type WishlistContextType = {
  wishlistIds: string[];
  refreshWishlist: () => Promise<void>;
  removeFromWishlist: (id: string) => Promise<void>;
};

const WishlistContext = createContext<WishlistContextType>({
  wishlistIds: [],
  refreshWishlist: async () => {},
  removeFromWishlist: async () => {},
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  const refreshWishlist = async () => {
    try {
      const products = await getWishlistProductsServer();
      const ids = products.map((p: any) => p._id || p.id);
      setWishlistIds(ids);
    } catch (err) {
      console.error("Failed to refresh wishlist:", err);
    }
  };

  const removeFromWishlist = async (id: string) => {
    try {
      // حذف من الباكيند
      const res = await removeProductFromWishlistSer(id);

      if (res.success) {
        // حذف محليًا فورًا
        setWishlistIds(prev => prev.filter(pid => pid !== id));
      } else {
        console.error("Failed to remove product:", res.message);
      }
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

  useEffect(() => {
    refreshWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistIds, refreshWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
