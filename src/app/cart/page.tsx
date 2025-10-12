
import { getUserTokenAuth } from "@/Utils/utils";
import CartTable from "./cartTable";
import { CartResonseType, getUserCartSer } from "../_services/cart.services";
import { ShoppingCart } from "lucide-react"; 


async function getUserCart(): Promise<CartResonseType> {
  const res = await getUserCartSer();
  return res;
  

}

export default async function CartPage() {
  const cartData = await getUserCart();

  return (
 <div className="max-w-6xl mx-auto p-6">
  {/* الهيدينج مع الأيقونة */}
  <div className="flex items-center gap-2 mb-4">
    <ShoppingCart className="w-8 h-8 text-gray-900 dark:text-white" />
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
      Your Shopping Cart
    </h1>
  </div>

  {/* جدول الكارت */}
  <CartTable
    products={cartData.products}
    numOfCartItems={cartData.numOfCartItems}
    totalCartPrice={cartData.totalCartPrice}
  />
</div>
  );
}
