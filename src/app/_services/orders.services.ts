'use server';

import { getUserTokenAuth } from '@/Utils/utils';
import { string } from 'zod';

export type OrderType = {
  id: string;
  products: any[]; 
  totalPrice: number;
  status: string;
  createdAt: string;
};

export async function getUserOrders(): Promise<OrderType[]> {
  const token = await getUserTokenAuth();
  if (!token) return [];

  try {
    const res = await fetch(
      'https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17',
      {
        headers: { token },
        cache: 'no-store',
      }
    );

    const data = await res.json();
    if (!res.ok || !data?.data) return [];
    return data.data; // مفروض تكون مصفوفة الطلبات
  } catch (err) {
    console.error('Error fetching user orders:', err);
    return [];
  }
}
