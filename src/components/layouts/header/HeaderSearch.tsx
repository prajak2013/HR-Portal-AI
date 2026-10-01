import {
  FileText,
  LayoutDashboard,
  Search,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchItem {
  title: string;
  description: string;
  path: string;
  icon: typeof Search;
}

const searchItems: SearchItem[] = [
  {
    title: "Dashboard",
    description: "View your HR dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    description: "View and update your profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Leaves",
    description: "Apply for leave and view leave history",
    path: "/leaves",
    icon: FileText,
  },
  {
    title: "Insurance",
    description: "View insurance coverage and claims",
    path: "/insurance",
    icon: ShieldCheck,
  },
  {
    title: "Policies",
    description: "View HR policies",
    path: "/policies",
    icon: FileText,
  },
];

export default function HeaderSearch() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyboard(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);

        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }

      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const filteredItems = searchItems.filter((item) => {
    const value = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value)
    );
  });

  function handleOpen() {
    setOpen(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  function handleNavigate(path: string) {
    navigate(path);
    setOpen(false);
    setQuery("");
  }

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      {!open ? (
        <button
          type="button"
          onClick={handleOpen}
          aria-label="Search"
          className="
            rounded-lg p-2.5
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <Search size={20} />
        </button>
      ) : (
        <div className="relative w-64 md:w-80">
          <Search
            size={18}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search portal..."
            className="
              w-full rounded-lg
              border border-slate-300
              bg-white py-2.5 pl-10 pr-10
              text-sm outline-none
              transition
              focus:border-blue-500
              focus:ring-2 focus:ring-blue-200
            "
          />

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
            className="
              absolute right-2 top-1/2
              -translate-y-1/2
              rounded p-1
              text-slate-400
              hover:bg-slate-100
              hover:text-slate-600
            "
            aria-label="Close search"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Search Results */}
      {open && (
        <div
          className="
            absolute right-0 mt-2
            w-80 overflow-hidden
            rounded-xl border border-slate-200
            bg-white shadow-xl
          "
        >
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-medium text-slate-500">
              {query
                ? "Search results"
                : "Quick navigation"}
            </p>
          </div>

          <div className="max-h-80 overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-8 text-center">
                <Search
                  size={22}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-2 text-sm text-slate-500">
                  No results found
                </p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() =>
                      handleNavigate(item.path)
                    }
                    className="
                      flex w-full items-center
                      gap-3 rounded-lg px-3 py-3
                      text-left transition
                      hover:bg-slate-50
                    "
                  >
                    <div className="rounded-lg bg-blue-50 p-2">
                      <Icon
                        size={18}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        {item.title}
                      </p>

                      <p className="text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          <div className="border-t border-slate-100 px-4 py-2">
            <p className="text-[11px] text-slate-400">
              Press Ctrl + K to search
            </p>
          </div>
        </div>
      )}
    </div>
  );
}