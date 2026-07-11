import { StatsGrid } from "../features/dashboard/components";
import WelcomeCard from "../features/dashboard/components/WelcomeCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeCard />
      <StatsGrid />
    </div>
  );
}