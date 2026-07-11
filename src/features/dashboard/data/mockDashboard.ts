// import type {
//    Announcement,
//   DashboardStats,
//   Holiday,
//   InsuranceInfo,
// } from "../types";

// export const dashboardStats: DashboardStats = {
//   annualLeave: 18,
//   sickLeave: 8,
//   casualLeave: 4,
// };

// export const insuranceInfo: InsuranceInfo = {
//   provider: "ABC Health Insurance",
//   policyNumber: "HR-2026-001",
//   expiryDate: "31 Dec 2026",
// };

// export const holidays: Holiday[] = [
//   {
//     id: 1,
//     name: "Independence Day",
//     date: "15 Aug 2026",
//   },
//   {
//     id: 2,
//     name: "Diwali",
//     date: "08 Nov 2026",
//   },
// ];

// export const announcements: Announcement[] = [
//   {
//     id: 1,
//     title: "Work From Home Policy",
//     description: "WFH allowed every Friday.",
//   },
//   {
//     id: 2,
//     title: "Medical Camp",
//     description: "Annual medical checkup starts next Monday.",
//   },
// ];


import {
  CalendarDays,
  Briefcase,
  Clock3,
  FileClock,
} from "lucide-react";

import type { DashboardStat } from "../types";

export const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Annual Leave",
    value: 18,
    subtitle: "Days Remaining",
    icon: CalendarDays,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Sick Leave",
    value: 5,
    subtitle: "Days Remaining",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "WFH",
    value: 12,
    subtitle: "Used This Year",
    icon: Clock3,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Pending Requests",
    value: 2,
    subtitle: "Awaiting Approval",
    icon: FileClock,
    color: "bg-orange-500",
  },
];


