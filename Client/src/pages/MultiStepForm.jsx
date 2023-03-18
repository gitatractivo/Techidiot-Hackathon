import React, { useState } from 'react';
import "../index.css"

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState({
    step1: [],
    step2: [],
    step3: []
  });

  const steps = [
    { title: 'Step 1', options: ['Option 1', 'Option 2', 'Option 3'] },
    { title: 'Step 2', options: ['Option 4', 'Option 5', 'Option 6'] },
    { title: 'Step 3', options: ['Option 7', 'Option 8', 'Option 9'] }
  ];

  const handleOptionChange = (stepNum, option) => {
    const updatedOptions = { ...options };
    updatedOptions[`step${stepNum}`] = [
      ...options[`step${stepNum}`],
      option
    ];
    setOptions(updatedOptions);
  };

  const handleNextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderOptions = () => {
    return steps[step - 1].options.map((option) => (
      <div key={option}>
        <input
          type="checkbox"
          value={option}
          checked={options[`step${step}`].includes(option)}
          onChange={() => handleOptionChange(step, option)}
        />
        <label>{option}</label>
      </div>
    ));
  };

  const getProgressPercentage = () => {
    const progress = ((step - 1) / (steps.length - 1)) * 100;
    return `${progress}%`;
  };

  return (
    <div className='flex flex-col w-11/12 mx-auto justify-center'>
        <div className="progress-bar">
        <div className="fill" style={{ width: getProgressPercentage() }} />
      </div>
      <h2>{steps[step - 1].title}</h2>
      {renderOptions()}
      <div>
        <button onClick={handlePreviousStep}>Previous</button>
        {step < steps.length ? (
          <button onClick={handleNextStep}>Next</button>
        ) : (
          <button>Submit</button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
