"use client"
import CatalogueCard from "../components/CatalogueCard";
import CatalogueData from "../components/Data/CatalogueData";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CataloguePage() {
  return (
    <div className="bg-[#FAF9F7]">
      {/* Header */}
      <section className="relative overflow-hidden mt-6">
        {/* Soft artisan gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-green-50" />

        <motion.div variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }} className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-orange-600 mb-4">
            Artisan Decor
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Product Catalogue
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Inspired materials, thoughtful craftsmanship, elegant living
          </p>

          <div className="mt-6 inline-flex items-center gap-2 border border-orange-200 px-6 py-2 rounded-full text-sm text-orange-700 bg-white/70 backdrop-blur">
            Click on a series to explore
          </div>
        </motion.div>
      </section>

      {/* Catalogue Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CatalogueData.map((category, index) => (
            <CatalogueCard key={index} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
