
import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Juice<span className="text-brand">Mate</span></h3>
          <p className="text-sm leading-relaxed mb-4">
            আধুনিক প্রযুক্তির ছোঁয়ায় আপনার দৈনন্দিন জীবনকে সহজ করাই আমাদের লক্ষ্য। সুস্থ থাকুন, ফ্রেশ জুস পান করুন।
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-brand transition-colors"><Instagram size={24} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">প্রয়োজনীয় লিংক</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-brand transition-colors">আমাদের ফিচারস</a></li>
            <li><a href="#specs" className="hover:text-brand transition-colors">স্পেসিফিকেশন</a></li>
            <li><a href="#how-to" className="hover:text-brand transition-colors">ব্যবহার বিধি</a></li>
            <li><a href="#reviews" className="hover:text-brand transition-colors">গ্রাহক রিভিউ</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">শর্তাবলী</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">প্রাইভেসি পলিসি</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">যোগাযোগ</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand" />
              <span>+880 1234 567890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand" />
              <span>support@juicemate.com</span>
            </li>
            <li className="mt-4 text-xs text-gray-500">
              123, Road 4, Dhanmondi, Dhaka-1209
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} JuiceMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
