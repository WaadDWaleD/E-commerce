"use client";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "@/app/_services/categories.service";
import MySwiper from "../MySwiper/MySwiper";
import 'swiper/css';
import 'swiper/css/navigation'; // فقط

export default function CategoriesSlider() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getAllCategories();
      if (data) setCategories(data);
    }
    fetchCategories();
  }, []);

  if (categories.length === 0) return null;

  const slides = categories.map((cat) => (
    <div key={cat.id} className="flex flex-col items-center gap-2">
      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-xl overflow-hidden border-2 border-green-300 hover:scale-105 transition-transform duration-300">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm sm:text-base font-medium text-center">{cat.name}</span>
    </div>
  ));

  return (
    <div className="py-8 px-4 md:px-10 rounded-2xl shadow-lg border-2 border-green-100">
      <MySwiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay
        navigation={false}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
      >
        {slides}
      </MySwiper>
    </div>
  );
}
