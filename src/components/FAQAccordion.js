'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-300 transition-colors"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 text-lg">{faq.question}</h3>
            <span
              className={`text-2xl text-blue-600 transition-transform duration-300 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {openId === faq.id && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
