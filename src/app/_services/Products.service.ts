
import { cookies } from "next/headers";
import { ProductType } from "../_interfaces/products";

export async function getAllProducts(): Promise<ProductType[]|null>
{
  try {

    

    const request = await fetch("https://ecommerce.routemisr.com/api/v1/products")
    const finalResponse = await request.json();
    return finalResponse.data;    
  } catch (error) {
    console.log('error',error)
    return null;
    
  }

}

// export async function getSpecifiedProduct(id: string): promise<ProductType | null>
export async function getSpecifiedProduct(id: string): Promise<ProductType | null>
{
  try {
    const request = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    const finalResponse = await request.json();
    return finalResponse.data;    
  } catch (error) {
    console.log('error',error)
    return null;
    
  }
}