'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Section from '@/components/Section';
import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import SearchBar from '@/components/SearchBar';
import ServiceCard from '@/components/ServiceCard';
import services from '@/data/services.json';

export default function Services() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(services.map(s => s.category))];
  
  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase()) ||
                         service.shortDescription.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Section className="bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-20 pb-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Browse government services
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {t('services.title')}
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {t('services.description')}
            </p>
          </div>
        </Container>
      </Section>

      <Section className="sticky top-16 z-40 border-b border-slate-200 bg-white/90 py-8 backdrop-blur-sm">
        <Container>
          <div className="mx-auto max-w-5xl">
            <SearchBar
              placeholder={t('services.searchPlaceholder')}
              onSearch={setSearch}
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} t={t} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
              <p className="text-xl font-medium text-slate-600">{t('services.noResults')}</p>
            </div>
          )}
        </Container>
      </Section>

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
