import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarToggleProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function SidebarToggle({
  collapsed,
  onToggle,
}: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute -right-4 top-6 flex h-8 w-8  items-center justify-center rounded-full border bg-white shadow transition hover:bg-slate-100"
    >
      {collapsed ? (
        <ChevronRight className="h-4 w-4 text-black mr-2"/>
      ) : (
        <ChevronLeft className="h-4 w-4 text-black mr-2" />
      )}
    </button>
  );
}