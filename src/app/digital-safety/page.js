'use client';

import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

export default function DigitalSafetyPage() {
  const { t } = useLanguage();
  const content = t('digitalSafety');

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-red-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-gray-600">
              {content.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Safety Topics */}
      <Section>
        <Container>
          <div className="space-y-8">
            {/* OTP Safety */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔐</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.otpSafety.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.otpSafety.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Password Safety */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔑</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.passwordSafety.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.passwordSafety.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Government Scams */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-yellow-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">⚠️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.governmentScams.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.governmentScams.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Fake Websites */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🕵️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.fakeWebsites.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.fakeWebsites.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Official Domains */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.officialDomains.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.officialDomains.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cyber Awareness */}
            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {content.cyberAwareness.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {content.cyberAwareness.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Safe Practices */}
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {content.safePractices.title}
              </h2>
              <ul className="space-y-3">
                {content.safePractices.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Key Takeaways Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Remember</h2>
            <ul className="space-y-4 text-lg">
              <li>🔒 Never share OTPs, passwords, or personal information</li>
              <li>🌐 Always verify official website URLs (.gov.in)</li>
              <li>📱 Use trusted devices and networks for government services</li>
              <li>⚡ Stay updated with latest security practices</li>
            </ul>
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
