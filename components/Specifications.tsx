
import React from 'react';
import { PRODUCT_DATA } from '../constants';
import { Settings2 } from 'lucide-react';

const Specifications: React.FC = () => {
  return (
    <section id="specs" className="scroll-mt-20 py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-brand/10 text-brand rounded-full mb-3">
            <Settings2 size={20} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            টেকনিক্যাল স্পেসিফিকেশন
          </h2>
          <p className="mt-2 text-gray-500">
            পণ্যের বিস্তারিত বিবরণ একনজরে
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {PRODUCT_DATA.specifications.map((spec, index) => (
              <div 
                key={index} 
                className={`
                  flex items-center justify-between p-5 
                  border-b border-gray-100 hover:bg-brand/5 transition-colors
                  ${index % 2 === 0 ? 'md:border-r' : ''}
                  ${index >= PRODUCT_DATA.specifications.length - (PRODUCT_DATA.specifications.length % 2 === 0 ? 2 : 1) ? 'border-b-0' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-brand rounded-full"></div>
                   <span className="font-medium text-gray-600">{spec.label}</span>
                </div>
                <span className="font-bold text-gray-900 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
