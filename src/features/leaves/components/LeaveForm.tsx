import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectInput from "../../../components/common/form/SelectInput";
import TextInput from "../../../components/common/form/TextInput";
import TextArea from "../../../components/common/form/TextArea";
import { leaveSchema, type LeaveFormValues } from "../schema/leave.schema";
import { leaveTypes } from "../constants";
import leaveService from "../services/leave.service";
import type { LeaveRequest } from "../types";
import { SaveButton } from "../../profile/components";


interface LeaveFormProps {
    onApplyLeave: (leave: LeaveRequest) => boolean;
}

export default function LeaveForm({
    onApplyLeave,
}: LeaveFormProps) {
    const [saving, setSaving] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<LeaveFormValues>({
        resolver: zodResolver(leaveSchema),
    });

    const startDate = watch("startDate");
    const endDate = watch("endDate");

    const totalDays = useMemo(() => {
        if (!startDate || !endDate) return 0;

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end < start) return 0;

        return (
            Math.floor(
                (end.getTime() - start.getTime()) /
                (1000 * 60 * 60 * 24)
            ) + 1
        );
    }, [startDate, endDate]);

    async function onSubmit(data: LeaveFormValues) {
        setSaving(true);

        try {
            const leave: LeaveRequest = {
                id: crypto.randomUUID(),
                leaveType: data.leaveType,
                startDate: data.startDate,
                endDate: data.endDate,
                totalDays,
                reason: data.reason,
                status: "Pending",
            };

            await leaveService.applyLeave(leave);

            const success = onApplyLeave(leave);

            if (success) {
                 await leaveService.applyLeave(leave);
                reset();
                alert("Leave applied successfully!");
            }
        } catch (error) {
            console.error(error);
            alert("Unable to apply leave.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-slate-800">
                Apply Leave
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                <SelectInput
                    label="Leave Type"
                    options={leaveTypes.map((type) => ({
                        label: type,
                        value: type,
                    }))}
                    error={errors.leaveType?.message}
                    {...register("leaveType")}
                />

                <div className="grid gap-5 md:grid-cols-2">
                    <TextInput
                        label="Start Date"
                        type="date"
                        error={errors.startDate?.message}
                        {...register("startDate")}
                    />

                    <TextInput
                        label="End Date"
                        type="date"
                        error={errors.endDate?.message}
                        {...register("endDate")}
                    />
                </div>

                {totalDays > 0 && (
                    <div className="rounded-lg bg-blue-50 p-4">
                        <p className="text-sm text-blue-700">
                            Total Leave Days:
                            <span className="ml-2 font-semibold">
                                {totalDays}
                            </span>
                        </p>
                    </div>
                )}

                <TextArea
                    label="Reason"
                    rows={4}
                    placeholder="Enter reason for leave..."
                    error={errors.reason?.message}
                    {...register("reason")}
                />

                <div className="flex justify-end">
                    <SaveButton
                        loading={saving}
                        text="Apply Leave"
                        loadingText="Applying..."
                    />
                </div>
            </form>
        </section>
    );
}