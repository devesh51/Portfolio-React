import React from "react";

const Arrow = ({ onclickHandler }) => {
  return (
    <div>
      <button
        onClick={() => onclickHandler("click-left")}
        className="slider__btn slider__btn--left"
      >
        &larr;
      </button>
      <button
        onClick={() => onclickHandler("click-right")}
        className="slider__btn slider__btn--right"
      >
        &rarr;
      </button>
    </div>
  );
};

export default Arrow;
