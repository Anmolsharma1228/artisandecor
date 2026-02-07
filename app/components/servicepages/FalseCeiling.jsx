import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { falseceilingslides as slides } from "../serviceimages/Swiperimages";
import Cards from "../../components/Cards";
import { falseceilingcarddata as card } from "../serviceimages/ServiceCardData";
import { Check } from "lucide-react";

const FalseCeiling = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        <div className="w-full md:max-w-2xl">
          {/* H1 – Only one per page */}
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            False Ceiling Design Services for Homes & Offices
          </h1>

          <p>
            False ceiling design enhances interiors by adding elegance, improving
            lighting, and increasing comfort. At AH Decor, we provide premium
            false ceiling services using gypsum, POP, wooden, and modular ceiling
            systems for residential and commercial spaces. Our designs conceal
            wiring, support modern LED lighting, and improve acoustics while
            maintaining a clean and refined look. Every ceiling is customized to
            match your space, layout, and interior style, ensuring durability,
            functionality, and long-lasting visual appeal.
          </p>
        </div>

        {/* IMAGE / SLIDER */}
        <SwiperSlides slides={slides} />
      </section>

      {/* SERVICES OFFERED */}
      <section className="mt-16 md:mt-36 px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Our False Ceiling Solutions
        </h2>

        <Cards card={card} />
      </section>

      {/* DETAILS SECTION */}
      <section className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* WHERE IT WORKS */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Where False Ceilings Work Best
              </h3>

              <ul className="list-disc space-y-3 text-gray-700">
                <li>Living Rooms & Drawing Areas</li>
                <li>Bedrooms & Master Suites</li>
                <li>TV Units & Feature Ceilings</li>
                <li>Offices & Corporate Spaces</li>
                <li>Hotels, Cafés & Restaurants</li>
                <li>Retail Stores & Showrooms</li>
              </ul>
            </div>

            {/* WHY CHOOSE US */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Our False Ceiling Services?
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Premium gypsum, POP & wooden ceiling materials
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Custom ceiling designs with modern lighting
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Skilled craftsmanship & precise execution
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Safe, clean & on-time project completion
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Cost-effective solutions without quality compromise
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Client-focused design approach
                </li>
              </ul>
            </div>

            {/* PROCESS */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Our False Ceiling Installation Process
              </h3>

              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Site consultation & space assessment</li>
                <li>Design planning with material & lighting selection</li>
                <li>Professional installation with structural precision</li>
                <li>Final finishing, inspection & quality check</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FalseCeiling;
