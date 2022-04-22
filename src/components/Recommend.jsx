import React from "react";
import bao from "../images/bao.jfif";
import edna from "../images/edna.jfif";
import incredibles from "../images/incredibles.jfif";
import inside from "../images/inside.jfif";
import { NavLink } from "react-router-dom";

function Recommend() {
  const imgArray = [
    [inside, "inside"],
    [bao, "bao"],
    [incredibles, "incredibles"],
    [edna, "edna"],
  ];

  return (
    <div className="recommendDiv">
      <h3>RECOMMENDED FOR YOU</h3>
      <div className="inner_recommendDiv">
        {imgArray.map((srcImg, index) => (
          <div key={index} className="singleRecommend">
            <NavLink exact to={`/videoInfo/${srcImg[1]}`}>
              <img alt="inside" src={srcImg[0]} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
