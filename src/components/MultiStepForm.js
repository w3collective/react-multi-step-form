import React, { useState } from "react";
import Step1 from "./MultiStep1";
import Step2 from "./MultiStep2";
import Step3 from "./MultiStep3";
import Submit from "./MultiStepSubmit";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    comments: "",    
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };
  switch (currentStep) {
    case 1:
      return (
        <Step1 
          data={formData} 
          handleChange={handleChange} 
          next={next} 
        />
      );
    case 2:
      return (
        <Step2
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <Step3
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    default:
      return <Submit data={formData} back={back} />;
  }
};

export default MultiStepForm;
