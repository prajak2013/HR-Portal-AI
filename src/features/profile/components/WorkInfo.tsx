import type { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  departmentOptions,
  designationOptions,
} from "../constants";
import type { ProfileFormValues } from "../schema/profile.schema";
import { FormField, SelectInput, TextInput } from "../../../components/common/form";

interface WorkInformationProps {
  register: UseFormRegister<ProfileFormValues>;
  errors: FieldErrors<ProfileFormValues>;
}

export default function WorkInformation({
  register,
  errors,
}: WorkInformationProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Work Information
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField label="Employee ID">
          <TextInput
            readOnly
            {...register("employeeId")}
          />
        </FormField>

        <FormField
          label="Department"
          required
        >
          <SelectInput
            options={departmentOptions}
            {...register("department")}
            error={errors.department?.message}
          />
        </FormField>

        <FormField
          label="Designation"
          required
        >
          <SelectInput
            options={designationOptions}
            {...register("designation")}
            error={errors.designation?.message}
          />
        </FormField>
      </div>
    </section>
  );
}