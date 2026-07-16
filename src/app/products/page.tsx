import React from 'react'
import ProductCard from "../_Components/ProductCard/ProductCard";
import { getAllProducts } from "../_services/Products.service";
import { ProductType } from "../_interfaces/products";

export default async function Products() {
const allProducts: ProductType[] = (await getAllProducts()) || [];    
  return (
    <>
    <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {allProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
    </>
  )
}
