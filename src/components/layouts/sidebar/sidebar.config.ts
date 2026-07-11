import {
  LayoutDashboard,
  User,
  CalendarDays,
  Shield,
  FileText,
  Bot,
} from "lucide-react";

import type { SidebarItem } from "./sidebar.types";

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    id: 3,
    title: "Leaves",
    path: "/leaves",
    icon: CalendarDays,
  },
  {
    id: 4,
    title: "Insurance",
    path: "/insurance",
    icon: Shield,
  },
  {
    id: 5,
    title: "Policies",
    path: "/policies",
    icon: FileText,
  },
  {
    id: 6,
    title: "AI Assistant",
    path: "/chatbot",
    icon: Bot,
  },
];