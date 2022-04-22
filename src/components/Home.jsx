import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routing from "../components/Routing";
import { Routes, Route } from "react-router-dom";
import VideoInfo from "../components/VideoInfo";

function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route path="/videoInfo/:name" element={<VideoInfo />} />
      </Routes>
    </div>
  );
}

export default Home;
