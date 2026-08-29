export default function StatsCard({ number, label }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-9">
      <div className="mb-2 text-4xl font-bold tracking-tight text-blue-600 md:text-5xl">
        {number}
      </div>
      <p className="text-sm font-medium text-slate-600 md:text-base">{label}</p>
    </div>
  );
}
