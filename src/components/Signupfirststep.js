import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signupfirststep = () => {
  const navigate = useNavigate();
  const { setStep, email, setEmail, password, setPassword } =
    useContext(multiStepContext);
  const handleNext = () => {
    try {
      if (email.trim() === "") return toast.warning("Please enter your email");
      if (password.trim() === "")
        return toast.warning("Please enter your password");
      setStep(2);
      console.log(email);
      console.log(password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="input-box">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <label for="text">Enter your email</label>
      </div>
      <div className="input-box">
        {" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label for="password">Password</label>
      </div>
      <div className="btn-box">
        <span>
          <button
            type="button"
            className="login-btn"
            onClick={() => navigate("/login1")}
          >
            Login
          </button>
        </span>
        <button
          type="button"
          onClick={() => {
            handleNext();
          }}
          className="btn-next"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Signupfirststep;
