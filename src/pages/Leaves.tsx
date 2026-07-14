import { LeaveBalance } from "../features/leaves/components";
import LeaveForm from "../features/leaves/components/LeaveForm";
import LeaveHistory from "../features/leaves/components/LeaveHistory";

import { useLeaves } from "../features/leaves/hooks/useLeaves";

export default function Leaves() {
  const { balance, loading, history, applyLeave } = useLeaves();

  if (loading || !balance) {
    return (
      <div className="text-center text-slate-500">
        Loading leave information...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <LeaveBalance balance={balance} />

      <LeaveForm onApplyLeave={applyLeave} />

      <LeaveHistory history={history} />
    </div>
  );
}