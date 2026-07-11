import { useLocation } from "react-router-dom";

export default function HeaderBreadcrumb() {
  const location = useLocation();

  const page =
    location.pathname.split("/")[1] || "dashboard";

  const title =
    page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800">
        {title}
      </h1>

      <p className="text-sm text-slate-500">
        Welcome back 👋
      </p>
    </div>
  );
}