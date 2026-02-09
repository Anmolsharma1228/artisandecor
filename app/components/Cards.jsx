import React from 'react'

export default function Cards({ card }) {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto select-none'>
        {card.map((card, index)=>(
         <div key={card.id}>

          {/* Card */}
          <div
            className="group rounded-2xl bg-[#F8F5F0] p-6
             border border-[#E2D9C8]
             shadow-sm
             transition-all duration-500 ease-out
             hover:-translate-y-1.5 hover:shadow-2xl"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 mb-4 rounded-xl
               flex items-center justify-center
               bg-[#EFE9DE]
               transition-all duration-500
               group-hover:bg-[#bb9542]"
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3
              className="font-playfair text-lg font-semibold text-[#1F1F1F]
               mb-2 transition-colors duration-500
               group-hover:text-[#C9A24D]"
            >
              {card.title}
            </h3>

            {/* Text */}
            <p className="font-inter text-[14px] text-[#6B6B6B] leading-relaxed">
              {card.text}
            </p>

            {/* Accent Line */}
            <span
              className="block mt-4 h-px w-10 bg-[#C9A24D]
               transition-all duration-500
               group-hover:w-16"
            />
          </div>
         </div>       
        ))}
      </div>
  )
}
