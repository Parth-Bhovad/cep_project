'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 p-1">
      {['en', 'hi', 'mr'].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all sm:text-sm ${
            language === lang
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-white hover:text-slate-900'
          }`}
          title={
            lang === 'en'
              ? t('common.english')
              : lang === 'hi'
                ? t('common.hindi')
                : t('common.marathi')
          }
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
