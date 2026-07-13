import { useEffect, useState } from "react";

import profileService from "../services/profile.service";

import type { EmployeeProfile } from "../types";

export function useProfile() {
  const [profile, setProfile] =
    useState<EmployeeProfile | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadProfile() {
      const data =
        await profileService.getProfile();

      setProfile(data);

      setLoading(false);
    }

    loadProfile();
  }, []);

  return {
    profile,
    loading,
    setProfile,
  };
}