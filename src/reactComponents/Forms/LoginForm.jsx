import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const LoginForm = ({ closeForm, openForm }) => {
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
  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://my-manager-backend-96w3.onrender.com/user/login",
      loginData,
      { withCredentials: true }
    );
    closeForm();
  };
  return (
    <div className="form">
      <div className="inForm" ref={formRef}>
        <div className="name">
          <h2>Log In</h2>
        </div>
        <div className="form-inputs">
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              name="phone"
              value={loginData.phone}
              placeholder="mobile number"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              placeholder="enter password"
              onChange={handleChange}
            />
            <div className="formFeatures">
              <span>
                <input type="checkbox" className="cbox" />
                remember me
              </span>
              <span className="anchors">
                <span>
                  <a href="#">forgot password?</a>
                </span>
                <span className="registertext">
                  No A/C-
                  <span
                    onClick={() => {
                      openForm("register");
                    }}
                  >
                    register
                  </span>
                </span>
              </span>
            </div>
            <button type="submit" className="button">
              log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
