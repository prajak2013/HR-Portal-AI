import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import profileService from "../features/profile/services/profile.service";
import leaveService from "../features/leaves/services/leave.service";
import { insuranceMockData } from "../features/insurance/data/insurance.mock";


const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const tools = [
    {
        type: "function" as const,
        name: "get_leave_balance",
        description:
            "Get the employee's current annual, sick and casual leave balance.",
        parameters: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
    {
        type: "function" as const,
        name: "get_leave_history",
        description:
            "Get the employee's leave request history.",
        parameters: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
    {
        type: "function" as const,
        name: "get_profile",
        description:
            "Get the employee's profile information including name, designation and department.",
        parameters: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
    {
        type: "function" as const,
        name: "get_insurance_coverage",
        description:
            "Get the employee's insurance coverage details.",
        parameters: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
    {
        type: "function" as const,
        name: "get_insurance_provider",
        description:
            "Get the employee's insurance provider and policy number.",
        parameters: {
            type: "object",
            properties: {},
            additionalProperties: false,
        },
    },
];

async function executeTool(
    name: string
): Promise<string> {
    switch (name) {
        case "get_leave_balance": {
            const balance =
                await leaveService.getLeaveBalance();

            return JSON.stringify(balance);
        }

        case "get_leave_history": {
            const history =
                await leaveService.getLeaveHistory();

            return JSON.stringify(history);
        }

        case "get_profile": {
            const profile =
                await profileService.getProfile();

            return JSON.stringify(profile);
        }

        case "get_insurance_coverage": {
            return JSON.stringify(
                insuranceMockData.coverages
            );
        }

        case "get_insurance_provider": {
            return JSON.stringify({
                provider: insuranceMockData.plan.provider,
                policyNumber:
                    insuranceMockData.plan.policyNumber,
            });
        }

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
}

app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (
            typeof message !== "string" ||
            !message.trim()
        ) {
            return res.status(400).json({
                error: "Message is required.",
            });
        }

        let response = await openai.responses.create
            ({
                model: "gpt-5.6-luna",

                instructions: `
                You are an HR Assistant for an employee portal.

You can help employees with:
- Leave balance
- Leave history
- Insurance coverage
- Insurance provider
- Employee profile
- HR policies

Important rules:

1. Use the available tools whenever the user asks about
   their personal HR information.

2. Never invent employee information.

3. If information is not available through a tool,
   clearly say that you don't have that information.

4. Be concise, friendly and professional.

5. For leave balance questions, explain annual, sick
   and casual leave clearly.

6. For insurance questions, use the actual coverage
   information returned by the tool.

7. Do not expose internal tool names or implementation
   details to the employee.

8. You cannot approve or submit leave requests.
   You can explain how the employee can apply for leave
   through the HR Portal.

9. Do not make up company policies.
      `,

                input: message,

                tools,
            });

        while (
            response.output.some(
                (item) => item.type === "function_call"
            )
        ) {
            const toolOutputs = [];

            for (const item of response.output) {
                if (item.type !== "function_call") {
                    continue;
                }

                const result = await executeTool(item.name);

                toolOutputs.push({
                    type: "function_call_output" as const,
                    call_id: item.call_id,
                    output: result,
                });
            }

            response = await openai.responses.create({
                model: "gpt-5.6-luna",
                instructions: `
You are an HR Assistant.

Answer the employee using the tool results.

Do not invent information.
Keep the response concise and professional.
        `,
                previous_response_id: response.id,
                input: toolOutputs,
                tools,
            });
        }

        return res.json({
            message: response.output_text,
        });
    } catch (error) {
        console.error("Chatbot error:", error);

        return res.status(500).json({
            error:
                "Sorry, I couldn't process your request right now.",
        });
    }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(
        `HR chatbot server running on http://localhost:${port}`
    );
});