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

  function applyLeave(newLeave: LeaveRequest): boolean {
    if (!balance) return false;

    switch (newLeave.leaveType) {
      case "Annual":
        if (balance.annual < newLeave.totalDays) {
          alert("Insufficient Annual Leave Balance.");
          return false;
        }
        break;

      case "Sick":
        if (balance.sick < newLeave.totalDays) {
          alert("Insufficient Sick Leave Balance.");
          return false;
        }
        break;

      case "Casual":
        if (balance.casual < newLeave.totalDays) {
          alert("Insufficient Casual Leave Balance.");
          return false;
        }
        break;
    }

    // Update history
    setHistory((prev) => [newLeave, ...prev]);

    // Update leave balance
    setBalance((prev) => {
      if (!prev) return prev;

      switch (newLeave.leaveType) {
        case "Annual":
          return {
            ...prev,
            annual: prev.annual - newLeave.totalDays,
          };

        case "Sick":
          return {
            ...prev,
            sick: prev.sick - newLeave.totalDays,
          };

        case "Casual":
          return {
            ...prev,
            casual: prev.casual - newLeave.totalDays,
          };

        default:
          return prev;
      }
    });

    return true;
  }

  return {
    balance,
    history,
    loading,
    applyLeave,
  };
}