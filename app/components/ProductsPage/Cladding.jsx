"use client"
import React from 'react'
import ProductCard from '../productimages/ProductCrad';
import { cladding, decking } from '../productimages/Productimages';

const cladingdecking = [
 ...cladding,
 ...decking
]

export default function Cladding() {
  return (
      <section className="bg-[#FAF9F7] py-20">
          {/* HERO / INTRO */}
          <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
               Premium Decking & Cladding Solutions
              <span className="block text-orange-700">Designed for Modern Indoor & Outdoor Spaces</span>
            </h1>
    
            <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
           Transform your spaces with high-performance decking and cladding solutions that combine durability, aesthetics, and architectural elegance. At Artisan Decor, we offer premium materials crafted to enhance both residential and commercial environments while ensuring long-lasting performance in all conditions.
            </p>
          </div>
    
          {/* FEATURES / PRODUCTS */}
          <div className="mt-24 max-w-7xl mx-auto px-6">
            <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
              Key Features
            </h2>
    
            <div className="mt-12">
              {/* ProductCard already contains grid */}
              <ProductCard card={cladingdecking} />
            </div>
          </div>
        </section>
  )
}
