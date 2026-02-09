import ProductCard from "./productimages/ProductCrad";
import { collection } from "./productimages/Productimages";

export default function Collection() {
  return (
    <section className="bg-[#FAF9F7] py-10">
      {/* FEATURES / PRODUCTS */}
      <div className="mt-14 max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-center text-3xl font-bold">
          Premium Interior Decor & Collections
        </h2>
        <p className="font-inter mt-4 text-center text-gray-600 max-w-3xl mx-auto px-8">
          Explore our premium interior décor collections including wall panels,
          wallpapers, flooring, and custom design solutions crafted for modern
          residential and commercial spaces.
        </p>

        <div className="mt-12">
          {/* ProductCard already contains grid */}
          <ProductCard card={collection} />
        </div>
      </div>
    </section>
  );
}
