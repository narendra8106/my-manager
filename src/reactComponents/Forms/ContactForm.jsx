import React, { useState, useEffect } from "react";

const ContactForm = () => {
  return (
    <div className="form">
      <div className="inForm">
        <div className="name">
          <h2>Contact Form</h2>
        </div>
        <div className="form-inputs">
          <form>
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
