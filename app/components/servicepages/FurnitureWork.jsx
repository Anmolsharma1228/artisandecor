"use client";
import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { allfurnitureslides as slides } from "../serviceimages/Swiperimages"
import { furnitureworkcarddata } from "../serviceimages/ServiceCardData";
import Cards from "../../components/Cards";
import { Check } from "lucide-react";


const FurnitureWork = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        {/* TEXT */}
        <div className="w-full md:max-w-2xl">
          <h1 className="font-playfair text-lg sm:text-xl font-semibold mb-2">
            Furniture work plays a key role in defining both comfort and
            functionality within a space.
          </h1>
          <p className="font-inter">
            Well-crafted furniture enhances usability while complementing the
            overall interior design. Custom furniture solutions are designed to
            fit your space, style, and daily needs. Quality materials ensure
            durability and long-lasting performance. Thoughtful design improves
            storage, organization, and space efficiency. Modern furniture
            balances aesthetics with everyday practicality. Ergonomic designs
            support comfort and ease of use. Attention to detail ensures a
            refined and polished finish. From modular units to bespoke pieces,
            every element is crafted with precision. Furniture work enhances the
            character and warmth of interiors. Skilled craftsmanship delivers
            furniture that is both stylish and functional.
          </p>
        </div>

        {/* SWIPER */}
       <SwiperSlides slides={slides} />
      </div>
      {/* WHAT WE OFFER */}
      <div className="mt-16 md:mt-36 px-4">
        <h1 className="font-playfair text-center text-2xl sm:text-3xl font-bold mb-10">
           All Types Of Furniture Design Services for Homes & Offices
        </h1>

        <Cards card={furnitureworkcarddata} />
      </div>
      <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*  First Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Residential (Home) Furniture Work
              </h1>

              <ul className="font-inter list-disc space-y-3 text-gray-700">
                <li>Living Room Furniture – Sofas, TV units, coffee tables, display units</li>
                <li>Bedroom Furniture – Beds, wardrobes, side tables, dressing units</li>
                <li>Modular Kitchen Furniture – Cabinets, drawers, pantry units</li>
                <li>Dining Furniture – Dining tables, chairs, crockery units</li>
                <li>Bathroom Furniture – Vanity units, storage cabinets</li>
                <li>Balcony & Outdoor Furniture – Seating, swing chairs, storage benches</li>
                <li>Kids Room Furniture – Study tables, bunk beds, storage units</li>
                <li>Utility Furniture – Shoe racks, storage cabinets, laundry units</li>
              </ul>
            </div>

            {/* Second Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Us for Home Furniture?
              </h1>

              <ul className="font-inter space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Custom-designed furniture tailored to your home
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Smart storage and space-saving furniture solutions
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Premium-quality materials and durable fittings
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Skilled craftsmanship with precise finishing
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Affordable pricing without compromising quality
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  On-time delivery and clean installation
                </li>
              </ul>
            </div>

            {/* Third Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Our Home Furniture Process
              </h1>

              <ul className="font-inter space-y-3 text-gray-700 list-decimal">
                <li>
                  Consultation – Understanding your furniture needs, space, and
                  lifestyle
                </li>
                <li>
                  Design & Planning – Furniture layout, material selection, and
                  finishes
                </li>
                <li>
                  Manufacturing – Precision-crafted furniture using quality
                  materials
                </li>
                <li>
                  Installation – Professional fitting with attention to detail
                </li>
                <li>Handover – Perfectly finished, ready-to-use furniture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureWork;
