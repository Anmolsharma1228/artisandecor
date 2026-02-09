import { BsCheck2Circle } from "react-icons/bs";

export default function CatalogueCard({ category }) {
  return (
    <div
      className="
        bg-white/90 backdrop-blur-sm
        border border-black/5
        rounded-2xl
        px-8 py-10
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* Title */}
      <h2 className="font-playfair text-xl sm:text-2xl font-bold mb-8 tracking-tight">
        <span className="text-red-600">
          {category.category.split(" ")[0]}
        </span>{" "}
        <span className="text-gray-900">
          {category.category.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      {/* Divider */}
      <div className=" h-px w-16 bg-[#B89C5A]/60 mb-8" />

      {/* Items */}
      <ul className="space-y-4">
        {category.items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
          >
            <BsCheck2Circle className="text-[#2F7D32] mt-1 shrink-0" />
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter hover:text-[#B89C5A] transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
