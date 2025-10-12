

"use client";

import React, { useState, useContext, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RemoveItemBtn from "./RemoveItemBtn";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import { updateCartItemQuantity, clearUserCart } from "./cart.actions"; 
import Link from "next/link";

type ProductType = {
  title: string;
  category?: { name: string };
  imageCover: string;
  id: string;
};

export type ItemType = {
  count: number;
  _id: string;
  price: number;
  product: ProductType;
};

export default function CartTable({
  products,
  numOfCartItems,
  totalCartPrice,
}: {
  products: ItemType[];
  numOfCartItems: number;
  totalCartPrice: number;
  cartId: string
}) {
  const [items, setItems] = useState(products);
  const { updateCartCount } = useContext(CartContext);

  const increaseCount = async (id: string) => {
    const item = items.find((i) => i._id === id);
    if (!item) return;

    const newCount = item.count + 1;
    const output = await updateCartItemQuantity(item.product.id, newCount);

    if (!output.success) {
      toast.error(output.message || "Couldn't update quantity");
      return;
    }

    setItems((prev) =>
      prev.map((i) => (i._id === id ? { ...i, count: newCount } : i))
    );
    updateCartCount(output.numOfCartItems);
  };

  const decreaseCount = async (id: string) => {
    const item = items.find((i) => i._id === id);
    if (!item || item.count <= 1) return;

    const newCount = item.count - 1;
    const output = await updateCartItemQuantity(item.product.id, newCount);

    if (!output.success) {
      toast.error(output.message || "Couldn't update quantity");
      return;
    }

    setItems((prev) =>
      prev.map((i) => (i._id === id ? { ...i, count: newCount } : i))
    );
    updateCartCount(output.numOfCartItems);
  };

  const handleClearCart = async () => {
    const output = await clearUserCart();
    if (!output.success) {
      toast.error(output.message || "Couldn't clear cart");
      return;
    }
    setItems([]);
    updateCartCount(0);
    toast.success("Cart cleared successfully");
  };

 


  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
      <Table>
        <TableHeader className="bg-gray-50 dark:bg-gray-800">
          <TableRow>
            <TableHead className="w-[45%] text-gray-700 dark:text-gray-300">
              Product
            </TableHead>
            <TableHead className="text-gray-700 dark:text-gray-300">
              Price
            </TableHead>
            <TableHead className="text-gray-700 dark:text-gray-300 text-center">
              Quantity
            </TableHead>
            <TableHead className="text-right text-gray-700 dark:text-gray-300">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.length > 0 ? (
            items.map((item) => (
              <TableRow key={item.product.id}>
                <TableCell className="flex items-center space-x-4 py-4">
                  <img
                    src={item.product.imageCover}
                    alt={item.product.title}
                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.product.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {item.product.category?.name}
                    </p>
                  </div>
                </TableCell>

                <TableCell className="text-gray-800 dark:text-gray-200">
                  ${item.price}
                </TableCell>

                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full"
                      onClick={() => decreaseCount(item._id)}
                    >
                      -
                    </Button>
                    <Input
                      className="w-14 text-center"
                      value={item.count}
                      readOnly
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 rounded-full"
                      onClick={() => increaseCount(item._id)}
                    >
                      +
                    </Button>
                  </div>
                </TableCell>

                <TableCell className="text-right">
                  <RemoveItemBtn
                    id={item.product.id}
                    onRemoved={(id) =>
                      setItems((prev) =>
                        prev.filter((i) => i.product.id !== id)
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-6 text-gray-500"
              >
                Your cart is empty 🛒
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

<div className="flex justify-between items-center p-4 border-t dark:border-gray-700">
<Button
  variant="destructive"
  onClick={handleClearCart}
>
  Clear Cart
</Button>


  <div className="text-center flex-1 mx-4">
    <h2 className="text-lg text-gray-700 dark:text-gray-300">
      Total Items: <span className="font-semibold">{items.length}</span>
    </h2>
    <h3 className="text-xl font-semibold text-green-600">
      Total to Pay: ${items.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2)}
    </h3>
  </div>

  <Link href='/cart/payment'>
    <Button
      variant="default"
      onClick={() => {
        console.log("Pay clicked");
      }}
    >
      Pay
    </Button>
  </Link>
</div>


    </div>
  );
}
