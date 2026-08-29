'use client';

import { useState } from 'react';

export default function FAQAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-blue-200"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
          >
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">{faq.question}</h3>
            <span
              className={`text-xl text-blue-600 transition-transform duration-300 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {openId === faq.id && (
            <div className="border-t border-slate-200 bg-slate-50 px-5 py-4">
              <p className="text-sm leading-7 text-slate-700 md:text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
