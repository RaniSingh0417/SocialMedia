import React, { useContext } from "react";

import { Stepper, StepLabel, Step } from "@mui/material";
import Signupfirststep from "./Signupfirststep";
import Signupsecondstep from "./Signupsecondstep";
import Signupthird from "./Signupthird";
import { multiStepContext } from "../StepContext";

const Signup = () => {
  const { currentStep } = useContext(multiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Signupfirststep />;
      case 2:
        return <Signupsecondstep />;
      case 3:
        return <Signupthird />;
    }
  };
  return (
    <div className="main-container">
      <div className="container">
        <div className="signup-box">
          <form action="#">
            <div className="page-box">
              <div className="sigup-title">
                <h2>Sign Up</h2>
                <Stepper
                  style={{ width: "18%" }}
                  activeStep={currentStep - 1}
                  orientation="horizontal"
                >
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>
                <p>Create an account to use this platform</p>
              </div>
              <div className="page">
                {showStep(currentStep)};{/* <Signupfirststep /> */}
                {/* <Signupsecondstep /> */}
                {/* <Signupthird /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
