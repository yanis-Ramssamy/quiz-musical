function Question({ texte, choix, reponse, explication, choisi, onChoisir }) {
  const repondu = choisi !== null;

  function couleur(i) {
    if (!repondu) return {};
    if (i === reponse) return { background: "green", color: "white" };
    if (i === choisi) return { background: "red", color: "white" };
    return {};
  }

  return (
    <div>
      <h2>{texte}</h2>
      {choix.map((c, i) => (
        <button key={c} onClick={() => onChoisir(i)} style={couleur(i)}>
          {c}
        </button>
      ))}
      {repondu && (
        <div>
          <p>{choisi === reponse ? "Bonne réponse !" : "Mauvaise réponse."}</p>
          <p>{explication}</p>
        </div>
      )}
    </div>
  );
}

export default Question;
