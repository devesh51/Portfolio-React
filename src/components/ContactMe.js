import React from "react";
import "./ContactMe.scss";
import downloadGif from "../assest/download.gif";

const ContactMe = () => {
  return (
    <div>
      <section className="connect-section contactMe">
        <div className="connect-header">
          <span>Connect With Me</span>
          <p>
            I am always excited to connect with people and also work with awsome
            people.
          </p>
        </div>
        <div className="connectwitme">
          <div className="resume-part">
            <div>
              <img src={downloadGif} className="downloadgif" />
            </div>
            <div className="text-download">Download Resume</div>
            <a href="" className="download-btn">
              Download
            </a>
          </div>
          <div className="form-part">
            <form className="connect-form">
              <div>
                <label for="full-name">Full Name</label>
                <input
                  type="name"
                  placeholder="Full Name"
                  id="fullname"
                  required
                />
              </div>
              <div>
                <label for="full-name">Email</label>
                <input
                  type="email"
                  placeholder="me@gmail.com"
                  id="email"
                  required
                />
              </div>
              <div className="text-area">
                <label for="full-name">Write a message for me</label>
                <textarea
                  name="message"
                  id="msg"
                  cols="30"
                  rows="2"
                  placeholder="write a message for me here...."
                ></textarea>
              </div>

              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
