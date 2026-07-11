import { BriefcaseBusiness } from "lucide-react";

interface SidebarLogoProps {
  collapsed: boolean;
}

export default function SidebarLogo({
  collapsed,
}: SidebarLogoProps) {
  return (
    <div className="flex h-16 items-center border-b border-slate-800 px-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-blue-600 p-2">
          <BriefcaseBusiness className="h-6 w-6 text-white" />
        </div>

        {!collapsed && (
          <div>
            <h1 className="text-lg font-bold text-white">
              HR Portal AI
            </h1>

            <p className="text-xs text-slate-400">
              Employee Self Service
            </p>
          </div>
        )}
      </div>
    </div>
  );
}