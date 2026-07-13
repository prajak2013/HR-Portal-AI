import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  error?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  ({ options, error, className = "", disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={`
            w-full rounded-lg border px-4 py-2.5 outline-none transition

            ${
              disabled
                ? "cursor-not-allowed bg-slate-100 text-slate-500"
                : "bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }

            ${
              error
                ? "border-red-500"
                : "border-slate-300"
            }

            ${className}
          `}
          {...props}
        >
          <option value="">Select</option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

SelectInput.displayName = "SelectInput";

export default SelectInput;