import React from "react";
import viewDisney from "../images/viewers-disney.png";
import viewMarvel from "../images/viewers-marvel.png";
import viewNational from "../images/viewers-national.png";
import viewPixar from "../images/viewers-pixar.png";
import viewStarWars from "../images/viewers-starwars.png";
import disneyVideo from "../videos/disney.mp4";
import marvelVideo from "../videos/marvel.mp4";
import pixarVideo from "../videos/pixar.mp4";
import nationalVideo from "../videos/national.mp4";
import starVideo from "../videos/starwars.mp4";

function Viewer() {
  return (
    <section className="viewer">
      <div className="singleView">
        <img className="cardImage" alt="" src={viewDisney} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={disneyVideo} type="video/mp4" ></source>
        </video>
      </div>
      <div className="singleView">
        <img className="cardImage" alt="" src={viewPixar} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={pixarVideo} type="video/mp4" ></source>
        </video>
      </div>
      <div className="singleView">
        <img className="cardImage" alt="" src={viewMarvel} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={marvelVideo} type="video/mp4" ></source>
        </video>
      </div>
      <div className="singleView">
        <img className="cardImage" alt="" src={viewStarWars} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={starVideo} type="video/mp4" ></source>
        </video>
      </div>
      <div className="singleView">
        <img className="cardImage" alt="" src={viewNational} />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={nationalVideo} type="video/mp4" ></source>
        </video>
      </div>
    </section>
  );
}

export default Viewer;
