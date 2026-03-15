import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  // এখানে আপনার সব প্রোডাক্টের লিস্ট থাকবে
  const products = [
    { name: 'Green Apple', price: '14.99', oldPrice: '20.99', rating: 4, isSale: true, image: '/Product Image.png' },
    { name: 'Chinese cabbage', price: '12.00', rating: 5,  image: '/Product Image (2).png' },
    { name: 'Green Lettuce', price: '9.00', rating: 4, image: '/Product Image (3).png' },
    { name: 'Eggplant', price: '34.00', rating: 4, image: '/Product Image (4).png' },
    { name: 'Big Potatoes', price: '20.00', rating: 4, image: '/Product Image (5).png' },
    { name: 'Fresh Indian Malta', price: '20.99', rating: 4, image: '/Product Image (1).png' },
    { name: 'Green Chili', price: '12.00', rating: 5,  image: '/Product Image (8).png' },
    { name: 'Corn', price: '9.00', rating: 4, image: '/Product Image (6).png' },
    { name: 'Fresh Cauliflower', price: '34.00', oldPrice: '20.99', rating: 4,isSale: true, image: '/Product Image (7).png' },
    { name: 'Green Capsicum', price: '20.00', rating: 4, image: '/Product Image (10).png' },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-secondary">Popular Products</h2>
        <a href="#" className="text-brand font-medium flex items-center hover:underline">
          View All <span className="ml-1">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;