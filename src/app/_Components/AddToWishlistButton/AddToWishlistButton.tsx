'use client';

import React, { useState } from "react";
import { useWishlist } from "../wishList/WishlistContext";
import { addProductToWishlistSer, removeProductFromWishlistSer } from "../_services/wishlist.services";

type AddToWishlistButtonProps = {
  productId: string;
};

export default function AddToWishlistButton({ productId }: AddToWishlistButtonProps) {
  const { wishlistIds, refreshWishlist } = useWishlist();
  const [loading, setLoading] = useState(false);

  const isFavorite = wishlistIds.includes(productId);

  const handleClick = async () => {
    setLoading(true);
    try {
      if (isFavorite) {
        await removeProductFromWishlistSer(productId);
      } else {
        await addProductToWishlistSer(productId);
      }
      await refreshWishlist();
    } catch (err) {
      console.error("Wishlist error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`flex items-center px-6 py-3 rounded-xl border transition-all duration-300 ${
        isFavorite
          ? "border-red-500 text-red-500 cursor-not-allowed"
          : "border-gray-400 text-gray-600 hover:border-red-500 hover:text-red-500"
      }`}
    >
      <i className={`fa-heart mr-2 ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
      {loading ? "Loading..." : isFavorite ? "Added" : "Add to Wishlist"}
    </button>
  );
}
