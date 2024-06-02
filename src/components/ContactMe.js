import React, { useRef, useState } from "react";
import "./ContactMe.scss";
import emailjs from "@emailjs/browser";
import downloadGif from "../assest/download.gif";

const ContactMe = ({ onClick }) => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: "",
  });

  const form = useRef();

  // console.log("formData is", formData);

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = await emailjs.sendForm(
      "service_881okw9",
      "template_r83jqpj",
      form.current,
      {
        publicKey: "x-sb6q7E7pae-Tb4K",
      }
    );

    if (data.status === 200) {
      onClick();
      setFormData({
        Email: "",
        FullName: "",
        Message: "",
      });
    } else {
      console.log("FAILED...");
      setFormData({
        FullName: "",
        Email: "",
        Message: "",
      });
    }
  };

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
            <form className="connect-form" ref={form} onSubmit={sendEmail}>
              <div>
                <label for="full-name">Full Name</label>
                <input
                  type="name"
                  placeholder="Full Name"
                  id="fullname"
                  name="your_name"
                  required
                  value={formData.FullName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      FullName: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label for="full-name">Email</label>
                <input
                  type="email"
                  placeholder="me@gmail.com"
                  id="email"
                  required
                  name="your_email"
                  value={formData.Email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      Email: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="text-area">
                <label for="full-name">Write a message for me</label>
                <textarea
                  name="message"
                  id="msg"
                  cols="30"
                  required
                  rows="2"
                  placeholder="write a message for me here...."
                  value={formData.Message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      Message: e.target.value,
                    }))
                  }
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
