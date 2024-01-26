import React from "react";
import Signup from "./Signup";
import StepContext from "../StepContext";

const Mainsignup = () => {
  return (
    <div>
      <StepContext>
        <Signup />
      </StepContext>
    </div>
  );
};

export default Mainsignup;
