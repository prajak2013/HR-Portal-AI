import WelcomeCard from "../features/dashboard/components/WelcomeCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <WelcomeCard />

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>
    </div>
  );
}