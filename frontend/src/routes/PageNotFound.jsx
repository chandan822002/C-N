import React from 'react';

const PageNotFound = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400"> {/* Example of gradient colors */}
      <div className="w-full md:w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-xl overflow-hidden sm:rounded-lg pb-8 w-full max-w-2xl"> 
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h1 className="text-6xl font-medium py-8">Oops! Page not found</h1>
            <p className="text-xl pb-8 px-12 font-medium text-gray-700">
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <a href="/" className="text-blue-500 hover:text-blue-700 text-xl font-semibold">
              Go back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
