export async function getAllBrands(limit: number = 10, keyword: string = '') {
  try {
    const url = new URL('https://ecommerce.routemisr.com/api/v1/brands');
    if (limit) url.searchParams.append('limit', limit.toString());
    if (keyword) url.searchParams.append('keyword', keyword);

    const res = await fetch(url.toString(), { cache: 'no-store' });
    const data = await res.json();

    return data?.data || [];
  } catch (err) {
    console.error('Error fetching brands:', err);
    return [];
  }
}
