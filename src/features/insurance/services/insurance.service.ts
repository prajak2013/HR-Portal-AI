// features/insurance/services/insurance.service.ts

import { insuranceMockData } from "../data/insurance.mock";
import type { InsuranceData } from "../types";

export const insuranceService = {
    async getInsurance(): Promise<InsuranceData> {
        return Promise.resolve(insuranceMockData);
    },
};