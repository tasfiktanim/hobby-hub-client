import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
      <img
        src="/public/10.svg"
        alt="404 Not Found"
        className="w-72 md:w-96 mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <Link to="/">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
