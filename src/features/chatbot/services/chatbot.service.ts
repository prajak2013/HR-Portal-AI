
import { insuranceMockData } from "../../insurance/data/insurance.mock";
import leaveService from "../../leaves/services/leave.service";
import profileService from "../../profile/services/profile.service";

import type { ChatMessage } from "../types";

class ChatbotService {
  async getMessages(): Promise<ChatMessage[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "1",
            role: "bot",
            message:
              "Hi! I'm your HR Assistant. Ask me about your leaves, insurance, profile or HR policies.",
            timestamp: "10:00 AM",
          },
        ]);
      }, 300);
    });
  }

  async sendMessage(message: string): Promise<ChatMessage> {
    const reply = await this.getReply(message);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Date.now().toString(),
          role: "bot",
          message: reply,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      }, 700);
    });
  }

  private async getReply(message: string): Promise<string> {
    const text = message.toLowerCase().trim();

    // Greeting
    if (
      text === "hi" ||
      text === "hello" ||
      text === "hey" ||
      text.includes("good morning") ||
      text.includes("good afternoon") ||
      text.includes("good evening")
    ) {
      return "Hello! How can I help you with the HR Portal?";
    }

    // Leave balance
    if (
      text.includes("leave balance") ||
      text.includes("how many leaves") ||
      text.includes("leaves do i have") ||
      text.includes("remaining leaves") ||
      text.includes("leave remaining") ||
      text.includes("annual leave") ||
      text.includes("sick leave") ||
      text.includes("casual leave")
    ) {
      const balance = await leaveService.getLeaveBalance();

      if (text.includes("annual")) {
        return `You have ${balance.annual} annual leave days remaining.`;
      }

      if (text.includes("sick")) {
        return `You have ${balance.sick} sick leave days remaining.`;
      }

      if (text.includes("casual")) {
        return `You have ${balance.casual} casual leave days remaining.`;
      }

      const total =
        balance.annual +
        balance.sick +
        balance.casual;

      return `Your current leave balance is:
• Annual: ${balance.annual} days
• Sick: ${balance.sick} days
• Casual: ${balance.casual} days
• Total: ${total} days`;
    }

    // Leave history
    if (
      text.includes("leave history") ||
      text.includes("leave requests") ||
      text.includes("my leave requests")
    ) {
      const history = await leaveService.getLeaveHistory();

      return `You have ${history.length} leave request${
        history.length === 1 ? "" : "s"
      } in your history.`;
    }

    // Apply leave
    if (
      text.includes("apply leave") ||
      text.includes("apply for leave") ||
      text.includes("request leave")
    ) {
      return "You can apply for leave from the Leaves section. Select the leave type, dates and provide a reason.";
    }

    // Insurance coverage
    if (
      text.includes("insurance coverage") ||
      text.includes("coverage") ||
      text.includes("insurance amount")
    ) {
      const coverages = insuranceMockData.coverages;

      const coverageText = coverages
        .map(
          (coverage) =>
            `• ${coverage.title}: ${coverage.limit}\n  ${coverage.description}`
        )
        .join("\n");

      return `Your insurance coverage is:\n${coverageText}`;
    }

    // Insurance provider
    if (
      text.includes("insurance provider") ||
      text.includes("insurance company") ||
      text.includes("who is my insurance")
    ) {
      return `Your insurance provider is ${insuranceMockData.plan.provider}. Your policy number is ${insuranceMockData.plan.policyNumber}.`;
    }

    // Insurance claims
    if (
      text.includes("insurance claim") ||
      text.includes("claims") ||
      text.includes("claim history")
    ) {
    //   const claims = insuranceMockData.plan.claims;

    //   return `You have ${claims.length} insurance claim${
    //     claims.length === 1 ? "" : "s"
    //   }. ${claims
    //     .map(
    //       (claim) =>
    //         `${claim.type}: ₹${claim.amount.toLocaleString("en-IN")} (${claim.status})`
    //     )
    //     .join(". ")}`;
    }

    // Profile
    if (
      text.includes("my profile") ||
      text.includes("profile information") ||
      text.includes("my designation") ||
      text.includes("my department")
    ) {
      const profile = await profileService.getProfile();

      return `Your profile shows you as ${profile.firstName} ${profile.lastName}, working as ${profile.designation} in the ${profile.department} department.`;
    }

    // Policies
    if (
      text.includes("policy") ||
      text.includes("policies") ||
      text.includes("hr policy")
    ) {
      return "You can view company HR policies from the Policies section of the portal.";
    }

    // Help
    if (
      text.includes("help") ||
      text.includes("what can you do") ||
      text.includes("what can i ask")
    ) {
      return `I can help you with:
• Leave balance
• Leave history
• Applying for leave
• Insurance coverage
• Insurance provider
• Insurance claims
• Profile information
• HR policies`;
    }

    // Default
    return "I couldn't find an answer for that. Try asking about your leave balance, insurance coverage, profile, or HR policies.";
  }
}

export default new ChatbotService();

