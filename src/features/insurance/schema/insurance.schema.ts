// features/insurance/schemas/insurance.schema.ts

import { z } from "zod";

export const insurancePlanSchema = z.object({
    id: z.string(),
    provider: z.string(),
    planName: z.string(),
    policyNumber: z.string(),
    coverageAmount: z.string(),
    validFrom: z.string(),
    validTill: z.string(),
});

export const coverageSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    limit: z.string(),
});

export const dependentSchema = z.object({
    id: z.string(),
    name: z.string(),
    relationship: z.string(),
    age: z.number(),
});

export const insuranceSchema = z.object({
    plan: insurancePlanSchema,
    coverages: z.array(coverageSchema),
    dependents: z.array(dependentSchema),
});