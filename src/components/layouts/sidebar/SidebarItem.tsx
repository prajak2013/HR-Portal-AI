import { NavLink } from "react-router-dom";
import type { SidebarItem as SidebarItemType } from "./sidebar.types";
import { sidebarClasses } from "./sidebar.styles";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export default function SidebarItem({
  item,
  collapsed,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? sidebarClasses.active
          : sidebarClasses.inactive
      }
    >
      <Icon className="h-5 w-5 shrink-0" />

      {!collapsed && (
        <span className="text-sm">{item.title}</span>
      )}
    </NavLink>
  );
}