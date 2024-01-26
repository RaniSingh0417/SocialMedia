import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
const Signupsecondstep = () => {
  const { setStep } = useContext(multiStepContext);
  return (
    <div>
      <div className="input-box">
        <input type="text" required autoFocus />
        <label for="text">Username</label>
      </div>
      <div className="input-box">
        {" "}
        <input type="date" required />
        <label for="date">DOB</label>
      </div>
      <div className="btn-box">
        <span>
          <button type="button" onClick={() => setStep(1)} className="back-btn">
            Back
          </button>
        </span>
        <button type="button" onClick={() => setStep(3)} className="btn-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default Signupsecondstep;
