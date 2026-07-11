import { useEffect, useState } from "react";

import dashboardService from "../services/dashboard.service";

import type { DashboardResponse } from "../types";

export function useDashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await dashboardService.getDashboard();

        setData(response);
      } catch {
        setError("Unable to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  return {
    data,
    loading,
    error,
  };
}