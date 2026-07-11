import type { DashboardStat } from "../types";

interface StatsCardProps {
  stat: DashboardStat;
}

export default function StatsCard({
  stat,
}: StatsCardProps) {
  const Icon = stat.icon;

  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        border
        border-slate-200
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-800">
            {stat.value}
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            {stat.subtitle}
          </p>
        </div>

        <div
          className={`${stat.color} rounded-xl p-3 text-white`}
        >
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}