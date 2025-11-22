import React from 'react';
import { PRODUCT_DATA } from '../constants';
import { Battery, ShieldCheck, RefreshCw, Coffee, MapPin, Zap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  blade: <RefreshCw className="w-6 h-6 text-white" />,
  battery: <Battery className="w-6 h-6 text-white" />,
  shield: <ShieldCheck className="w-6 h-6 text-white" />,
  blend: <Coffee className="w-6 h-6 text-white" />,
  travel: <MapPin className="w-6 h-6 text-white" />,
};

const Features: React.FC = () => {
  return (
    <section id="features" className="scroll-mt-20 py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold text-lg tracking-wide uppercase">স্পেশাল ফিচারস</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            কেন এই ব্লেন্ডারটি আপনার প্রয়োজন?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-green-100 rounded-full opacity-50 filter blur-3xl transform scale-90"></div>
             <img 
              src={PRODUCT_DATA.image} 
              alt="Product Features"
              className="relative z-10 w-full max-w-xs sm:max-w-sm object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Features List */}
          <div className="grid gap-6 order-1 lg:order-2">
            {PRODUCT_DATA.features.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-5 bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-light"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-brand rounded-full shadow-md group-hover:scale-110 transition-transform">
                  {iconMap[feature.icon] || <Zap className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;