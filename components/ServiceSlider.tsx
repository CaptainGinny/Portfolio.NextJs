"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";

const ServiceSlider = () => {
  return (
    <div className="w-full md:w-[70%] px-4">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className="relative rounded-md cursor-pointer flex flex-col 
                        gap-6 group text-white shadow-lg rounded-xl px-6 py-8 
                        h-[360px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center 
                          transition-transform duration-300 
                          group-hover:scale-105"
                style={{ backgroundImage: `url(${item.backgroundImage})`}}
              />
              <div
                className="absolute inset-0 bg-black opacity-0 
                          group-hover:opacity-50 transition-opacity 
                          duration-300 opacity-40"
              />
              <div
                className="relative flex flex-col gap-3 z-10 overflow-hidden"
              >
                <item.icon
                  className="text-blue-600 group-hover:text-blue-400 
                            w-6 h-6 mb-2"
                />
                <h1
                  className="text-lg sm:text-xl font-bold break-words"
                >
                  {item.title}
                </h1>
                <p
                  className="text-sm sm:text-base md:text-sm break-words 
                            text-white-600"
                >
                  {item.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;