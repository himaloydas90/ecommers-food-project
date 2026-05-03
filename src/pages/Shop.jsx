import React, { useState } from "react";
import { FiFilter, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import ProductCard from "../components/Ui/ProductCard";


// ─── Dummy Products ───
const products = [
  { id: 1, name: "Big Potatos", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&q=80" },
  { id: 2, name: "Chanise Cabbage", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=300&q=80" },
  { id: 3, name: "Ladies Finger", price: 14.99, oldPrice: 20.99, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=300&q=80" },
  { id: 4, name: "Eggplant", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1659204822612-d4a2bb11c67f?w=300&q=80" },
  { id: 5, name: "Fresh Cauliflower", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1568584711271-6eff39771bd8?w=300&q=80" },
  { id: 6, name: "Green Apple", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1569870499705-504209102861?w=300&q=80" },
  { id: 7, name: "Green Capsicum", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80" },
  { id: 8, name: "Green Chili", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1633460163609-b90c00c7c6a3?w=300&q=80" },
  { id: 9, name: "Green Cucumber", price: 14.99, oldPrice: 20.99, rating: 4, isSale: true, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&q=80" },
  { id: 10, name: "Green Lettuce", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=300&q=80" },
  { id: 11, name: "Ladies Finger", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=300&q=80" },
  { id: 12, name: "Green Capsicum", price: 14.99, oldPrice: null, rating: 5, isSale: false, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80" },
  { id: 13, name: "Red Chili", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80" },
  { id: 14, name: "Red Tomato", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&q=80" },
  { id: 15, name: "Fresh Mango", price: 14.99, oldPrice: null, rating: 5, isSale: true, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&q=80" },
  { id: 16, name: "Big Potatos", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&q=80" },
  { id: 17, name: "Chanise Cabbage", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=300&q=80" },
  { id: 18, name: "Ladies Finger", price: 14.99, oldPrice: 20.99, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=300&q=80" },
  { id: 41, name: "Eggplant", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1659204822612-d4a2bb11c67f?w=300&q=80" },
  { id: 51, name: "Fresh Cauliflower", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1568584711271-6eff39771bd8?w=300&q=80" },
  { id: 61, name: "Green Apple", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1569870499705-504209102861?w=300&q=80" },
  { id: 71, name: "Green Capsicum", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80" },
  { id: 81, name: "Green Chili", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1633460163609-b90c00c7c6a3?w=300&q=80" },
  { id: 91, name: "Green Cucumber", price: 14.99, oldPrice: 20.99, rating: 4, isSale: true, image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=300&q=80" },
  { id: 110, name: "Green Lettuce", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=300&q=80" },
  { id: 111, name: "Ladies Finger", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=300&q=80" },
  { id: 112, name: "Green Capsicum", price: 14.99, oldPrice: null, rating: 5, isSale: false, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80" },
  { id: 113, name: "Red Chili", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80" },
  { id: 114, name: "Red Tomato", price: 14.99, oldPrice: null, rating: 4, isSale: false, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300&q=80" },
  { id: 115, name: "Fresh Mango", price: 14.99, oldPrice: null, rating: 5, isSale: true, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&q=80" },
];

const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
  "Bread", "Meat", "Snacks", "Tiffin", "Launch", "Dinner", "Breackfast", "Fruit",
];

const saleProducts = [
  { name: "Red Capsicum", price: 32.0, oldPrice: 20.99, rating: 4, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&q=80" },
  { name: "Chanise Cabbage", price: 24.0, oldPrice: 20.99, rating: 4, image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=100&q=80" },
  { name: "Green Capsicum", price: 32.0, oldPrice: 20.99, rating: 4, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=100&q=80" },
];

// ─── Collapsible Section ───
const Section = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 pb-5 mb-5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-3"
      >
        <span className="font-semibold text-primary text-sm">{title}</span>
        {open
          ? <FiChevronUp size={15} className="text-gray-400" />
          : <FiChevronDown size={15} className="text-gray-400" />
        }
      </button>
      {open && children}
    </div>
  );
};

// ─── ShopPage ───
const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Vegetables");
  const [selectedRating, setSelectedRating] = useState(4);
  const [selectedTags, setSelectedTags] = useState(["Low fat"]);
  const [sortBy, setSortBy] = useState("Latest");
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-6">

        {/* ── Top Bar ── */}
        <div className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200 py-3 flex items-center justify-between mb-6 flex-wrap gap-3">
          {/* Filter Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            <FiFilter size={15} />
            Filter
          </button>

          {/* Sort + Result Count */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-sm text-secondary whitespace-nowrap">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-primary outline-none focus:border-green-500 bg-white cursor-pointer"
            >
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
            <p className="text-sm text-secondary whitespace-nowrap hidden sm:block">
              <span className="font-semibold text-primary">52</span> Results Found
            </p>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div className="flex gap-6 items-start">

          {/* ── Sidebar ── */}
          <aside
            className={`w-[210px] sticky top-0 flex-shrink-0 bg-white p-4 rounded-xl shadow-sm transition-all ${
              sidebarOpen ? "block" : "hidden"
            } lg:block`}
          >
            {/* Categories */}
            <Section title="All Categories">
              <ul className="space-y-2.5">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className="flex items-center gap-2.5 w-full text-left group"
                    >
                      {/* Custom radio */}
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          selectedCategory === cat.name
                            ? "border-green-600 bg-green-600"
                            : "border-gray-300 group-hover:border-green-400"
                        }`}
                      >
                        {selectedCategory === cat.name && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </span>
                      <span
                        className={`text-xs transition-colors ${
                          selectedCategory === cat.name
                            ? "text-green-600 font-semibold"
                            : "text-secondary group-hover:text-green-600"
                        }`}
                      >
                        {cat.name}{" "}
                        <span className="text-gray-400">({cat.count})</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Price */}
            <Section title="Price">
              <input
                type="range"
                min={8}
                max={1500}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-green-600"
              />
              <p className="text-xs text-secondary mt-1.5">
                Price: $8 — ${maxPrice}
              </p>
            </Section>

            {/* Rating */}
            <Section title="Rating">
              <div className="space-y-2.5">
                {[5, 4, 3, 2, 1].map((r) => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRating === r}
                      onChange={() => setSelectedRating(r)}
                      className="w-4 h-4 accent-green-600 rounded"
                    />
                    <div className="flex text-xs">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar
                          key={i}
                          className={i < r ? "text-brand" : "text-gray-200"}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">& up</span>
                  </label>
                ))}
              </div>
            </Section>

            {/* Popular Tags */}
            <Section title="Popular Tag">
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-green-600 border-green-600 text-white"
                        : "border-gray-200 text-secondary hover:border-green-400 hover:text-green-600"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Section>

            {/* Discount Banner */}
            <div className="bg-gray-900 rounded-xl p-4 mb-5">
              <p className="text-xl font-bold">
                <span className="text-green-400">79%</span>{" "}
                <span className="text-white">Discount</span>
              </p>
              <p className="text-xs text-gray-400 mt-0.5">on your first order</p>
              <button className="mt-2 text-green-400 text-sm font-semibold flex items-center gap-1 hover:underline">
                Shop Now →
              </button>
              <p className="mt-2 text-xl">🥕 🥦 🍅 🧅 🥒</p>
            </div>

            {/* Sale Products */}
            <div>
              <h5 className="font-semibold text-primary text-sm mb-3">Sale Products</h5>
              <div className="space-y-3">
                {saleProducts.map((p) => (
                  <div key={p.name} className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 object-cover rounded-lg border border-gray-100 flex-shrink-0"
                    />
                    <div>
                      <p className="text-xs font-medium text-primary">{p.name}</p>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-secondary">
                          ${p.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ${p.oldPrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex text-xs">
                        {[...Array(5)].map((_, i) => (
                          <AiFillStar
                            key={i}
                            className={i < p.rating ? "text-brand" : "text-gray-200"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Product Grid — আপনার ProductCard হুবহু ── */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;