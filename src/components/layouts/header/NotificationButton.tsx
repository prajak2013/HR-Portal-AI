import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="relative rounded-lg p-2 transition hover:bg-slate-100">
      <Bell size={20} />

      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
        3
      </span>
    </button>
  );
}