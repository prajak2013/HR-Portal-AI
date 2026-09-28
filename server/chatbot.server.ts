import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

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

    console.log("Sending message to OpenRouter:", message);

    const response = await openai.chat.completions.create({
      model: "openrouter/free",
      messages: [
        {
          role: "system",
          content:
            "You are a friendly HR Assistant. Answer employee HR questions clearly and concisely.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply =
      response.choices[0]?.message?.content;

    console.log("OpenRouter response received");

    return res.json({
      message:
        reply ||
        "I couldn't generate a response. Please try again.",
    });
  } catch (error) {
    console.error("========== OPENROUTER ERROR ==========");
    console.error(error);
    console.error("======================================");

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

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});