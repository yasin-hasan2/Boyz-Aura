"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  { id: 1, name: "Classic White Shirt", price: 89.99, image: "/product1.jpg" },
  { id: 2, name: "Denim Jacket", price: 129.99, image: "/product2.jpg" },
  { id: 3, name: "Slim Fit Chinos", price: 69.99, image: "/product3.jpg" },
  { id: 4, name: "Leather Sneakers", price: 99.99, image: "/product4.jpg" },
  { id: 5, name: "Striped Polo Shirt", price: 59.99, image: "/product5.jpg" },
  { id: 6, name: "Wool Coat", price: 199.99, image: "/product6.jpg" },
];

export default function FeaturedProducts() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">
          Featured Collection
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </CardContent>
                <CardFooter className="flex flex-col items-start p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button onClick={() => setQuickViewProduct(product)}>
                    Quick View
                  </Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {quickViewProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setQuickViewProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white p-8 rounded-lg max-w-2xl w-full m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickViewProduct(null)}
              className="float-right text-2xl"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <Image
                src={quickViewProduct.image || "/placeholder.svg"}
                alt={quickViewProduct.name}
                width={400}
                height={400}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  {quickViewProduct.name}
                </h3>
                <p className="text-xl text-gray-600 mb-4">
                  ${quickViewProduct.price.toFixed(2)}
                </p>
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
