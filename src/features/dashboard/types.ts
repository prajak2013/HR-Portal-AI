export interface DashboardStats {
  annualLeave: number;
  sickLeave: number;
  casualLeave: number;
}

export interface InsuranceInfo {
  provider: string;
  policyNumber: string;
  expiryDate: string;
}

export interface Holiday {
  id: number;
  title: string;
  date: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
}

export interface Employee {
  id: number;
  name: string;
  designation: string;
}


import type { LucideIcon } from "lucide-react";

export interface Employee {
  id: number;
  name: string;
  designation: string;
}

export interface DashboardStat {
  id: number;
  title: string;
  value: number;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

export interface LeaveChartData {
  month: string;
  leaves: number;
}
export interface DashboardResponse {
  employee: Employee;
  stats: DashboardStat[];
  holidays: Holiday[];
  announcements: Announcement[];
  leaveChart: LeaveChartData[];
}