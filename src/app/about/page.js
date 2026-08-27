'use client';

import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

export default function AboutPage() {
  const { t } = useLanguage();
  const about = t('about');

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-indigo-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {about.title}
            </h1>
            <p className="text-lg text-gray-600">
              {about.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Problem Statement */}
      <Section>
        <Container>
          <div className="bg-white rounded-xl p-8 shadow-md mb-8 border-l-4 border-red-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {about.problemStatement.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {about.problemStatement.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Objectives */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading
            title={about.objectives.title}
            centered={false}
            className="mb-6"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {about.objectives.list.map((objective, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md flex gap-4 border-l-4 border-blue-600">
                <span className="text-2xl font-bold text-blue-600 flex-shrink-0">{idx + 1}.</span>
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Methodology */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {about.methodology.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {about.methodology.description}
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-700 font-semibold">Community-Centered Approach</p>
              <p className="text-sm text-gray-600 mt-2">Data-driven insights to create meaningful solutions</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Community Interaction */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-green-50 rounded-xl p-8 text-center order-2 md:order-1">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-gray-700 font-semibold">Engaged Citizens</p>
              <p className="text-sm text-gray-600 mt-2">Voices heard across communities</p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {about.communityInteraction.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {about.communityInteraction.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Project Flow */}
      <Section>
        <Container>
          <SectionHeading
            title={about.projectFlowTitle}
            centered={true}
          />
          
          {/* Desktop Flow */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-8">
              {about.projectFlow.map((step, idx) => (
                <div key={idx} className="flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                      {idx + 1}
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md text-center min-h-20 flex items-center justify-center">
                      <p className="text-sm font-semibold text-gray-900">{step}</p>
                    </div>
                  </div>
                  {idx < about.projectFlow.length - 1 && (
                    <div className="flex-1 h-1 bg-blue-300 mx-2 mt-6"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden space-y-4">
            {about.projectFlow.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < about.projectFlow.length - 1 && (
                    <div className="w-1 h-12 bg-blue-300 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="bg-white rounded-lg p-4 shadow-md mb-4">
                  <p className="font-semibold text-gray-900">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Observation and Analysis */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {about.observation.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {about.observation.description}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {about.analysis.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {about.analysis.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Expected Outcome */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {about.expectedOutcome.title}
            </h2>
            <p className="text-lg leading-relaxed">
              {about.expectedOutcome.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Message */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To bridge the digital divide by creating accessible, user-friendly educational resources that empower citizens to confidently utilize government digital services.
            </p>
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
