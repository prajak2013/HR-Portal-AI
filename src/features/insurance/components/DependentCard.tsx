// features/insurance/components/DependentCard.tsx

import type { Dependent } from "../types";


interface Props {
    dependents: Dependent[];
}

export default function DependentCard({ dependents }: Props) {
    return (
        <div className="rounded-lg border p-5">
            <h2 className="text-lg font-semibold">
                Covered Dependents
            </h2>

            <div className="mt-4 space-y-4">
                {dependents.map((dependent) => (
                    <div
                        key={dependent.id}
                        className="border-b pb-3"
                    >
                        <p className="font-medium">
                            {dependent.name}
                        </p>

                        <p>
                            Relationship: {dependent.relationship}
                        </p>

                        <p>
                            Age: {dependent.age}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}