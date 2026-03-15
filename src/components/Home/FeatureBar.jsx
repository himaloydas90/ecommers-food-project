import React from 'react';
import { FaTruck, FaHeadset, FaShieldAlt, FaBoxOpen } from 'react-icons/fa';

const FeatureBar = () => {
  return (
    <div className="bg-[#FFFFFF] p-6 container rounded-xl drop-shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* 1. Free Shipping */}
      <div className="flex items-center gap-4">
        <FaTruck className="text-3xl text-brand" />
        <div>
          <h3 className="font-semibold text-secondary">Free Shipping</h3>
          <p className="text-sm text-primary">Free shipping on all your order</p>
        </div>
      </div>

      {/* 2. Customer Support */}
      <div className="flex items-center gap-4">
        <FaHeadset className="text-3xl text-brand" />
        <div>
          <h3 className="font-semibold text-secondary ">Customer Support 24/7</h3>
          <p className="text-sm text-primary">Instant access to Support</p>
        </div>
      </div>

      {/* 3. Secure Payment */}
      <div className="flex items-center gap-4">
        <FaShieldAlt className="text-3xl text-brand" />
        <div>
          <h3 className="font-semibold text-secondary">100% Secure Payment</h3>
          <p className="text-sm text-primary">We ensure your money is safe</p>
        </div>
      </div>

      {/* 4. Money-Back Guarantee */}
      <div className="flex items-center gap-4">
        <FaBoxOpen className="text-3xl text-brand" />
        <div>
          <h3 className="font-semibold text-secondary">Money-Back Guarantee</h3>
          <p className="text-sm text-primary">30 Days Money-Back Guarantee</p>
        </div>
      </div>

    </div>
  );
};

export default FeatureBar;