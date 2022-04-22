import React from "react";
import Viewer from "./Viewer";
import Banner from "./Banner";
import Recommend from "./Recommend";
import Originals from "./Originals";
import NewDisney from "./NewDisney";
import Trendings from "./Trendings";

function Routing() {
  return (
    <div className="container">
      <Banner />
      <Viewer />
      <Recommend />
      <NewDisney />
      <Originals />
      <Trendings />
    </div>
  );
}

export default Routing;
