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
      {/* Hero Section */}
      <Hero
        title={t('home.title')}
        subtitle={t('home.subtitle')}
        description={t('home.description')}
        primaryCta={t('home.heroCtaText')}
        secondaryCta={t('home.heroCtaSecondary')}
        primaryCtaAction={() => router.push('/services')}
        secondaryCtaAction={() => router.push('/digital-safety')}
      />

      {/* Features Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading
            title={t('home.featuresTitle')}
            description=""
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Services Preview Section */}
      <Section>
        <Container>
          <SectionHeading
            title={t('home.servicesTitle')}
            description={t('home.servicesDescription')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} t={t} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => router.push('/services')}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t('home.ctaButton')}
            </button>
          </div>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-blue-50">
        <Container>
          <SectionHeading
            title={t('home.statsTitle')}
            description=""
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* How It Works Section */}
      <Section>
        <Container>
          <SectionHeading
            title={t('home.howItWorksTitle')}
            description=""
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('home.howItWorks').map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Community Impact Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.communityTitle')}
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              {t('home.communityDescription')}
            </p>
            <p className="text-blue-100 leading-relaxed">
              We believe that digital empowerment is key to enabling every citizen to access government services with confidence and ease.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('home.ctaDescription')}
            </p>
            <button
              onClick={() => router.push('/services')}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              {t('home.ctaButton')}
            </button>
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
