import Link from 'next/link';

export default function ServiceCard({ service, t }) {
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 cursor-pointer h-full">
        <div className="p-6">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {service.shortDescription}
          </p>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            {service.category}
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-blue-600 text-sm font-semibold group-hover:text-blue-700">
          {t('common.learnMore')} →
        </div>
      </div>
    </Link>
  );
}
