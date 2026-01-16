import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import { curtains } from '../productimages/Productimages'
export default function Curtains() {
  return (
     <section className="bg-[#FAF9F7] py-20">
                {/* HERO / INTRO */}
                <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
                  <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                     premium
                    <span className="block text-orange-700">Curtains & Drapes</span>
                  </h1>
          
                  <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
                   Enhance your interiors with our elegant range of curtains designed to balance style, comfort, and privacy. Crafted with high-quality fabrics and refined finishes, our curtains add warmth, softness, and sophistication to living rooms, bedrooms, and commercial spaces.
                  </p>
                </div>
          
                {/* FEATURES / PRODUCTS */}
                <div className="mt-24 max-w-7xl mx-auto px-6">
                  <h2 className="text-center text-3xl font-bold text-orange-700">
                    Key Features
                  </h2>
          
                  <div className="mt-12">
                    {/* ProductCard already contains grid */}
                    <ProductCard card={curtains} />
                  </div>
                </div>
              </section>
  )
}
