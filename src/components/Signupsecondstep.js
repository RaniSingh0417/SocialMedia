import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signupsecondstep = () => {
  // const { setStep } = useContext(multiStepContext);
  const {
    setStep,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setusername,
    dob,
    setDOB,
  } = useContext(multiStepContext);
  const handleNext = () => {
    try {
      if (username.trim() === "")
        return toast.warning("Please enter  username");
      if (dob.trim() === "")
        return toast.warning("Please enter your Date of Birth");
      setStep(3);
      console.log(email);
      console.log(password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="input-box">
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
          autoFocus
        />
        <label for="text">Username</label>
      </div>
      <div className="input-box">
        {" "}
        <input
          type="date"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          required
        />
        <label for="date">DOB</label>
      </div>
      <div className="btn-box">
        <span>
          <button type="button" onClick={() => setStep(1)} className="back-btn">
            Back
          </button>
        </span>
        <button type="button" onClick={() => handleNext()} className="btn-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Signupsecondstep;
