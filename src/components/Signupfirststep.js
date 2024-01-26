import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";

const Signupfirststep = () => {
  const navigate = useNavigate();
  const { setStep } = useContext(multiStepContext);
  return (
    <>
      <div className="input-box">
        <input type="text" required autoFocus />
        <label for="text">Enter your email</label>
      </div>
      <div className="input-box">
        {" "}
        <input type="password" required />
        <label for="password">Password</label>
      </div>
      <div className="btn-box">
        <span>
          <button
            type="button"
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </span>
        <button type="button" onClick={() => setStep(2)} className="btn-next">
          Next
        </button>
      </div>
    </>
  );
};

export default Signupfirststep;
