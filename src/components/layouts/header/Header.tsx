import HeaderSearch from "./HeaderSearch";
import HeaderActions from "./HeaderActions";
import HeaderBreadcrumb from "./HeaderBreadcrumb";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 shadow-sm">
      <HeaderBreadcrumb />

      <div className="flex items-center gap-4">
        <HeaderSearch />
        <HeaderActions />
      </div>
    </header>
  );
}