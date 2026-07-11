import { BadgeCheck, Pencil } from "lucide-react";

import AvatarUpload from "./AvatarUpload";

import type { EmployeeProfile } from "../types";

interface ProfileHeaderProps {
  profile: EmployeeProfile;
}

export default function ProfileHeader({
  profile,
}: ProfileHeaderProps) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <AvatarUpload image={profile.avatar} />

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              {profile.firstName} {profile.lastName}
            </h1>

            <p className="mt-2 text-slate-500">
              {profile.designation}
            </p>

            <div className="mt-4 space-y-1 text-sm text-slate-600">
              <p>
                <strong>Employee ID:</strong>{" "}
                {profile.employeeId}
              </p>

              <p>
                <strong>Department:</strong>{" "}
                {profile.department}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <BadgeCheck
                size={18}
                className="text-green-600"
              />

              <span className="text-sm font-medium text-green-600">
                Active Employee
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <button
          className="
            flex
            items-center
            gap-2
            rounded-lg
            bg-blue-600
            px-5
            py-3
            text-white
            transition
            hover:bg-blue-700
          "
        >
          <Pencil size={18} />

          Edit Profile
        </button>
      </div>
    </section>
  );
}