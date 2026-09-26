import type { ChatMessage } from "../types";

interface MessageBubbleProps {
  message: ChatMessage;
}

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[80%] rounded-2xl px-4 py-3
          ${
            isUser
              ? "rounded-br-md bg-blue-600 text-white"
              : "rounded-bl-md bg-slate-100 text-slate-800"
          }
        `}
      >
        <p className="text-sm">{message.message}</p>

        <p
          className={`mt-1 text-xs ${
            isUser
              ? "text-blue-100"
              : "text-slate-400"
          }`}
        >
          {message.timestamp}
        </p>
      </div>
    </div>
  );
}