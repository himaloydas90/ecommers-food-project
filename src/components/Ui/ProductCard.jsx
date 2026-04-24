import React from 'react';
import { FiShoppingBag, FiHeart, FiEye } from 'react-icons/fi';
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai';


const ProductCard = ({ product,isBig }) => {
 if (!product) return null;
  const { name, image, price, oldPrice, rating, isSale } = product;

  if (isBig) {
    return (
      <div className="p-6 h-full flex flex-col items-center text-center border-2 border-green-500">
        {/* Sale Tags */}
        <div className="flex gap-2 self-start mb-4">
          <span className="bg-red-500 text-white px-2 py-1 text-xs rounded">Sale 50%</span>
          <span className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Best Sale</span>
        </div>
        
        <img src={product.image} className="w-64 h-64 object-contain mb-4" alt="" />
        <div className='flex justify-center gap-2 '>
          <button className="w-11 h-11 flex justify-center items-center bg-white rounded-full border border-gray-100 hover:bg-brand hover:text-white shadow-sm transition-colors">
          <FiHeart size={18} />
        </button>
        <button className="py-3.5 px-32 bg-green-500 text-white  rounded-full flex justify-center items-center gap-2">
           Add to Cart <AiOutlineShopping className='text-xl' />
        </button>
        <button className="w-11 h-11 flex justify-center items-center bg-white rounded-full border border-gray-100 hover:bg-brand hover:text-white shadow-sm transition-colors">
          <FiEye size={18} />
        </button>

        </div>
        
        <h3 className="text-xl font-semibold text-brand">{product.name}</h3>
        <div className="text-2xl pt-2 pb-2">
           <span className="font-bold text-secondary">${product.price}</span>
           <span className="text-extra line-through ml-2">${product.oldPrice}</span>
        </div>
        <div className="flex text-brand text-xl items-center">
          {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className={i < Math.floor(rating) ? "text-brand" : "text-gray-200"} />
            ))}
            <p> (524 Feedback)</p>
        </div>
        {/* Countdown Timer placeholder */}
        <h3 className='text-2xl text-extra'>Hurry up! Offer ends In:</h3>
        <div className="mt-3 flex gap-4 text-lg font-medium text-secondary">
           <div>01 <br/> <span className='text-extra'>DAYS</span></div> : <div>23 <br/> <span className='text-extra'>HOURS</span></div> : <div>34 <br/> <span className='text-extra'>MINS</span></div> :<div>2025 <br/> <span className='text-extra'>Since</span></div>
        </div>
      </div>
    );
  }

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