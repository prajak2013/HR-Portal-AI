import type { LeaveStatus } from "../types";

interface LeaveStatusBadgeProps {
    status: LeaveStatus;
}

const statusStyles: Record<
    LeaveStatus,
    {
        bg: string;
        text: string;
        border: string;
    }
> = {
    Pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        border: "border-yellow-300",
    },
    Approved: {
        bg: "bg-green-100",
        text: "text-green-800",
        border: "border-green-300",
    },
    Rejected: {
        bg: "bg-red-100",
        text: "text-red-800",
        border: "border-red-300",
    },
};

export default function LeaveStatusBadge({
    status,
}: LeaveStatusBadgeProps) {
    const style = statusStyles[status];

    return (
        <span
            className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-semibold
        ${style.bg}
        ${style.text}
        ${style.border}
      `}
        >
            {status}
        </span>
    );
}