import React, { useEffect, useRef } from "react";

const RegisterForm = ({ closeForm, openForm }) => {
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
          <h2>Register Form</h2>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your name" />
            <input type="email" name="email" placeholder="enter email" />
            <input type="tel" placeholder="mobile number" />
            <input type="password" placeholder="new password" />
            <input type="password" placeholder="confirm password" />
            <span className="alreadyLogin">
              already have an A/C-
              <span onClick={() => openForm("login")}>Login</span>
            </span>
            <button type="submit" className="button">
              register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
