import { Megaphone } from "lucide-react";
import { announcements } from "../data/mockDashboard";

export default function AnnouncementCard() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border">
      <h2 className="mb-5 text-xl font-semibold">
        Announcements
      </h2>

      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4 hover:bg-slate-50"
          >
            <div className="flex gap-3">
              <Megaphone className="text-green-600 mt-1" />

              <div>
                <p className="font-medium">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}