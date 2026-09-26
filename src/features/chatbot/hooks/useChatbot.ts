import { useEffect, useState } from "react";
import chatbotService from "../services/chatbot.service";
import type { ChatMessage } from "../types";

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function loadMessages() {
      const data = await chatbotService.getMessages();
      setMessages(data);
      setLoading(false);
    }

    loadMessages();
  }, []);

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((current) => [...current, userMessage]);
    setSending(true);

    try {
      const botMessage = await chatbotService.sendMessage(message);

      setMessages((current) => [...current, botMessage]);
    } finally {
      setSending(false);
    }
  }

  return {
    messages,
    loading,
    sending,
    sendMessage,
  };
}