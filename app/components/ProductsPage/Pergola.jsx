"use client"
import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import {pergola} from '../productimages/Productimages'

export default function Pergola() {
  return (
    <section className="bg-[#FAF9F7] py-20">
          {/* HERO / INTRO */}
          <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
              Elegant Pergola Solutions
              <span className="block text-orange-700">for Outdoor Living</span>
            </h1>
    
            <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
            Create a stylish and comfortable outdoor space with our modern pergola structures, designed to enhance your home, commercial, or hospitality environments. Our pergolas combine aesthetic appeal, durability, and weather protection for year-round outdoor comfort.
            </p>
          </div>
    
          {/* FEATURES / PRODUCTS */}
          <div className="mt-24 max-w-7xl mx-auto px-6">
            <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
              Key Features
            </h2>
    
            <div className="mt-12">
              {/* ProductCard already contains grid */}
              <ProductCard card={pergola} />
            </div>
          </div>
        </section>
    
  )
}
