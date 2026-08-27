'use client';

import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import StatsCard from '@/components/StatsCard';
import survey from '@/data/survey.json';

export default function SurveyPage() {
  const { t } = useLanguage();
  const surveyContent = t('survey');

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-green-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {surveyContent.title}
            </h1>
            <p className="text-lg text-gray-600">
              {surveyContent.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Survey Details */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Survey Scope</h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Period:</strong> {survey.surveyPeriod}</li>
                <li><strong>Respondents:</strong> {survey.totalRespondents.toLocaleString()}</li>
                <li><strong>Coverage:</strong> {survey.coverage}</li>
                <li><strong>Method:</strong> {survey.methodology}</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Metrics</h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>States Covered:</strong> Multiple</li>
                <li><strong>Age Groups:</strong> 5 categories</li>
                <li><strong>Languages:</strong> Multiple</li>
                <li><strong>Data Quality:</strong> Community-verified</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Age Distribution */}
      <Section>
        <Container>
          <SectionHeading title="Age Distribution" description="Survey respondents across different age groups" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.values(survey.ageGroups).map((group, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{group.percentage}%</div>
                <p className="text-sm font-medium text-gray-600">{group.label}</p>
                <p className="text-xs text-gray-500 mt-2">n={group.count}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Service Awareness */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading title="Service Awareness & Adoption" description="Percentage of respondents aware and having applied" />
          <div className="space-y-6">
            {Object.values(survey.serviceAwareness).map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900">{service.label}</h3>
                  <span className="text-2xl font-bold text-blue-600">{service.percentage}%</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-500"
                    style={{ width: `${service.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Adoption Rate: {service.hasApplied}%</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Common Challenges */}
      <Section>
        <Container>
          <SectionHeading title="Common Challenges" description="Main barriers to service adoption reported by citizens" />
          <div className="space-y-4">
            {survey.commonChallenges.map((challenge, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-900">{challenge.challenge}</h3>
                  <span className="text-xl font-bold text-red-600">{challenge.percentage}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-red-500 h-full transition-all duration-500"
                    style={{ width: `${challenge.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{challenge.count} respondents</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Language Preferences */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeading title="Language Preferences" description="Preferred language for accessing information" />
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(survey.languagePreferences).map((lang, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{lang.percentage}%</div>
                <p className="font-bold text-gray-900 mb-2">{lang.label}</p>
                <p className="text-sm text-gray-600">{lang.count} respondents</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Digital Literacy */}
      <Section>
        <Container>
          <SectionHeading title="Digital Literacy Levels" description="Self-assessed digital literacy among respondents" />
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(survey.digitalLiteracy).map((level, idx) => (
              <div key={idx} className={`rounded-xl p-6 shadow-md text-center text-white ${
                idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-blue-500' : 'bg-red-500'
              }`}>
                <div className="text-4xl font-bold mb-2">{level.percentage}%</div>
                <p className="font-bold mb-2">{level.label}</p>
                <p className="text-sm opacity-90">{level.count} respondents</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Key Observations */}
      <Section className="bg-blue-50">
        <Container>
          <SectionHeading title="Key Observations" />
          <div className="grid md:grid-cols-2 gap-6">
            {survey.observations.map((observation, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <p className="text-gray-700 leading-relaxed">{observation}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Recommendations */}
      <Section>
        <Container>
          <SectionHeading title="Recommendations" />
          <div className="grid md:grid-cols-2 gap-6">
            {survey.recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <div className="flex gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-gray-700 leading-relaxed">{rec}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Positive Insights */}
      <Section className="bg-green-50">
        <Container>
          <SectionHeading title="Positive Insights" />
          <div className="space-y-4">
            {survey.positiveInsights.map((insight, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md flex items-start gap-4 border-l-4 border-green-600">
                <span className="text-3xl">💡</span>
                <p className="text-gray-700 leading-relaxed">{insight}</p>
              </div>
            ))}
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
