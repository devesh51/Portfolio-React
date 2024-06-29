import React from "react";
import "./InspiringQuotes.scss";
import QuotesSlider from "./QuotesSlider";

const InspiringQuotes = () => {
  return (
    <div className="sectionInspring">
      <section class="section-inspiring" id="section-4">
        <div class="inspiring-box">
          <h1 class="heading">Inspiring Quotes</h1>
        </div>
        <QuotesSlider />
      </section>
    </div>
  );
};

export default InspiringQuotes;
