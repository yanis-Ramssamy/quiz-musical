function Resultat({ score, total, onRejouer }) {
  let message = "";
  if (score === total) {
    message = "Parfait, tu es un vrai fan !";
  } else if (score >= total / 2) {
    message = "Pas mal du tout !";
  } else {
    message = "Il faut réécouter les classiques !";
  }

  return (
    <div>
      <h2>
        Score : {score} / {total}
      </h2>
      <p>{message}</p>
      <button onClick={onRejouer}>Rejouer</button>
    </div>
  );
}

export default Resultat;
