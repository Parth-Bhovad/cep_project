export default function StatsCard({ number, label }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {number}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}
