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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <button
              onClick={primaryCtaAction}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {primaryCta}
            </button>
          )}
          {secondaryCta && (
            <button
              onClick={secondaryCtaAction}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
