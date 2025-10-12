'use client';
export type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image?: string; 
};

export async function getAllCategories(limit = 10, page = 1, keyword = ''): Promise<CategoryType[]> {
  try {
    const url = new URL('https://ecommerce.routemisr.com/api/v1/categories');
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('page', page.toString());
    if (keyword) url.searchParams.append('keyword', keyword);

    const res = await fetch(url.toString());
    const data = await res.json();

    if (!res.ok || !data?.data) return [];
    return data.data; // مصفوفة التصنيفات
  } catch (err) {
    console.error('Error fetching categories:', err);
    return [];
  }
}
