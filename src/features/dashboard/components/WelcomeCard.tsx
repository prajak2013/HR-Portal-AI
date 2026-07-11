import { CalendarDays } from "lucide-react";

import { employee } from "../constants";
import { useGreeting } from "../hook/useGreeting";

export default function WelcomeCard() {
  const { greeting, emoji } = useGreeting();
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            {emoji} {greeting}, {employee.name}
          </h2>

          <p className="mt-2 text-blue-100">
            Welcome back! Here's your HR summary for today.
          </p>

          <p className="mt-4 rounded-full bg-white/20 px-4 py-1 text-sm inline-block">
            {employee.designation}
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3">
          <CalendarDays size={20} />

          <span className="font-medium">
            {today}
          </span>
        </div>
      </div>
    </section>
  );
}