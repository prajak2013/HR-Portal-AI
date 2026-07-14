import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import EmergencyContact from "./EmergencyContact";
import SaveButton from "../../../components/common/form/SaveButton";


import profileService from "../services/profile.service";
import type { EmployeeProfile } from "../types";
import { profileSchema, type ProfileFormValues } from "../schema/profile.schema";
import PersonalInformation from "./PersonalInfo";
import WorkInformation from "./WorkInfo";

interface ProfileFormProps {
    profile: EmployeeProfile;
    isEditing: boolean;
    onSaveSuccess: (profile: EmployeeProfile) => void;
}

export default function ProfileForm({
    profile,
    isEditing,
    onSaveSuccess,
}: ProfileFormProps) {
    const [saving, setSaving] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
    });

    useEffect(() => {
        if (!isEditing) {
            reset({
                employeeId: profile.employeeId,
                firstName: profile.firstName,
                lastName: profile.lastName,
                email: profile.email,
                phone: profile.phone,
                department: profile.department,
                designation: profile.designation,
                emergencyName: profile.emergencyContact.name,
                emergencyPhone: profile.emergencyContact.phone,
                relationship: profile.emergencyContact.relationship,
            });
        }
    }, [isEditing, profile, reset]);

    async function onSubmit(data: ProfileFormValues) {
        setSaving(true);

        try {
            const updatedProfile: EmployeeProfile = {
                ...profile,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                department: data.department,
                designation: data.designation,
                emergencyContact: {
                    name: data.emergencyName,
                    phone: data.emergencyPhone,
                    relationship: data.relationship,
                },
            };

            const savedProfile =
                await profileService.updateProfile(updatedProfile);

            onSaveSuccess(savedProfile);

            alert("Profile updated successfully!");
        } catch {
            alert("Unable to update profile.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <PersonalInformation
                register={register}
                errors={errors}
                isEditing={isEditing}
            />

            <WorkInformation
                register={register}
                errors={errors}
                isEditing={isEditing}
            />

            <EmergencyContact
                register={register}
                errors={errors}
                isEditing={isEditing}
            />

            {isEditing && (
                <div className="flex justify-end">
                    <SaveButton loading={saving} />
                </div>
            )}
        </form>
    );
}