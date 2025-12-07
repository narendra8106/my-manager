import React from "react";

const RegisterForm = () => {
  return (
    <div className="form">
      <div className="inForm">
        <div className="name">
          <h2>Register Form</h2>
        </div>
        <div className="form-inputs">
          <form>
            <input type="text" placeholder="enter your name" />
            <input type="email" name="email" placeholder="enter email" />
            <input type="tel" placeholder="mobile number" />
            <input type="password" placeholder="new password" />
            <input type="password" placeholder="confirm password" />
            <span className="alreadyLogin">
              already have an A/C- <a href="#">Login</a>{" "}
            </span>
            <button type="button" className="button">
              register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
