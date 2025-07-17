// src/lib/geminiApi.ts
export async function askGemini(question: string): Promise<string> {
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const MODEL = "gemini-2.5-flash";

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/" +
      MODEL +
      ":generateContent?key=" +
      GEMINI_API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!textResponse) {
    throw new Error("Não foi possível gerar uma resposta.");
  }

  return textResponse;
}
