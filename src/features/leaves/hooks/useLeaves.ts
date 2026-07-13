import { useEffect, useState } from "react";

import leaveService from "../services/leave.service";

import type {
  LeaveBalance,
  LeaveRequest,
} from "../types";

export function useLeaves() {
  const [balance, setBalance] =
    useState<LeaveBalance | null>(null);

  const [history, setHistory] =
    useState<LeaveRequest[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadLeaves() {
      const [balanceData, historyData] =
        await Promise.all([
          leaveService.getLeaveBalance(),
          leaveService.getLeaveHistory(),
        ]);

      setBalance(balanceData);
      setHistory(historyData);

      setLoading(false);
    }

    loadLeaves();
  }, []);

  return {
    balance,
    history,
    loading,
    setHistory,
  };
}