export type LeaveType = | "Annual" | "Sick" | "Casual";

export type LeaveStatus = | "Pending" | "Approved" | "Rejected";

export interface LeaveRequest {
    id: string;

    leaveType: LeaveType | string;

    startDate: string;

    endDate: string;

    totalDays: number;

    reason: string;

    status: LeaveStatus;
}

export interface LeaveBalance {
    annual: number;

    sick: number;

    casual: number;
}