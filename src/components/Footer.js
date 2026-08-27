'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">CDSA</h3>
            <p className="text-gray-400 text-sm">
              Citizen Digital Seva Assistant - Empowering citizens with digital literacy
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link href="/faqs" className="hover:text-blue-400 transition-colors">{t('nav.faqs')}</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Government Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">{t('footer.governmentResources')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Aadhaar (UIDAI)</a></li>
              <li><a href="https://incometaxindiaefiling.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">PAN (Income Tax)</a></li>
              <li><a href="https://digilocker.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">DigiLocker</a></li>
              <li><a href="https://passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Passport</a></li>
            </ul>
          </div>

          {/* About Project */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Project Info</h4>
            <p className="text-gray-400 text-sm">
              Educational college project (CEP) for demonstrating government digital services awareness.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              {t('footer.educationalDisclaimer')}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Disclaimer */}
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <p className="text-gray-300 text-sm text-center">
              {t('footer.educationalDisclaimer')}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
