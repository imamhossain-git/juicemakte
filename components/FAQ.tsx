import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "এক চার্জে কতবার ব্যবহার করা যাবে?",
      a: "একবার ফুল চার্জ দিলে গড়ে ১০-১২ বার জুস তৈরি করা সম্ভব। তবে ফলের ধরন অনুযায়ী এটি কমবেশি হতে পারে।"
    },
    {
      q: "বরফ বা শক্ত ফল ব্লেন্ড করা যাবে কি?",
      a: "ছোট টুকরো বরফ এবং ফলের টুকরো ব্লেন্ড করা যাবে। তবে খুব বড় বা শক্ত কিছু দিলে ব্লেডের ক্ষতি হতে পারে।"
    },
    {
      q: "এটি কি ওয়ারেন্টি আছে?",
      a: "আমরা ৭ দিনের রিপ্লেসমেন্ট গ্যারান্টি দিচ্ছি যদি কোনো ম্যানুফ্যাকচারিং ত্রুটি থাকে।"
    },
    {
      q: "ডেলিভারি চার্জ কত?",
      a: "ঢাকার ভিতরে ৬০ টাকা এবং ঢাকার বাইরে ১২০ টাকা। সাধারণত ২-৩ দিনের মধ্যে ডেলিভারি পাবেন।"
    }
  ];

  return (
    <section id="faq" className="scroll-mt-20 py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;