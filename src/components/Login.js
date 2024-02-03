import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-login">
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>LOGIN</h3>
                <br />
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button type="button">login</button>
              <p class="message">
                Not registered?{" "}
                <button
                  type="button"
                  className="login-signup"
                  onClick={() => navigate("/signup")}
                >
                  Create an account
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
