import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  return (
    <div
      role="alert"
      className="flex flex-col gap-8 items-center justify-center h-screen w-full bg-[#071827] text-white"
    >
      <h1 className="font-bold text-5xl">Something went wrong :)</h1>
      <pre className="text-2xl">{error.message}</pre>
      <Button
        onClick={() => {
          navigate('/');
          resetErrorBoundary();
        }}
        color="white"
      >
        Tizeti Home
      </Button>
    </div>
  );
};

export default ErrorFallback;
