import { useMemo, useState } from "react";
import TextInput from "../../../components/common/form/TextInput";
import SelectInput from "../../../components/common/form/SelectInput";
import LeaveStatusBadge from "./LeaveStatusBadge";

import type {
    LeaveRequest,
    LeaveStatus,
} from "../types";

interface LeaveHistoryProps {
    history: LeaveRequest[];
}

const statusOptions = [
    { label: "All Status", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Approved", value: "Approved" },
    { label: "Rejected", value: "Rejected" },
];

export default function LeaveHistory({
    history,
}: LeaveHistoryProps) {
    const [search, setSearch] = useState("");

    const [status, setStatus] =
        useState<LeaveStatus | "All">("All");

    const filteredLeaves = useMemo(() => {
        return history.filter((leave) => {
            const matchesSearch =
                leave.leaveType
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                leave.reason
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                status === "All" ||
                leave.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [history, search, status]);

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                    Leave History
                </h2>

                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <TextInput
                            placeholder="Search by leave type or reason..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />
                    </div>

                    <div className="w-full md:w-52">
                        <SelectInput
                            options={statusOptions}
                            value={status}
                            onChange={(e) =>
                                setStatus(
                                    e.target.value as LeaveStatus | "All"
                                )
                            }
                        />
                    </div>
                </div>
            </div>

            {filteredLeaves.length === 0 ? (
                <div className="py-12 text-center text-slate-500">
                    No leave requests found.
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-slate-50">
                            <tr className="border-b">
                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                                    Leave Type
                                </th>

                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                                    From
                                </th>

                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                                    To
                                </th>

                                <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                                    Days
                                </th>

                                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                                    Reason
                                </th>

                                <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                                    Status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredLeaves.map((leave) => (
                                <tr
                                    key={leave.id}
                                    className="border-b transition hover:bg-slate-50"
                                >
                                    <td className="px-4 py-4">
                                        {leave.leaveType}
                                    </td>

                                    <td className="px-4 py-4">
                                        {leave.startDate}
                                    </td>

                                    <td className="px-4 py-4">
                                        {leave.endDate}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        {leave.totalDays}
                                    </td>

                                    <td className="px-4 py-4">
                                        {leave.reason}
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <LeaveStatusBadge
                                            status={leave.status}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}