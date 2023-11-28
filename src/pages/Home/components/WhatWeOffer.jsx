import React, { useState } from "react";
import animation from "../../../assets/Home/animation.png";
import augreality from "../../../assets/Home/augreality.png";
import chatbots from "../../../assets/Home/chatbots.png";
import games from "../../../assets/Home/games.png";

import laptop1 from "../../../assets/Home/laptop1.png";
import laptop2 from "../../../assets/Home/laptop2.png";
import laptop3 from "../../../assets/Home/laptop3.png";
import laptop4 from "../../../assets/Home/laptop4.png";

import styles from "./WhatWeOffer.module.css";

export default function WhatWeOffer() {
  // state to display image
  const [imgToDisplay, setImgToDisplay] = useState(
    <img className={styles.laptop_img} src={laptop1} alt="" />
  );
  // state to check which radio button is selected
  const [selectedOption, setSelectedOption] = useState("animation");
  // state to check which button is active or update
  const [activeButton, setActiveButton] = useState(null);

  // function to change image on radio button change
  const radioChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "animation") {
      setSelectedOption("animation");
      setImgToDisplay(
        <img className={styles.laptop_img} src={laptop1} alt="" />
      );
    } else if (e.target.value === "games") {
      setSelectedOption("games");
      setImgToDisplay(
        <img className={styles.laptop_img} src={laptop2} alt="" />
      );
    } else if (e.target.value === "chatbots") {
      setSelectedOption("chatbots");
      setImgToDisplay(
        <img className={styles.laptop_img} src={laptop3} alt="" />
      );
    } else if (e.target.value === "augreality") {
      setSelectedOption("augreality");
      setImgToDisplay(
        <img className={styles.laptop_img} src={laptop4} alt="" />
      );
    }
  };

  //  functions to change image on button click and update active radio button to animation
  const animationHandler = (event) => {
    setSelectedOption("animation");
    setImgToDisplay(<img className={styles.laptop_img} src={laptop1} alt="" />);
    event.target = animation;
    setActiveButton(event.target);
  };
  //  functions to change image on button click and update active radio button to games
  const gamesHandler = (event) => {
    setSelectedOption("games");
    setImgToDisplay(<img className={styles.laptop_img} src={laptop2} alt="" />);
    event.target = games;
    setActiveButton(event.target);
  };
  //  functions to change image on button click and update active radio button to chatbots
  const chatbotsHandler = (event) => {
    setSelectedOption("chatbots");
    setImgToDisplay(<img className={styles.laptop_img} src={laptop3} alt="" />);
    event.target = chatbots;
    setActiveButton(event.target);
  };
  //  functions to change image on button click and update active radio button to augreality
  const augrealityHandler = (event) => {
    setSelectedOption("augreality");
    setImgToDisplay(<img className={styles.laptop_img} src={laptop4} alt="" />);
    event.target = augreality;
    setActiveButton(event.target);
  };
  return (
    <div className={styles.main_div}>
      <div className={styles.left_div}>
        <h2>What we offer</h2>
        <p>
          The Creative Problem Solving progrmme is series of digital creation
          projects aimed to encourage self-motivation and student agency,
          designed by New Zealeand's leading IT industry experts and schools.
        </p>
        <h3>What will students create ? </h3>
        <div className={styles.what_icons}>
          <img
            className={activeButton === animation ? styles.no_hover : ""}
            onClick={animationHandler}
            src={animation}
            alt=""
            value="animation"
          />
          <img
            className={activeButton === games ? styles.no_hover : ""}
            onClick={gamesHandler}
            src={games}
            alt=""
          />
          <img
            className={activeButton === chatbots ? styles.no_hover : ""}
            onClick={chatbotsHandler}
            src={chatbots}
            alt=""
          />
          <img
            className={activeButton === augreality ? styles.no_hover : ""}
            onClick={augrealityHandler}
            src={augreality}
            alt=""
          />
        </div>
      </div>
      <div className={styles.right_div}>
        {imgToDisplay}
        <div className={styles.dots_div} onChange={radioChange}>
          <input
            type="radio"
            name="option"
            value="animation"
            checked={selectedOption === "animation"}
            onChange={() => setSelectedOption("animation")}
          />
          <input
            type="radio"
            name="option"
            value="games"
            checked={selectedOption === "games"}
            onChange={() => setSelectedOption("games")}
          />
          <input
            type="radio"
            name="option"
            value="chatbots"
            checked={selectedOption === "chatbots"}
            onChange={() => setSelectedOption("chatbots")}
          />
          <input
            type="radio"
            name="option"
            value="augreality"
            checked={selectedOption === "augreality"}
            onChange={() => setSelectedOption("augreality")}
          />
        </div>
      </div>
    </div>
  );
}
