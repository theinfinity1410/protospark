import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function generateAIResponse(prompt: string): Promise<any> {
  const response = await axios.post(
    "https://api.llama.ai/generate", // Fake endpoint for now
    {
      prompt,
      defaults: {
        frontend: "React + Tailwind",
        backend: "Express + MongoDB",
        extras: ["CORS", "dotenv", "cookie-parser", "JWT"],
        language: "JavaScript", 
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.LLAMA_API_KEY}`,
      },
    }
  );
  
  return response.data;
}
