import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import { decking } from '../productimages/Productimages'

const Decking = () => {
  return (
    <section className="bg-[#FAF9F7] py-20">
            {/* HERO / INTRO */}
            <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
              <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
                Premium Decking for
                <span className="block text-orange-700">Outdoor & Indoor Spaces</span>
              </h1>
      
              <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
               Enhance your outdoor and semi-outdoor spaces with our premium decking solutions, designed to combine durability, elegance, and natural beauty. Our decking products are crafted to withstand weather conditions while maintaining their rich finish and strength.
              </p>
            </div>
      
            {/* FEATURES / PRODUCTS */}
            <div className="mt-24 max-w-7xl mx-auto px-6">
              <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
                Key Features
              </h2>
      
              <div className="mt-12">
                {/* ProductCard already contains grid */}
                <ProductCard card={decking} />
              </div>
            </div>
          </section>
  )
}

export default Decking