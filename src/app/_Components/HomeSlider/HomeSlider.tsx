
"use client";

import Image from "next/image";
import MySwiper from "@/app/_Components/MySwiper/MySwiper";

import img1 from "@images/slider-image-1.jpeg";
import img2 from "@images/slider-image-2.jpeg";
import img3 from "@images/slider-image-3.jpeg";
import blog1 from "@images/blog-img-1.jpeg";
import blog2 from "@images/blog-img-2.jpeg";
import 'swiper/css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
export default function HomeSlider() {
  return (
    <div className="w-full py-10 px-4 md:px-10 ">
      <div className="shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start border-2 border-green-100
">
        <div className="flex-1 w-full md:h-[500px] h-[300px] rounded-2xl overflow-hidden group ">
          <MySwiper
            imageList={[img1.src, img2.src, img3.src]}
            slidesPerView={1}
            loop
            autoplay
            navigation={false}
            pagination={false}
            className="w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="w-full md:w-1/4 flex flex-col gap-4 mt-4 md:mt-0">
          <div className="relative w-full h-[150px] md:h-[200px] rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <Image src={blog1} alt="blog-1" fill className="object-cover" />
          </div>
          <div className="relative w-full h-[150px] md:h-[200px] rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <Image src={blog2} alt="blog-2" fill className="object-cover" />
          </div>
        </div>

      </div>
    </div>
  );
}
