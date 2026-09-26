// features/insurance/types.ts

export interface InsurancePlan {
  id: string;
  provider: string;
  planName: string;
  policyNumber: string;
  coverageAmount: string;
  validFrom: string;
  validTill: string;
}

export interface Coverage {
  id: string;
  title: string;
  description: string;
  limit: string;
}

export interface Dependent {
  id: string;
  name: string;
  relationship: string;
  age: number;
}

export interface InsuranceData {
  plan: InsurancePlan;
  coverages: Coverage[];
  dependents: Dependent[];
}