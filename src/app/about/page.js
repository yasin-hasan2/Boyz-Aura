"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
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
          About Boyz Aura
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/placeholder.svg"
            alt="Boyz Aura Team"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div data-aos="fade-left" className="space-y-6">
          <h2 className="text-3xl font-playfair font-bold">Our Story</h2>
          <p className="text-gray-600">
            Boyz Aura was founded in 2020 with a vision to redefine men&apos;s
            fashion. We believe that style is a form of self-expression, and our
            mission is to provide high-quality, trendy clothing that empowers
            men to express their unique personalities.
          </p>
          <p className="text-gray-600">
            Our team of passionate designers and fashion experts work tirelessly
            to bring you the latest trends and timeless classics. We source the
            finest materials and partner with ethical manufacturers to ensure
            that every piece in our collection meets our high standards of
            quality and sustainability.
          </p>
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-playfair font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring
                that each item is made to last.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of fashion, bringing you
                cutting-edge designs and styles.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We&apos;re committed to reducing our environmental impact
                through responsible sourcing and production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
