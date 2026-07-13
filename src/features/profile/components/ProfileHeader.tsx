import { BadgeCheck, Pencil, X } from "lucide-react";

import AvatarUpload from "./AvatarUpload";

import type { EmployeeProfile } from "../types";

interface ProfileHeaderProps {
  profile: EmployeeProfile;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
}

export default function ProfileHeader({
  profile,
  isEditing,
  onEdit,
  onCancel,
}: ProfileHeaderProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
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
                <strong>Employee ID:</strong> {profile.employeeId}
              </p>

              <p>
                <strong>Department:</strong> {profile.department}
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
        {!isEditing ? (
          <button
            onClick={onEdit}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <Pencil size={18} />
            Edit Profile
          </button>
        ) : (
          <button
            onClick={onCancel}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
          >
            <X size={18} />
            Cancel
          </button>
        )}
      </div>
    </section>
  );
}