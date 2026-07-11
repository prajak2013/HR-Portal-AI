export const sidebarClasses = {
  container:
    "flex h-screen flex-col border-r bg-slate-900 text-white transition-all duration-300",

  expanded: "w-64",

  collapsed: "w-20",

  nav: "flex-1 space-y-2 px-3 py-4",

  active:
    "flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white",

  inactive:
    "flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white",

  footer:
    "border-t border-slate-700 p-4",
};