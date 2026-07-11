import { ProfileHeader } from "../features/profile/components";
import { useProfile } from "../features/profile/hooks/useProfile";

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading || !profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />
    </div>
  );
}