import React, { useState, useEffect, useRef } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type="text" placeholder="enter your name" />
            <input type="email" placeholder="enter email" />
            <textarea placeholder="enter text"></textarea>
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
