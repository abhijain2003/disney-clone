import React from "react";
import { useParams } from "react-router-dom";
import baoBanner from "../images/baoBanner.png";
import baoName from "../images/baoName.png";
import insideBanner from "../images/insideBanner.jfif";
import insideName from "../images/insideName.png";
import incredibleBanner from "../images/incredibleBanner.jfif";
import incredibleName from "../images/incredibleName.png";
import ednaBanner from "../images/ednaBanner.jfif";
import ednaName from "../images/ednaName.png";
import doggyBanner from "../images/doggyBanner.jfif";
import doggyName from "../images/doggyName.png";
import rayaBanner from "../images/rayaBanner.jfif";
import rayaName from "../images/rayaName.png";
import falconBanner from "../images/falconBanner.jfif";
import falconName from "../images/falconName.png";
import perfumeBanner from "../images/perfumeBanner.jfif";
import perfumeName from "../images/perfumeName.png";
import soulBanner from "../images/soulBanner.jfif";
import soulName from "../images/soulName.png";
import assembledBanner from "../images/assembledBanner.jfif";
import assembledName from "../images/assembledName.png";
import burrowBanner from "../images/burrowBanner.jfif";
import burrowName from "../images/burrowName.png";
import legendsBanner from "../images/legendsBanner.jfif";
import legendsName from "../images/legendsName.png";
import tangledBanner from "../images/tangledBanner.jfif";
import tangledName from "../images/tangledName.png";
import moanaBanner from "../images/moanaBanner.jfif";
import moanaName from "../images/moanaName.png";
import simpsonsBanner from "../images/simpsonsBanner.jfif";
import simpsonsName from "../images/simpsonsName.png";
import mickeyBanner from "../images/mickeyBanner.jfif";
import mickeyName from "../images/mickeyName.png";
import playIconWhite from "../images/play-icon-white.png";
import groupIcon from "../images/group-icon.png";
import playIconBlack from "../images/play-icon-black.png";


function VideoInfo() {
  const singleMovie = useParams();

  const dataArray = [
    {
      banner: insideBanner,
      name: insideName,
      param: "inside",
      time: "2015 • 1h 35m • Coming of Age, Family, Animation",
      describe:
        "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    },
    {
      banner: baoBanner,
      name: baoName,
      param: "bao",
      time: "2018 • 7m • Family, Fantasy, Kids, Animation",
      describe:
        "A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
    },
    {
      banner: incredibleBanner,
      name: incredibleName,
      param: "incredibles",
      time: "2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure",
      describe:
        "While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.",
    },
    {
      banner: ednaBanner,
      name: ednaName,
      param: "edna",
      time: "2018 • 7m • Family, Comedy, Animation",
      describe:
        "When Bob Parr visits designer Edna Mode for help with his high-energy toddler, she pulls an all-nighter designing a supersuit to harness Jack-Jack’s seemingly limitless powers.",
    },
    {
      banner: doggyBanner,
      name: doggyName,
      param: "doggy",
      time: "2006 • 1h 19m • Family, Comedy, Kids",
      describe:
        "Garfield is adopted by a greedy Lord with nefarious plans to open up his estate as a hunting ground.",
    },
    {
      banner: rayaBanner,
      name: rayaName,
      param: "raya",
      time: "2021 • 1h 52m • Family, Fantasy, Animation, Action-Adventure",
      describe:
        "Watch with Premier Access at the same time it's in open theaters and before it's available to all Disney+ subscribers on June 4, 2021.",
    },
    {
      banner: falconBanner,
      name: falconName,
      param: "falcon",
      time: "2021 • 1 Season • Science Fiction, Action-Adventure, Buddy",
      describe:
        "Marvel Studios’ “The Falcon and The Winter Soldier” stars Anthony Mackie as Sam Wilson aka The Falcon, and Sebastian Stan as Bucky Barnes aka The Winter Soldier. The pair, who came together in the final moments of “Avengers: Endgame,” team up on a global adventure that tests their abilities—and their patience.",
    },
    {
      banner: perfumeBanner,
      name: perfumeName,
      param: "perfume",
      time: "2019 • 53m • Documentary, Biographical, Music",
      describe:
        "J-Pop band Perfume is featured in this original music and documentary series Disney’s My Music Story.” The show features Perfume's life stories, passion for music, Disney memories, and more.",
    },
    {
      banner: soulBanner,
      name: soulName,
      param: "soul",
      time: "2020 • 1h 49m • Family, Comedy, Fantasy, Animation, Music",
      describe:
        "Jamie Foxx leads an all-star cast in this hilarious, heart-filled adventure. Pixar’s 'Soul' introduces Joe, who lands the gig of his life at the best jazz club in town. But one misstep lands Joe in a fantastical place: The Great Before. There, he teams up with soul 22 (Tina Fey), and together they find the answers to some of life’s biggest questions.",
    },
    {
      banner: assembledBanner,
      name: assembledName,
      param: "assembled",
      time: "2021 • 1 Season • Docuseries, Anthology",
      describe:
        "ASSEMBLED is an immersive series of documentary-style specials examining the creation of Marvel Studios’ thrilling new shows and theatrical releases.",
    },
    {
      banner: burrowBanner,
      name: burrowName,
      param: "burrow",
      time: "2020 • 6m • Family, Animation",
      describe:
        "A young rabbit embarks on a journey to dig the burrow of her dreams, despite not having a clue what she’s doing. Rather than reveal to her neighbors her imperfections, she digs herself deeper and deeper into trouble. After hitting (bed)rock bottom, she learns there is no shame in asking for help.",
    },
    {
      banner: legendsBanner,
      name: legendsName,
      param: "legends",
      time: "2021 • 1 Season • Science Fiction, Fantasy, Action-Adventure",
      describe:
        "Marvel Studios LEGENDS traces Wanda Maximoff’s evolution from an adversary of The Avengers to a powerful ally, and highlights one special relationship destined to shape her future in unexpected ways…",
    },
    {
      banner: tangledBanner,
      name: tangledName,
      param: "tangled",
      time: "2010 • 1h 40m • Family, Fantasy, Animation, Action-Adventure, Musical",
      describe:
        "When the kingdom's most wanted bandit is taken hostage by Rapunzel — a teen with 70 feet of golden hair who's looking to escape the tower where she's been locked away for years — the unlikely duo sets off on a hair-raising escapade.",
    },
    {
      banner: moanaBanner,
      name: moanaName,
      param: "moana",
      time: "2016 • 1h 47m • Family, Fantasy, Animation, Action-Adventure, Musical",
      describe:
        "Moana sets sail on a daring mission to save her people. Along the way, she meets the mighty demigod Maui–together they cross the ocean on a fun-filled, action-packed voyage from Walt Disney Animation Studios.",
    },
    {
      banner: simpsonsBanner,
      name: simpsonsName,
      param: "simpsons",
      time: "1989 - 2019 • 31 Seasons • Comedy, Animation",
      describe:
        "This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.",
    },
    {
      banner: mickeyBanner,
      name: mickeyName,
      param: "mickey",
      time: "2006 - 2013 • 5 Seasons • Kids, Animation",
      describe:
        "Mickey entertains preschoolers by inviting them to join him and his friends for a date at the Clubhouse. Using early math learning and problem solving skills, he leads kids on an interactive adventure of learning and fun.",
    },
  ];


  let showableData = dataArray.filter((x) => x.param === singleMovie.name);
  

  return (
    <div className="infoDiv">
      <div className="backImage">
        <img alt="" src={showableData[0].banner} />
      </div>
      <div className="nameImage">
        <img alt="" src={showableData[0].name} />
      </div>
      <div className="textImage">
        <div className="box1">
          <button className="playBtn">
            <img alt="" src={playIconBlack} />
            <span>PLAY</span>
          </button>
          <button className="trailerBtn">
            <img alt="" src={playIconWhite} />
            <span>TRAILER</span>
          </button>
          <div className="plus">
            <span></span>
            <span></span>
          </div>
          <div className="group">
            <div className="innerGroup">
              <img alt="" src={groupIcon} />
            </div>
          </div>
        </div>
        <div className="box2">{showableData[0].time}</div>
        <div className="box3">{showableData[0].describe}</div>
      </div>
    </div>
  );
}

export default VideoInfo;
