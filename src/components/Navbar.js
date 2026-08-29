'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.faqs'), href: '/faqs' },
    { label: t('nav.digitalSafety'), href: '/digital-safety' },
    { label: t('nav.survey'), href: '/survey' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.feedback'), href: '/feedback' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-blue-600">🇮🇳 CDSA</span>
            <span className="hidden text-sm font-medium text-slate-600 sm:inline">Digital Seva</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 pb-4 pt-3 md:hidden">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
