import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <img src={logement.cover} alt="logement" />
      <h2>{logement.title}</h2>
    </li>
  );
};

export default Card;
