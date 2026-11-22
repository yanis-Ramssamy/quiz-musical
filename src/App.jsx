import { useState } from "react";
import data from "./data/questions.json";
import Question from "./components/Question";
import Resultat from "./components/Resultat";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [choisi, setChoisi] = useState(null);
  const [score, setScore] = useState(0);

  const fini = index >= data.questions.length;
  const question = data.questions[index];

  function choisir(i) {
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

  function rejouer() {
    setIndex(0);
    setChoisi(null);
    setScore(0);
  }

  return (
    <div className="app">
      <h1>Quiz musical : {data.theme}</h1>

      {fini ? (
        <Resultat
          score={score}
          total={data.questions.length}
          onRejouer={rejouer}
        />
      ) : (
        <div>
          <Question
            texte={question.question}
            choix={question.choix}
            reponse={question.reponse}
            explication={question.explication}
            choisi={choisi}
            onChoisir={choisir}
          />

          {choisi !== null && (
            <button onClick={suivant}>
              {index === data.questions.length - 1
                ? "Voir le résultat"
                : "Question suivante"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
