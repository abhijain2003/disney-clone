import React from "react";
import doggy from "../images/doggy.png";
import falcon from "../images/falcon.png";
import raya from "../images/raya.png";
import perfume from "../images/perfume.png";
import { NavLink } from "react-router-dom";

function NewDisney() {
  const imgArray = [
    [doggy, "doggy"],
    [raya, "raya"],
    [falcon, "falcon"],
    [perfume, "perfume"],
  ];

  return (
    <div className="newDisneyDiv">
      <h3>NEW TO DISNEY+</h3>
      <div className="innerNewDisney">
        {imgArray.map((srcImg, index) => (
          <div key={index} className="singleNewDisney">
            <NavLink exact to={`/videoInfo/${srcImg[1]}`}>
              <img src={srcImg[0]} alt="A tail of two kitties" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewDisney;
