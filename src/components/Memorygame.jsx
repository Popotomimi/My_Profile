import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const initialCards = [
  { id: 1, name: "React", matched: false },
  { id: 2, name: "React", matched: false },
  { id: 3, name: "Node", matched: false },
  { id: 4, name: "Node", matched: false },
  { id: 5, name: "Next", matched: false },
  { id: 6, name: "Next", matched: false },
];

const shuffleCards = (cards) => {
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [shuffledCards, setShuffledCards] = useState(
    shuffleCards([...initialCards])
  );
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (selectedCards[0].name === selectedCards[1].name) {
        setShuffledCards((prevCards) =>
          prevCards.map((card) => {
            if (card.name === selectedCards[0].name) {
              return { ...card, matched: true };
            }
            return card;
          })
        );
        setMatchedPairs((prev) => prev + 1);
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    if (matchedPairs === initialCards.length / 2) {
      confetti();
    }
  }, [matchedPairs]);

  const handleCardClick = (index) => {
    if (
      selectedCards.length < 2 &&
      !shuffledCards[index].matched &&
      !selectedCards.includes(shuffledCards[index])
    ) {
      setSelectedCards([...selectedCards, shuffledCards[index]]);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CurriculoRobertoOliveira.pdf";
    link.download = "CurriculoRobertoOliveira.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2 className="space-two">Memory Game para baixar meu currículo</h2>
      <div className="memory-game">
        {shuffledCards.map((card, index) => (
          <div
            key={index}
            className={`card-game ${
              selectedCards.includes(card) || card.matched ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}>
            {selectedCards.includes(card) || card.matched ? card.name : ""}
          </div>
        ))}
      </div>
      {matchedPairs === initialCards.length / 2 && (
        <div>
          <h2 className="space">Parabéns</h2>
          <button onClick={handleDownload}>Baixar Currículo</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
