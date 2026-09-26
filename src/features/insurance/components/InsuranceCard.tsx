// features/insurance/components/InsuranceCard.tsx

import type { InsurancePlan } from "../types";


interface Props {
    plan: InsurancePlan;
}

export default function InsuranceCard({ plan }: Props) {
    return (
        <div className="rounded-lg border p-5">
            <h2 className="text-lg font-semibold">
                Insurance Plan
            </h2>

            <div className="mt-4 space-y-2">
                <p>
                    Provider: {plan.provider}
                </p>

                <p>
                    Plan Name: {plan.planName}
                </p>

                <p>
                    Policy Number: {plan.policyNumber}
                </p>

                <p>
                    Coverage Amount: {plan.coverageAmount}
                </p>

                <p>
                    Validity: {plan.validFrom} - {plan.validTill}
                </p>
            </div>
        </div>
    );
}