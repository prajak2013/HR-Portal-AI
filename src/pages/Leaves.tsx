import { LeaveBalance } from "../features/leaves/components";

import { useLeaves } from "../features/leaves/hooks/useLeaves";

export default function Leaves() {
  const { balance, loading } = useLeaves();

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
    </div>
  );
}