// features/insurance/components/CoverageCard.tsx

import type { Coverage } from "../types";


interface Props {
  coverages: Coverage[];
}

export default function CoverageCard({ coverages }: Props) {
  return (
    <div className="rounded-lg border p-5">
      <h2 className="text-lg font-semibold">
        Coverage Details
      </h2>

      <div className="mt-4 space-y-4">
        {coverages.map((coverage) => (
          <div
            key={coverage.id}
            className="border-b pb-3"
          >
            <p className="font-medium">
              {coverage.title}
            </p>

            <p className="text-sm text-gray-600">
              {coverage.description}
            </p>

            <p>
              Limit: {coverage.limit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}