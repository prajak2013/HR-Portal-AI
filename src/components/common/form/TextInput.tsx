import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, className = "", disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
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
        />

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;