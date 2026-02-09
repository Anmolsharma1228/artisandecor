"use client";
import React from "react";
import SwiperSlides from "../../components/SwiperSlides";
import { officesinteriorlides } from "../serviceimages/Swiperimages";
import Cards from "../../components/Cards";
import { officeinteriorcarddata } from "../serviceimages/ServiceCardData";
import { Check } from "lucide-react";

const OfficeInterior = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="py-10 mt-16 flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto px-4">
        {/* TEXT */}
        <div className="w-full md:max-w-2xl">
          <h1 className="font-playfair text-lg sm:text-xl font-semibold mb-2">
            Office interiors play a vital role in shaping productivity,
            creativity, and brand identity.
          </h1>
          <p className="font-inter">
            A well-designed workspace enhances employee comfort while promoting
            focus and efficiency. Thoughtful space planning ensures smooth
            movement and optimal use of available areas. Modern office interiors
            balance aesthetics with functionality for a professional
            environment. Ergonomic furniture supports employee well-being and
            long working hours. Proper lighting improves concentration and
            reduces workplace fatigue. Acoustic planning helps minimize noise
            and creates a calm atmosphere. Color themes are selected to reflect
            the company’s culture and values. Smart storage solutions keep
            workspaces organized and clutter-free. Collaborative zones encourage
            teamwork and communication. Executive cabins are designed to convey
            leadership and confidence. Overall, a well-crafted office interior
            leaves a lasting impression on both clients and employees.
          </p>
        </div>

        {/* SWIPER */}
        <SwiperSlides slides={officesinteriorlides} />
      </div>
      {/* WHAT WE OFFER */}
      <div className="mt-16 md:mt-36 px-4">
        <h2 className="font-playfair text-center text-2xl sm:text-3xl font-bold mb-10">
           Office Interior Design Services for Offices
        </h2>

        <Cards card={officeinteriorcarddata} />
      </div>
      <div className="mt-20 md:mt-32 max-w-5xl mx-auto px-2">
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/*  First Card */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Office Interiors Work Best In
              </h3>

              <ul className="font-inter list-disc space-y-3 text-gray-700">
                <li>Corporate Offices & IT Spaces</li>
                <li>Workstations & Open Office Areas</li>
                <li>Conference & Meeting Rooms</li>
                <li>Reception & Waiting Areas</li>
                <li>Executive Cabins</li>
                <li>Co-working & Startup Offices</li>
              </ul>
            </div>

            {/* Second Card */}
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Us for Office Interiors?
              </h4>

              <ul className="font-inter space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Functional and productivity-focused designs
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Modern layouts with ergonomic planning
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  High-quality materials and finishes
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  On-time execution with minimal disruption
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Cost-effective solutions for every workspace
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Designs aligned with your brand identity
                </li>
              </ul>
            </div>

            {/* Third Card */}
            <div>
              <h5 className="font-playfair text-xl font-semibold mb-6 text-center md:text-left">
                Why Choose Us for Office Interiors?
              </h5>

              <ul className="font-inter space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Functional and productivity-focused designs
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Modern layouts with ergonomic planning
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  High-quality materials and finishes
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  On-time execution with minimal disruption
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Cost-effective solutions for every workspace
                </li>
                <li className="flex gap-2">
                  <Check className="text-green-600" />
                  Designs aligned with your brand identity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeInterior;
