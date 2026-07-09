export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-900 text-white p-4">
        Sidebar
      </div>

      <div className="flex-1">
        <div className="h-16 border-b flex items-center px-6">
          Header
        </div>

        <div className="p-6 bg-gray-50 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}