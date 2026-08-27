'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Button from '@/components/Button';
import FAQAccordion from '@/components/FAQAccordion';
import services from '@/data/services.json';

export default function ServiceDetail({ params }) {
  const { t } = useLanguage();
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    return (
      <Section>
        <Container>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service not found</h1>
            <Link href="/services">
              <Button variant="primary">{t('nav.services')}</Button>
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  const relatedServices = services.filter(
    s => s.category === service.category && s.id !== service.id
  );

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white pt-24">
        <Container>
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">{service.icon}</div>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-400 text-blue-900 text-xs font-semibold rounded-full mb-4">
                {service.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-blue-100">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Overview Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.overview')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Purpose */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.purpose')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.purpose}
                </p>
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.eligibility')}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.eligibility}
                </p>
              </div>

              {/* Required Documents */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.requiredDocuments')}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.requiredDocuments.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              {/* Step by Step Guide */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.stepByStepGuide')}
                </h2>
                <ol className="list-decimal list-inside space-y-3">
                  {service.stepByStepGuide.map((step, idx) => (
                    <li key={idx} className="text-gray-600">
                      <span className="ml-2">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.tips')}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.tips.map((tip, idx) => (
                    <li key={idx} className="ml-2">{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.commonMistakes')}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="ml-2">{mistake}</li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceDetail.faqs')}
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* CTA Box */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8 sticky top-20">
                <h3 className="font-bold text-gray-900 mb-4">Ready to Apply?</h3>
                <a
                  href={service.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center mb-4"
                >
                  {t('serviceDetail.officialWebsite')}
                </a>
                <p className="text-xs text-gray-600">
                  This will open the official government website in a new tab.
                </p>
              </div>

              {/* Educational Disclaimer */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  {t('serviceDetail.educationalDisclaimer')}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {t('common.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section className="bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('common.relatedServices')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map(relatedService => (
                <Link key={relatedService.id} href={`/services/${relatedService.slug}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer h-full">
                    <div className="text-3xl mb-3">{relatedService.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {relatedService.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {relatedService.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

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
