import {
  LogOut,
  UserCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import authService from "../../../features/auth/auth.service";

interface SidebarFooterProps {
  collapsed: boolean;
}




export default function SidebarFooter({
  collapsed,
}: SidebarFooterProps) {

  const navigate = useNavigate();

  function handleLogout() {
    authService.logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="border-t border-slate-800 p-4">
      <div className="flex items-center gap-3">
        <UserCircle2 className="h-10 w-10 text-slate-300" />

        {!collapsed && (
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              Prajakta
            </p>

            <p className="text-xs text-slate-400">
              Frontend Engineer
            </p>
          </div>
        )}
      </div>

      {!collapsed && (
        <button
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium transition hover:bg-red-600"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      )}
    </div>
  );
}