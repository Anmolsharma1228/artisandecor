import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { walldesignslides as slides } from "../serviceimages/Swiperimages";
import Cards from "../../components/Cards";
import { walldesigncarddata } from "../serviceimages/ServiceCardData";
import { Check } from "lucide-react";

const WallDesign = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        {/* TEXT */}
        <div className="w-full md:max-w-2xl">
          {/* H1 – Only one per page */}
          <h1 className="text-xl sm:text-2xl font-bold mb-4">
            Premium Wall Design Services for Modern Interiors
          </h1>

          <p>
            Wall design plays a vital role in shaping the elegance, mood, and
            personality of interior spaces. Our premium wall design services
            focus on transforming ordinary walls into sophisticated design
            statements using modern materials, textures, and finishes. Each wall
            is thoughtfully designed to complement your interior theme while
            enhancing depth, warmth, and visual balance. From contemporary wall
            panels to luxury accent walls, we deliver durable and timeless
            solutions for homes, offices, and commercial spaces.
          </p>
        </div>

        {/* IMAGE / SLIDER */}
        <SwiperSlides slides={slides} />
      </section>

      {/* WHAT WE OFFER */}
      <section className="mt-16 md:mt-36 px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
          Our Wall Design Services
        </h2>

        <Cards card={walldesigncarddata} />
      </section>

      {/* DETAILS SECTION */}
      <section className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* WHERE IT WORKS */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Where Wall Designs Work Best
              </h3>

              <ul className="list-disc space-y-3 text-gray-700">
                <li>Living Rooms & Drawing Areas</li>
                <li>Bedrooms & Master Suites</li>
                <li>TV Units & Feature Walls</li>
                <li>Offices & Corporate Interiors</li>
                <li>Hotels, Cafés & Restaurants</li>
                <li>Retail Stores & Showrooms</li>
              </ul>
            </div>

            {/* WHY CHOOSE US */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Our Wall Design Services?
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Premium-quality materials & finishes
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Modern, customized wall designs
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Skilled designers & craftsmen
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  On-time and hassle-free execution
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Cost-effective without compromising quality
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Customer-focused design approach
                </li>
              </ul>
            </div>

            {/* PROCESS */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Our Wall Design Process
              </h3>

              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Consultation to understand space & preferences</li>
                <li>Design planning with material & texture selection</li>
                <li>Professional execution with precise installation</li>
                <li>Final inspection & premium finishing</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WallDesign;
