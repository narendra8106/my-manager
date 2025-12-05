import React from "react";

const LoginForm = () => {
  return (
    <div className="form">
      <div className="inForm">
        <div className="name">
          <h2>Log In</h2>
        </div>
        <div className="form-inputs">
          <form>
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
                  No A/C-<a href="#"> register</a>
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
