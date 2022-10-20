import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <Header />
      <div className="errormsg">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">
          {" "}
          <h3>Retourner sur la page d'accueil</h3>
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
