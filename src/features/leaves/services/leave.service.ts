import {
  leaveBalance,
  leaveHistory,
} from "../data/leave.mock";

import type {
  LeaveBalance,
  LeaveRequest,
} from "../types";

let history = [...leaveHistory];

class LeaveService {
  async getLeaveBalance(): Promise<LeaveBalance> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(leaveBalance), 500);
    });
  }

  async getLeaveHistory(): Promise<LeaveRequest[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(history), 500);
    });
  }

  async applyLeave(
    leave: LeaveRequest
  ): Promise<LeaveRequest> {
    return new Promise((resolve) => {
      setTimeout(() => {
        history = [leave, ...history];
        resolve(leave);
      }, 800);
    });
  }
}

export default new LeaveService();