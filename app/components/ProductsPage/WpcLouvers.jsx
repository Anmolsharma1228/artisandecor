import React from "react";
import ProductCard from "../productimages/ProductCrad.jsx";
import { wpclouvers, pvcpanels,charcoalLouvers, flutedpanel  } from "../productimages/Productimages.jsx";

const allpanels = [
  ...wpclouvers,
  ...pvcpanels,
  ...charcoalLouvers,
  ...flutedpanel
]

const WpcLouvers = () => {
  return  <section className="bg-[#FAF9F7] py-20">
        {/* HERO / INTRO */}
        <div className="max-w-5xl ml-4 md:ml-10 px-6 mt-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
             Enhance your interiors with our premium range of
            <span className="block text-orange-700">PVC Panels, Charcoal Louvers, Fluted Panels, and WPC Louvers.</span>
          </h1>
  
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
         From the sleek and low-maintenance finish of PVC panels to the bold elegance of charcoal louvers, the refined texture of fluted designs, and the natural wood appeal of WPC louvers — each option is crafted to elevate walls, ceilings, and feature spaces with long-lasting performance and contemporary aesthetics.
          </p>
        </div>
  
        {/* FEATURES / PRODUCTS */}
        <div className="mt-24 max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-orange-700">
            Key Features
          </h2>
  
          <div className="mt-12">
            {/* ProductCard already contains grid */}
            <ProductCard card={allpanels} />
          </div>
        </div>
      </section>
};

export default WpcLouvers;
