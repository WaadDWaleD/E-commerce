import { CategoryType } from "../_interfaces/products";

export async function getAllCategories(): Promise<CategoryType[] | null> {
  try {
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    
    if (!res.ok) {
      console.error('Failed to fetch categories:', res.status, res.statusText);
      return null;
    }

    const finalRes = await res.json();
    return finalRes.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return null;
  }
}
