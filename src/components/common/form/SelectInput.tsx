import type { SelectHTMLAttributes } from "react";

import ErrorMessage from "./ErrorMessage";
interface Option {
  label: string;
  value: string;
}

interface SelectInputProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  error?: string;
}

export default function SelectInput({
  options,
  error,
  className = "",
  ...props
}: SelectInputProps) {
  return (
    <>
      <select
        {...props}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-3
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${error ? "border-red-500" : "border-slate-300"}
          ${className}
        `}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <ErrorMessage message={error} />
    </>
  );
}