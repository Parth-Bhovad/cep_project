'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';

export default function FeedbackPage() {
  const { t } = useLanguage();
  const feedbackContent = t('feedback');
  const formContent = feedbackContent.form;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    preferredLanguage: '',
    rating: '',
    feedback: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent default form submission, show success message
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        age: '',
        occupation: '',
        preferredLanguage: '',
        rating: '',
        feedback: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-purple-50 to-white pt-24">
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {feedbackContent.title}
            </h1>
            <p className="text-lg text-gray-600">
              {feedbackContent.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Form Section */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitted && (
              <div className="bg-green-50 border-2 border-green-600 rounded-xl p-6 mb-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-lg font-semibold text-green-800">
                  {formContent.successMessage}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.age}
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="150"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your age"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.occupation}
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your occupation"
                />
              </div>

              {/* Preferred Language */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.preferredLanguage}
                </label>
                <select
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">{formContent.selectOption}</option>
                  <option value="English">English</option>
                  <option value="Hindi">हिंदी (Hindi)</option>
                  <option value="Marathi">मराठी (Marathi)</option>
                </select>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.rating}
                </label>
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">{formContent.selectOption}</option>
                  <option value="Excellent">{formContent.excellent}</option>
                  <option value="Good">{formContent.good}</option>
                  <option value="Average">{formContent.average}</option>
                  <option value="Needs Improvement">{formContent.needsImprovement}</option>
                </select>
              </div>

              {/* Feedback */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {formContent.feedback}
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Share your thoughts and suggestions..."
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-end">
                <button
                  type="reset"
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {formContent.cancel}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {formContent.submit}
                </button>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      {/* Why We Need Feedback Section */}
      <Section className="bg-blue-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Your Feedback Matters</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">🎯</div>
                <p className="font-semibold text-gray-900 mb-2">Improvement</p>
                <p className="text-sm text-gray-600">Your input helps us create better resources</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">👂</div>
                <p className="font-semibold text-gray-900 mb-2">Your Voice</p>
                <p className="text-sm text-gray-600">We genuinely value your opinions</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl mb-3">🌱</div>
                <p className="font-semibold text-gray-900 mb-2">Growth</p>
                <p className="text-sm text-gray-600">Feedback drives continuous improvement</p>
              </div>
            </div>
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
