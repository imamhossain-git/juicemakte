import React from 'react';
import { PRODUCT_DATA } from '../constants';
import { PlayCircle } from 'lucide-react';

const ProductVideo: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-brand-light text-brand-dark rounded-full mb-4">
              <PlayCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              ভিডিও ডেমোনস্ট্রেশন
            </h2>
            <p className="mt-2 text-gray-500">দেখে নিন কিভাবে ব্যবহার করবেন</p>
        </div>
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-50">
            <video 
                className="w-full h-full object-contain"
                controls
                poster={PRODUCT_DATA.image}
                src={PRODUCT_DATA.videoUrl}
                preload="metadata"
            >
                আপনার ব্রাউজার ভিডিও ট্যাগ সাপোর্ট করে না।
            </video>
        </div>
      </div>
    </section>
  );
};

export default ProductVideo;