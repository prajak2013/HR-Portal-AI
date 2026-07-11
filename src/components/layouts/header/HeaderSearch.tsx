import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative hidden lg:block">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search..."
        className="w-72 rounded-lg border border-slate-300 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}