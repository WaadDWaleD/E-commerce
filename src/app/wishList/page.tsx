


'use client';

import React, { useEffect, useState } from "react";
import ProductCard from "@/app/_Components/ProductCard/ProductCard";
import { getWishlistProductsServer, removeProductFromWishlistSer } from "@/app/_services/wishlist.services";
import { ShoppingBag, Loader2 } from "lucide-react"; // أيقونات Lucide

export default function WishlistPage() {
  const [wishlistProducts, setWishlistProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWishlist() {
      setLoading(true);
      const products = await getWishlistProductsServer();
      setWishlistProducts(products);
      setLoading(false);
    }
    fetchWishlist();
  }, []);

  const handleRemove = async (productId: string) => {
    const res = await removeProductFromWishlistSer(productId);
    if (res.success) {
      setWishlistProducts(prev => prev.filter(p => (p._id || p.id) !== productId));
    } else {
      console.error("Failed to remove product:", res.message);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
        <p className="text-gray-500 text-lg">Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingBag className="w-6 h-6 text-gray-700" />
        <h2 className="text-2xl font-bold">My Wishlist</h2>
      </div>

      {wishlistProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-20">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => (
            <div key={product._id || product.id} className="relative">
              <ProductCard
                product={product}
                initialIsFavorite={true}
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm"
                onClick={() => handleRemove(product._id || product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
