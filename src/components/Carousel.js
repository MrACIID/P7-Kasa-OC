import React from "react";

const Carousel = ({ imgurl }) => {
  return (
    <div className="carousel">
      <div>
        <img src={imgurl} alt="le logement" />
      </div>
    </div>
  );
};

export default Carousel;
