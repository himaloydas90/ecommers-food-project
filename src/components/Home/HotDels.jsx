import React from 'react'
import ProductCard from '../Ui/ProductCard'

const HotDels = () => {
    const products = [
  { name: 'Green Apple', price: '12.00', oldPrice: '24.00', rating: 5, isSale: true, isBestSale: true, image: '/Product Image (1).png', bigCard: true },
  { name: 'Chinese cabbage', price: '12.00', rating: 4, image: '/Product Image (1).png' },
  { name: 'Green Lettuce', price: '9.00', rating: 4, image: '/Product Image (2).png' },
  { name: 'Eggplant', price: '34.00', rating: 4, image: '/Product Image (3).png' },
  { name: 'Fresh Cauliflower', price: '12.00', rating: 4, image: '/Product Image (4).png' },
  { name: 'Green Capsicum', price: '9.00', oldPrice: '20.99', rating: 4, isSale: true, image: '/Product Image (5).png' },
  { name: 'Green Chili', price: '34.00', rating: 4, image: '/Product Image (6).png' },
  { name: 'Big Potatoes', price: '12.00', rating: 4, image: '/Product Image (7).png' },
  { name: 'Corn', price: '12.00', rating: 4, image: '/Product Image (8).png' },
  { name: 'Red Chili', price: '12.00', rating: 4, image: '/Product Image (9).png' },
  { name: 'Red Tomatos', price: '9.00', oldPrice: '20.99', rating: 4, isSale: true, image: '/Product Image (10).png' },
  { name: 'Surjapur Mango', price: '34.00', rating: 4, image: '/Product Image (5).png' },
];
  return (
  <div className="container mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Hot Deals</h2>
        <a href="#" className="text-green-600 font-medium flex items-center hover:underline">
          View All <span className="ml-1">→</span>
        </a>
      </div>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-gray-100">
        {products.map((item, index) => (
          <div 
            key={index} 
            className={`border-r border-b border-gray-100 ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <ProductCard product={item} isBig={index === 0} />
          </div>
        ))}
      </div>
    </div>
      

  )
}

export default HotDels
