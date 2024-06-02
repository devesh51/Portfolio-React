import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Popup.scss";
import popupImg from "../assest/404-tick.png";

const Popup = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="popup-wrapper"></div>
      <div className="popup hidden" id="pop-up">
        <img src={popupImg} alt="popup image" className="popup-img" />
        <h2>Thank You!</h2>
        <p>Your deatils has been successfully! submitted.</p>
        <button onClick={onClose} className="btn-ok">
          Ok
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Popup;
