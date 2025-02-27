"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89.99,
    category: "t-shirts",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Black Denim Jacket",
    price: 129.99,
    category: "jackets",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 69.99,
    category: "pants",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Leather Belt",
    price: 39.99,
    category: "accessories",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Panjabi",
    price: 70.99,
    category: "panjabi",
    image: "/placeholder.svg",
  },
  // Add more products...
];

export default function ProductGrid({ filters }) {
  const filteredProducts = products
    .filter((product) => {
      return (
        (filters.category === "all" || product.category === filters.category) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      );
    })
    .sort((a, b) => {
      if (filters.sortBy === "price-low-high") return a.price - b.price;
      if (filters.sortBy === "price-high-low") return b.price - a.price;
      return b.id - a.id; // newest
    });

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  height={400}
                  width={400}
                  className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-black px-6 py-2 rounded-full">
                    Quick View
                  </span>
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">
                  Tk {product.price.toFixed(2)} /-
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
