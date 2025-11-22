import React, { useState } from 'react';
import { PRODUCT_DATA } from '../constants';
import { Sparkles, CheckCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const Hero: React.FC = () => {
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);

  const handleBuyNow = () => {
    addToCart({
      id: PRODUCT_DATA.id,
      name: PRODUCT_DATA.name,
      price: PRODUCT_DATA.price,
      image: PRODUCT_DATA.image,
      color: selectedColor.name,
      colorLabel: selectedColor.label,
    });
    addToast(`কার্টে যোগ করা হয়েছে! (${selectedColor.label})`, 'success');
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 pt-10 pb-20 lg:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-dark text-sm font-bold uppercase tracking-wide">
              <Sparkles size={16} />
              বেস্ট সেলিং গ্যাজেট
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-brand">{PRODUCT_DATA.name}</span>
              <br />
              <span className="text-2xl lg:text-4xl text-gray-600 font-normal mt-2 block">
                {PRODUCT_DATA.subName}
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              যেকোনো সময়, যেকোনো জায়গায় ফ্রেশ জুস বা স্মুদির আনন্দ নিন। শক্তিশালী মটর এবং রিচার্জেবল ব্যাটারি সহ স্মার্ট সলিউশন।
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="text-3xl font-bold text-gray-900">
                ৳ {PRODUCT_DATA.price}
                <span className="text-lg text-gray-400 line-through ml-3">৳ {PRODUCT_DATA.originalPrice}</span>
              </div>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                {PRODUCT_DATA.discount}
              </span>
            </div>

            {/* Color Selection */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <span className="text-sm font-bold text-gray-700">কালার সিলেক্ট করুন: <span className="text-brand">{selectedColor.label}</span></span>
              <div className="flex gap-3">
                {PRODUCT_DATA.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all transform hover:scale-110 ${
                      selectedColor.name === color.name ? 'border-gray-800 scale-110 shadow-md' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color.code }}
                    aria-label={color.label}
                  >
                     {selectedColor.name === color.name && <CheckCircle size={18} className="text-white drop-shadow-md" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
               <button 
                 onClick={handleBuyNow}
                 className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-brand-accent hover:bg-orange-600 text-white text-xl font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
               >
                 <ShoppingBag size={24} />
                 কার্টে যোগ করুন
               </button>
               <p className="mt-3 text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                 <CheckCircle size={16} className="text-brand" /> স্টক সীমিত
               </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="absolute inset-0 bg-brand rounded-full opacity-10 filter blur-3xl transform scale-90"></div>
            <img 
              src={PRODUCT_DATA.image} 
              alt={PRODUCT_DATA.name}
              className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 animate-float"
            />
            {/* Floating Badges */}
            <div className="absolute top-10 right-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce-slow">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-bold text-sm text-gray-700">2000mAh ব্যাটারি</span>
            </div>
             <div className="absolute bottom-10 left-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-bounce-slow delay-700">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="font-bold text-sm text-gray-700">৬ ব্লেড পাওয়ার</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;