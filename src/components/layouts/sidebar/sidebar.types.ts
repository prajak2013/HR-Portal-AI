import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  id: number;
  title: string;
  path: string;
  icon: LucideIcon;
}

export interface SidebarProps {
  collapsed: boolean;
}