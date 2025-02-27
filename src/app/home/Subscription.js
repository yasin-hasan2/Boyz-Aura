"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function Subscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate API call
    try {
      // Add your subscription logic here
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#444cf7_12%,transparent_12.5%,transparent_87%,#444cf7_87.5%,#444cf7),linear-gradient(150deg,#444cf7_12%,transparent_12.5%,transparent_87%,#444cf7_87.5%,#444cf7),linear-gradient(30deg,#444cf7_12%,transparent_12.5%,transparent_87%,#444cf7_87.5%,#444cf7),linear-gradient(150deg,#444cf7_12%,transparent_12.5%,transparent_87%,#444cf7_87.5%,#444cf7),linear-gradient(60deg,#444cf777_25%,transparent_25.5%,transparent_75%,#444cf777_75%,#444cf777),linear-gradient(60deg,#444cf777_25%,transparent_25.5%,transparent_75%,#444cf777_75%,#444cf777)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px,0_0,40px_70px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Join the Fashion Revolution
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Subscribe to get exclusive access to new collections, special
            offers, and style tips.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </div>

            {/* Status Messages */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: status ? 1 : 0, y: status ? 0 : 10 }}
              className="absolute -bottom-8 left-0 right-0"
            >
              {status === "success" && (
                <p className="text-green-400 flex items-center justify-center gap-1">
                  <Check size={16} /> Successfully subscribed!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 flex items-center justify-center gap-1">
                  <X size={16} /> Something went wrong. Please try again.
                </p>
              )}
            </motion.div>
          </form>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">10K+</h4>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">5K+</h4>
              <p className="text-gray-400">Products</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">98%</h4>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">24/7</h4>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
