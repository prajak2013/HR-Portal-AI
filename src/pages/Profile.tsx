import { useState } from "react";

import {
  ProfileHeader,
  ProfileForm,
} from "../features/profile/components";

import { useProfile } from "../features/profile/hooks/useProfile";

export default function Profile() {
  const { profile, loading, setProfile } = useProfile();

  const [isEditing, setIsEditing] = useState(false);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Unable to load profile.</div>;
  }

  return (
    <div className="space-y-6">
      <ProfileHeader
        profile={profile}
        isEditing={isEditing}
        onEdit={() => setIsEditing(true)}
        onCancel={() => setIsEditing(false)}
      />

      <ProfileForm
        profile={profile}
        isEditing={isEditing}
        onSaveSuccess={(updatedProfile) => {
          setProfile(updatedProfile);
          setIsEditing(false);
        }}
      />
    </div>
  );
}