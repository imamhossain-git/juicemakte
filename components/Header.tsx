
import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'ফিচার', href: '#features' },
    { name: 'স্পেসিফিকেশন', href: '#specs' },
    { name: 'ব্যবহার বিধি', href: '#how-to' },
    { name: 'রিভিউ', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-brand-dark flex items-center gap-2">
              <button 
                onClick={(e) => { e.preventDefault(); openCart(); }}
                className="relative focus:outline-none"
              >
                <span className="bg-brand text-white p-1 rounded-lg flex items-center hover:bg-brand-dark transition-colors">
                  <ShoppingCart size={20} />
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
              Juice<span className="text-brand-accent">Mate</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-brand font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={openCart}
              className="bg-brand-accent hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              <span>কার্ট দেখুন</span>
              {cartCount > 0 && (
                <span className="bg-white text-brand-accent text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                openCart();
                setIsMenuOpen(false);
              }}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold text-white bg-brand-accent flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              কার্ট দেখুন {cartCount > 0 && `(${cartCount})`}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
