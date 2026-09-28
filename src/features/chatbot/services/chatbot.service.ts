import type { ChatMessage } from "../types";

class ChatbotService {
    async getMessages(): Promise<ChatMessage[]> {
        return [
            {
                id: "1",
                role: "bot",
                message:
                    "Hi! I'm your HR Assistant. Ask me about your leaves, insurance, profile or HR policies.",
                timestamp: "10:00 AM",
            },
        ];
    }

    //   async sendMessage(
    //     message: string
    //   ): Promise<ChatMessage> {
    //     const response = await fetch(
    //       "http://localhost:3001/api/chat",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           message,
    //         }),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error(
    //         "Unable to communicate with the HR Assistant."
    //       );
    //     }

    //     const data = await response.json();

    //     return {
    //       id: Date.now().toString(),
    //       role: "bot",
    //       message: data.message,
    //       timestamp: new Date().toLocaleTimeString([], {
    //         hour: "2-digit",
    //         minute: "2-digit",
    //       }),
    //     };
    //   }


    async sendMessage(
        message: string
    ): Promise<ChatMessage> {
        try {
            const response = await fetch(
                "http://localhost:3001/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message,
                    }),
                }
            );

            const responseText = await response.text();

            console.log("Chat API status:", response.status);
            console.log("Chat API response:", responseText);

            if (!response.ok) {
                throw new Error(
                    `Chat API returned ${response.status}: ${responseText}`
                );
            }

            const data = JSON.parse(responseText);

            return {
                id: Date.now().toString(),
                role: "bot",
                message: data.message,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
        } catch (error) {
            console.error("Chatbot error:", error);
            throw error;
        }
    }
}

export default new ChatbotService();