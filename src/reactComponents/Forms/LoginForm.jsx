import React, { useEffect, useRef } from "react";

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
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <input type="tel" name="phone" placeholder="mobile number" />
            <input
              type="password"
              name="password"
              placeholder="enter password"
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
