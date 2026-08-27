'use client';

import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import FAQAccordion from '@/components/FAQAccordion';
import faqs from '@/data/faqs.json';

export default function FAQsPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('faqs.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('faqs.description')}
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQs Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </Container>
      </Section>

      {/* Additional Help Section */}
      <Section className="bg-blue-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Didn't find your answer?
            </h2>
            <p className="text-gray-600 mb-6">
              We're here to help. Contact us through the contact page or visit the official government portals for more information.
            </p>
            <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </Container>
      </Section>

      {/* Disclaimer Section */}
      <Section className="bg-yellow-50 border-t-4 border-yellow-400">
        <Container>
          <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-400">
            <p className="text-gray-700 leading-relaxed">
              ⚠️ <strong>Educational Disclaimer:</strong> {t('common.disclaimer')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
