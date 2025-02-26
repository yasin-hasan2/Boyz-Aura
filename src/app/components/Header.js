"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Boyz Aura
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:text-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:text-gray-600 transition duration-300"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="py-2 hover:text-gray-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="py-2 hover:text-gray-600 transition duration-300"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-gray-600 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:text-gray-600 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
