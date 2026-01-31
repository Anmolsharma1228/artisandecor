"use client"
import React from 'react'
import { odercarddata } from './serviceimages/ServiceCardData';

export default function OrderCard() {
  return (
     <div className="mt-6 md:mt-14 max-w-7xl mx-auto">
      <div className="flex justify-center items-center gap-3.5 mb-2">
        {/* <Route size={28} className="text-[#FF6F61]" /> */}
        <h1 className="text-center text-2xl font-semibold">Ordering Process</h1>
      </div>
      <div className="bg-[#F8F5F0] grid md:grid-cols-4 md:gap-14 gap-6 mt-10">
        {odercarddata.map((data) => {
          return (
            <div
              key={data.id}
              className="group relative space-y-2 md:space-y-4 p-8 sm:p-5 rounded-xl transition-all duration-500 ease-out
              hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]"
            >
              <h1 className='text-red-500 text-2xl font-bold'>{data.step}</h1>
              <h2 className="text-xl font-light tracking-wide text-neutral-900">
                {data.heading}
              </h2>
              <p className="text-neutral-600 leading-relaxed">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
