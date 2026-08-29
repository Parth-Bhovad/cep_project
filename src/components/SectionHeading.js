export default function SectionHeading({ 
  title, 
  description = '',
  className = '',
  centered = true 
}) {
  return (
    <div className={`${centered ? 'mb-12 text-center' : 'mb-8'} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 text-slate-600 md:text-lg ${centered ? 'mx-auto max-w-3xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
