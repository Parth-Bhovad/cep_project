import Link from 'next/link';

export default function ServiceCard({ service, t }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
        <div className="flex h-full flex-col p-6 md:p-7">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl shadow-sm">
            {service.icon}
          </div>

          <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
            {service.title}
          </h3>

          <p className="mb-5 text-sm leading-6 text-slate-600">
            {service.shortDescription}
          </p>

          <div className="mt-auto">
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {service.category}
            </span>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800 md:px-7">
          {t('common.learnMore')} →
        </div>
      </div>
    </Link>
  );
}
