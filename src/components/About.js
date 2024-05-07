import React from "react";

import "./About.scss";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import DeveshPic from "../assest/devesh_latest_pic.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container2">
          <span className="subheading">About Me</span>
        </div>
        <div className="grid--2--cols">
          <div className="text-box">
            <p className="my-details">
              Hi i am Devesh Upadhyay, a 25 year old Web Developer and living in
              Aligarh, India. I am a Computer Science Engineer, currently
              working with LTIMindtree.
            </p>
            <p className="my-details2">
              Have a look on my Portfolio Web page.I am always excited to do
              work with like minded people, lets discuss over coffee.
            </p>
            <ul className="social-links">
              <li>
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/devesh-upadhyay-8736b012b/"
                >
                  <FaLinkedin className="social-icons" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://web.whatsapp.com/">
                  <FaWhatsapp className="social-icons" />
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="mailto:deveshupadhyay49@gmail.com"
                >
                  <MdMarkEmailRead className="social-icons" />
                </a>
              </li>
            </ul>
          </div>

          <div className="img-box">
            <img className="devesh-img" src={DeveshPic} alt="devesh_image" />
          </div>
        </div>
        <div className="line-break"></div>
        <div className="number-wrapper">
          <div className="numbers">
            <h4 className="integer-number">
              <CountUp start={2} end={67890} delay={2} />
            </h4>
            <span className="lines">Lines Of Code</span>
          </div>
          <div className="numbers">
            <h4 className="integer-number">
              <CountUp start={0} end={4} delay={2} />
            </h4>
            <span className="lines">Web Projects</span>
          </div>
          <div className="numbers">
            <h4 className="integer-number">
              <CountUp start={0} end={2} delay={2} />
            </h4>
            <span className="lines">Website Hosted</span>
          </div>
        </div>
        <div className="line-break"></div>
      </section>
    </>
  );
};

export default About;
