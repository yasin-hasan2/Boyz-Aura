import Image from "next/image";

const categories = [
  {
    name: "Fashion",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email%20WordPress%20Theme.jpg-EUM2nHQCuu6y11zXYv1pgzFq2jrScc.jpeg",
    color: "bg-yellow-100",
  },
  {
    name: "Men",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mixtas%20-%20Minimalist%20Fashion%20WooCommerce%20Theme.jpg-U21UzBQmiyb14AePpM6eoR6tlyzlRa.jpeg",
    color: "bg-coral-100",
  },
  {
    name: "Women",
    image: "/placeholder.svg",
    color: "bg-blue-100",
  },
  {
    name: "Shoes",
    image: "/placeholder.svg",
    color: "bg-green-100",
  },
];

export default function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`absolute inset-0 ${category.color} opacity-80`}
              />
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={400}
                height={400}
                className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
