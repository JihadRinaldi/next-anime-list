import React from 'react';

const EmptyResult: React.FC<{ message?: string }> = ({
  message = 'No results found.',
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">No Results</h1>
      <p className="text-lg mb-8">{message}</p>
    </div>
  );
};

export { EmptyResult };
