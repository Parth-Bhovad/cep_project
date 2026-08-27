'use client';

import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t('contact');

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {contact.title}
            </h1>
            <p className="text-lg text-gray-600">
              {contact.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Project Information */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {contact.projectInfo.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {contact.projectInfo.description}
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>CEP (College Educational Project)</strong> - Developed as part of academic curriculum to demonstrate government digital services awareness.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.email.title}
                </h3>
                <a
                  href={`mailto:${contact.email.value}`}
                  className="text-blue-600 hover:text-blue-800 text-lg font-medium break-all"
                >
                  {contact.email.value}
                </a>
              </div>

              {/* GitHub */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gray-800">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {contact.github.title}
                </h3>
                <a
                  href={`https://${contact.github.value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-lg font-medium break-all"
                >
                  {contact.github.value}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Official Government Resources */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading
            title={contact.officialResources.title}
            description={contact.officialResources.description}
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Aadhaar */}
            <a
              href="https://uidai.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-orange-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">🆔</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aadhaar (UIDAI)</h3>
              <p className="text-sm text-gray-600 mb-4">Official Unique Identification Authority of India</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>

            {/* PAN */}
            <a
              href="https://incometaxindiaefiling.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-green-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">💳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">PAN (Income Tax)</h3>
              <p className="text-sm text-gray-600 mb-4">Permanent Account Number - Official Portal</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>

            {/* DigiLocker */}
            <a
              href="https://digilocker.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DigiLocker</h3>
              <p className="text-sm text-gray-600 mb-4">Digital Locker - Store Your Documents</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>

            {/* Passport */}
            <a
              href="https://passportindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-purple-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">✈️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Passport Portal</h3>
              <p className="text-sm text-gray-600 mb-4">Apply and Track Your Passport</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>

            {/* Parivahan */}
            <a
              href="https://parivahan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-red-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Parivahan (DL & RTO)</h3>
              <p className="text-sm text-gray-600 mb-4">Driving License and Road Transport</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>

            {/* National Portal */}
            <a
              href="https://www.india.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-indigo-500 cursor-pointer"
            >
              <div className="text-3xl mb-3">🇮🇳</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">National Portal of India</h3>
              <p className="text-sm text-gray-600 mb-4">Central Gateway to Government Services</p>
              <span className="text-blue-600 font-semibold text-sm">Visit Official Site →</span>
            </a>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            centered={true}
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Is this an official website?</h3>
              <p className="text-sm text-gray-600">No, this is an educational project. Always verify official government websites (.gov.in).</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Where can I apply for services?</h3>
              <p className="text-sm text-gray-600">Visit the official government portals linked in the resources section above.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Who should I contact for issues?</h3>
              <p className="text-sm text-gray-600">For actual services, contact the respective government department directly.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">How can I report a scam?</h3>
              <p className="text-sm text-gray-600">Report to your local police or use cybercrime.gov.in</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Important Notice */}
      <Section className="bg-yellow-50 border-t-4 border-yellow-400">
        <Container>
          <div className="bg-white rounded-lg p-8 border-l-4 border-yellow-400 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {contact.disclaimer}
            </p>
            <p className="text-sm text-gray-600">
              This website is developed solely for educational and demonstration purposes as part of a college project. Users should always visit official Government portals for actual services.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
