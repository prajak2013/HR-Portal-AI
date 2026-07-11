import {
  ChevronDown,
  CircleUserRound,
} from "lucide-react";

export default function UserMenu() {
  return (
    <button className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-100">
      <CircleUserRound
        size={34}
        className="text-blue-600"
      />

      <div className="hidden text-left lg:block">
        <p className="text-sm font-semibold">
          Prajakta
        </p>

        <p className="text-xs text-slate-500">
          Frontend Engineer
        </p>
      </div>

      <ChevronDown
        size={18}
        className="hidden lg:block"
      />
    </button>
  );
}