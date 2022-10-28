import React from "react";
import { useParams } from "react-router-dom";
import data from "../logements.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";

const Fichelogement = ({ imgurl, text, content }) => {
  const params = useParams();
  const logementdata = data.find((logement) => logement.id === params.id);
  console.log(logementdata);

  return (
    <div>
      <Header />
      <Carousel imgurl={logementdata.pictures[1]} />
      <div className="info">
        <h1>{logementdata.title}</h1>
        <h2>{logementdata.location}</h2>
        <h3>{logementdata.host.name}</h3>
        <div className="blank"></div>
      </div>
      <div className="desc">
        <div className="description">
          <Collapse text="Description" content={logementdata.description} />
        </div>
        <div className="equipement">
          <Collapse text="Equipements" content={logementdata.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Fichelogement;
