import type { LeaveStatus, LeaveType } from "./types";

export const leaveTypes: LeaveType[] = [
  "Annual",
  "Sick",
  "Casual",
];

export const leaveStatuses: LeaveStatus[] = [
  "Pending",
  "Approved",
  "Rejected",
];