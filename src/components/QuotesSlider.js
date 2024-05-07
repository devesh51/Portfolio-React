import React, { useState } from "react";
import { QuotesData } from "../utils/QuotesData";
import Dots from "../components/Dots";
import Arrow from "../components/Arrow";

const QuotesSlider = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const onclickHandler = (clickButton) => {
    if (clickButton === "click-left") {
      if (quoteIndex === 0) {
        setQuoteIndex(QuotesData.length - 1);
      } else {
        setQuoteIndex(quoteIndex - 1);
      }
    } else {
      setQuoteIndex((quoteIndex + 1) % QuotesData.length);
    }
  };

  const onDotClick = (index) => {
    setQuoteIndex(index);
  };

  return (
    <div>
      <div className="slider">
        <div>
          <div className="quotes-text">
            <div className="slider-box">
              <p>{QuotesData[quoteIndex].quotes}</p>
            </div>
          </div>
        </div>
      </div>
      <Arrow onclickHandler={onclickHandler} />
      <Dots activeIndex={quoteIndex} onDotClick={onDotClick} />
    </div>
  );
};

export default QuotesSlider;
