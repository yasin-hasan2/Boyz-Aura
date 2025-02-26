import { Slider } from "@/components/ui/slider";

export default function Filters({ filters, setFilters }) {
  const categories = ["All", "T-Shirts", "Jackets", "Pants", "Accessories"];

  return (
    <aside className="w-full md:w-64 space-y-6" data-aos="fade-right">
      <div>
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`w-full text-left py-1 px-2 rounded ${
                  filters.category.toLowerCase() === category.toLowerCase()
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() =>
                  setFilters({ ...filters, category: category.toLowerCase() })
                }
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={filters.priceRange}
          onValueChange={(value) =>
            setFilters({ ...filters, priceRange: value })
          }
        />
        <div className="flex justify-between mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Sort By</h3>
        <select
          className="w-full p-2 border rounded"
          value={filters.sortBy}
          onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
        >
          <option value="newest">Newest</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
    </aside>
  );
}
