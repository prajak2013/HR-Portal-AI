import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button className="rounded-lg p-2 transition hover:bg-slate-100">
      <Moon size={20} />
    </button>
  );
}