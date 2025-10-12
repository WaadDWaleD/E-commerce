"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';

import 'swiper/css/navigation'; // فقط
type MySwiperProps = {
  imageList?: string[];
  children?: React.ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  navigation?: boolean;
  breakpoints?: { [key: number]: { slidesPerView: number } }; // <-- مهم
};

export default function MySwiper({
  imageList,
  children,
  slidesPerView = 1,
  spaceBetween = 10,
  loop = false,
  autoplay = false,
  navigation = true,
  breakpoints,
}: MySwiperProps) {
  const slides = imageList
    ? imageList.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))
    : children?.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ));

  if (!slides) return null;

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation={navigation}
      loop={loop}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      breakpoints={breakpoints} // <-- هنا
      className="w-full"
    >
      {slides}
    </Swiper>
  );
}
