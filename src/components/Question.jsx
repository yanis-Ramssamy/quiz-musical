function Question({ texte, choix, reponse, explication, choisi, onChoisir }) {
  return (
    <div>
      <h2>{texte}</h2>

      {choix.map((c, i) => {
        let classe = "choix";
        if (choisi !== null) {
          if (i === reponse) {
            classe = "choix bon";
          } else if (i === choisi) {
            classe = "choix mauvais";
          }
        }
        return (
          <button key={c} className={classe} onClick={() => onChoisir(i)}>
            {c}
          </button>
        );
      })}

      {choisi !== null && <p className="explication">{explication}</p>}
    </div>
  );
}

export default Question;
