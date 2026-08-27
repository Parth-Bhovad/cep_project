export default function SectionHeading({ 
  title, 
  description = '',
  className = '',
  centered = true 
}) {
  return (
    <div className={`${centered ? 'text-center mb-12' : 'mb-8'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
