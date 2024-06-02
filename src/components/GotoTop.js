import React from "react";
import upArrow from "../assest/upArrow.gif";
import "./GotoTop.scss";
import { useEffect } from "react";
import { useState } from "react";
const GotoTop = () => {
  const [viewGototop, setViewGotoTop] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 350;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setViewGotoTop(true);
    } else {
      setViewGotoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="top-btn" onClick={goToBtn}>
      {viewGototop && <img src={upArrow} alt="upArrow" />}
    </div>
  );
};

export default GotoTop;
