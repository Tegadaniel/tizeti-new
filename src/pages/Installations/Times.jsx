import { useState } from 'react';
import Button from '../../components/ui/Button';
import Stepper from '../../components/ui/Stepper';
import Step from '../../components/ui/Step';
import StepContent from '../../components/ui/StepContent';
import SelectLabel from '../../components/Select';

const options = [
  { value: '10am', label: '10am' },
  { value: '11am', label: '11am' },
  { value: '12pm', label: '12pm' },
  { value: '1pm', label: '1pm' },
  { value: '2pm', label: '2pm' },
  { value: '3pm', label: '3pm' },
  { value: '4pm', label: '4pm' },
  { value: '5pm', label: '5pm' },
  { value: '6pm', label: '6pm' },
];

function getSteps() {
  return ['Customer 1', 'Customer 2', 'Customer 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Location 1`;
    case 1:
      return 'Location 2';
    case 2:
      return `Location 3`;
    default:
      return 'Unknown step';
  }
}

const InstallationTimes = () => {
  const [activeStep] = useState(0);
  const steps = getSteps();

  const [time, setTime] = useState(options[0].value);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="w-1/2">
          <span className="font-bold text-xl text-black">Itinerary</span>
          <hr className="my-4 border-[#E0E0E0]" />
          <Stepper>
            {steps.map((label, index) => (
              <Step key={label} iconLabel="10 am">
                <StepContent>
                  <div className="flex flex-col text-black-300 ">
                    <span className="text-sm">{label}</span>
                    <span className="text-xs">{getStepContent(index)}</span>
                  </div>
                  <div>
                    <SelectLabel
                      handleChange={handleTimeChange}
                      value={time}
                      data={options}
                      width={80}
                      size="small"
                    />
                  </div>
          
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
    </>
  );
};

export default InstallationTimes;
