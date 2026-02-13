import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({ items }) {
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/product/${item.slug}`}
          className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300"
        >
          {/* Image */}
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
            <Image
              src={item.image}
              alt="collections"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div className="py-4 text-center">
            <h3 className="font-playfair text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
