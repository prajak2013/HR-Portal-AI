export default function DashboardSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-40 rounded-2xl bg-gray-200" />

      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 rounded-2xl bg-gray-200"
          />
        ))}
      </div>

      <div className="h-80 rounded-2xl bg-gray-200" />
    </div>
  );
}