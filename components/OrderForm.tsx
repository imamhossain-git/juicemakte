import React, { useState } from 'react';
import { PRODUCT_DATA } from '../constants';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const OrderForm: React.FC = () => {
  const { cart, cartTotal, updateQuantity, addToCart, clearCart } = useCart();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Mock item for when cart is empty
  const defaultItem = { 
     ...PRODUCT_DATA, 
     quantity: 1, 
     colorLabel: PRODUCT_DATA.colors[0].label, 
     color: PRODUCT_DATA.colors[0].name,
     cartId: `${PRODUCT_DATA.id}-${PRODUCT_DATA.colors[0].name}`
  };
  
  const displayItems = cart.length > 0 ? cart : [defaultItem];
  const displayTotal = cart.length > 0 ? cartTotal : PRODUCT_DATA.price;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'phone') {
      setPhoneError('');
    }
  };

  // Only used when cart is empty to add a single default item
  const handleDefaultQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     const newQty = parseInt(e.target.value, 10);
     // We don't add to cart immediately here to avoid confusion with colors.
     // This is just a visual placeholder if the cart is empty.
     // But to make it functional, if the user changes this, we could just add to cart.
     // Ideally, we should hide quantity selector if cart has items.
     
     if (cart.length === 0) {
        addToCart({
          id: PRODUCT_DATA.id,
          name: PRODUCT_DATA.name,
          price: PRODUCT_DATA.price,
          image: PRODUCT_DATA.image,
          color: defaultItem.color,
          colorLabel: defaultItem.colorLabel
        });
        // The update will happen in cart logic, cart will become length 1
        // But we need to set the quantity. Since addToCart sets to 1, we update immediately
        setTimeout(() => {
            // We know the ID since we just used defaultItem
            updateQuantity(defaultItem.cartId, newQty);
        }, 50);
     }
  };

  const validatePhone = (phone: string) => {
    // Regex for Bangladeshi phone number: starts with 01, followed by 9 digits (total 11)
    const bdPhoneRegex = /^01[3-9]\d{8}$/;
    return bdPhoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError('অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017xxxxxxxx)');
      addToast('মোবাইল নম্বর সঠিক নয়', 'error');
      return;
    }

    const orderData = {
      customer: formData,
      items: displayItems,
      total: displayTotal + 70 
    };
    
    console.log("Order Data:", orderData);
    setSubmitted(true);
    
    // Simulate API call
    setTimeout(() => {
        addToast('অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!', 'success');
        setSubmitted(false);
        setFormData({ name: '', phone: '', address: '' });
        clearCart();
    }, 1000);
  };

  return (
    <section id="order-now" className="scroll-mt-20 py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
          
          {/* Order Summary Side */}
          <div className="bg-brand p-8 md:w-2/5 flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold mb-6">অর্ডার সামারি</h3>
              
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {displayItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/10 p-3 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md bg-white" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <div className="flex justify-between text-xs opacity-80 mt-1">
                          <span>কালার: {item.colorLabel}</span>
                          <span>পরিমাণ: {item.quantity}</span>
                      </div>
                      <p className="text-xs font-bold mt-1">৳ {item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            
            <div className="space-y-3 border-t border-white/20 pt-6 mt-4">
               <div className="flex justify-between text-sm">
                 <span>সাবটোটাল</span>
                 <span>৳ {displayTotal}</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span>ডেলিভারি চার্জ</span>
                 <span>৳ ৭০</span>
               </div>
               <div className="flex justify-between text-xl font-bold pt-3 border-t border-white/20">
                 <span>সর্বমোট</span>
                 <span>৳ {displayTotal + 70}</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:w-3/5 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">আপনার তথ্য দিন</h3>
            <p className="text-gray-500 mb-6 text-sm">অর্ডার কনফার্ম করতে নিচের ফর্মটি পূরণ করুন</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="পুরো নাম লিখুন"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className={`w-full px-4 py-3 rounded-lg border text-gray-900 focus:ring-2 outline-none transition-all ${phoneError ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-brand focus:border-transparent'}`}
                />
                {phoneError && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {phoneError}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ণ ঠিকানা</label>
                <textarea
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="বাসা নং, রোড নং, এলাকা, জেলা"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>

              {/* Show quantity selector ONLY if cart is empty, to allow quick buy of 1 unit default color */}
              {cart.length === 0 && (
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">পরিমাণ</label>
                   <select 
                     name="quantity" 
                     onChange={handleDefaultQuantityChange}
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-brand outline-none"
                     defaultValue={1}
                   >
                     {[1, 2, 3, 4, 5, 10].map(num => (
                       <option key={num} value={num}>{num} পিস</option>
                     ))}
                   </select>
                   <p className="text-xs text-gray-500 mt-1">ডিফল্ট কালার: সবুজ</p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-brand-dark hover:bg-green-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? 'প্রসেসিং...' : 'অর্ডার কনফার্ম করুন'}
                {!submitted && <ArrowRight size={20} />}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                ক্যাশ অন ডেলিভারি সুবিধা উপলব্ধ
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;