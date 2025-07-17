// Gemini
import { askGemini } from "../../lib/geminiApi";

// Hooks
import { useState } from "react";

// Icons
import { GiRobotAntennas } from "react-icons/gi";

const GeminiPage = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const result = await askGemini(input);
      setResponse(result);
    } catch (err) {
      console.error(err);
      setResponse("Erro ao gerar resposta. Tente novamente.");
    } finally {
      setLoading(false);
    }

    setInput("");
  }

  return (
    <div className="gemini-page">
      <h1>Pergunte à IA</h1>
      <form onSubmit={handleSubmit}>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWZtY2RjZ2NrNXhydTllem9jbTQyYTFpemJsOWthbjQxNDRraDcxdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AHgKEv1pyoYfCNbqGx/giphy.gif"
          alt="Gif do robo"
        />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          placeholder="Digite sua pergunta..."
        />
        <p>
          As respostas fornecidas por esta IA são baseadas em informações
          prévias e podem não refletir eventos recentes ou dados em tempo real.
        </p>
        <button className="btn" disabled={loading}>
          {loading ? "Pensando..." : "Perguntar"}
        </button>
      </form>
      {response && (
        <div className="gemini-response-wrapper">
          <div className="response-gemini">
            {response
              .replace(/\*\*/g, "")
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <div className="robot-icon-bottom">
            <GiRobotAntennas />
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiPage;
