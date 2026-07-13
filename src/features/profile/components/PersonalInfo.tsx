import type { FieldErrors, UseFormRegister } from "react-hook-form";

import {
    FormField,
    TextInput,
} from "../../../components/common/form";
import type { ProfileFormValues } from "../schema/profile.schema";

interface PersonalInformationProps {
    register: UseFormRegister<ProfileFormValues>;
    errors: FieldErrors<ProfileFormValues>;
    isEditing: boolean;
}

export default function PersonalInformation({
    register,
    errors, isEditing
}: PersonalInformationProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Personal Information
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    label="First Name"
                    required
                >
                    <TextInput
                        disabled={!isEditing}
                        placeholder="Enter first name"
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />
                </FormField>

                <FormField
                    label="Last Name"
                    required
                >
                    <TextInput
                        disabled={!isEditing}
                        placeholder="Enter last name"
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                </FormField>

                <FormField
                    label="Email"
                    required
                >
                    <TextInput
                        disabled={!isEditing}
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                </FormField>

                <FormField
                    label="Phone"
                    required
                >
                    <TextInput
                        disabled={!isEditing}
                        type="tel"
                        placeholder="Enter phone number"
                        {...register("phone")}
                        error={errors.phone?.message}
                    />
                </FormField>
            </div>
        </section>
    );
}