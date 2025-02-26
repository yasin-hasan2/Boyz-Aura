import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Men's Fashion",
    image: "/mens-fashion.jpg",
    hoverImage: "/mens-fashion-hover.jpg",
  },
  {
    name: "Streetwear",
    image: "/streetwear.jpg",
    hoverImage: "/streetwear-hover.jpg",
  },
  {
    name: "Accessories",
    image: "/accessories.jpg",
    hoverImage: "/accessories-hover.jpg",
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
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={category.hoverImage || "/placeholder.svg"}
                  alt={`${category.name} Hover`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
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
