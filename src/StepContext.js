import React, { useState } from "react";


import Signup from "./components/Signup";
export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [dob, setDOB] = useState("");
  const [number, setnumber] = useState("");
  const [gender, setGender] = useState(null);
  const [isUnder18, setisUnder18] = useState(false);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          email,
          setEmail,
          password,
          setPassword,
          username,
          setusername,
          dob,
          setDOB,
          number,
          setnumber,
          gender,
          setGender,
          isUnder18,
          setisUnder18,
        }}
      >
        <Signup />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
