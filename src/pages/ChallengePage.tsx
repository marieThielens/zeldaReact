import { useState, useEffect } from "react";
import { Outlet } from "react-router"; // pour la nav dans l'url


type Challenge = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  points: number;
};

const ChallengePage = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [currentChallenge, setCurrentChallenge] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);

  // Charger le fichier JSON
  useEffect(() => {
    fetch("/challenges/web/htmlQuiz1.json")
      .then((response) => response.json())
      .then((data: Challenge[]) => setChallenges(data))
      .catch((error) => console.error("Erreur lors du chargement des défis :", error));
  }, []);

  // Ecouter le challenge
  const handleAnswer = () => {
    const current = challenges[currentChallenge];
    if (selectedOption === current.correct) {
      setScore((prevScore) => prevScore + current.points);
    }
    setSelectedOption(null);
    setCurrentChallenge((prev) => prev + 1);
  };

  if (challenges.length === 0) return <p>Chargement...</p>;
  if (currentChallenge >= challenges.length) return <p>Défi terminé ! Score final : {score}</p>;

  return (
    <div className="container mt-4">
      <h2>{challenges[currentChallenge].question}</h2>
      <div className="list-group">
        {challenges[currentChallenge].options.map((option, index) => (
          <div className="input-group mb-2" key={index}>
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  type="radio"
                  name="options"
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                />
              </div>
            </div>
            <input type="text" className="form-control" value={option} readOnly />
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAnswer} disabled={selectedOption === null}>
        Valider
      </button>
      <p className="mt-3">Score : {score}</p>
    </div>
  );
};

export default ChallengePage;
