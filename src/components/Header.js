import React from "react";
import GifImage from "../assest/user-interface-research.gif";
import NavBar from "./NavBar";
import "./Header.scss";
// import BirdGif from "../assest/flyingbird.gif";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [writingText] = useTypewriter({
    words: ["Frontend Engineer", "SportsMan", "Traveller"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <header className="header">
        <NavBar />
        <div className="gif-container">
          <img src={GifImage} alt="gif-person" />
        </div>
        <div className="intro-container">
          <span className="tittle">Devesh Upadhyay</span>
          <br />
          <div className="sdtext">
            <h1>
              I am a <span className="auto-input">{writingText}</span>
              <span>
                <Cursor />
              </span>
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
