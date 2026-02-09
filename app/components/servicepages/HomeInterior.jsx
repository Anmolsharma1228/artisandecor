"use client";
import React from "react";
import SwiperSlides from '../../components/SwiperSlides'
import { homeinteriorslides as slides } from '../serviceimages/Swiperimages'
import Cards from "../../components/Cards";
import { homeinteriorcarddata } from "../serviceimages/ServiceCardData";
import { Check } from "lucide-react";


const HomeInterior = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        {/* TEXT */}
        <div className="w-full md:max-w-2xl">
          <h1 className="font-playfair text-lg sm:text-xl font-semibold mb-2">
            Home interiors reflect your lifestyle, comfort, and personal taste.
          </h1>
          <p className="font-inter">
            A thoughtfully designed home creates harmony between aesthetics and
            functionality. Smart space planning ensures every corner is used
            efficiently and beautifully. Carefully chosen colors add warmth,
            calm, and character to living spaces. Well-designed lighting
            enhances ambiance and highlights interior details. Modern furniture
            brings comfort while maintaining a stylish appearance. Storage
            solutions are designed to keep homes organized and clutter-free.
            Bedrooms are planned for relaxation and privacy. Living areas are
            designed for comfort and social interaction. Kitchens combine
            practicality with modern design elements. Every design detail is
            crafted to suit your daily living needs. A well-designed home
            interior turns a house into a welcoming home.
          </p>
        </div>
        {/* SWIPER */}
        <SwiperSlides slides={slides} />
      </div>
      {/* WHAT WE OFFER */}
      <div className="mt-16 md:mt-36 px-4">
        <h1 className="font-playfair text-center text-2xl sm:text-3xl font-bold mb-10">
           Home Interior Design Services for Homes
        </h1>
      <Cards card={homeinteriorcarddata} />
      </div>
      <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*  First Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Home Interiors Work Best In
              </h1>

              <ul className="font-inter list-disc space-y-3 text-gray-700">
                <li>Living Rooms & Drawing Areas</li>
                <li>Bedrooms & Master Suites</li>
                <li>Kitchens & Dining Spaces</li>
                <li>Bathrooms & Vanity Areas</li>
                <li>Balconies & Lounge Corners</li>
                <li>Villas, Flats & Apartments</li>
              </ul>
            </div>

            {/* Second Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Us for Home Interiors?
              </h1>

              <ul className="font-inter space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Personalized designs tailored to your lifestyle
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Smart space planning for comfort and functionality
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Premium materials and elegant finishes
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Seamless execution with attention to detail
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Budget-friendly solutions without quality compromise
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Timely project completion and clean handover
                </li>
              </ul>
            </div>

            {/* Third Card */}
            <div>
              <h1 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Our Home Interior Process
              </h1>

              <ul className="font-inter space-y-3 text-gray-700 list-decimal">
                <li>
                  Consultation – Understanding your vision, needs, and lifestyle
                </li>
                <li>
                  Design Planning – Layouts, colors, furniture, and lighting
                  selection
                </li>
                <li>
                  Execution – Skilled craftsmanship with quality materials
                </li>
                <li>
                  Finishing – Detailed polish, fittings, and final touches
                </li>
                <li>Handover – A beautifully designed, ready-to-live home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInterior;
