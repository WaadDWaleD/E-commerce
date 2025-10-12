

"use client";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { removeItemFromCart } from "./cart.actions";
import { toast } from "sonner";
import { CartContext } from "./CartContext";

export default function RemoveItemBtn({
  id,
  onRemoved,
}: {
  id: string;
  onRemoved?: (id: string) => void;
}) {
  const { updateCartCount } = useContext(CartContext);

  async function handleRemoveItem() {
    try {
      const output = await removeItemFromCart(id);
      console.log("Remove output:", output);

      if (!output.success) {
        toast.error(output.message || "Couldn't remove item, please try again");
        return;
      }

      // حدث Navbar
      updateCartCount(output.numOfCartItems);

      // حدث CartTable
      if (onRemoved) onRemoved(id);

      toast.success("Item removed successfully");
    } catch (err) {
      console.error("RemoveItemBtn error:", err);
      toast.error("Something went wrong, please try again");
    }
  }

  return (
    <Button
      variant="destructive"
      size="sm"
      className="rounded-lg"
      onClick={handleRemoveItem}
    >
      Remove
    </Button>
  );
}
