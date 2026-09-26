// features/insurance/hooks/useInsurance.ts

import { useEffect, useState } from "react";

import { insuranceService } from "../services/insurance.service";
import type { InsuranceData } from "../types";

export function useInsurance() {
  const [insurance, setInsurance] = useState<InsuranceData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchInsurance = async () => {
    try {
      setLoading(true);

      const response = await insuranceService.getInsurance();

      setInsurance(response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsurance();
  }, []);

  return {
    insurance,
    loading,
    refetch: fetchInsurance,
  };
}