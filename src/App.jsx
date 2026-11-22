import { useState } from "react";
import data from "./data/questions.json";
import Question from "./components/Question";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [score, setScore] = useState(0);

  const fini = index >= data.questions.length;
  const question = data.questions[index];

  function choisir(i) {
    // Si une réponse est déjà enregistrée, on ne fait rien
    if (choisi !== null) {
      return;
    }
    setChoisi(i);
    if (i === question.reponse) {
      setScore(score + 1);
    }
  }

  function suivant() {
    setIndex(index + 1);
    setChoisi(null);
  }

  return (
    <div className="app">
      <h1>Quiz musical : {data.theme}</h1>
      {!fini && (
        <>
          <Question
            texte={question.question}
            choix={question.choix}
            reponse={question.reponse}
            explication={question.explication}
            choisi={choisi}
            onChoisir={choisir}
          />
          {choisi !== null && <button onClick={suivant}>Suivant</button>}
        </>
      )}
      {fini && (
        <p>
          Quiz terminé ! Score : {score} / {data.questions.length}
        </p>
      )}
    </div>
  );
}

export default App;
