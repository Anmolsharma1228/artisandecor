import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ card }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
      {card.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl"
        >
          {/* IMAGE */}
          <div className="font-inter relative h-60 sm:h-70 w-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* TEXT */}
          <div
            className="absolute bottom-0 left-0 w-full px-4 pb-4
          text-white tracking-wide
            opacity-100 translate-y-0
            sm:opacity-0 sm:translate-y-6
            sm:group-hover:opacity-100 sm:group-hover:translate-y-0
            transition-all duration-500 ease-out"
          >
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-200">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
