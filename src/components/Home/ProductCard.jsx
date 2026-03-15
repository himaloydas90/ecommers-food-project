import React from 'react';
import { FiShoppingBag, FiHeart, FiEye } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

const ProductCard = ({ product }) => {
  const { name, image, price, oldPrice, rating, isSale } = product;

  return (
    <div className="group relative border border-gray-100 transition-all duration-300 bg-white p-3 cursor-pointer hover:border-brand hover:shadow-lg">
      
      
      {isSale && (
        <span className="absolute top-3 left-3 bg-brand text-white text-[10px] font-bold px-2 py-1 rounded z-10">
          Sale 50%
        </span>
      )}

      {/* Side Actions (Heart & Eye) */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button className="p-2 bg-white rounded-full border border-gray-100 hover:bg-brand hover:text-white shadow-sm transition-colors">
          <FiHeart size={18} />
        </button>
        <button className="p-2 bg-white rounded-full border border-gray-100 hover:bg-brand hover:text-white shadow-sm transition-colors">
          <FiEye size={18} />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Info Container */}
      <div className="flex justify-between items-end mt-2">
        <div className="flex-1">
          <h3 className="text-sm text-primary transition-colors duration-200 group-hover:text-brand">
            {name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-lg font-semibold text-secondary">${price}</span>
            {oldPrice && <span className="text-sm text-gray-400 line-through">${oldPrice}</span>}
          </div>
          
          {/* Rating Stars */}
          <div className="flex text-brand text-xs mt-1">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className={i < Math.floor(rating) ? "text-brand" : "text-gray-200"} />
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="p-3 rounded-full bg-gray-100 text-primary transition-all duration-300 hover:bg-brand hover:text-white group-hover:bg-brand group-hover:text-white">
          <FiShoppingBag size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;