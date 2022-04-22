import React from "react";
import soul from "../images/soul.png";
import assembled from "../images/assembled.png";
import burrow from "../images/burrow.png";
import legends from "../images/legends.png";
import { NavLink } from "react-router-dom";

function Originals() {
  const imgArray = [
    [soul, "soul"],
    [assembled, "assembled"],
    [burrow, "burrow"],
    [legends, "legends"],
  ];

  return (
    <div className="originalDiv">
      <h3>ORIGINALS</h3>
      <div className="innerOriginalDiv">
        {imgArray.map((srcImg, index) => (
          <div key={index} className="singleOriginalDiv">
            <NavLink exact to={`/videoInfo/${srcImg[1]}`}>
              <img src={srcImg[0]} alt={srcImg} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Originals;
