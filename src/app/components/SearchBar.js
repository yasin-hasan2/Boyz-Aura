"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="w-5 h-5" />
      </button>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-full mt-2"
          >
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
