import type {
   Announcement,
  DashboardStats,
  Holiday,
  InsuranceInfo,
} from "../types";

export const dashboardStats: DashboardStats = {
  annualLeave: 18,
  sickLeave: 8,
  casualLeave: 4,
};

export const insuranceInfo: InsuranceInfo = {
  provider: "ABC Health Insurance",
  policyNumber: "HR-2026-001",
  expiryDate: "31 Dec 2026",
};

export const holidays: Holiday[] = [
  {
    id: 1,
    name: "Independence Day",
    date: "15 Aug 2026",
  },
  {
    id: 2,
    name: "Diwali",
    date: "08 Nov 2026",
  },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Work From Home Policy",
    description: "WFH allowed every Friday.",
  },
  {
    id: 2,
    title: "Medical Camp",
    description: "Annual medical checkup starts next Monday.",
  },
];