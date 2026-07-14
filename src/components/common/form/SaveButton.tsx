interface SaveButtonProps {
  loading?: boolean;
  text?: string;
  loadingText?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function SaveButton({
  loading = false,
  text = "Save Changes",
  loadingText = "Saving...",
  type = "submit",
  disabled = false,
  onClick,
  className = "",
}: SaveButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        rounded-lg
        bg-blue-600
        px-6
        py-3
        text-white
        font-medium
        transition
        hover:bg-blue-700
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${className}
      `}
    >
      {loading ? loadingText : text}
    </button>
  );
}