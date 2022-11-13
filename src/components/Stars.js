import React from "react";
import star from "../styles/assets/star.svg";

const Stars = ({ nstar }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratediv">
      {stars.map((index) =>
        //Fait le tour du tableau stars ,pour chaque élément(index), si nstar(rating number) est plus grand ou égal a celui ci alors il ajoute une étoile pleine.
        //Pour chaque valeur d'index si le nstar(rating number) est plus petit que celui de l'index alors on ajoute un étoile vide.
        nstar >= index ? (
          <img key={index} className="fullstar" src={star} alt="star" />
        ) : (
          <img key={index} className="emptystar" src={star} alt="star" />
        )
      )}
    </div>
  );
};

export default Stars;
