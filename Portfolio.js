
import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 min-h-screen text-white">
      <section className="flex flex-col items-center justify-center h-screen text-center p-4">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
          Arul Murugan N
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="text-2xl mb-8">
          Frontend Developer
        </motion.h2>
        <motion.a href="mailto:arulmurugann1207@gmail.com" whileHover={{ scale: 1.1 }} className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full">
          Contact Me
        </motion.a>
      </section>
    </main>
  );
}
