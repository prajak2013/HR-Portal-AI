import { CalendarDays } from "lucide-react";
import { holidays } from "../data/mockDashboard";

export default function HolidayCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <h2 className="mb-5 text-xl font-semibold">
        Upcoming Holidays
      </h2>

      <div className="space-y-4">
        {holidays.map((holiday) => (
          <div
            key={holiday.id}
            className="flex items-center justify-between rounded-lg border p-3 hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="text-blue-600" />

              <div>
                <p className="font-medium">
                  {holiday.title}
                </p>

                <p className="text-sm text-gray-500">
                  {holiday.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}