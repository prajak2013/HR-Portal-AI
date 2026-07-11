import {
  CalendarPlus,
  UserRound,
  Bot,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Apply Leave",
      icon: CalendarPlus,
    },
    {
      title: "Update Profile",
      icon: UserRound,
    },
    {
      title: "Ask AI",
      icon: Bot,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <h2 className="mb-5 text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center rounded-xl border p-6 transition hover:border-blue-600 hover:bg-blue-50"
            >
              <Icon
                size={32}
                className="mb-3 text-blue-600"
              />

              <span>{action.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}