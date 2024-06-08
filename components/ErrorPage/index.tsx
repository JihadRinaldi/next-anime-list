import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage: React.FC<{ message?: string }> = ({
  message = 'Something went wrong.',
}) => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4 mt-4">
      <h1 className="text-3xl font-bold mb-4">Error</h1>
      <p className="text-lg mb-8">{message}</p>
      <button
        onClick={handleBackToHome}
        className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export { ErrorPage };
