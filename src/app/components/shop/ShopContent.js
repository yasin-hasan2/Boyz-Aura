"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";

export default function ShopContent() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 1000],
    sortBy: "newest",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shop Our Collection
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8">
          <Filters filters={filters} setFilters={setFilters} />
          <ProductGrid filters={filters} />
        </div>
      </div>
    </main>
  );
}
