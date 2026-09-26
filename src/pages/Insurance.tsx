// features/insurance/Insurance.tsx

import CoverageCard from "../features/insurance/components/CoverageCard";
import DependentCard from "../features/insurance/components/DependentCard";
import InsuranceCard from "../features/insurance/components/InsuranceCard";
import { useInsurance } from "../features/insurance/hooks/useInsurance";


export default function Insurance() {
  const { insurance, loading } = useInsurance();

  if (loading) {
    return (
      <div>
        Loading insurance details...
      </div>
    );
  }

  if (!insurance) {
    return (
      <div>
        No insurance data available.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <InsuranceCard
        plan={insurance.plan}
      />

      <CoverageCard
        coverages={insurance.coverages}
      />

      <DependentCard
        dependents={insurance.dependents}
      />
    </div>
  );
}