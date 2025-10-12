// // // // // // // // "use client";

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { ProductType } from "@/app/_interfaces/products";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import AddProductBtn from "../AddProductBtn/AddProductBtn";
// // // // // // // // import ProductDetails from "@/app/productDetails/[id]/page";

// // // // // // // // type ProductCardProps = {
// // // // // // // //   product: ProductType;
// // // // // // // // };

// // // // // // // // export default function ProductCard({ product }: ProductCardProps) {
// // // // // // // //   const [isFavorite, setIsFavorite] = useState(false);

// // // // // // // //   const handleFavoriteClick = (e: React.MouseEvent) => {
// // // // // // // //     e.preventDefault(); // يمنع الانتقال من الكارد لو جوه لينك
// // // // // // // //     setIsFavorite(!isFavorite);
// // // // // // // //   };
// // // // // // // //  if(!ProductDetails){
// // // // // // // //     return;
// // // // // // // //   }
// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       key={product.id}
// // // // // // // //       className="p-4 rounded-xl text-gray-800 flex flex-col group transition-all duration-300 
// // // // // // // //                  border border-gray-300 shadow-inner hover:shadow-lg hover:border-green-500"
// // // // // // // //     >
// // // // // // // //       {/* الصورة والعنوان داخل اللينك */}
// // // // // // // //       <Link href={`/productDetails/${product.id}`} className="block">
// // // // // // // //         <div className="overflow-hidden rounded-md flex justify-center items-center">
// // // // // // // //           <img
// // // // // // // //             src={product.imageCover}
// // // // // // // //             alt={product.title}
// // // // // // // //             className="w-full h-auto max-h-60 object-contain transition-transform duration-300 group-hover:scale-105"
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         <h2 className="text-lg font-bold mt-3 transition-colors duration-300 group-hover:text-green-600">
// // // // // // // //           {product.title.split(" ", 2).join(" ")}
// // // // // // // //         </h2>

// // // // // // // //         <p className="text-sm text-gray-500 line-clamp-2 transition-colors duration-300 group-hover:text-gray-700">
// // // // // // // //           {product.description}
// // // // // // // //         </p>
// // // // // // // //       </Link>

// // // // // // // //       {/* الكاتيجوري والبراند */}
// // // // // // // //       <div className="mt-2 text-sm text-gray-500 group-hover:text-gray-700">
// // // // // // // //         <p>Category: {product.category.name}</p>
// // // // // // // //         <p>Brand: {product.brand.name}</p>
// // // // // // // //       </div>

// // // // // // // //       {/* السعر + القلب */}
// // // // // // // //       <div className="mt-auto pt-3 flex items-center justify-between">
// // // // // // // //         <h5 className="flex items-center gap-2">
// // // // // // // //           Price:&nbsp;
// // // // // // // //           {product.priceAfterDiscount ? (
// // // // // // // //             <>
// // // // // // // //               <span className="line-through text-red-500 me-3">
// // // // // // // //                 {product.price} EGP
// // // // // // // //               </span>
// // // // // // // //               <span className="font-semibold text-green-500">
// // // // // // // //                 {product.priceAfterDiscount} EGP
// // // // // // // //               </span>
// // // // // // // //             </>
// // // // // // // //           ) : (
// // // // // // // //             <span className="font-semibold">{product.price} EGP</span>
// // // // // // // //           )}
// // // // // // // //         </h5>

// // // // // // // //         {/* أيقونة الفيفوريت */}
// // // // // // // //         <button
// // // // // // // //           onClick={handleFavoriteClick}
// // // // // // // //           className={`text-xl transition-all duration-300 ${
// // // // // // // //             isFavorite
// // // // // // // //               ? "text-red-500 scale-110 animate-pulse"
// // // // // // // //               : "text-gray-400 hover:text-red-500"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <i
// // // // // // // //             className={`fa${isFavorite ? "-solid" : "-regular"} fa-heart`}
// // // // // // // //           ></i>
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* الريفيو + زرار الكارت */}
// // // // // // // //       <div className="mt-3 flex items-center justify-between">
// // // // // // // //         <p className="flex items-center transition-colors duration-300 group-hover:text-yellow-500">
// // // // // // // //           <i className="fa-solid fa-star me-2"></i>
// // // // // // // //           {(product.ratingsAverage ?? 0).toFixed(1)}
// // // // // // // //         </p>

// // // // // // // //         {/* <Button
// // // // // // // //           className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-green-500 
// // // // // // // //                      text-white text-base px-4 py-2 rounded-xl shadow-md"
// // // // // // // //         >
// // // // // // // //           Add to Cart
// // // // // // // //         </Button> */}
// // // // // // // //         <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ">
// // // // // // // //               <AddProductBtn id ={product.id} />
// // // // // // // //                     </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }














'use client';

import React, { useState, useEffect } from "react";
import { ProductType } from "@/app/_interfaces/products";
import Link from "next/link";
import AddProductBtn from "../AddProductBtn/AddProductBtn";
import { toast } from "sonner";
import { addProductToWishlistSer, removeProductFromWishlistSer } from "@/app/_services/wishlist.services";
import { useWishlist } from "../../wishList/WishlistContext";

type ProductCardProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { wishlistIds, refreshWishlist } = useWishlist();
  const [isFavorite, setIsFavorite] = useState(false);
  const [loadingFavorite, setLoadingFavorite] = useState(false);

  // تحديث القلب بناءً على wishlistIds
  useEffect(() => {
    setIsFavorite(wishlistIds.includes(product._id || product.id));
  }, [wishlistIds, product._id, product.id]);

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (loadingFavorite) return;
    setLoadingFavorite(true);

    try {
      if (isFavorite) {
        setIsFavorite(false); // 🔴 تحديث فوري للقلب
        const res = await removeProductFromWishlistSer(product._id || product.id);
        if (res.success) {
          toast.success("Removed from wishlist 💔");
          refreshWishlist();
        } else {
          toast.error(res.message || "Error removing from wishlist");
          setIsFavorite(true); // استرجاع الحالة لو حصل خطأ
        }
      } else {
        setIsFavorite(true); // 🔴 تحديث فوري للقلب
        const res = await addProductToWishlistSer(product._id || product.id);
        if (res.success) {
          toast.success("Added to wishlist ❤️");
          refreshWishlist();
        } else {
          toast.error(res.message || "Error adding to wishlist");
          setIsFavorite(false); // استرجاع الحالة لو حصل خطأ
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred");
      setIsFavorite(!isFavorite); // استرجاع الحالة لو حصل خطأ
    } finally {
      setLoadingFavorite(false);
    }
  };

  return (
    <div className="p-4 rounded-xl text-gray-800 flex flex-col group transition-all duration-300 border border-gray-300 shadow-inner hover:shadow-lg hover:border-green-500">
      <Link href={`/productDetails/${product._id || product.id}`} className="block">
        <div className="overflow-hidden rounded-md flex justify-center items-center">
          <img
            src={product.imageCover}
            alt={product.title}
            className="w-full h-auto max-h-60 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h2 className="text-lg font-bold mt-3 transition-colors duration-300 group-hover:text-green-600">
          {product.title.split(" ", 2).join(" ")}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2 transition-colors duration-300 group-hover:text-gray-700">
          {product.description}
        </p>
      </Link>

      <div className="mt-2 text-sm text-gray-500 group-hover:text-gray-700">
        <p>Category: {product.category.name}</p>
        <p>Brand: {product.brand.name}</p>
      </div>

      <div className="mt-auto pt-3 flex items-center justify-between">
        <h5 className="flex items-center gap-2">
          Price:&nbsp;
          {product.priceAfterDiscount ? (
            <>
              <span className="line-through text-red-500 me-3">{product.price} EGP</span>
              <span className="font-semibold text-green-500">{product.priceAfterDiscount} EGP</span>
            </>
          ) : (
            <span className="font-semibold">{product.price} EGP</span>
          )}
        </h5>

        <button
          onClick={handleFavoriteClick}
          disabled={loadingFavorite}
          className={`text-xl transition-all duration-300 ${
            isFavorite ? "text-red-500 scale-110 animate-pulse" : "text-gray-400 hover:text-red-500"
          }`}
        >
          {loadingFavorite ? (
            <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            <i className={`fa${isFavorite ? "-solid" : "-regular"} fa-heart`}></i>
          )}
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="flex items-center transition-colors duration-300 group-hover:text-yellow-500">
          <i className="fa-solid fa-star me-2"></i>
          {(product.ratingsAverage ?? 0).toFixed(1)}
        </p>

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddProductBtn id={product._id || product.id} />
        </div>
      </div>
    </div>
  );
}
