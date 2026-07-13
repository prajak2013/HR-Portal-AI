import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { relationshipOptions } from "../constants";
import type { ProfileFormValues } from "../schema/profile.schema";
import { FormField, SelectInput, TextInput } from "../../../components/common/form";

interface EmergencyContactProps {
    register: UseFormRegister<ProfileFormValues>;
    errors: FieldErrors<ProfileFormValues>;
}

export default function EmergencyContact({
    register,
    errors,
}: EmergencyContactProps) {
    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Emergency Contact
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    label="Contact Name"
                    required
                >
                    <TextInput
                        placeholder="Enter contact name"
                        {...register("emergencyName")}
                        error={errors.emergencyName?.message}
                    />
                </FormField>

                <FormField
                    label="Contact Number"
                    required
                >
                    <TextInput
                        type="tel"
                        placeholder="Enter contact number"
                        {...register("emergencyPhone")}
                        error={errors.emergencyPhone?.message}
                    />
                </FormField>

                <FormField
                    label="Relationship"
                    required
                >
                    <SelectInput
                        options={relationshipOptions}
                        {...register("relationship")}
                        error={errors.relationship?.message}
                    />
                </FormField>
            </div>
        </section>
    );
}