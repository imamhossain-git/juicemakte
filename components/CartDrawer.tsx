import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    const orderSection = document.getElementById('order-now');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={closeCart}
      ></div>

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
        <div className="w-screen max-w-md pointer-events-auto">
          <div className="h-full flex flex-col bg-white shadow-xl">
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="text-brand" />
                আপনার শপিং কার্ট ({cart.length})
              </h2>
              <button 
                onClick={closeCart}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 py-6 sm:px-6 overflow-y-auto custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBag size={40} className="text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">আপনার কার্ট খালি</h3>
                    <p className="text-gray-500 mt-1">এখনও কোনো পণ্য যোগ করা হয়নি।</p>
                  </div>
                  <button 
                    onClick={closeCart}
                    className="mt-4 text-brand hover:text-brand-dark font-medium"
                  >
                    কেনাকাটা শুরু করুন &rarr;
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <li key={item.cartId} className="flex py-2">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3 className="line-clamp-2 pr-4">
                              {item.name}
                            </h3>
                            <p className="ml-4">৳{item.price * item.quantity}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">কালার: {item.colorLabel}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="p-1 hover:bg-white rounded-md transition-colors text-gray-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-medium w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="p-1 hover:bg-white rounded-md transition-colors text-gray-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartId)}
                            className="font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
                          >
                            <Trash2 size={14} />
                            মুছে ফেলুন
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-gray-100 px-4 py-6 sm:px-6 bg-gray-50">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>মোট</p>
                  <p>৳ {cartTotal}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  ডেলিভারি চার্জ চেকআউট পেজে যোগ করা হবে।
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center rounded-xl border border-transparent bg-brand-accent px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-orange-600 transition-all"
                >
                  অর্ডার কনফার্ম করুন
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    অথবা{' '}
                    <button
                      type="button"
                      className="font-medium text-brand hover:text-brand-dark"
                      onClick={closeCart}
                    >
                      কেনাকাটা চালিয়ে যান &rarr;
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;