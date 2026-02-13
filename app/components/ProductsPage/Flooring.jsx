import React from 'react'
import ProductCard from '../productimages/ProductCrad'
import { flooring } from '../productimages/Productimages'

const Flooring = () => {
  return (
    <section className="bg-[#FAF9F7] py-20">
            {/* HERO / INTRO */}
            <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
              <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
                 Flooring Solutions for Modern & Elegant Spaces
                <span className="block text-orange-700">Premium Flooring That Defines Comfort, Style & Durability</span>
              </h1>
      
              <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
              At Artisan Decor, we offer a curated range of high-quality flooring solutions designed to elevate both residential and commercial interiors. From contemporary homes to high-traffic commercial spaces, our flooring combines aesthetic appeal, strength, and long-lasting performance.
              </p>
            </div>
      
            {/* FEATURES / PRODUCTS */}
            <div className="mt-24 max-w-7xl mx-auto px-6">
              <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
                Key Features
              </h2>
      
              <div className="mt-12">
                {/* ProductCard already contains grid */}
                <ProductCard card={flooring} />
              </div>
            </div>
          </section>
  )
}

export default Flooring