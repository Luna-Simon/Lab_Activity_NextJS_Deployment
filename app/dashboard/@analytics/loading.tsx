export default function AnalyticsLoading() {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics</h3>
      <div className="space-y-3">
        <div className="h-20 bg-gray-200 rounded animate-pulse" />
        <div className="grid grid-cols-2 gap-3">
          <div className="h-16 bg-gray-200 rounded animate-pulse" />
          <div className="h-16 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-16 bg-gray-200 rounded animate-pulse" />
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Loading analytics data (simulating 3-second delay)...
      </p>
    </div>
  );
}
