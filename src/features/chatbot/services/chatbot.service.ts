import { chatbotMock } from "../data/chatbot.mock";
import type { ChatMessage } from "../types";

class ChatbotService {
  async getMessages(): Promise<ChatMessage[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...chatbotMock]);
      }, 300);
    });
  }

  async sendMessage(message: string): Promise<ChatMessage> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          role: "bot",
          message: this.getReply(message),
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }, 700);
    });
  }

  private getReply(message: string): string {
    const text = message.toLowerCase();

    if (text.includes("leave")) {
      return "You can apply for leave from the Leaves section. I can also help you understand your leave balance.";
    }

    if (text.includes("insurance")) {
      return "You can view your insurance policy, coverage and claims from the Insurance section.";
    }

    if (text.includes("profile")) {
      return "You can update your personal, work and emergency contact information from your Profile.";
    }

    if (text.includes("policy")) {
      return "You can find company HR policies in the Policies section.";
    }

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! How can I help you with the HR Portal?";
    }

    return "I can help with leaves, insurance, profile information and HR policies. What would you like to know?";
  }
}

export default new ChatbotService();