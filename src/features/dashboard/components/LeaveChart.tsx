import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { leaveChartData } from "../data/leavesChart.mock";


export default function LeaveChart() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Leave Statistics
        </h2>

        <p className="text-sm text-slate-500">
          Monthly leave usage
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={leaveChartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="leaves"
              radius={[8, 8, 0, 0]}
              fill="#2563eb"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}