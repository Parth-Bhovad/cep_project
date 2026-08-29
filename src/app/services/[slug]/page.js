'use client';

import { use } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Button from '@/components/Button';
import FAQAccordion from '@/components/FAQAccordion';
import services from '@/data/services.json';

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  const { t } = useLanguage();
  const service = services.find(s => s.slug === slug);

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
      <Section className="bg-gradient-to-br from-blue-700 via-blue-800 to-sky-900 pt-20 text-white">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-5xl shadow-inner md:h-24 md:w-24">
              {service.icon}
            </div>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full bg-blue-300/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue-100">
                {service.category}
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-blue-100 md:text-xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_320px]">
            <div className="space-y-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.overview')}
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  {service.overview}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.purpose')}
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  {service.purpose}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.eligibility')}
                </h2>
                <p className="text-base leading-8 text-slate-700">
                  {service.eligibility}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.requiredDocuments')}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
                  {service.requiredDocuments.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.stepByStepGuide')}
                </h2>
                <ol className="list-decimal space-y-3 pl-6 text-base leading-7 text-slate-700">
                  {service.stepByStepGuide.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.tips')}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
                  {service.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.commonMistakes')}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
                  {service.commonMistakes.map((mistake, idx) => (
                    <li key={idx}>{mistake}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-2xl font-bold text-slate-900">
                  {t('serviceDetail.faqs')}
                </h2>
                <FAQAccordion faqs={service.faqs} />
              </div>
            </div>

            <aside className="space-y-6 lg:pt-2">
              <div className="sticky top-20 rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Ready to Apply?</h3>
                <a
                  href={service.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 block rounded-xl bg-blue-600 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  {t('serviceDetail.officialWebsite')}
                </a>
                <p className="text-sm leading-6 text-slate-600">
                  This will open the official government website in a new tab.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
                <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
                  {t('serviceDetail.educationalDisclaimer')}
                </h4>
                <p className="text-sm leading-6 text-slate-700">
                  {t('common.disclaimer')}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {relatedServices.length > 0 && (
        <Section className="bg-slate-50">
          <Container>
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              {t('common.relatedServices')}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map(relatedService => (
                <Link key={relatedService.id} href={`/services/${relatedService.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                    <div className="mb-4 text-3xl">{relatedService.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-blue-700">
                      {relatedService.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {relatedService.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section className="border-t-4 border-yellow-400 bg-yellow-50 py-14">
        <Container>
          <div className="rounded-2xl border-l-4 border-yellow-400 bg-white p-6 shadow-sm">
            <p className="text-base leading-7 text-slate-700">
              <span className="font-bold text-yellow-700">⚠️ Educational Disclaimer:</span> {t('common.disclaimer')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
