import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import SidebarToggle from "./SidebarToggle";

import { sidebarItems } from "./sidebar.config";
import { sidebarClasses } from "./sidebar.styles";

import { useSidebarStore } from "../../../store/sidebarStore";

const  Sidebar = ()  =>{
  const { collapsed, toggle } = useSidebarStore();

  return (
    <aside
      className={`
        ${sidebarClasses.container}
        ${collapsed ? sidebarClasses.collapsed : sidebarClasses.expanded}
        relative
      `}
    >
      {/* Collapse / Expand Button */}
      <SidebarToggle
        collapsed={collapsed}
        onToggle={toggle}
      />

      {/* Logo */}
      <SidebarLogo collapsed={collapsed} />

      {/* Navigation */}
      <nav className={sidebarClasses.nav}>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Footer */}
      <SidebarFooter collapsed={collapsed} />
    </aside>
  );
}

export default Sidebar;