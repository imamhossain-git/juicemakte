import React from 'react';
import { PRODUCT_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const HowToUse: React.FC = () => {
  return (
    <section id="how-to" className="scroll-mt-20 py-20 bg-brand-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-dark font-bold text-lg tracking-wide uppercase">ব্যবহার বিধি</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            খুব সহজেই ব্যবহার করুন
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {PRODUCT_DATA.howToUse.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm w-full border-l-4 border-brand">
                  <p className="text-lg text-gray-700 font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
             <h3 className="text-xl font-bold text-orange-600 mb-6 border-b pb-2">সতর্কতা ও নোট</h3>
             <ul className="space-y-4">
               {PRODUCT_DATA.notes.map((note, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-gray-700">
                   <CheckCircle2 className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                   <span>{note}</span>
                 </li>
               ))}
             </ul>
             <div className="mt-8 p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800">
               * চার্জ দেওয়ার সময় ব্লেন্ডার চালু করার চেষ্টা করবেন না।
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;