import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const routeNames: Record<string, string> = {
  dashboard: "Dashboard",
  profile: "Profile",
  leaves: "Leaves",
  insurance: "Insurance",
  policies: "Policies",
  chatbot: "HR Assistant",
};

export default function HeaderBreadcrumb() {
  const location = useLocation();

  const currentPath =
    location.pathname.split("/")[1] || "dashboard";

  const currentName =
    routeNames[currentPath] || "Dashboard";

  return (
    <div className="flex min-w-0 items-center gap-2">
      <Link
        to="/dashboard"
        className="
          hidden items-center gap-1.5
          text-sm text-slate-400
          transition hover:text-blue-600
          sm:flex
        "
      >
        <Home size={16} />
        Home
      </Link>

      <ChevronRight
        size={15}
        className="hidden text-slate-300 sm:block"
      />

      <span className="truncate text-sm font-semibold text-slate-800">
        {currentName}
      </span>
    </div>
  );
}