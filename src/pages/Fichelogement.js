import React from "react";
import { useParams } from "react-router-dom";
import data from "../logements.json";
import star from "../styles/assets/star.svg";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Fichelogement = ({ imgurl, text, content }) => {
  const params = useParams();
  const logementdata = data.find((logement) => logement.id === params.id);

  return (
    <div>
      <Header />
      <Carousel imgurl={logementdata.pictures} />
      <div className="info">
        <h1>{logementdata.title}</h1>
        <h2>{logementdata.location}</h2>
        <div className="host">
          <h3>{logementdata.host.name}</h3>
          <div className="blank"></div>
        </div>
        <div className="rating">
          <img className="fullstar" src={star} alt="étoile pleine" />
          <img className="emptystar" src={star} alt="étoile vide" />
        </div>
      </div>
      <div className="tags">
        {logementdata.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </div>
      <div className="desc">
        <div className="description">
          <Collapse text="Description" content={logementdata.description} />
        </div>
        <div className="equipement">
          <Collapse
            text="Equipements"
            content={logementdata.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fichelogement;
