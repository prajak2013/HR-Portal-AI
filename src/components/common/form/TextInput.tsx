import type { InputHTMLAttributes } from "react";
import ErrorMessage from "./ErrorMessage";

interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export default function TextInput({
  error,
  className = "",
  ...props
}: TextInputProps) {
  return (
    <>
      <input
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
      />

      <ErrorMessage message={error} />
    </>
  );
}