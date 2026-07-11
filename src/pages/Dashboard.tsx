import {
  WelcomeCard,
  StatsGrid,
  LeaveChart,
  HolidayCard,
  AnnouncementCard,
  DashboardSkeleton,
} from "../features/dashboard/components";
import { useDashboard } from "../features/dashboard/hook/useDashboard";


export default function Dashboard() {
  const { loading, error } = useDashboard();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-6 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <WelcomeCard />

      <StatsGrid />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <LeaveChart />
        </div>

        <HolidayCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AnnouncementCard />

        <DashboardSkeleton />
      </div>
    </div>
  );
}