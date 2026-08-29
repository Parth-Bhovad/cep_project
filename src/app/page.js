'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import ServiceCard from '@/components/ServiceCard';
import StatsCard from '@/components/StatsCard';
import services from '@/data/services.json';

export default function Home() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <>
      <Hero
        title={t('home.title')}
        subtitle={t('home.subtitle')}
        description={t('home.description')}
        primaryCta={t('home.heroCtaText')}
        secondaryCta={t('home.heroCtaSecondary')}
        primaryCtaAction={() => router.push('/services')}
        secondaryCtaAction={() => router.push('/digital-safety')}
      />

      <Section className="bg-slate-50">
        <Container>
          <SectionHeading
            title={t('home.featuresTitle')}
            description=""
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t('home.features').map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={['🎓', '🌐', '📚', '🔒'][idx]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title={t('home.servicesTitle')}
            description={t('home.servicesDescription')}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} t={t} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => router.push('/services')}
              className="rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
            >
              {t('home.ctaButton')}
            </button>
          </div>
        </Container>
      </Section>

      <Section className="bg-blue-50/70">
        <Container>
          <SectionHeading
            title={t('home.statsTitle')}
            description=""
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t('home.stats').map((stat, idx) => (
              <StatsCard
                key={idx}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title={t('home.howItWorksTitle')}
            description=""
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t('home.howItWorks').map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-7">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              {t('home.communityTitle')}
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              {t('home.communityDescription')}
            </p>
            <p className="text-base leading-8 text-blue-100 md:text-lg">
              We believe that digital empowerment is key to enabling every citizen to access government services with confidence and ease.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {t('home.ctaTitle')}
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              {t('home.ctaDescription')}
            </p>
            <button
              onClick={() => router.push('/services')}
              className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-700"
            >
              {t('home.ctaButton')}
            </button>
          </div>
        </Container>
      </Section>

      <Section className="border-t-4 border-yellow-400 bg-yellow-50">
        <Container>
          <div className="rounded-2xl border border-yellow-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-base leading-7 text-slate-700">
              <span className="font-semibold text-yellow-700">⚠️ Educational Disclaimer:</span> {t('common.disclaimer')}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
