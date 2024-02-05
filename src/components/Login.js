import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");

      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      if (response.data.success) {
      
        toast.success(response.data.message);
        navigate("/profile");
        
       
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
       return  toast.error(error.response.data.error);
      }
    }
  };
  return (
    <>
      <ToastContainer />
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
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button type="button" onClick={() => handleLogin()}>
                login
              </button>
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
