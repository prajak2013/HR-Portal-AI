import type { TextareaHTMLAttributes } from "react";

import ErrorMessage from "./ErrorMessage";
interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export default function TextArea({
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <>
      <textarea
        {...props}
        className={`
          w-full
          rounded-lg
          border
          px-4
          py-3
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