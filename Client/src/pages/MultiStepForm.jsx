

import React, { useState } from 'react';
import "../index.css"

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState({
    step1: [],
    step2: [],
    step3: [],
    step4:[],
  });


  const steps = [
    { title: 'What type of Therapy are you looking for?', options: ['Individal', 'Couple', 'Teen'] },
    { title: 'What is your gender?', options: ['Man', 'Woman'] },
    { title: 'Have you ever been in therapy before', options: ['Yes', 'No'] },
    { title: 'Have you ever been in therapy beforeee', options: ['Yesss', 'Noo'] },
    
  ];

  const handleOptionChange = (step, option) => {
    const optionsForStep = options[`step${step}`] || []; // Initialize to empty array if undefined
    const index = optionsForStep.indexOf(option);
    if (index > -1) {
      optionsForStep.splice(index, 1);
    } else {
      optionsForStep.push(option);
    }
    setOptions({
      ...options,
      [`step${step}`]: optionsForStep,
    });
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
    const optionsForStep = options[`step${step}`] || []; // Check if property exists
    return steps[step - 1].options.map((option) => (
      <div className='mt-2 text-xl' key={option}>
        <input
          type="checkbox"
          value={option}
          checked={optionsForStep.includes(option)}
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
    <div className='form flex flex-col mt-20 w-11/12 mx-auto'>
      <div className='m-6'>
      <div className="progress-bar">
        <div className="fill" style={{ width: getProgressPercentage() }} />
      </div>
      <div className=''>
      <h2 className='text-3xl font-normal'>{steps[step - 1].title}</h2>
      {renderOptions()}
      
        <button className='button rounded-md text-xl' onClick={handlePreviousStep}>Previous</button>
        {step < steps.length ? (
          <button className='button rounded-md text-xl ml-2 mt-2' onClick={handleNextStep}>Next</button>
        ) : (
          <button className='button text-xl'>Submit</button>
        )}
      </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

