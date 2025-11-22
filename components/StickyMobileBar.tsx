import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCT_DATA } from '../constants';
import { useToast } from '../context/ToastContext';

const StickyMobileBar: React.FC = () => {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = () => {
    // Defaults to the first color (Green) when adding from sticky bar quick button
    const defaultColor = PRODUCT_DATA.colors[0];
    
    addToCart({
      id: PRODUCT_DATA.id,
      name: PRODUCT_DATA.name,
      price: PRODUCT_DATA.price,
      image: PRODUCT_DATA.image,
      color: defaultColor.name,
      colorLabel: defaultColor.label
    });
    addToast(`কার্টে পণ্য যোগ করা হয়েছে! (${defaultColor.label})`, 'success');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden flex items-center justify-between gap-4 pb-safe">
      <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">স্পেশাল প্রাইস</span>
        <div className="flex items-baseline gap-2">
           <span className="text-lg font-bold text-brand-dark">৳ {PRODUCT_DATA.price}</span>
           <span className="text-xs text-gray-400 line-through">৳ {PRODUCT_DATA.originalPrice}</span>
        </div>
      </div>
      
      <button
        onClick={handleAddToCart}
        className="flex-1 bg-brand-accent hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <ShoppingBag size={18} />
        এখনই কিনুন
      </button>
    </div>
  );
};

export default StickyMobileBar;