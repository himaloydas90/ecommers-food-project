import React from 'react';

const categories = [
  { name: 'Fresh Fruit', icon: '/image 1 (1).png' },
  { name: 'Fresh Vegetables', icon: '/image 1 (2).png' },
  { name: 'Meat & Fish', icon: '/image 1 (3).png' },
  { name: 'Snacks', icon: '/image 1 (4).png' },
  { name: 'Beverages', icon: '/image 1 (5).png' },
  { name: 'Beauty & Health', icon: '/image 1 (6).png' },
  { name: 'Bread & Bakery', icon: '/image 1 (7).png' },
  { name: 'Baking Needs', icon: '/image 1 (8).png' },
  { name: 'Cooking', icon: '/image 1 (9).png' },
  { name: 'Diabetic Food', icon: '/image 1 (10).png' },
  { name: 'Dish Detergents', icon: '/image 1 (11).png' },
  { name: 'Oil', icon: '/image 1 (12).png' },
];

const PopularCategories = () => {
  return (
    <div className="container mx-auto p-4 mt-16 mb-16 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-secondary">Popular Categories</h2>
        <a href="#" className="text-brand font-medium flex items-center hover:underline">
          View All <span className="ml-1">→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className=" group border border-[#E5E5E5] rounded-lg p-4 flex flex-col items-center justify-center 
            transition-all duration-200 cursor-pointer 
            hover:border-brand hover:shadow-md 
            focus:border-brand focus:shadow-md active:border-brand"
          >
            {/* Image Placeholder */}
            <div className=" mb-3 flex items-center justify-center">
              <img 
                src={cat.icon} 
                alt={cat.name} 
                
              />
            </div>
            
            <p className="md:text-xl text-l font-medium text-secondary group-active:text-brand  active:border-brand group-hover:text-brand">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;