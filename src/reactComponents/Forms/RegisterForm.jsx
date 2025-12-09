import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

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
  }, [closeForm]);
  //store form data
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //subbmit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://my-manager-backend-96w3.onrender.com/user/register",
      data
    );
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
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="enter email"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="mobile number"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="new password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              onChange={handleChange}
            />
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
