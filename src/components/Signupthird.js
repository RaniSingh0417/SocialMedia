import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";
const Signupthird = () => {
  const navigate = useNavigate();
  const {
    setStep,
    contactnumber,
    setContactnumber,
    gender,
    setGender,
    isUnder18,
    setisUnder18,
    email,
    password,

    username,

    dob,
  } = useContext(multiStepContext);
  return (
    <div>
      <div className="input-signup-box">
        {" "}
        <input
          type="text"
          maxLength="10"
          value={contactnumber}
          onChange={(e) => setContactnumber(e.target.value)}
          required
          autoFocus
        />
        <label for="text">Contact Number</label>
      </div>
      <div className="signup-gender">
        <label className="gender-label">Gender :</label>
        <br />
        <input
          type="radio"
          value={gender}
          onChange={() => setGender("Male")}
        />{" "}
        Male
        <input
          type="radio"
          value={gender}
          name="gender"
          onChange={() => setGender("Female")}
        />{" "}
        Female
        <input
          type="radio"
          value={gender}
          name="gender"
          onChange={() => setGender("Other")}
        />{" "}
        Other
      </div>

      <div className="signup-checkbox">
        <label>Are you under 18 ?</label>
        <input
          type="checkbox"
          value={isUnder18}
          onChange={() => setisUnder18(true)}
        />
      </div>

      <div className="btn-box">
        <span>
          <button type="button" onClick={() => setStep(2)} className="back-btn">
            Back
          </button>
        </span>
        <button
          type="button"
          className="btn-next"
          onClick={() => navigate("/login")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signupthird;
