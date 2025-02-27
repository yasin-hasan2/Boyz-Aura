"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const heroSlides = [
  {
    title: "Summer Collection",
    subtitle: "Discover the latest trends",
    image: "/hero-summer.jpg",
    color: "bg-yellow-100",
  },
  {
    title: "Urban Streetwear",
    subtitle: "Express your style",
    image: "/hero-urban.jpg",
    color: "bg-blue-100",
  },
  {
    title: "Accessories",
    subtitle: "Complete your look",
    image: "/hero-accessories.jpg",
    color: "bg-green-100",
  },
];

export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="h-[80vh]"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={`relative h-full ${slide.color}`}>
            <div className="container mx-auto h-full flex items-center px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl md:text-6xl font-bold font-playfair">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                  <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                    Shop Now
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px]"
                >
                  <div className="absolute inset-0 rounded-full bg-white/50 blur-3xl" />
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    height={500}
                    width={500}
                    className="relative z-10 w-full h-full object-cover object-center rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
