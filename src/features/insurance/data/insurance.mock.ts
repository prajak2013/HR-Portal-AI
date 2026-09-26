// features/insurance/data/insurance.mock.ts

import type { InsuranceData } from "../types";


export const insuranceMockData: InsuranceData = {
    plan: {
        id: "INS001",
        provider: "Star Health Insurance",
        planName: "Employee Health Plus",
        policyNumber: "POL-458921",
        coverageAmount: "₹5,00,000",
        validFrom: "01-Jan-2026",
        validTill: "31-Dec-2026",
    },

    coverages: [
        {
            id: "COV001",
            title: "Hospitalization",
            description: "In-patient hospitalization expenses",
            limit: "₹5,00,000",
        },
        {
            id: "COV002",
            title: "OPD",
            description: "Doctor consultation and medicines",
            limit: "₹25,000",
        },
        {
            id: "COV003",
            title: "Emergency",
            description: "Emergency medical expenses",
            limit: "₹1,00,000",
        },
    ],

    dependents: [
        {
            id: "DEP001",
            name: "Sarah Johnson",
            relationship: "Spouse",
            age: 32,
        },
        {
            id: "DEP002",
            name: "Michael Johnson",
            relationship: "Child",
            age: 6,
        },
    ],
};