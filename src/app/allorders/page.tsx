'use client'; 

import React, { useEffect, useState } from 'react';
import { getUserOrders, OrderType } from '@/app/_services/orders.services';

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const fetchOrders = async () => {
    const data = await getUserOrders();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (orders.length === 0) return <p>You have no orders yet.</p>;

  return (
    <div className="space-y-4">
      {orders.map(order => (
        <div
          key={order.id}
          className="border p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <p><strong>Order ID:</strong> {order.id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total Price:</strong> {order.totalPrice} EGP</p>
          <p><strong>Products:</strong></p>
          <ul className="ml-4 list-disc">
            {order.products.map((p, i) => (
              <li key={i}>{p.title} - {p.price} EGP</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
