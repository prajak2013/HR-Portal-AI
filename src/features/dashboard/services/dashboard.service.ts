import { employee } from "../constants";
import { leaveChartData } from "../data/leavesChart.mock";
import { dashboardStats } from "../data/mockDashboard";
import { holidays } from "../data/mockDashboard";
import { announcements } from "../data/mockDashboard";

import type { DashboardResponse } from "../types";

class DashboardService {
    async getDashboard(): Promise<DashboardResponse> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    employee,
                    holidays,
                    announcements,
                    leaveChart: leaveChartData,
                    stats: dashboardStats,
                });
            }, 1000);
        });
    }
}

export default new DashboardService();