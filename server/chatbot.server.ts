import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import leaveService from "../src/features/leaves/services/leave.service";
import profileService from "../src/features/profile/services/profile.service";
import { insuranceMockData } from "../src/features/insurance/data/insurance.mock";

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error(
    "OPENROUTER_API_KEY is missing. Check your .env file."
  );
}

const openai = new OpenAI({
  apiKey,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "HR Portal AI",
  },
});

const tools = [
  {
    type: "function" as const,
    function: {
      name: "get_leave_balance",
      description:
        "Get the employee's current annual, sick and casual leave balance.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },

  {
    type: "function" as const,
    function: {
      name: "get_leave_history",
      description:
        "Get the employee's leave request history.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },

  {
    type: "function" as const,
    function: {
      name: "get_profile",
      description:
        "Get the employee's profile information including name, designation and department.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },

  {
    type: "function" as const,
    function: {
      name: "get_insurance_coverage",
      description:
        "Get the employee's insurance coverage details.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },

  {
    type: "function" as const,
    function: {
      name: "get_insurance_provider",
      description:
        "Get the employee's insurance provider and policy number.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

async function executeTool(
  toolName: string
): Promise<unknown> {
  switch (toolName) {
    case "get_leave_balance": {
      return await leaveService.getLeaveBalance();
    }

    case "get_leave_history": {
      return await leaveService.getLeaveHistory();
    }

    case "get_profile": {
      return await profileService.getProfile();
    }

    case "get_insurance_coverage": {
      return insuranceMockData.coverages;
    }

    case "get_insurance_provider": {
      return {
        provider: insuranceMockData.plan.provider,
        policyNumber: insuranceMockData.plan.policyNumber,
      };
    }

    default:
      throw new Error(`Unknown tool: ${toolName}`);
  }
}

app.get("/", (_req, res) => {
  res.send("HR Chatbot Server is running");
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    message: "HR chatbot server is running",
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    console.log(
      "User message:",
      message
    );

    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] =
      [
        {
          role: "system",
          content: `
You are a friendly HR Assistant for an employee HR Portal.

You can help employees with:
- Leave balance
- Leave history
- Employee profile
- Insurance coverage
- Insurance provider

When the user asks about employee-specific information,
always use the appropriate tool instead of guessing.

Never invent employee data.

Keep responses clear, concise and friendly.
`,
        },
        {
          role: "user",
          content: message,
        },
      ];

    // Allow a few tool-calling rounds.
    for (let i = 0; i < 5; i++) {
      const response =
        await openai.chat.completions.create({
          model: "openrouter/free",
          messages,
          tools,
          tool_choice: "auto",
        });

      const assistantMessage =
        response.choices[0]?.message;

      if (!assistantMessage) {
        throw new Error(
          "OpenRouter returned no message."
        );
      }

      // No tool call means the model has
      // produced the final answer.
      if (
        !assistantMessage.tool_calls ||
        assistantMessage.tool_calls.length === 0
      ) {
        return res.json({
          message:
            assistantMessage.content ||
            "I couldn't generate a response.",
        });
      }

      // Add the assistant tool-call message
      // back to the conversation.
      messages.push(assistantMessage);

      // Execute every requested tool.
      for (const toolCall of assistantMessage.tool_calls) {
        if (
          toolCall.type !== "function"
        ) {
          continue;
        }

        const toolName =
          toolCall.function.name;

        console.log(
          "Tool requested:",
          toolName
        );

        let toolResult: unknown;

        try {
          toolResult = await executeTool(
            toolName
          );
        } catch (error) {
          console.error(
            `Tool error (${toolName}):`,
            error
          );

          toolResult = {
            error:
              error instanceof Error
                ? error.message
                : "Tool execution failed",
          };
        }

        messages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(
            toolResult
          ),
        });
      }
    }

    return res.status(500).json({
      error:
        "The chatbot exceeded the maximum tool-call steps.",
    });
  } catch (error) {
    console.error(
      "========== OPENROUTER ERROR =========="
    );
    console.error(error);
    console.error(
      "======================================"
    );

    if (error instanceof OpenAI.APIError) {
      return res.status(error.status || 500).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Unknown OpenRouter error",
    });
  }
});

const PORT =
  Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});