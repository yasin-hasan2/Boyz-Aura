"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import CategoryHighlights from "./components/CategoryHighlights";
import SpecialOffers from "./components/SpecialOffers";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import Subscription from "./home/Subscription";
import ProductShowcase from "./home/ProductShowcase";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main>
      <Hero />
      <CategoryHighlights />
      <ProductShowcase />
      <SpecialOffers />
      <FeaturedProducts />
      <Subscription />
      <Testimonials />
    </main>
  );
}
