import { homeinterior } from "../components/OurWorkData";

export default function Workpage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="font-playfair text-3xl font-semibold mb-4 mt-6 md:ml-12">
        Our Work Gallery
      </h1>
      <p className="font-inter text-gray-600 mb-6 md:ml-12">
        A showcase of our recent interior & decor projects
      </p>

      <div className="max-w-2xl mb-12 md:ml-12">
        <p className="font-inter text-gray-600">
          Explore our completed interior projects across homes, offices, and
          commercial spaces. Each design reflects our commitment to quality
          craftsmanship, modern aesthetics, and client satisfaction.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-14 md:space-y-36">
        {homeinterior.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-10  justify-items-center"
          >
            {/* IMAGE CONTAINER */}
            <div
              className={`group relative overflow-hidden rounded-2xl
                ${index % 2 !== 0 ? "md:order-2" : ""}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-125 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* HOVER / MOBILE TITLE */}
              <div
                className="
                  absolute inset-0 bg-black/50
                  opacity-100 md:opacity-0
                  md:group-hover:opacity-100
                  transition
                  flex items-end p-4
                "
              >
                <div>
                  <h3 className="font-playfair text-white text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-300">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h3 className="font-playfair text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="font-inter text-gray-600">
                {item.Description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
