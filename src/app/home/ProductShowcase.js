/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: "$89.99",
    image:
      "https://i.pinimg.com/736x/f0/7e/72/f07e7261e18f48b02c1c201048be7064.jpg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Navy Chinos",
    price: "$69.99",
    image:
      "https://i.pinimg.com/736x/01/a4/84/01a484e21f7cf4278ebdff8e9f5d6d48.jpg",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Beige Blazer",
    price: "$149.99",
    image:
      "https://i.pinimg.com/736x/f3/e3/da/f3e3da1513fa51e511f1537308ec443d.jpg",
  },
  {
    id: 4,
    name: "Green Polo Shirt",
    price: "$59.99",
    image:
      "https://i.pinimg.com/736x/49/c0/bc/49c0bcd4e84b1f32afff9a48b7dbd7b3.jpg",
    badge: "Sale",
  },
  {
    id: 5,
    name: "Khaki Pants",
    price: "$79.99",
    image:
      "https://i.pinimg.com/736x/11/e7/ed/11e7eda35fb2c433666920ea9adcca29.jpg",
  },
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-4/5 mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-10">
            Products Collection
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              onSlideChange={(swiper) =>
                setActiveProduct(products[swiper.realIndex])
              }
              className="aspect-[16/9] md:aspect-[21/9]"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="relative w-full h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-full">
                      {product.image?.startsWith("http") ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-gray-50">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-xl text-gray-800 mb-4">
                        {product.price}
                      </p>
                      {product.badge && (
                        <Badge
                          className="mb-4 w-fit"
                          variant={
                            product.badge === "Sale"
                              ? "destructive"
                              : product.badge === "New Arrival"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {product.badge}
                        </Badge>
                      )}
                      <p className="text-gray-600 mb-6">
                        Discover our premium menswear, designed for the modern
                        gentleman. Crafted with attention to detail and quality.
                      </p>
                      <Link href={`/product/${product.id}`} passHref>
                        <Button size="lg" className="group w-full sm:w-auto">
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
