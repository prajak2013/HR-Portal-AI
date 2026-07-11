import NotificationButton from "./NotificationButton";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-3">
      <ThemeToggle />

      <NotificationButton />

      <UserMenu />
    </div>
  );
}