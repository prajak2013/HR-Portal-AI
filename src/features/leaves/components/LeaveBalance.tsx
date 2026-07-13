import { Calendar, HeartPulse, Briefcase } from "lucide-react";

import type { LeaveBalance as LeaveBalanceType } from "../types";

interface LeaveBalanceProps {
  balance: LeaveBalanceType;
}

export default function LeaveBalance({
  balance,
}: LeaveBalanceProps) {
  const cards = [
    {
      title: "Annual Leave",
      value: balance.annual,
      icon: Calendar,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Sick Leave",
      value: balance.sick,
      icon: HeartPulse,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Casual Leave",
      value: balance.casual,
      icon: Briefcase,
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Leave Balance
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-xl border border-slate-200 p-5 transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    {card.title}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-slate-800">
                    {card.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Days Remaining
                  </p>
                </div>

                <div
                  className={`rounded-full p-4 ${card.bg}`}
                >
                  <Icon
                    size={28}
                    className={card.color}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}