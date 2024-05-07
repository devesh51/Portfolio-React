import React from "react";
import { QuotesData } from "../utils/QuotesData";

const Dots = ({ activeIndex, onDotClick }) => {
  return (
    <div className="dots">
      {QuotesData.map((item, index) => {
        return (
          <button
            onClick={() => onDotClick(index)}
            className={
              "dots__dot " + (activeIndex === index ? "dots__dot-active" : "")
            }
          ></button>
        );
      })}
    </div>
  );
};

export default Dots;
