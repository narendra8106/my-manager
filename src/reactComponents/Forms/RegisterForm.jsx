import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
axios.defaults.baseURL = "https://my-manager-backend-96w3.onrender.com";
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:7878";

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
    try {
      const res = await axios.post("/user/register", data);
      closeForm();
    } catch (error) {
      console.log("error occured while register", error);
    }
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
              value={data.name}
              placeholder="enter your name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="enter email"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              value={data.phone}
              placeholder="mobile number"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="new password"
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
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
