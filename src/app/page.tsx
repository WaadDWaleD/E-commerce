import React, { lazy, Suspense } from "react";
import ProductCard from "./_Components/ProductCard/ProductCard";
import { getAllProducts } from "./_services/Products.service";
import { ProductType } from "./_interfaces/products";
import MySwiper from "@/app/_Components/MySwiper/MySwiper";
import HomeSlider from "./_Components/HomeSlider/HomeSlider";
import CategoriesSlider from "./_Components/CategoriesSlider/CategoriesSlider";

const CategoriesSlide = lazy(() => import('./_Components/CategoriesSlider/CategoriesSlider'))

export default async function Home() {
const allProducts: ProductType[] = (await getAllProducts()) ?? [];
  return (
    <>
      
<HomeSlider/>
<Suspense
  fallback={
    <div className="flex justify-center items-center py-10">
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  }
>
  <CategoriesSlider />
</Suspense>



      {/* 🛍️ قسم المنتجات */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {allProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
