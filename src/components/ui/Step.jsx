import StepperIcon from './StepperIcon';

const StepperConnector = ({ color }) => (
  <svg
  className='connector'
    width="1"
    height="50"
    viewBox="0 0 1 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0.5" y1="50" x2="0.5" stroke={color ?? '#E0E0E0'} strokeDasharray="2 2" />
  </svg>
);

const Step = ({ children, iconLabel, color }) => (
  <div className="flex gap-2 step">
    <div className='text-xs text-gray-500'>{iconLabel}</div>
    {/* ICON AND CONNECTOR */}
    <div className="flex flex-col items-center">
      <StepperIcon color={color} />
      <StepperConnector color={color} />
    </div>
    {/* STEP*/}
    {children}
  </div>
);

export default Step;
