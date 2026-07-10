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
  name: string;
  date: string;
}

export interface Announcement {
  id: number;
  title: string;
  description: string;
}