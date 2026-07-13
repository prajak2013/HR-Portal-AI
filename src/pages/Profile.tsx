import { ProfileHeader } from "../features/profile/components";
import ProfileForm from "../features/profile/components/ProfileForm";

import { useProfile } from "../features/profile/hooks/useProfile";

export default function Profile() {
  const { profile, loading } = useProfile();

  if (loading || !profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />

      <ProfileForm profile={profile} />
    </div>
  );
}