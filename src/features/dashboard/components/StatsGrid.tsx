import { dashboardStats } from "../data/mockDashboard";
import StatsCard from "./StatsCard";

export default function StatsGrid() {
  return (
    <section
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {dashboardStats.map((stat) => (
        <StatsCard
          key={stat.id}
          stat={stat}
        />
      ))}
    </section>
  );
}