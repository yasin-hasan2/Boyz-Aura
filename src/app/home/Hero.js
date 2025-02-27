"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Winter Fashion",
    subtitle: "The New Winter Collection",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email%20WordPress%20Theme.jpg-EUM2nHQCuu6y11zXYv1pgzFq2jrScc.jpeg",
    color: "bg-coral-100",
  },
  {
    title: "Urban Edge",
    subtitle: "Jackets for the Modern Man",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mixtas%20-%20Minimalist%20Fashion%20WooCommerce%20Theme.jpg-U21UzBQmiyb14AePpM6eoR6tlyzlRa.jpeg",
    color: "bg-blue-100",
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
      className="h-[100vh]"
    >
      {slides.map((slide, index) => (
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
                  <span className="text-sm uppercase tracking-wider">
                    {slide.title}
                  </span>
                  <h1 className="font-playfair text-5xl md:text-7xl font-bold">
                    {slide.subtitle}
                  </h1>
                  <Link href="/shop">
                    <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
                      Shop Now
                    </button>
                  </Link>
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
                    className="relative z-10 w-full h-full object-cover object-center"
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
