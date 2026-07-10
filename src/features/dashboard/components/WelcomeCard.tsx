import { CalendarDays } from "lucide-react";

const WelcomeCard = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Good Morning 👋</p>

          <h1 className="mt-2 text-3xl font-bold">
            Welcome back, Prajakta
          </h1>

          <p className="mt-2 text-gray-600">
            Here's your HR overview for today.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2">
          <CalendarDays size={18} />
          <span>{currentDate}</span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;