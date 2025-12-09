import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ContactForm = ({ closeForm }) => {
  const formRef = useRef();
  useEffect(() => {
    const formClose = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        closeForm();
      }
    };
    document.addEventListener("mousedown", formClose);
    return () => document.removeEventListener("mousedown", formClose);
  }, []);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    contactMessage: "",
  });
  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://my-manager-backend-96w3.onrender.com/user/contact",
      contactData
    );
    closeForm();
  };
  return (
    <div className="form">
      <div className="inForm" ref={formRef}>
        <div className="name">
          <h2>Contact Form</h2>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter your name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="enter email"
              onChange={handleChange}
            />
            <textarea
              placeholder="enter text"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="button">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
