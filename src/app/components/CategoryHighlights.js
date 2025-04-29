/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Men's Fashion",
    image:
      "https://i.pinimg.com/736x/62/fc/a1/62fca1d299f79b9927d1282d38483486.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/3a/30/dc/3a30dc69c17a62a7189776f4395d879b.jpg", // Example external hover image
  },
  {
    name: "Streetwear",
    image:
      "https://i.pinimg.com/736x/53/31/50/533150a9812153e02e1eb5f32b32c876.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/aa/40/45/aa4045839b86c30d4827b3dc35a0dd63.jpg",
  },
  {
    name: "Accessories",
    image:
      "https://i.pinimg.com/736x/f4/96/20/f496209cab01d85a80a84b785068c007.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/d8/7c/b8/d87cb862eb3f8ab44105b0ab8c56ed69.jpg",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                {/* Default Image */}
                {category.image.startsWith("http") ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                ) : (
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                )}

                {/* Hover Image */}
                {category.hoverImage.startsWith("http") ? (
                  <img
                    src={category.hoverImage}
                    alt={`${category.name} Hover`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                ) : (
                  <Image
                    src={category.hoverImage || "/placeholder.svg"}
                    alt={`${category.name} Hover`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                )}

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
