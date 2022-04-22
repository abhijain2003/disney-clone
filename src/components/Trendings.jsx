import React from "react";
import mickey from "../images/mickey.png";
import simpsons from "../images/simpsons.png";
import moana from "../images/moana.png";
import tangled from "../images/tangled.png";
import { NavLink } from "react-router-dom";

function Trendings() {
  const imgArray = [
    [tangled, "tangled"],
    [moana, "moana"],
    [simpsons, "simpsons"],
    [mickey, "mickey"],
  ];

  return (
    <div className="trendingDiv">
      <h3>TRENDINGS</h3>
      <div className="innertrendingDiv">
        {imgArray.map((srcImg, index) => (
          <div key={index} className="singleTrendingDiv">
            <NavLink exact to={`/videoInfo/${srcImg[1]}`}>
              <img src={srcImg[0]} alt="Tangled" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trendings;
