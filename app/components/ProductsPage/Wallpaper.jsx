"use client";
import ProductCard from "../productimages/ProductCrad";
import { wallpaper } from "../productimages/Productimages";

const Wallpaper = () => {
  return (
    <section className="bg-[#FAF9F7] py-20">
      {/* HERO / INTRO */}
      <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
        <h1 className="font-playfair text-2xl md:text-3xl font-bold leading-tight">
          Walls That Speak Style, Texture,
          <span className="block text-orange-700">and Elegance</span>
        </h1>

        <p className="font-inter mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
          Artisan Decor wallpapers are designed to elevate interior spaces with
          refined patterns, rich textures, and long-lasting finishes. Crafted
          using premium materials, our wallpapers offer a perfect balance of
          beauty and durability, making them ideal for both residential and
          commercial interiors.
        </p>
      </div>

      {/* FEATURES / PRODUCTS */}
      <div className="mt-24 max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-center text-3xl font-bold text-orange-700">
          Key Features
        </h2>

        <div className="mt-12">
          {/* ProductCard already contains grid */}
          <ProductCard card={wallpaper} />
        </div>
      </div>
    </section>
  );
};

export default Wallpaper;
