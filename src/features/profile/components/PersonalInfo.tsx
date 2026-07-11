
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { ProfileFormValues } from "../schema/profile.schema";

interface Props {
    register: UseFormRegister<ProfileFormValues>;
    errors: FieldErrors<ProfileFormValues>;
}

export default function PersonalInformation({
    register,
    errors,
}: Props) {
    return (
        <section className="rounded-xl border p-6">
            <h2 className="mb-6 text-xl font-semibold">
                Personal Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label>First Name</label>

                    <input
                        {...register("firstName")}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.firstName?.message}
                    </p>
                </div>

                <div>
                    <label>Last Name</label>

                    <input
                        {...register("lastName")}
                        className="mt-2 w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label>Email</label>

                    <input
                        {...register("email")}
                        className="mt-2 w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label>Phone</label>

                    <input
                        {...register("phone")}
                        className="mt-2 w-full rounded-lg border p-3"
                    />
                </div>
            </div>
        </section>
    );
}