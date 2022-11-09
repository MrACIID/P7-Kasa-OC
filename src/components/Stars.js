import React from "react";
import star from "../styles/assets/star.svg";

const Stars = ({ nstar }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="ratediv">
      {stars.map((index) =>
        nstar >= index ? (
          <img
            key={index.toString()}
            className="fullstar"
            src={star}
            alt="star"
          />
        ) : (
          <img
            key={index.toString()}
            className="emptystar"
            src={star}
            alt="star"
          />
        )
      )}
    </div>
  );
};

export default Stars;
