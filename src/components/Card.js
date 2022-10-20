import React from "react";

const Card = ({ logement }) => {
  return (
    <li className="card">
      <img src={logement.cover} alt="logement" />
      <p>{logement.title}</p>
    </li>
  );
};

export default Card;
