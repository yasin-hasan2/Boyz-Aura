"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-playfair font-bold">
            Boyz Aura
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link
              href="/shop"
              className="hover:text-gray-600 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <SearchBar />
            <UserMenu />
            <ShoppingCart />
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link
                href="/shop"
                className="hover:text-gray-600 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
