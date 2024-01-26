import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
const Signupthird = () => {
  const { setStep } = useContext(multiStepContext);
  return (
    <div>
      <div className="input-signup-box">
        {" "}
        <input type="text" maxLength="10" required autoFocus />
        <label for="text">Contact</label>
      </div>
      <div className="signup-gender">
        <label className="gender-label">Gender :</label>
        <br />
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>

      <div className="signup-checkbox">
        <label>Are you under 18 ?</label>
        <input type="checkbox" />
      </div>

      <div className="btn-box">
        <span>
          <button type="button" onClick={() => setStep(2)} className="back-btn">
            Back
          </button>
        </span>
        <button type="button" className="btn-next">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signupthird;
