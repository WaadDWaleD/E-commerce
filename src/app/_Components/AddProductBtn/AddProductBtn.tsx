"use client";

import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { addProductToCart } from "@/app/cart/cart.actions";
import { toast } from "sonner";
import { CartContext } from "@/app/cart/CartContext";

export default function AddProductBtn({ id }: { id: string }) {
  const { updateCartCount } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  async function handleAddToCart() {
    try {
      setLoading(true);
      const res = await addProductToCart(id); 

      console.log('AddProductBtn: response', res);

      if (res.success) {
        toast.success("Product added to cart");
        if (typeof res.numOfCartItems === 'number') updateCartCount(res.numOfCartItems);
        setLoading(false);
        return;
      }

      if (res.message === 'no-session') {
        toast.error("Please log in to add products to cart");
        // optional: redirect to login
        setLoading(false);
        return;
      }

      if (res.message === 'no-credentials-token') {
        toast.error("Session error (credentials token missing). Please re-login.");
        setLoading(false);
        return;
      }

      toast.error(res.message || "Something went wrong while adding to cart");
      setLoading(false);
    } catch (err) {
      console.error('AddProductBtn error', err);
      toast.error("Network/server error");
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
    >
      {loading ? "Adding..." : (<><i className="fa-solid fa-cart-shopping mr-2"></i> Add to Cart</>)}
    </Button>
  );
}
