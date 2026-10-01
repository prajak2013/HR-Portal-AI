import {
  Bell,
  Check,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../../features/auth/auth.service";


interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  path: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Leave Request",
    message:
      "Your leave request is waiting for approval.",
    time: "10 min ago",
    path: "/leaves",
    read: false,
  },
  {
    id: 2,
    title: "Insurance",
    message:
      "Your insurance policy is active until 31 Dec 2026.",
    time: "2 hours ago",
    path: "/insurance",
    read: false,
  },
  {
    id: 3,
    title: "HR Policy",
    message:
      "A new HR policy has been added.",
    time: "Yesterday",
    path: "/policies",
    read: true,
  },
];

export default function HeaderActions() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [notificationsOpen, setNotificationsOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const notificationRef =
    useRef<HTMLDivElement>(null);

  const profileRef =
    useRef<HTMLDivElement>(null);

  const user = authService.getUser();

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      const target = event.target as Node;

      if (
        notificationRef.current &&
        !notificationRef.current.contains(target)
      ) {
        setNotificationsOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(target)
      ) {
        setProfileOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setNotificationsOpen(false);
        setProfileOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  function toggleNotifications() {
    setNotificationsOpen((current) => !current);
    setProfileOpen(false);
  }

  function toggleProfile() {
    setProfileOpen((current) => !current);
    setNotificationsOpen(false);
  }

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }

  function handleNotificationClick(
    notification: Notification
  ) {
    markAsRead(notification.id);
    setNotificationsOpen(false);
    navigate(notification.path);
  }

  function handleProfile() {
    setProfileOpen(false);
    navigate("/profile");
  }

  function handleLogout() {
    authService.logout();
    navigate("/login", {
      replace: true,
    });
  }

  return (
    <div className="flex items-center gap-2">
      {/* Notifications */}
      <div
        ref={notificationRef}
        className="relative"
      >
        <button
          type="button"
          onClick={toggleNotifications}
          aria-label="Notifications"
          aria-expanded={notificationsOpen}
          className="
            relative rounded-lg p-2.5
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-700
          "
        >
          <Bell size={20} />

          {unreadCount > 0 && (
            <span
              className="
                absolute -right-0.5 -top-0.5
                flex h-5 min-w-5
                items-center justify-center
                rounded-full bg-red-500
                px-1 text-[10px]
                font-bold text-white
              "
            >
              {unreadCount}
            </span>
          )}
        </button>

        {notificationsOpen && (
          <div
            className="
              absolute right-0 mt-2
              w-80 overflow-hidden
              rounded-xl border border-slate-200
              bg-white shadow-xl
            "
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  Notifications
                </h3>

                <p className="text-xs text-slate-500">
                  {unreadCount} unread
                </p>
              </div>

              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsRead}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                  Mark all read
                </button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  type="button"
                  onClick={() =>
                    handleNotificationClick(
                      notification
                    )
                  }
                  className={`
                    flex w-full gap-3
                    border-b border-slate-100
                    px-4 py-3 text-left
                    transition hover:bg-slate-50
                    ${!notification.read
                      ? "bg-blue-50/50"
                      : ""
                    }
                  `}
                >
                  <div className="pt-1">
                    {notification.read ? (
                      <Check
                        size={15}
                        className="text-slate-400"
                      />
                    ) : (
                      <span className="block h-2.5 w-2.5 rounded-full bg-blue-600" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-800">
                        {notification.title}
                      </p>

                      <span className="shrink-0 text-[10px] text-slate-400">
                        {notification.time}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {notification.message}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Profile */}
      <div
        ref={profileRef}
        className="relative"
      >
        <button
          type="button"
          onClick={toggleProfile}
          aria-label="Open profile menu"
          aria-expanded={profileOpen}
          className="
            flex items-center gap-2
            rounded-lg p-1.5
            transition
            hover:bg-slate-100
          "
        >
          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              bg-blue-600
              text-xs font-bold text-white
            "
          >
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-slate-800">
              {user.firstName} {user.lastName}
            </p>

            <p className="text-xs text-slate-500">
              Employee
            </p>
          </div>

          <ChevronDown
            size={16}
            className={`
              hidden text-slate-400
              transition-transform md:block
              ${profileOpen ? "rotate-180" : ""}
            `}
          />
        </button>

        {profileOpen && (
          <div
            className="
              absolute right-0 mt-2 w-64
              overflow-hidden rounded-xl
              border border-slate-200
              bg-white shadow-xl
            "
          >
            <div className="border-b border-slate-100 px-4 py-4">
              <p className="font-semibold text-slate-800">
                {user.firstName} {user.lastName}
              </p>

              <p className="mt-1 truncate text-xs text-slate-500">
                {user.email}
              </p>
            </div>

            <div className="p-2">
              <button
                type="button"
                onClick={handleProfile}
                className="
                  flex w-full items-center gap-3
                  rounded-lg px-3 py-2.5
                  text-sm text-slate-700
                  transition hover:bg-slate-100
                "
              >
                <User size={17} />
                My Profile
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  flex w-full items-center gap-3
                  rounded-lg px-3 py-2.5
                  text-sm text-red-600
                  transition hover:bg-red-50
                "
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}