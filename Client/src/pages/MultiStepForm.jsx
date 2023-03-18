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
    { title: 'Are you gay', options: ['YES', 'VERY GAY', 'SUPER GAY'] },
    { title: 'Are you not gay', options: ['NO', 'very no', 'super no'] },
    { title: 'There is no cure for gays', options: ['sad', 'very sad', 'super sad'] }
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
          className="options"
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
    <div className='flex flex-col mt-20 w-11/12 mx-auto'>
        
        <div className="progress-bar">
        <div className="fill" style={{ width: getProgressPercentage() }} />
      </div>
      <div><h1>Help us match you to a therapist</h1></div>
      <div className='bg-blue-500'>
        <div className='ml-2'>
      <h2 className='text-4xl'>{steps[step - 1].title}</h2>
      {renderOptions()}
      
        <button onClick={handlePreviousStep}>Previous</button>
        {step < steps.length ? (
          <button className='ml-2' onClick={handleNextStep}>Next</button>
        ) : (
          <button>Submit</button>
        )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
