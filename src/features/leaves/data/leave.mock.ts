import type {
    LeaveBalance,
    LeaveRequest,
} from "../types";

export const leaveBalance: LeaveBalance = {
    annual: 12,
    sick: 9,
    casual: 5,
};

export const leaveHistory: LeaveRequest[] = [
    {
        id: "1",
        leaveType: "Annual",
        startDate: "2026-07-10",
        endDate: "2026-07-12",
        totalDays: 3,
        reason: "Family vacation",
        status: "Approved",
    },
    {
        id: "2",
        leaveType: "Sick",
        startDate: "2026-06-18",
        endDate: "2026-06-18",
        totalDays: 1,
        reason: "Fever",
        status: "Approved",
    },
    {
        id: "3",
        leaveType: "Casual",
        startDate: "2026-08-05",
        endDate: "2026-08-06",
        totalDays: 2,
        reason: "Personal work",
        status: "Pending",
    },
];