"use client"
import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import { carpet } from '../productimages/Productimages'
export default function Carpet() {
  return (
    <section className="bg-[#FAF9F7] py-20">
                   {/* HERO / INTRO */}
                   <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
                     <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
                        Premium Carpets for
                       <span className="block text-orange-700">Elegant Interiors</span>
                     </h1>
             
                     <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
                   Transform your living and working spaces with our premium quality carpets, crafted to add warmth, comfort, and timeless style. Designed for both modern and classic interiors, our carpets blend durability with luxurious textures.
                     </p>
                   </div>
             
                   {/* FEATURES / PRODUCTS */}
                   <div className="mt-24 max-w-7xl mx-auto px-6">
                     <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
                       Key Features
                     </h2>
             
                     <div className="mt-12">
                       {/* ProductCard already contains grid */}
                       <ProductCard card={carpet} />
                     </div>
                   </div>
                 </section>
  )
}
