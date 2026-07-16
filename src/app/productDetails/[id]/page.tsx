import { getSpecifiedProduct } from "@/app/_services/Products.service";
import React from "react";
import { Tag } from "lucide-react";
import AddProductBtn from "@/app/_Components/AddProductBtn/AddProductBtn";
// import AddToWishlistButton from "@/app/AddToWishlistBtn/page";
import AddToWishlistButton from "@/app/_Components/AddToWishlistButton/AddToWishlistButton";
type ProductDetailsProps = {
  params: { id: string };
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const product = await getSpecifiedProduct(params.id);
  if(!ProductDetails){
    return;
  }
  return (
    <div className="container mx-auto px-6 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-8 border-2 border-green-200">
        
        <div className="flex justify-center ">
          <img
            src={product?.imageCover}
            alt={product?.title}
            className="w-full max-w-md h-auto object-contain rounded-xl shadow-md hover:scale-105 transition-transform duration-300 border-2 border-black-500"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product?.title}
          </h1>

          <div className="flex items-center">
            <i className="fa-solid fa-star text-yellow-400 mr-2"></i>
            <span className="text-lg font-semibold">
              {(product?.ratingsAverage ?? 0).toFixed(1)}
            </span>
            <span className="text-gray-500 ml-2">/ 5</span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product?.description}
          </p>

          <div className="mt-4 text-xl font-semibold flex items-center">
            <Tag className="text-gray-700 mr-2 w-5 h-5" />
            <span className="text-gray-700 mr-2">Price:</span>
            {product?.priceAfterDiscount ? (
              <>
                <span className="line-through text-red-500 mr-3">
                  {product?.price} EGP
                </span>
                <span className="text-green-600">
                  {product?.priceAfterDiscount} EGP
                </span>
              </>
            ) : (
              <span className="text-green-600">{product?.price} EGP</span>
            )}
          </div>

          <div className="text-gray-700 text-sm mt-2">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product?.category?.name}
            </p>
            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product?.brand?.name}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {/* <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300">
              <i className="fa-solid fa-cart-shopping mr-2"></i> Add to Cart
            </button> */}
              <AddProductBtn id ={product.id} />
            
            

            {/* <button className="border border-gray-400 hover:border-red-500 text-gray-600 hover:text-red-500 px-6 py-3 rounded-xl transition-all duration-300">
              <i className="fa-regular fa-heart mr-2"></i> Add to Wishlist
            </button> */}
            <AddToWishlistButton productId={product.id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
