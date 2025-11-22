import React from 'react';
import { PRODUCT_DATA } from '../constants';
import { Star } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="scroll-mt-20 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">গ্রাহকদের মতামত</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCT_DATA.reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-dark">
                    {review.name.charAt(0)}
                 </div>
                 <span className="font-semibold text-gray-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;