import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <div className="h-1/2 w-1/2">
        <img src="/error.svg" alt="Connection Lost" className="h-full w-full" />
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <Link to={'/'}>
          <button className="rounded-full bg-teal-400 px-6 py-2 text-xl font-semibold text-white">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
