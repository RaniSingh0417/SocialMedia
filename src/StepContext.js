import React, { useState } from "react";

import App from "./App";
import Signup from "./components/Signup";
export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  return (
    <div>
      <multiStepContext.Provider value={{ currentStep, setStep }}>
        <Signup />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
