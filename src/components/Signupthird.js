import axios from "axios";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signupthird = () => {
  const navigate = useNavigate();
  const {
    setStep,
    number,
    setnumber,
    gender,
    setGender,
    isUnder18,
    setisUnder18,
    email,
    password,

    username,

    dob,
  } = useContext(multiStepContext);

  // Signup Function

  const handleSignup = async () => {
    try {
      console.log(email);
      console.log(password);
      console.log(dob);
      console.log(username);
      console.log(gender);
      console.log(number);
      if (number.trim() === "") {
        return toast.warning("Please enter your number");
      }
      // const formData = new FormData();
      // formData.append("email", email);
      // formData.append("password", password);
      // formData.append("username", username);
      // formData.append("dob", dob);
      // formData.append(" mobileno", number);
      // formData.append("isUnder18", isUnder18);

      const response = await axios.post("/signup", {
        email: email,
        password: password,
        username: username,
        dob: dob,
        mobileno: number,
        gender: gender,
        isUnder18: isUnder18,
      });
      console.log(response);
      // "Thank You for signing Up"
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
      ) {
        toast.error(error.response.data.error);
      }
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="input-signup-box">
        {" "}
        <input
          type="number"
          maxLength="10"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
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
          onChange={(e) => setisUnder18(e.target.checked)}
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
          onClick={() => handleSignup()}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signupthird;
