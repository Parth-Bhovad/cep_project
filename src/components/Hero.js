export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCta, 
  secondaryCta,
  primaryCtaAction,
  secondaryCtaAction 
}) {
  return (
    <div className="flex min-h-[74vh] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-sky-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
          Digital services made simple
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg font-semibold text-blue-700 sm:text-xl md:text-2xl">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta && (
            <button
              onClick={primaryCtaAction}
              className="w-full rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md sm:w-auto"
            >
              {primaryCta}
            </button>
          )}
          {secondaryCta && (
            <button
              onClick={secondaryCtaAction}
              className="w-full rounded-xl border-2 border-blue-600 bg-white px-7 py-3.5 text-base font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-50 sm:w-auto"
            >
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
