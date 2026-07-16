export type ClaimStatus =
  | "Approved"
  | "Pending"
  | "Rejected";

export interface InsuranceCoverage {
  hospitalization: number;
  opd: number;
  dental: number;
  vision: number;
}

export interface Dependent {
  id: string;
  name: string;
  relationship: string;
  age: number;
}

export interface InsuranceClaim {
  id: string;
  date: string;
  type: string;
  amount: number;
  status: ClaimStatus;
}

export interface InsuranceDetails {
  provider: string;
  policyNumber: string;
  validTill: string;
  coverage: InsuranceCoverage;
  dependents: Dependent[];
  claims: InsuranceClaim[];
}