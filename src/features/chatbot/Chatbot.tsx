import { useEffect, useRef } from "react";

import ChatHeader from "./components/ChatHeader";
import MessageBubble from "./components/MessageBubble";
import ChatInput from "./components/ChatInput";
import { useChatbot } from "./hooks/useChatbot";

export default function Chatbot() {
  const {
    messages,
    loading,
    sending,
    sendMessage,
  } = useChatbot();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          HR Assistant
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Ask questions about your HR portal.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ChatHeader />

        <div className="h-[500px] space-y-4 overflow-y-auto p-5">
          {loading ? (
            <div className="flex h-full items-center justify-center text-sm text-slate-500">
              Loading chat...
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                />
              ))}

              {sending && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-slate-500">
                    Typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        <ChatInput
          onSend={sendMessage}
          sending={sending}
        />
      </div>
    </div>
  );
}