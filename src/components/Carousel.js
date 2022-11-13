import React from "react";
import { useState } from "react";
import arrow from "../styles/assets/arrowleft.svg";

const Carousel = ({ imgurl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    // Si on click sur previous en étant sur la position 0 de l'index(isFirstPicture) alors on doit arriver sur le dernier index.
    // Si on click sur previous en étant PAS sur la position 0 de l'index (première image) alors on descend le currentIndex(index actuel) de 1.
    const newIndex = isFirstPicture ? imgurl.length - 1 : currentIndex - 1;
    // Changement de notre CurrentIndex au newIndex
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPicture = currentIndex === imgurl.length - 1;
    // Si on click sur next en étant sur le dernier index(isLastPicture) alors on passe l'index a 0.
    // Si on click sur next en étant pas sur le dernier index alors on augment le currentIndex(index actuel) a +1
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    // Changement de notre CurrentIndex au newIndex
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="imgcarou"
        style={{ backgroundImage: `url(${imgurl[currentIndex]})` }}
      >
        <div
          className="arrowcontainer"
          style={imgurl.length === 1 ? { visibility: "hidden" } : {}}
        >
          <div className="arrowleft" onClick={goToPrevious}>
            <img src={arrow} alt="fléche gauche" />
          </div>
          <div className="arrowright" onClick={goToNext}>
            <img src={arrow} alt="fléche droite" />
          </div>
        </div>
        <p className="photocounter">
          {currentIndex + 1}/{imgurl.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
