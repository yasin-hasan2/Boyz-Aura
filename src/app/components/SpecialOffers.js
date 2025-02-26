export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white"
            data-aos="flip-up"
          >
            <h3 className="text-3xl font-bold mb-4">Summer Sale</h3>
            <p className="text-xl mb-4">Up to 50% Off on Selected Items</p>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </div>
          <div
            className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-8 text-white"
            data-aos="flip-down"
          >
            <h3 className="text-3xl font-bold mb-4">New Arrivals</h3>
            <p className="text-xl mb-4">Get 20% Off on Your First Purchase</p>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
