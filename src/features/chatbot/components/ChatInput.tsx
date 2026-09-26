import { Send } from "lucide-react";
import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  sending: boolean;
}

export default function ChatInput({
  onSend,
  sending,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!message.trim() || sending) return;

    onSend(message);
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-t border-slate-200 p-4"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        disabled={sending}
        className="
          flex-1 rounded-lg border border-slate-300
          px-4 py-3 outline-none
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-200
          disabled:bg-slate-100
        "
      />

      <button
        type="submit"
        disabled={sending || !message.trim()}
        className="
          inline-flex items-center justify-center
          rounded-lg bg-blue-600 px-4
          text-white transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <Send size={18} />
      </button>
    </form>
  );
}